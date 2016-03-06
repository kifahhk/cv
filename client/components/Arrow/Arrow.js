import React, { Component, PropTypes } from 'react';
import './arrow.scss';

export default class Arrow extends Component {

  static propTypes = {
    direction: PropTypes.oneOf(["left", "right"]),
    text: PropTypes.string
  };

  static defaultProps = {
    direction: "left"
  };

  render() {
    const {direction, text} = this.props;

    return (
        <div>
          <div className={`arrow ${direction}`} >
            <span className="arrow-text">{text}</span>
          </div>
        </div>
    );
  }
}

