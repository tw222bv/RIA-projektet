// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/mainView"], function($, _, Backbone, MainView){
	var AppRouter = Backbone.Router.extend({ // Adding some routes
		routes: {
		'todo/:id': 'todo',
      	'*actions': 'startPage'

		}
	});

	var initialize  = function (){
		// Making a new route-object, and listen to the url where we're heading and what to do.
		var app_router = new AppRouter();

		app_router.on('route:startPage', function () {

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