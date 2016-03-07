import React, { PropTypes, Component } from 'react';
import './layout.scss';

import Logo from '../Logo/Logo';


import logoLeft from './../../assets/logo.png';


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
            {children}
          </div>
        </div>
    );
  }
}