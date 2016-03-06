import React, { Component } from "react";

import Page from "../components/Page/Page";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";

import data from './../assets/data.json';

export default class Index extends Component {

  state = {
    loaded: false,
    animation: "",
    data: null,
    index: "start"
  };

  componentDidMount() {
    fetch(data)
        .then(function (response) {
          console.log('res json', response);
          return response.json()
        }).then(function (json) {
      console.log('parsed json', json, this);
      this.fetchData(json);
    }.bind(this)).catch(function (ex) {
      console.error('parsing failed', ex)
    })
  }

  fetchData(json) {
    //console.log("fetch data");
    this.setState({
      data: json,
      loaded: true
    });
  }

  onLeft(newIndex) {
    this.changePage(newIndex, "ltr");
  }

  onRight(newIndex) {
    this.changePage(newIndex, "rtl");
  }

  onMiddle(newIndex) {
    this.changePage(newIndex, "to-scale");
  }

  changePage(newIndex, animationClassName) {
    //console.log(newIndex, animationClassName);
    let animClass = animationClassName === this.state.animation ? "new-" + animationClassName : animationClassName;

    this.setState({
      index: newIndex,
      animation: animClass
    });

    this.resetAnimationClass();
  }

  resetAnimationClass() {
    setTimeout(function () {
      this.setState({
        animation: ""
      });
    }.bind(this), 1000)
  }

  getItem() {
    const {index, data, loaded} = this.state;
    let item = {};
    if (loaded) {
      let items = data.filter(value => {
        return value.id === index
      });
      item = items && items.length ? items[0] : {};
    }
    return item;
  }

  render() {
    const item = this.getItem();
    const {animation} = this.state;

    return (
        <Layout>
          <If condition={item && item.id}>
            <div>

              <Page
                  {...item}
                  type="normal"
                  animation={animation}
              />
              <Page
                  {...item}
                  type="out-of-canvas-left"
                  animation={animation}
              />
              <Page
                  {...item}
                  type="out-of-canvas-right"
                  animation={animation}
              />
              <Navigation
                  {...item}
                  onLeft={this.onLeft.bind(this)}
                  onRight={this.onRight.bind(this)}
                  onMiddle={this.onMiddle.bind(this)}
              />
            </div>
            <Else />

            <h2>loading...</h2>

          </If>
        </Layout>

    );
  }
}

