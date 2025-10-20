import { Component } from "inferno";
// import { I18NextService } from "../../services";
import { Icon } from "../common/icon";
import { tippyMixin } from "../mixins/tippy-mixin";
import { formatDistanceToNow } from "date-fns";

interface SproutProps {
    createDate: string;
}

@tippyMixin
export class Sprout extends Component <SproutProps, any>{
  render() {
    return (
      <div className={`mx-2 d-inline-block unselectable pointer`}
        data-tippy-content={this.sproutTippy()}
      >
        <Icon icon="sprout" inline />
      </div>
    );
  }

    sproutTippy(): string {
        const accountAge = formatDistanceToNow(this.props.createDate)
        return "This account is " + accountAge + " old.";
    } 


}

