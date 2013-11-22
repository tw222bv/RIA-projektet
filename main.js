require.config({
  paths: {
    'jquery': 'scripts/vendor/jquery/jquery',
    'underscore': 'scripts/vendor/underscore/underscore',
    'backbone': 'scripts/vendor/backbone/backbone',
    'jade': "scripts/vendor/jade/load_jade-v0.27.6"
  }
});

require(['scripts/src/app'], function(App) {
  App.start();
});