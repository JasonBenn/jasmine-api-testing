/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var NetworkModel = Backbone.Model.extend({
    defaults: {
    }
  });

  return NetworkModel;
});
