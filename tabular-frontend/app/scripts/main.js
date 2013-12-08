/*global require*/
'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    bootstrap: 'vendor/bootstrap',
    handlebars: '../bower_components/handlebars/handlebars',
    networkCollection: 'collections/network',
    networkModel: 'models/network',
    networkRouter: 'routes/network',
    networkTemplate: 'templates/network',
    networkView: 'views/network'
  }
});

require([
  'backbone',
  'networkRouter'
], function (Backbone, NetworkRouter) {
  new NetworkRouter();
  Backbone.history.start();
});
