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
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    bootstrap: 'vendor/bootstrap',
    handlebars: '../bower_components/handlebars/handlebars',
  }
});

require([
  'backbone',
  'routes/network'
], function (Backbone, NetworkRouter) {
  new NetworkRouter();
  Backbone.history.start();
});
