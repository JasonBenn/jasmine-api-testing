/*global define*/

define([
  'underscore',
  'backbone',
  'models/network'
], function (_, Backbone, NetworkModel) {
  'use strict';

  var NetworkCollection = Backbone.Collection.extend({
    model: NetworkModel,
    url: '/api',
    comparator: function(model) {
      return -model.get('count_on_waitlist')
    },

    parse: function(response) {
      return response.network_statistics;
    },
  });

  return NetworkCollection;
});
