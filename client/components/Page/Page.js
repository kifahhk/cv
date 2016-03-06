import React, { PropTypes, Component } from 'react';
import './page.scss';

import InfoBox from "../InfoBox/InfoBox";
import Condition from "../Condition/Condition";
import Headline from "../Headline/Headline";
import Arrow from "../Arrow/Arrow";


export default class Page extends Component {

  static propTypes = {
    headline: PropTypes.string,
    animation: PropTypes.string,
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

  render() {
    const {data, headline, condition, animation, left, right, type} = this.props;

    return (
        <If condition={type === "normal"}>

          <div className={`page-wrapper ${type} m${animation}`}>
            <Headline label={headline}/>
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
          <div className={`page-wrapper ${type} ${animation}`}>
            <div className={`rect-bar `}></div>
          </div>
        </If>

    );
  }
}
