//This is the "main"-file, that will kick-start the application.
require.config({
  paths: {
    jquery: 'scripts/libs/jquery/jquery',
    underscore: 'scripts/libs/underscore/underscore',
    jade: "scripts/libs/jade/load_jade-v0.27.6",
    backbone: 'scripts/libs/backbone/backbone',
    "backbone.localStorage": "scripts/libs/backbone-localstorage/backbone-localstorage"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});
// When the app.js is loaded, the function will start that start the application
require(['app'], function(App) {
  App.initialize();
});