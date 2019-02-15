
"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    title: "",
    description: "",
    author: "",
    // just setting random number for id would set as primary key from server
    id: _.random(0, 10000)
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.title) errors.title = "Hey! Give this thing a title.";
    if (!attrs.description) errors.description = "You gotta write a description, duh!";
    if (!attrs.author) errors.author = "Put your name in dumb dumb...";
    if (!_.isEmpty(errors)) return errors;
  },

  // sync: function (method, model, options) {
  //   var xhr;
  //   xhr = Backbone.Model.prototype.sync.call(this, method, model, options)
  //     .then(function (data) {
  //       debugger;
  //     }.bind(this))
  //     .fail(function (data, status, e) {
  //       debugger;
  //     }.bind(this));
  //   console.log(1);
  // },
});

APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  // localStorage: new Backbone.LocalStorage("NoteCollection"),
  url: "http://localhost:3000/notes",
  model: APP.NoteModel,

  // sync: function () {
  //   return Backbone.sync.apply(this, arguments);
  // }
});
