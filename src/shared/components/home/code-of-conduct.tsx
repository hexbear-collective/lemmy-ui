import { Component } from "inferno";

export class CodeOfConduct extends Component<any, any> {
  state = {};

  constructor(props: any, context: any) {
    super(props, context);
  }

  get documentTitle(): string {
    return "Code of Conduct";
  }

  render() {
    return (
      <div className="mx-5">
        <div className="ui " style="margin-top: 1rem;">
          <div className="ui  segment markdown">
            <h1 id="user-content-code-of-conduct">Code of Conduct</h1>
            <p>Last updated: June 21st, 2023</p>
            <h2 id="user-content-community-rules">Community Rules</h2>
            <hr />
            <h3 id="user-content-general-rules">General Rules</h3>
            <ul>
              <li>
                <p>
                  {" "}
                  We are committed to providing a friendly, safe and welcoming
                  environment for all, regardless of gender identity and
                  expression, sexual orientation, disability, personal
                  appearance, body size, race, ethnicity, age, religion,
                  nationality, or other similar characteristic.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Do not use homophobic, transphobic, racist, sexist, ableist,
                  and other reactionary aliases or other nicknames.
                  &#34;Ironic&#34; prejudice is just prejudice.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Please &#34;remember the human&#34; and be kind to your fellow
                  leftists.{" "}
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Respect that people have differences of opinion and that every
                  leftist has a place in our community. Discussing differences
                  in theory is fine and encouraged, just don&#39;t make it
                  personal. Remember: Sectarianism is liberalism.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Do not publish, comment, message, or post personally
                  identifiable information about other users. We also strongly
                  discourage posting any personally identifiable information
                  about yourself.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  We will ban you if you insult, demean or harass anyone. That
                  is not welcome behavior. This is distinctly different than
                  ribbing or grilling someone.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Private harassment is also unacceptable. No matter who you
                  are, if you feel you have been or are being harassed or made
                  uncomfortable by a community member, please contact one of the
                  comm mod&#39;s or any of the sitemod team immediately. Whether
                  you&#39;re a regular user or a newcomer, we care about making
                  this community a safe place for you and we&#39;ve got your
                  back.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Likewise any spamming, trolling, flaming, baiting or other
                  attention-stealing behavior is not welcome and will be banned.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  We are a platform that welcomes anyone who wants to be here in
                  good faith. With that said, we are also an intentionally
                  leftist platform; conservative and reactionary ideologies will
                  not be tolerated here.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  We do not platform fascists and refuse to engage in any form
                  of debate with them on this platform. If you don&#39;t
                  understand why engaging in debates with fascists is a terrible
                  idea, go ask in one of the communities and/or use a search
                  engine.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Direct calls to violence that target{" "}
                  <em>specific identifiable living</em> individuals are not
                  permitted on Hexbear.net. You can express your anger over
                  landlords, slaveowners, etc, but try to phrase it in a way
                  that focuses on the institution they represent. This policy
                  also applies to any specific organizational bodies and groups
                  (eg the DNC).{" "}
                </p>
              </li>
              <li>
                <p>
                  Don&#39;t post anything illegal under the laws of the USA, the
                  UK, or your country of residence, or encourage others to break
                  the law. Don&#39;t confess to crimes online.
                </p>
              </li>
              <li>
                <p>
                  Hexbear is not a mental health service. Posts/ comments about
                  an active mental health crisis will be removed when they are
                  brought to our attention. Our mod team is not equipped to
                  provide mental healthcare, others can be harmed/triggered and
                  trolls weaponize these events. If you’re having an emergency,
                  you can find{" "}
                  <a
                    href="https://www.reddit.com/r/SuicideWatch/wiki/hotlines"
                    rel="nofollow"
                  >
                    a directory of hotline numbers here
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Moderators of individual communities may require additional
                  rules ontop of this code of conduct.
                </p>
              </li>
              <li>
                <p>
                  We reserve the right to ban users and remove content for
                  reasons not listed in this code of conduct at a
                  moderator&#39;s discretion. Trying to &#34;technically&#34; be
                  just within the bounds of acceptable behavior will likely
                  still result in a ban if its consistent behavior.
                  Rule-policing is still policing, ACAB.
                </p>
              </li>
              <li>
                <p>
                  Any pictures of food containing animal products, including but
                  not limited to meat, cheese, or egg, must be tagged nsfw along
                  with food discussion content warnings (CW: Food).
                </p>
              </li>
              <li>
                <p>
                  Animal Liberation is essential to any leftist movement,
                  including platforms like Hexbear. Volunteers, comments, and
                  posts, should not be anti-vegan, although users and volunteers
                  are not required to be vegan.
                </p>
              </li>
              <li>
                <p>Any discussions may be opted out of by disengaging.</p>
              </li>
              <li>
                <p>
                  Direct links to reactionary sources are not permitted; use an
                  archiver tool like{" "}
                  <a href="https://archive.today/" rel="nofollow">
                    https://archive.today
                  </a>{" "}
                  instead.
                </p>
              </li>
            </ul>
            <p>
              <strong>Airbud Double Negative Rule</strong>
            </p>
            <p>
              You may still be banned from the site even if there is no rule
              saying you can&#39;t do something. We reserve the right to remove
              individuals as needed.
            </p>
            <h3>Content warnings</h3>
            <p>
              A content warning (CW) should be before the content and spoiler both the warning itself and the content (the following example does not contain extreme content):

              <p>::: spoiler Mushrooms
              I cut up hella mushrooms and then ate them all raw
              :::
              </p>
            </p>
            <p>
              <strong>Topics that _must_ be CW'd</strong>
            </p>
            <ul>
              <li><strong>Violence towards self</strong> such as self-harm and suicide</li>
              <li><strong>Violence towards animals or humans</strong> such as corpses and carnist products and especially ||abuse, gore, and sexual violence</li>
              <li><strong>Traumatic societal harms</strong> such as transphobia, sexual and gender oppression, fatphobia and lookism, ableism, sanism, racism, ageism and other bigotry</li>
              <li><strong>Other common triggers</strong> such as discussion of weight and calories, ableist slurs, abortion, NSFW, rape and sexual assault, police brutality, ethnic cleansing and genocide, etc.</li>
            </ul>
            <p>
            Do not abbreviate your CWs. Not everyone knows what the abbreviation stands for.
            </p>
            <h3 id="user-content-be-aware-of-your-own-enjoyment-of-the-site">
              Be aware of your own enjoyment of the site.{" "}
            </h3>
            <ul>
              <li>
                If you find yourself no longer having fun, do something else.
                There are many different comms on Hexbear, and many different
                ways to shitpost and have fun.{" "}
              </li>
              <li>
                If the site as a whole is just not cutting it for you, take a
                break. We&#39;ll still be here when you get back. Nothing should
                compel you to stay.{" "}
              </li>
              <li>
                The site is deliberately designed to be a relaxing sort of fun
                rather than an addictive one. We do not want you to remain on
                Hexbear if remaining on the site is no longer fun for you.{" "}
              </li>
              <li>
                If you find yourself logging into the site while not really
                wanting to, or while knowing that you shouldn&#39;t, please
                contact a moderator and we can provide a ban.
              </li>
              <li>
                If we ultimately determine that a user has become toxic and is
                fixated on complaining about the site, we will ban them. We are
                always open to feedback and suggestions, but if we notice
                someone that constantly posts / comments about how much they
                dislike everything then it&#39;s probably better for them to
                find somewhere else to spend their time. The rest of the
                community has a right to a positive environment.
              </li>
            </ul>
            <h3 id="user-content-be-kind-to-the-staff">
              Be kind to the staff.
            </h3>
            <p>
              Hexbear staff, devs, mods, and admins are people just like you. We
              appreciate your kindness, understanding and patience just as much
              as you appreciate ours.
            </p>
            <p>
              <strong>Help the mods avoid burnout</strong>
            </p>
            <ul>
              <li>
                Moderators on Hexbear are volunteers with limited time.
                They&#39;re chosen to help cover across timezones, but 24/7 mod
                coverage isn&#39;t guaranteed.{" "}
              </li>
              <li>
                If something happens when there isn&#39;t a mod to deal with it
                at the moment, use the report button beneath each comment or
                post and a moderator will pick up the problem when they next log
                on.{" "}
              </li>
              <li>
                Content remaining up on the site is not an endorsement of that
                content by the mod team, it very likely was either not reported
                or hasn&#39;t been seen yet.{" "}
              </li>
            </ul>
            <p>
              <strong>Other Rules</strong>
            </p>
            <ul>
              <li>
                Never be afraid or unsure about seeking mod intervention. Never
                think &#34;Someone else will report that&#34; - they won&#39;t.
                - Problems tend to get bigger over time until we receive a flood
                of complaints all at once about someone who&#39;s been doing
                toxic things for months or days on end. We cannot see
                everything. We rely on your reports.
              </li>
              <li>
                Lying about moderator interactions (eg saying you were banned or
                warned for no reason when you were really banned for
                sectarianism) damages trust in the moderators and makes it less
                likely that others will come forward with reports about other
                users, allowing wreckers to fly under the radar and making the
                site less safe for everyone. Lying about moderator interactions,
                in any capacity, will lead to a permanent ban without warning.
              </li>
            </ul>
            <p>
              <strong>Interacting with Developers and other Staff</strong>
            </p>
            <ul>
              <li>
                <p>
                  Don&#39;t act like staff or devs if you&#39;re not staff or
                  devs. Don&#39;t speak for the staff or try to act on their
                  behalf. Do not make commitments or speak for the labor of the
                  dev team. Guessing at how a mod or admin would respond to a
                  given situation is a good way to start people speculating
                  wildly about mods intentions and trying to interpret the
                  meaning of things that we have not actually said. The mods can
                  speak for themselves.
                </p>
              </li>
              <li>
                <p>
                  Hexbear is an open-source project of volunteers. This means
                  that development of new features and bug fixes happens
                  gradually as folks find time to pitch in. If you feel strongly
                  about prioritizing a feature or bug, please visit{" "}
                  <a href="https://www.hexbear.net/c/hexbear" rel="nofollow">
                    !hexbear
                  </a>{" "}
                  to learn how to get started with contributing to development.{" "}
                </p>
              </li>
              <li>
                <p>
                  We are always looking for software feedback and suggestions,
                  but please be courteous when doing so. Posts demanding new
                  features or insulting the dev team for not building something
                  &#34;fast enough&#34; will be removed and violates the Code of
                  Conduct. We have zero tolerance for abusive behavior directed
                  towards developers.
                </p>
              </li>
            </ul>
            <h2 id="user-content-moderation">Moderation</h2>
            <hr />
            <p>
              These are the policies for upholding our community&#39;s standards
              of conduct. If you feel that a thread needs moderation, please
              contact the Hexbear moderation team and/or report the content.
            </p>
            <ol>
              <li>
                {" "}
                Remarks that violate the Hexbear standards of conduct, including
                hateful, hurtful, oppressive, or exclusionary remarks, are not
                allowed.
              </li>
              <li>
                {" "}
                Remarks that moderators find inappropriate, whether listed in
                the code of conduct or not, are also not allowed.
              </li>
              <li>
                {" "}
                Moderators may first respond to such remarks by removing the
                offending content. If the content is bad enough, the moderate
                might immediately ban.
              </li>
              <li> If the warning is unheeded, the user may be banned. </li>
              <li>
                For bans and content removal, a mod may optionally leave a
                reasoning for why in the mod log. This is encouraged, but not
                required, particularly during spam brigades.
              </li>
              <li>
                {" "}
                If the user comes back under a new account and continues to make
                trouble, they will be banned.
              </li>
              <li>
                {" "}
                Moderators may choose at their discretion to un-ban the user if
                it was a first offense and they offer the offended party a
                genuine apology.
              </li>
              <li>
                {" "}
                Complaints about bans at the comm level are not allowed.
              </li>
              <li>
                {" "}
                Moderators are held to a higher standard than other community
                members. If a moderator creates an inappropriate situation, they
                should expect less leeway than others.
              </li>
              <li>
                {" "}
                Egregious violations of our code of conduct or terms of service
                will result in an immediate ban.
              </li>
              <li>
                Moderators of individual communities may have further rules in
                addition to this code of conduct. If those rules are more
                restrictive, they should be respected in that comm and its mods
                have every right to enforce them.
              </li>
            </ol>
            <h3 id="user-content-tips-for-how-to-respond-to-moderation">
              Tips for how to respond to moderation
            </h3>
            <p>
              If a mod has to take action on your post or comment, take their
              advice, quit doing the thing, and get on with your life. Do not:
            </p>
            <ul>
              <li>
                Carry on doing the same thing but in a slightly different way
                and then complain about how the rules aren&#39;t specific
                enough;
              </li>
              <li>
                Prattle on endlessly to other users about The Injustice Of It
                All;
              </li>
              <li>
                Grumble passive-aggressively about how you&#39;re no longer
                allowed to send people vore in the megathread;
              </li>
              <li>
                Try to rope the mod into a lengthy discussion about your
                interpretation of the rules, or how RandomUser once did the same
                thing that SomeGuy&#39;s done twenty times and RandomUser never
                got banned for it but they banned SomeGuy after the 19th time,
                etc;
              </li>
              <li>
                Something to remember: the full details of mod interventions are
                often not public information, and in the above scenario,
                it&#39;s extremely unlikely you would have known whether or not
                RandomUser was banned for the reason you think either way. We
                try to give as much context as possible in the mod log, but
                it&#39;s not always possible.
              </li>
              <li>
                Mods are not obligated to justify bans and build a
                &#34;case&#34; explaining the reasoning for a ban.
              </li>
            </ul>
            <p>
              In the Hexbear community we strive to go the extra step to look
              out for each other. Don&#39;t just aim to be technically
              unimpeachable, try to be your best self. In particular, avoid
              flirting with offensive or sensitive issues, particularly if
              they&#39;re off-topic; this all too often leads to unnecessary
              fights, hurt feelings, and damaged trust; worse, it can drive
              people away from the community entirely.
            </p>
            <p>
              If someone takes issue with something you said or did, resist the
              urge to be defensive. Just stop doing what it was they complained
              about and apologize. Even if you feel you were misinterpreted or
              unfairly accused, chances are good there was something you
              could&#39;ve communicated better --- remember that it&#39;s your
              responsibility to make others comfortable. Everyone wants to get
              along and we are all here first and foremost because we want to
              shitpost in a leftist community. You will find that people will be
              eager to assume good intent and forgive as long as you earn their
              trust.
            </p>
            <hr />
            <h2 id="user-content-closing">Closing</h2>
            <p>
              The enforcement policies listed above apply to all official
              Hexbear venues; including git repositories under{" "}
              <a href="https://github.com/hexbear-collective" rel="nofollow">
                our project
              </a>{" "}
              and all comms under{" "}
              <a href="https://hexbear.net/" rel="nofollow">
                Hexbear.net
              </a>
              . For other projects adopting the Rust Code of Conduct, please
              contact the maintainers of those projects for enforcement. If you
              wish to use this code of conduct for your own project, consider
              explicitly mentioning your moderation policy or making a copy with
              your own moderation policy so as to avoid confusion.
            </p>
            <p>
              Adapted from the{" "}
              <a
                href="https://www.rust-lang.org/policies/code-of-conduct"
                rel="nofollow"
              >
                Rust Code of Conduct
              </a>
              , which is based on the{" "}
              <a
                href="http://blog.izs.me/post/30036893703/policy-on-trolling"
                rel="nofollow"
              >
                Node.js Policy on Trolling
              </a>{" "}
              as well as the{" "}
              <a
                href="https://www.contributor-covenant.org/version/1/3/0/"
                rel="nofollow"
              >
                Contributor Covenant v1.3.0
              </a>
              .
            </p>
            <p>
              Hexbear reserves the right to update this Code of Conduct without
              prior notification or warning at any time. For major changes, we
              might post in announcements, but have no obligation to do so.
              Users should check back periodically to remain familiar with
              current conduct standards.
            </p>
            <p>
              That last paragraph just means we can update the code of conduct
              and adapt as we go.
            </p>
          </div>
          <hr />
          <div className="ui " style="margin-top: 1rem;">
            <div className="ui  segment markdown">
              <h2>
                <strong>Security Statement AKA Warrant Canary</strong>
              </h2>
              <p>Last Updated: Nov 30th, 2024</p>
              <p>
                This warrant canary will be updated periodically. Previous
                versions can be viewed in the page revisions.{" "}
              </p>
              <hr />
              <p>
                We have not placed any backdoors into our software and have not
                received any requests for doing so.
              </p>
              <ul>
                <li>
                  Since our launch in July 2020, we have received 0 (zero)
                  government requests for information and complied with 0 (zero)
                  government requests for information.
                </li>
                <li>
                  No warrants have ever been served to hexbear.net, or
                  hexbear.net contributors in regards to hexbear.net.
                </li>
                <li>
                  No searches or seizures of any kind have ever been performed
                  on hexbear.net assets.
                </li>
              </ul>
              <p>
                Pay close attention to any modifications to the previous
                paragraph between updates to this statement.{" "}
              </p>
              <hr />
              <p>
                Note: The original version of this statement can be found in the
                Hexbear Privacy Policy. It contains a date error on it from when
                the site&#39;s name changed, which we have corrected. We&#39;ve
                switched to hosting this statement on our git&#39;s wiki so that
                it can be updated more easily without having to push code to
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
