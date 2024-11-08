import { isBrowser } from "@utils/browser";
import { Component } from "inferno";

const intlFormat = Intl.DateTimeFormat(undefined, {
  timeZone: "Europe/Moscow",
  timeStyle: "full",
  dateStyle: "short",
});

interface MoscowTimeState {
  currentDate: Date;
}

export default class MoscowTime extends Component<any, MoscowTimeState> {
  private dateInterval?: NodeJS.Timeout;

  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      currentDate: new Date(),
    };
  }

  componentDidMount() {
    this.dateInterval = setInterval(() => {
      this.setState({
        currentDate: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }

  render() {
    return (
      isBrowser() && (
        <div class='moscow-time'>
          <strong className="fw-semibold">Current time:</strong>&nbsp;
          {intlFormat.format(this.state?.currentDate)}
        </div>
      )
    );
  }
}
