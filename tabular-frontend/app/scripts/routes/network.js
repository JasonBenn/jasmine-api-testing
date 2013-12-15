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
    },
  });

  return NetworkRouter;
});
