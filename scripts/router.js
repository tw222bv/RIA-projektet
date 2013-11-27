define(['jquery', 'underscore', 'backbone', "scripts/views/mainView"], function($, _, Backbone, MainView){
	var AppRouter = Backbone.Router.extend({
		routes: {
		'todo/:id': 'todo',
		// Default
      '*actions': 'defaultAction'

		}
	});

	var initialize  = function (){

		var app_router = new AppRouter();

		app_router.on('route:defaultAction', function () {
			var mainView = new MainView({el: ".main"});
			mainView.render();
    	});
    	app_router.on('route:todo', function (id) {
			$(".main").html("<h2>"+id+"</h2>");
    	});

    	Backbone.history.start();
  	};
  	return { 
   		initialize: initialize
  	};
});