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
    parse: function(response) {
      console.log('GOT SOME DATA!!!', response);
      return response;
    },
    initialize: function() {
      console.log('network collection initialized!')
    }
  });

  return NetworkCollection;
});
