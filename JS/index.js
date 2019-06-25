'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Thanks for liking my site!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like the site?'
    );
  }
}

const domContainer = document.querySelector('#like');
ReactDOM.render(e(LikeButton), domContainer);
