"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      count: 0,
    };
  }

  render() {
    if (this.state.liked) {
      return e(
        "p",
        {
          onClick: () => this.setState({ count: this.state.count + 1 }),
        },
        `Thank you! You've clicked: ${this.state.count} times`
      );
    }

    return e(
      "button",
      {
        onClick: () =>
          this.setState({ liked: true, count: this.state.count + 1 }),
      },
      "Like the site?"
    );
  }
}

const domContainer = document.querySelector("#like");
ReactDOM.render(e(LikeButton), domContainer);
