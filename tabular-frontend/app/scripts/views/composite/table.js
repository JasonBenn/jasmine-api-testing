/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'templates',
  'views/item/network'
], function ($, _, Backbone, Marionette, JST, NetworkView) {
  'use strict';

  var NetworksView = Backbone.Marionette.CompositeView.extend({
    template: JST['app/scripts/templates/table-head.hbs'],
    itemView: NetworkView,
    itemViewContainer: 'tbody'
  });

  return NetworksView;
});
