import { communitySearch, personSearch } from "@utils/app";
import { isBrowser } from "@utils/browser";
import { getExternalHost } from "@utils/env";
import { debounce, groupBy, hostname } from "@utils/helpers";
import { CommunityTribute, PersonTribute } from "@utils/types";
import { Picker } from "emoji-mart";
import emojiShortName from "emoji-short-name";
import { CustomEmojiView } from "lemmy-js-client";
import { default as MarkdownIt } from "markdown-it";
import markdown_it_container from "markdown-it-container";
// import markdown_it_emoji from "markdown-it-emoji/bare";
import markdown_it_bidi from "markdown-it-bidi";
import {bare as markdown_it_emoji} from "markdown-it-emoji";
import markdown_it_footnote from "markdown-it-footnote";
import markdown_it_html5_embed from "markdown-it-html5-embed";
import markdown_it_ruby from "markdown-it-ruby";
import markdown_it_sub from "markdown-it-sub";
import markdown_it_sup from "markdown-it-sup";
import markdown_it_highlightjs from "markdown-it-highlightjs/core";
import { Renderer, Token } from "markdown-it";
import { instanceLinkRegex, relTags } from "./config";
import { lazyHighlightjs } from "./lazy-highlightjs";

let Tribute: any;

export let md: MarkdownIt = new MarkdownIt();

export let mdNoImages: MarkdownIt = new MarkdownIt();

// Zero disables all rules.
// Only explicitly allow a limited set of rules safe for use in post titles.
export const mdLimited: MarkdownIt = new MarkdownIt("zero").enable([
  "emphasis",
  "backticks",
  "strikethrough",
]);

export const customEmojis: EmojiMartCategory[] = [];

export let customEmojisLookup: Map<string, CustomEmojiView> = new Map<
  string,
  CustomEmojiView
>();

export function mdToHtml(text: string, rerender: () => void) {
  return { __html: lazyHighlightjs.render(md, text, rerender) };
}

export function mdToHtmlNoImages(text: string, rerender: () => void) {
  return { __html: lazyHighlightjs.render(mdNoImages, text, rerender) };
}

export function mdToHtmlInline(text: string) {
  return { __html: mdLimited.renderInline(text) };
}

const spoilerConfig = {
  validate: (params: string) => {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },

  render: (tokens: any, idx: any) => {
    const m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      const summary = mdToHtmlInline(md.utils.escapeHtml(m[1])).__html;
      return `<details><summary> ${summary} </summary>\n`;
    } else {
      // closing tag
      return "</details>\n";
    }
  },
};

const highlightjsConfig = {
  inline: true,
  hljs: lazyHighlightjs.hljs,
  auto: true,
  code: true,
  ignoreIllegals: true,
};

const html5EmbedConfig = {
  html5embed: {
    useImageSyntax: true, // Enables video/audio embed with ![]() syntax (default)
    isAllowedHttp: true,
    attributes: {
      audio: 'controls preload="metadata"',
      video: 'width="100%" max-height="100%" controls loop preload="metadata"',
    },
  },
};

function localInstanceLinkParser(md: MarkdownIt) {
  md.core.ruler.push("replace-text", state => {
    for (let i = 0; i < state.tokens.length; i++) {
      if (state.tokens[i].type !== "inline") {
        continue;
      }
      const inlineTokens: Token[] = state.tokens[i].children || [];
      for (let j = inlineTokens.length - 1; j >= 0; j--) {
        if (
          inlineTokens[j].type === "text" &&
          new RegExp(instanceLinkRegex).test(inlineTokens[j].content)
        ) {
          const text = inlineTokens[j].content;
          const matches = Array.from(text.matchAll(instanceLinkRegex));

          let lastIndex = 0;
          const newTokens: Token[] = [];

          let linkClass = "community-link";

          for (const match of matches) {
            // If there is plain text before the match, add it as a separate token
            if (match.index !== undefined && match.index > lastIndex) {
              const textToken = new state.Token("text", "", 0);
              textToken.content = text.slice(lastIndex, match.index);
              newTokens.push(textToken);
            }

            let href: string;
            if (match[0].startsWith("!")) {
              href = "/c/" + match[0].substring(1);
            } else if (match[0].startsWith("/m/")) {
              href = "/c/" + match[0].substring(3);
            } else {
              href = match[0];
              if (match[0].startsWith("/u/")) {
                linkClass = "user-link";
              }
            }

            const linkOpenToken = new state.Token("link_open", "a", 1);
            linkOpenToken.attrs = [
              ["href", href],
              ["class", linkClass],
            ];
            const textToken = new state.Token("text", "", 0);
            textToken.content = match[0];
            const linkCloseToken = new state.Token("link_close", "a", -1);

            newTokens.push(linkOpenToken, textToken, linkCloseToken);

            lastIndex =
              (match.index !== undefined ? match.index : 0) + match[0].length;
          }

          // If there is plain text after the last match, add it as a separate token
          if (lastIndex < text.length) {
            const textToken = new state.Token("text", "", 0);
            textToken.content = text.slice(lastIndex);
            newTokens.push(textToken);
          }

          inlineTokens.splice(j, 1, ...newTokens);
        }
      }
    }
  });
}

