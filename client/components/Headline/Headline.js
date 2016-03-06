import React, { Component, PropTypes } from 'react';
import './headline.scss';

export default class Headline extends Component {

  static propTypes = {
    label: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const {label} = this.props;

    return (
        <div className="headline-wrapper">
          <If condition={label}>
            <div className="headline-label">
              <span>{label}</span>
            </div>
          </If>
        </div>
    );
  }
}