/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var NetworkView = Backbone.Marionette.ItemView.extend({
    tagName: 'tr',
    template: JST['app/scripts/templates/network.hbs']
  });

  return NetworkView;
});
