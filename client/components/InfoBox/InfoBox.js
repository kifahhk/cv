import React, { Component, PropTypes } from 'react';

import './infoBox.scss';
import Info from "./Info/Info";

export default class InfoBox extends Component {
  render() {
    return (
        <div className="info-box">
            <Info {...this.props} />
        </div>
    );
  }
}