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
      var networks = new NetworkCollection();
      networks.fetch();
    }

  });

  return NetworkRouter;
});
