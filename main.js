//This is the "main"-file, that will kick-start the application.
require.config({
  paths: {
    jquery: 'scripts/libs/jquery/jquery',
    "jquery.bootstrap": 'scripts/libs/bootstrap/bootstrap',
    underscore: 'scripts/libs/underscore/underscore',
    jade: "scripts/libs/jade/load_jade-v0.27.6",
    purebackbone: 'scripts/libs/backbone/backbone.min',
    "bb-loc": "scripts/libs/backbone/backbone-localstorage",
    backbone: 'scripts/libs/backbone/backbone',
  },
  shim: {
    underscore: {
      exports: "_"
    },
    jquery: {
      exports: "jQuery"
    },
    purebackbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    "bb-loc": ["purebackbone", "underscore"],
    "jquery.bootstrap": {
            deps: ["jquery"]
    }
  
  }
});
// When the router.js is loaded, the function will start that start the application.
// It will create a new Router-object
require(['router', "backbone"], function(Router, Backbone) {
  new Router();
});