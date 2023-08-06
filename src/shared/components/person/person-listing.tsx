import { showAvatars } from "@utils/app";
import { getStaticDir } from "@utils/env";
import { hostname, isCakeDay } from "@utils/helpers";
import classNames from "classnames";
import { Component } from "inferno";
import { Link } from "inferno-router";
import { Person } from "lemmy-js-client";
import { relTags } from "../../config";
import { PictrsImage } from "../common/pictrs-image";
import { CakeDay } from "./cake-day";

interface PersonListingProps {
  person: Person;
  realLink?: boolean;
  useApubName?: boolean;
  muted?: boolean;
  hideAvatar?: boolean;
  showApubName?: boolean;
}

export class PersonListing extends Component<PersonListingProps, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    const person = this.props.person;
    const local = person.local;
    let apubName: string, link: string;

    if (local) {
      apubName = `@${person.name}`;
      link = `/u/${person.name}`;
    } else {
      const domain = hostname(person.actor_id);
      apubName = `@${person.name}@${domain}`;
      link = !this.props.realLink
        ? `/u/${person.name}@${domain}`
        : person.actor_id;
    }
    //Hexbear: temp change to force domain to show
    let displayName = person.display_name ?? apubName;

    if (!local && person.display_name) {
      const domain = hostname(person.actor_id);
      displayName = `${displayName}@${domain}`;
    }
    if (this.props.useApubName) {
      displayName = apubName;
    }

    return (
      <>
        {!this.props.realLink ? (
          <Link
            title={apubName}
            className={classNames(
              "person-listing d-inline-flex align-items-baseline",
              {
                "text-muted": this.props.muted,
                "text-person": !this.props.muted,
              }
            )}
            to={link}
          >
            {this.avatarAndName(displayName)}
          </Link>
        ) : (
          <a
            title={apubName}
            className={`person-listing d-inline-flex align-items-baseline ${
              this.props.muted ? "text-muted" : "text-person"
            }`}
            href={link}
            rel={relTags}
          >
            {this.avatarAndName(displayName)}
          </a>
        )}

        {isCakeDay(person.published) && <CakeDay creatorName={apubName} />}
      </>
    );
  }

  avatarAndName(displayName: string) {
    const avatar = this.props.person.avatar;
    return (
      <>
        {!this.props.hideAvatar &&
          !this.props.person.banned &&
          showAvatars() &&
          avatar && (
            <PictrsImage
              src={avatar ?? `${getStaticDir()}/assets/icons/icon-96x96.png`}
              icon
              rounded
            />
          )}
        <span>{displayName}</span>
      </>
    );
  }
}
