import { Component } from "inferno";

export class PPB extends Component<any, any> {
  state = {};

  constructor(props: any, context: any) {
    super(props, context);
  }

  get documentTitle(): string {
    return "PPB";
  }

  render() {
    return (
      <div className="mx-5">
        <div style={{ "max-width": "500px" }}>
          <img
            src="https://www.hexbear.net/pictrs/image/4lR80uZ1C1.jpg"
            className="img-fluid"
            alt="a pig that has pooped on its own balls"
          />
        </div>
      </div>
    );
  }
}