export function setupMarkdown(is_server: boolean) {
  const markdownItConfig: MarkdownIt.Options = {
    html: false,
    linkify: !is_server,
    typographer: false, // hexbear change to fix issue with legacy emojis throwing exception when followed by quote char
  };

  md = new MarkdownIt(markdownItConfig)
    .use(markdown_it_sub)
    .use(markdown_it_sup)
    .use(markdown_it_footnote)
    .use(markdown_it_html5_embed, html5EmbedConfig)
    .use(markdown_it_container, "spoiler", spoilerConfig)
    .use(markdown_it_highlightjs, highlightjsConfig)
    .use(markdown_it_ruby)
    .use(localInstanceLinkParser)
    .use(markdown_it_bidi);
  // .use(markdown_it_emoji, {
  //   defs: emojiDefs,
  // });

  mdNoImages = new MarkdownIt(markdownItConfig)
    .use(markdown_it_sub)
    .use(markdown_it_sup)
    .use(markdown_it_footnote)
    .use(markdown_it_html5_embed, html5EmbedConfig)
    .use(markdown_it_container, "spoiler", spoilerConfig)
    .use(markdown_it_highlightjs, highlightjsConfig)
    .use(localInstanceLinkParser)
    .use(markdown_it_bidi)
    .disable("image");
  if (!is_server) {
    const emojiDefs = Array.from(customEmojisLookup.entries()).reduce(
      (main, [key, value]) => ({ ...main, [key]: value }),
      {}
    );
    md = md.use(markdown_it_emoji, {
      defs: emojiDefs,
    });
    mdNoImages = mdNoImages.use(markdown_it_emoji, {
      defs: emojiDefs,
    });
    //hexbear handling of legacy :emoji: syntax in markdown
    md.renderer.rules.emoji = function (token, idx) {
      const emoji = customEmojisLookup.get(token[idx].markup)!;
      return `<img class="icon icon-emoji" src="${emoji.custom_emoji.image_url}" title="${emoji.custom_emoji.shortcode}" alt="${emoji.custom_emoji.alt_text}"/>`;
    };
  }
  var defaultRenderer = md.renderer.rules.image;
  md.renderer.rules.image = function (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: Renderer,
  ) {
    //Provide custom renderer for our emojis to allow us to add a css class and force size dimensions on them. Also, prevent images to 3rd party domains
    const item = tokens[idx] as any;
    let title = item.attrs.length >= 3 ? item.attrs[2][1] : "";
    const splitTitle = title.split(/ (.*)/, 2);
    const isEmoji = splitTitle[0] === "emoji";
    if (isEmoji) {
      title = splitTitle[1];
    }
    const url = item.attrs.length > 0 ? item.attrs[0][1] : "";
    const customEmoji = customEmojisLookup.get(title);
    const isLocalEmoji = customEmoji !== undefined;
    const imgHostName = hostname(url);
    if (!isImageHostWhitelisted(imgHostName)) {
      return `<i>*removed externally hosted image*</i>`;
    }
    if (!isLocalEmoji) {
      const a = defaultRenderer?.(tokens, idx, options, env, self);
      if (a) return hexbear_getInlineImage(a, isEmoji);
      return "";
    }
    return `<img class="icon icon-emoji" src="${
      customEmoji!.custom_emoji.image_url
    }" title="${customEmoji!.custom_emoji.shortcode}" alt="${
      customEmoji!.custom_emoji.alt_text
    }"/>`;
  };
  md.renderer.rules.table_open = function () {
    return '<table class="table">';
  };
  const defaultLinkRenderer =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, _env, self) {
      return self.renderToken(tokens, idx, options);
    };
  md.renderer.rules.link_open = function (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: Renderer,
  ) {
    tokens[idx].attrPush(["rel", relTags]);
    return defaultLinkRenderer(tokens, idx, options, env, self);
  };
}

