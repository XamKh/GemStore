import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./main.css";

export default class CardNavBar extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <Tabs
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex => this.setState({ tabIndex })}
      >
        <TabList>
          <Tab>Description</Tab>
          <Tab>Specs</Tab>
          <Tab>Reviews</Tab>
        </TabList>
        <TabPanel>
          <blockquote>
            <p>
              Overlord (オーバーロード Ōbārōdo) is a Japanese light novel series
              written by Kugane Maruyama and illustrated by so-bin.
            </p>
            <cite>&mdash;Max</cite>
          </blockquote>
        </TabPanel>
        <TabPanel>
          <blockquote>
            <p>
              Overlord (オーバーロード Ōbārōdo) is a Japanese light novel series
              written by Kugane Maruyama and illustrated by so-bin.
            </p>
          </blockquote>
        </TabPanel>
        <TabPanel>
        <form>
          <div className="form-group">
            <label className="text-move-left" for="exampleFormControlSelect1">Submit A Review</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>&#9733;</option>
              <option>&#9733;&#9733;</option>
              <option>&#9733;&#9733;&#9733;</option>
              <option>&#9733;&#9733;&#9733;&#9733;</option>
              <option>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
          </div>
            <div className="form-group">
              <label className="text-move-left" for="formGroupExampleInput">Write A Review</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Tell us about your experience"
              />
            </div>
            <div className="form-group">
              <label className="text-move-left" for="formGroupExampleInput2">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Max"
              />
              <button type="submit" className="float-right btn btn-primary mb-2">Submit Review</button>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    );
  }
}
