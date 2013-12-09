/*global define*/

define([
  'jquery',
  'backbone',
  'collections/network',
  'views/composite/table'
], function ($, Backbone, NetworkCollection, NetworksView) {
  'use strict';

  var NetworkRouter = Backbone.Router.extend({
    routes: {
      '': 'startup'
    },

    startup: function() {
      var networks = new NetworkCollection();
      networks.fetch({ reset: true });
      var networksView = new NetworksView({
        el: '.container',
        collection: networks
      });
      networksView.render();
    }

  });

  return NetworkRouter;
});