export function setupEmojiDataModel(custom_emoji_views: CustomEmojiView[]) {
  const groupedEmojis = groupBy(
    custom_emoji_views,
    x => x.custom_emoji.category,
  );
  customEmojis.length = 0;
  for (const [category, emojis] of Object.entries(groupedEmojis)) {
    customEmojis.push({
      id: category,
      name: category,
      emojis: emojis.map(emoji => ({
        id: emoji.custom_emoji.shortcode,
        name: emoji.custom_emoji.shortcode,
        keywords: emoji.keywords.map(x => x.keyword),
        skins: [{ src: emoji.custom_emoji.image_url }],
      })),
    });
  }
  customEmojisLookup = new Map(
    custom_emoji_views.map(view => [view.custom_emoji.shortcode, view]),
  );
}

export function updateEmojiDataModel(custom_emoji_view: CustomEmojiView) {
  const emoji: EmojiMartCustomEmoji = {
    id: custom_emoji_view.custom_emoji.shortcode,
    name: custom_emoji_view.custom_emoji.shortcode,
    keywords: custom_emoji_view.keywords.map(x => x.keyword),
    skins: [{ src: custom_emoji_view.custom_emoji.image_url }],
  };
  const categoryIndex = customEmojis.findIndex(
    x => x.id === custom_emoji_view.custom_emoji.category,
  );
  if (categoryIndex === -1) {
    customEmojis.push({
      id: custom_emoji_view.custom_emoji.category,
      name: custom_emoji_view.custom_emoji.category,
      emojis: [emoji],
    });
  } else {
    const emojiIndex = customEmojis[categoryIndex].emojis.findIndex(
      x => x.id === custom_emoji_view.custom_emoji.shortcode,
    );
    if (emojiIndex === -1) {
      customEmojis[categoryIndex].emojis.push(emoji);
    } else {
      customEmojis[categoryIndex].emojis[emojiIndex] = emoji;
    }
  }
  customEmojisLookup.set(
    custom_emoji_view.custom_emoji.shortcode,
    custom_emoji_view,
  );
}

export function removeFromEmojiDataModel(id: number) {
  let view: CustomEmojiView | undefined;
  for (const item of customEmojisLookup.values()) {
    if (item.custom_emoji.id === id) {
      view = item;
      break;
    }
  }
  if (!view) return;
  const categoryIndex = customEmojis.findIndex(
    x => x.id === view?.custom_emoji.category,
  );
  const emojiIndex = customEmojis[categoryIndex].emojis.findIndex(
    x => x.id === view?.custom_emoji.shortcode,
  );
  customEmojis[categoryIndex].emojis = customEmojis[
    categoryIndex
  ].emojis.splice(emojiIndex, 1);

  customEmojisLookup.delete(view?.custom_emoji.shortcode);
}

export function getEmojiMart(
  onEmojiSelect: (e: any) => void,
  customPickerOptions: any = {},
) {
  const pickerOptions = {
    ...customPickerOptions,
    
    data: { categories: [], emojis: [], aliases: [] },
    onEmojiSelect: onEmojiSelect,
    custom: customEmojis,
  };
  return new Picker(pickerOptions);
}

