/*global define*/

define([
    'underscore',
    'backbone',
    'models/network'
], function (_, Backbone, NetworkModel) {
    'use strict';

    var NetworkCollection = Backbone.Collection.extend({
        model: NetworkModel
    });

    return NetworkCollection;
});