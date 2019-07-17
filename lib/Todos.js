"use strict";

var React = require('react');

var Todos = function Todos(_ref) {
  var todos = _ref.todos,
      deleteTodo = _ref.deleteTodo;
  var todoList = todos.length ? todos.map(function (todo) {
    return React.createElement("div", {
      className: "collection-item",
      key: todo.id
    }, React.createElement("span", {
      onClick: function onClick() {
        deleteTodo(todo.id);
      }
    }, todo.content));
  }) : React.createElement("p", {
    className: "center"
  }, "You have nothing left todo!");
  return React.createElement("div", {
    className: "todos collection"
  }, todoList);
};

module.exports = Todos;