export async function setupTribute() {
  // eslint-disable-next-line eqeqeq
  if (Tribute == null) {
    console.debug("Tribute is null, importing...");
    Tribute = (await import("tributejs")).default;
  }

  return new Tribute({
    noMatchTemplate: function () {
      return "";
    },
    collection: [
      // Emojis
      {
        trigger: ":",
        menuItemTemplate: (item: any) => {
          const customEmoji = customEmojisLookup.get(item.original.key);
          const shortName = `${item.original.key}`;
          return `<div>
          <span class='emoji-image'>${item.original.val}</span>
          <span class='emoji-codes'>Code: <strong>${shortName}</strong> <br/> Keywords:(${customEmoji?.keywords.map(y => y.keyword).join(',')})</span>
          </div>`;
        },
        selectTemplate: (item: any) => {
          const customEmoji = customEmojisLookup.get(
            item.original.key,
          )?.custom_emoji;
          if (customEmoji === undefined) return `${item.original.val}`;
          else
            return `![${customEmoji.alt_text}](${customEmoji.image_url} "emoji ${customEmoji.shortcode}")`;
        },
        values: Array.from(customEmojisLookup.entries()).map(k => ({
          key: k[0],
          val: `<img class="icon icon-emoji" src="${k[1].custom_emoji.image_url}" title="${k[1].custom_emoji.shortcode}" alt="${k[1].custom_emoji.alt_text}" loading="lazy" />`,
        })),
        lookup: function (item) {
          const customEmoji = customEmojisLookup.get(item.key);
          return [...customEmoji!.keywords.map(y => y.keyword), customEmoji!.custom_emoji.shortcode].join(',');
        },
        allowSpaces: false,
        autocompleteMode: true,
        menuShowMinLength: 2,
      },
      // Persons
      {
        trigger: "@",
        selectTemplate: (item: any) => {
          const it: PersonTribute = item.original;
          return `[${it.key}](${it.view.person.actor_id})`;
        },
        values: debounce(async (text: string, cb: any) => {
          cb(await personSearch(text));
        }),
        allowSpaces: false,
        autocompleteMode: true,
        // TODO
        // menuItemLimit: mentionDropdownFetchLimit,
        menuShowMinLength: 2,
      },

      // Communities
      {
        trigger: "!",
        selectTemplate: (item: any) => {
          const it: CommunityTribute = item.original;
          return `[${it.key}](${it.view.community.actor_id})`;
        },
        values: debounce(async (text: string, cb: any) => {
          cb(await communitySearch(text));
        }),
        allowSpaces: false,
        autocompleteMode: true,
        // TODO
        // menuItemLimit: mentionDropdownFetchLimit,
        menuShowMinLength: 2,
      },
    ],
  });
}

interface EmojiMartCategory {
  id: string;
  name: string;
  emojis: EmojiMartCustomEmoji[];
}

interface EmojiMartCustomEmoji {
  id: string;
  name: string;
  keywords: string[];
  skins: EmojiMartSkin[];
}

interface EmojiMartSkin {
  src: string;
}

function isImageHostWhitelisted(host: string): boolean {
  const whiteList = [
    getExternalHost(),
    "localhost:8536",
    "i.imgur.com",
    "chapo.chat",
    "test.hexbear.net",
    "hexbear.net",
    "www.hexbear.net",
    //federated sites below
    "lemmy.world",
    "possumpat.io",
    "lemmy.ml",
    "lemmygrad.ml",
    "mander.xyz",
    "lemm.ee",
    "toots.matapacos.dog",
    "assets.toots.matapacos.dog",
    "jlai.lu",
    "discuss.tchncs.de",
    "ttrpg.network",
    "pathfinder.social",
  ];
  if (whiteList.includes(host)) return true;
  return false;
}

function hexbear_getInlineImage(imgElement: string, isEmoji: boolean): string {
  return `<div class='inline-image'>
    <span class='inline-image-toggle inline-image-toggle-btn' onclick='toggleInlineImage(this)'>Show</span>
    <span class='img-blur-double ${
      isEmoji ? "icon icon-emoji" : ""
    }' onclick='toggleInlineImage(this)'>${imgElement}</span>
  </div>`;
}

globalThis.toggleInlineImage = (e) => {
  const ev = window.event!;
  ev.preventDefault();
  ev.stopPropagation();
  const parent = e.parentElement;
  if (e.classList.contains("inline-image-toggle")) {
    parent.children[0].classList.toggle("hide");
    parent.children[1].classList.toggle("img-blur-double");
    parent.children[1].classList.toggle("inline-image-toggle");
  }
};
