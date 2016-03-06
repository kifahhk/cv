import React, { Component, PropTypes } from 'react';
import './info.scss';

export default class Info extends Component {

  static propTypes = {
    title: PropTypes.string,
    footer: PropTypes.string,
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ])
  };

  static defaultProps = {};

  render() {
    const {title, data, footer} = this.props;

    return (
        <div className={`info-wrapper ${!title ? "no-title" : ""}`}>

            <span className="info-title">{title}</span>

          <If condition={typeof data !== "string"}>
            <ul className="info-content-list">

              <For index="index" each="item" of={data}>
                <If condition={item.html}>
                  <li className="info-content-item html" key={index} dangerouslySetInnerHTML={{__html: item.html}}/>
                  <Else />
                  <li className="info-content-item" key={index}>
                    <span className="info-content-item-label">{item.label} </span>
                    {item.text}
                  </li>
                </If>
              </For>

            </ul>
            <Else />
            <p className="info-content-text" dangerouslySetInnerHTML={{__html: data}}/>
          </If>
          <If condition={footer}>
            <div className="info-footer">{footer}</div>
          </If>
        </div>
    );
  }
}