"use strict";

var React = require('react');

var Game = require('./Game');

function App() {
  return React.createElement("div", null, React.createElement("a", {
    href: "https://carlosgreenpersonalsite.com/"
  }, "Back to the homepage"), React.createElement(Game, null));
}

module.exports = App;