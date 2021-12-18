import { Component } from "inferno";
import { i18n } from "../../i18next";
import { Icon } from "../common/icon";

export class Sprout extends Component {
  render() {
    return (
      <div
        className={`mx-2 d-inline-block unselectable pointer`}
        data-tippy-content={i18n.t("account_is_new")}
      >
        <Icon icon="sprout" inline />
      </div>
    );
  }
}
