import React, { Component, PropTypes } from 'react';
import './button.scss';

export default class Button extends Component {

  static propTypes = {
    position: PropTypes.oneOf(["left", "right", "middle"]),
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const {position, onClick, label} = this.props;

    return (
        <div className={`button-wrapper ${position}`} onClick={onClick}>
          <span className="button-label">{label}</span>
        </div>
    );
  }
}