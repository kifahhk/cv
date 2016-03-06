import React, { Component, PropTypes } from 'react';
import './splitter.scss';

export default class Splitter extends Component {

  static propTypes = {
    pos: PropTypes.string
  };

  render() {
    const {pos} = this.props;

    return (
        <div className={`splitter ${pos}`}/>
    );
  }
}