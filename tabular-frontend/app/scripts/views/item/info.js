/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var InfoView = Backbone.Marionette.ItemView.extend({
    template: JST['app/scripts/templates/info.hbs']
  });

  return InfoView;
});
