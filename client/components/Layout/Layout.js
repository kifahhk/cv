import React, { PropTypes, Component } from 'react';
import './layout.scss';

import Logo from '../Logo/Logo';


import logoLeft from './../../assets/favicon.png';
import logoRight from './../../assets/cyclos-design.png';


export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };


  render() {
    const {children} = this.props;

    return (
        <div className="wrapper">
          <div>
            <Logo src={logoLeft} position="left"/>
            <Logo src={logoRight} position="right"/>
            {children}
          </div>
        </div>
    );
  }
}
/*
 <Logo src="./assets/favicon.png" position="left"/>
 <Logo src="./assets/cyclos-design.png" position="right"/>
 */