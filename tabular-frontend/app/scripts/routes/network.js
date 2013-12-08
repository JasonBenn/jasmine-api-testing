/*global define*/

define([
  'jquery',
  'backbone',
  'networkCollection'
], function ($, Backbone, NetworkCollection) {
  'use strict';

  var NetworkRouter = Backbone.Router.extend({
    routes: {
      '': 'startup'
    },

    startup: function() {
      $.get('api', function(data) {
        var networks = new NetworkCollection(data);
        console.log(networks)
      })
    }

  });

  return NetworkRouter;
});
