import { getStaticDir } from "@utils/env";
import { GetSiteResponse } from "lemmy-js-client";

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

export default async function ({
  my_user,
  site_view: {
    site,
    local_site: { community_creation_admin_only },
  },
}: GetSiteResponse) {
  return {
    name: site.name,
    description: site.description ?? "A link aggregator for the fediverse",
    start_url: "/",
    scope: "/",
    display: "standalone",
    id: "/",
    background_color: "#222222",
    theme_color: "#222222",
    icons: await Promise.all(
      iconSizes.map(async size => {
        let src = `${getStaticDir()}/assets/icons/icon-${size}x${size}.png`;

        return {
          sizes: `${size}x${size}`,
          type: "image/png",
          src: `${src}`,
          purpose: "any maskable",
        };
      })
    ),
    shortcuts: [
      {
        name: "Search",
        short_name: "Search",
        description: "Perform a search.",
        url: "/search",
      },
      {
        name: "Communities",
        url: "/communities",
        short_name: "Communities",
        description: "Browse communities",
      },
      {
        name: "Create Post",
        url: "/create_post",
        short_name: "Create Post",
        description: "Create a post.",
      },
    ].concat(
      my_user?.local_user_view.person.admin || !community_creation_admin_only
        ? [
            {
              name: "Create Community",
              url: "/create_community",
              short_name: "Create Community",
              description: "Create a community",
            },
          ]
        : []
    ),
    related_applications: [
      {
        platform: "f-droid",
        url: "https://f-droid.org/packages/com.jerboa/",
        id: "com.jerboa",
      },
    ],
  };
}
