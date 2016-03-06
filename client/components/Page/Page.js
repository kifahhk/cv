import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import './page.scss';

import InfoBox from "../InfoBox/InfoBox";
import Condition from "../Condition/Condition";
import Headline from "../Headline/Headline";
import Splitter from "../Splitter/Splitter";
import Arrow from "../Arrow/Arrow";


export default class Page extends Component {

  static propTypes = {
    headline: PropTypes.string,
    animation: PropTypes.string,
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,
    onAnimationIteration: PropTypes.func,
    type: PropTypes.string,
    left: PropTypes.object,
    right: PropTypes.object,
    data: PropTypes.object
  };

  static defaultProps = {
    "headline": "Headline",
    type: "normal",
    left: null,
    right: null,
    "data": null
  };

  prefixEventHandler(node, name, handler, remove) {
    var prefixes = ['webkit', 'moz', 'MS', 'o', ''];
    for (var i = 0; i < prefixes.length; i++) {
      var eventName = (prefixes[i] === '') ? name.toLowerCase() : prefixes[i] + name;
      if (!remove) {
        node.addEventListener(eventName, handler);
      }
      else {
        node.removeEventListener(eventName, handler);
      }
    }
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs["animation-page"]);
    this.prefixEventHandler(node, 'AnimationStart', this.handleAnimationStart.bind(this));
    this.prefixEventHandler(node, 'AnimationEnd', this.handleAnimationEnd.bind(this));
    this.prefixEventHandler(node, 'AnimationIteration', this.handleAnimationIteration.bind(this));
  }

  handleAnimationStart(e) {
    const {onAnimationStart} = this.props;
    if (onAnimationStart) {
      onAnimationStart(e);
    }
  }

  handleAnimationEnd(e) {
    const {onAnimationEnd} = this.props;
    if (onAnimationEnd) {
      onAnimationEnd(e);
    }
  }

  handleAnimationIteration(e) {
    const {onAnimationIteration} = this.props;
    if (onAnimationIteration) {
      onAnimationIteration(e);
    }
  }

  componentWillUnmount() {
    const node = ReactDOM.findDOMNode(this.refs["animation-page"]);

    this.prefixEventHandler(node, 'AnimationStart', this.handleAnimationStart, true);
    this.prefixEventHandler(node, 'AnimationEnd', this.handleAnimationEnd, true);
    this.prefixEventHandler(node, 'AnimationIteration', this.handleAnimationIteration, true);
  }

  render() {
    const {data, headline, condition, animation, left, right, type, splitterPosition} = this.props;

    // splitterPosition just to use in normal type pages

    return (
        <If condition={type === "normal"}>
          <div className={`page-wrapper ${type} m${animation}`} ref="animation-page">
            <Headline label={headline}/>
            <Splitter pos={splitterPosition}/>
            <If condition={data}>
              <InfoBox
                  footer={data.footer}
                  title={data.title}
                  data={data.content}
              />
              <Else />
              <Condition condition={condition}/>
            </If>
            <If condition={left}>
              <Arrow text={left.text}/>
            </If>

            <If condition={right}>
              <Arrow direction="right" text={right.text}/>
            </If>

          </div>

          <Else />
          <div className={`page-wrapper ${type} ${animation}`} ref="animation-page">
            <div className={`rect-bar `}></div>
          </div>
        </If>

    );
  }
}
