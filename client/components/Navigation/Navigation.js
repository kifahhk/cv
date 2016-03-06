import React, { PropTypes, Component } from 'react';
import './navigation.scss';

import Arrow from "../Arrow/Arrow";
import Button from "../Button/Button";

export default class Navigation extends Component {

  static propTypes = {
    left: PropTypes.object,
    right: PropTypes.object,
    middle: PropTypes.object,
    onLeft: PropTypes.func.isRequired,
    onRight: PropTypes.func.isRequired,
    onMiddle: PropTypes.func.isRequired
  };

  static defaultProps = {
    "left": null,
    "middle": null,
    "right": null
  };

  render() {
    const { left, middle, right, onLeft, onRight, onMiddle} = this.props;

    return (

        <div className="navigation">

          <If condition={left}>
            <Button position="left" label={left.label} onClick={(e) => onLeft(left.index)}/>
          </If>

          <If condition={right}>
            <Button position="right" label={right.label} onClick={(e) => onRight(right.index)}/>
          </If>

          <If condition={middle}>
            <Button position="middle" label={middle.label} onClick={(e) => onMiddle(middle.index)}/>
          </If>

        </div>

    );
  }
}

