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
    splitterPosition: "top",
    index: "start"
  };

  componentDidMount() {
    fetch(data)
        .then(function (response) {
          //console.log('res json', response);
          return response.json()
        }).then(function (json) {
      //console.log('parsed json', json, this);
      this.fetchData(json);
    }.bind(this)).catch(function (ex) {
      //console.error('parsing failed', ex)
    })
  }

  fetchData(json) {
    //console.log("fetch data");
    this.setState({
      data: json,
      loaded: true
    });
  }

  onLeft(newIndex, isCondition) {
    //console.log(newIndex);
    let newDir = typeof isCondition === "undefined" && newIndex !== "contact" ? "ltrb" : "ltrt";
    this.setState({
      splitterPosition: newDir === "ltrb" ? "bottom" : "top"
    });
    this.changePage(newIndex, newDir);
  }

  onRight(newIndex) {
    this.setState({
      splitterPosition: "top"
    });
    this.changePage(newIndex, "rtlt");
  }

  onMiddle(newIndex) {
    this.changePage(newIndex, "to-scale");
  }

  changePage(newIndex, animationClassName) {
    //console.log(newIndex, animationClassName);
    this.setState({
      index: newIndex,
      animation: animationClassName
    });
  }

  resetAnimationClass(e) {
    //console.log(e, this.state.animation);
    this.setState({
      animation: ""
    });
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
    const {animation, splitterPosition} = this.state;
    const typeOfLeftPage = animation && animation === "ltrb" ? "out-of-canvas-left-2" : "out-of-canvas-left";


    return (
        <Layout>
          <If condition={item && item.id}>
            <div>

              <Page
                  {...item}
                  type="normal"
                  splitterPosition={splitterPosition}
                  onAnimationEnd={this.resetAnimationClass.bind(this)}
                  animation={animation}
              />
              <Page
                  {...item}
                  type={typeOfLeftPage}
                  onAnimationEnd={this.resetAnimationClass.bind(this)}
                  animation={animation}
              />
              <Page
                  {...item}
                  type="out-of-canvas-right"
                  onAnimationEnd={this.resetAnimationClass.bind(this)}
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

