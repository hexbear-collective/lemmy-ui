import { isBrowser } from "@utils/browser";
import { Component } from "inferno";

const intlFormat = Intl.DateTimeFormat(undefined, {
  timeZone: "Europe/Moscow",
  timeStyle: "full",
});

export default class MoscowTime extends Component {
  render() {
    return (
      isBrowser() && (
        <div>
          Current time:&nbsp;
          {intlFormat.format(new Date())}
        </div>
      )
    );
  }
}
