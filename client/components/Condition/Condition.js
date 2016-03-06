import React, { Component, PropTypes } from 'react';

import './condition.scss';


export default class Condition extends Component {

  static propTypes = {
    condition:PropTypes.string
  };

  static defaultProps = {};

  render() {
    const {condition} = this.props;

    return (
        <div className="condition-wrapper">
          <div className="foo outer" />
          <div className="foo inner" >
            <span className="condition-text">{condition}</span>
          </div>
        </div>
    );
  }
}