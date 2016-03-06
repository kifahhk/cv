import React, { Component, PropTypes } from 'react';
import './logo.scss';


export default class Logo extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    position: PropTypes.string
  };

  static defaultProps = {
    position: "left"
  };

  render() {
    const {position, src} = this.props;

    return (
        <img src={src} className={`logo ${position} `} />
    );
  }
}

