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
    },
    marionette : {
      exports : 'Backbone.Marionette',
      deps : ['backbone']
    }
  },
  paths: {
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    bootstrap: 'vendor/bootstrap',
    handlebars: '../bower_components/handlebars/handlebars'
  }
});

require([
  'jquery',
  'backbone',
  'collections/network',
  'views/item/network',
  'views/composite/table',
  'routes/network',
  'views/item/info'
], function ($, Backbone, NetworkCollection, NetworkView, NetworksView, NetworkRouter, InfoView) {

  var App = new Backbone.Marionette.Application();

  App.addRegions({
    info: '#info',
    historyRegion: '#history',
    actions: '#actions'
  })

  App.addInitializer(function() {
    var networks = new NetworkCollection();
    networks.fetch({ reset: true });
    App.historyRegion.show(new NetworksView({ collection: networks }))
  })

  App.addInitializer(function() {
    App.info.show(new InfoView())
  })

  App.addInitializer(function() {
    new NetworkRouter();
    Backbone.history.start();
  })

  App.start();
});
