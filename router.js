// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/mainView", "scripts/collections/todos", "scripts/models/todo"], function($, _, Backbone, MainView, Todos, Todo){
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
			var tasks = new Todos();
			tasks.create({ title: "awesomeTitle", created: new Date().getTime() });
			var mainView = new MainView({el: ".main", collection: tasks});
			tasks.fetch({
				success: function(tasks){
					mainView.render();
				}
			});
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