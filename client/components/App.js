import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import logo from './../assets/react-logo.png';

// Favicon link is in the template, this just makes webpack package it up for us
import './../assets/favicon.ico';

export const Home = React.createClass({
  render() {
    return (
      <div className={"page"}>
        <div className={"siteTitle"}>
          <img src={logo} alt='React Logo' />
          <h1>React Static Boilerplate</h1>
        </div>
        <p>Why React static?</p>
        <ul>
          <li><span className={"hl"}>Dev</span> friendly</li>
          <li><span className={"hl"}>User</span> friendly</li>
          <li><span className={"hl"}>SEO</span> friendly</li>
        </ul>
      </div>
    );
  },
});

export const NotFound = React.createClass({
  render() {
    return (
      <div className={"page"}>
        <h4>Not found</h4>
      </div>
    );
  },
});

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export const App = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },
  render() {
    return (
      <div className={"App"}>
        <nav className={"nav"}>
          <IndexLink to='/' activeClassName={"active"}>Home</IndexLink>
          <Link to='/about' activeClassName={"active"}>About</Link>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
