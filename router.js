// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/masterView", "scripts/collections/todos"], function($, _, Backbone, MasterView, Todos){
	var AppRouter = Backbone.Router.extend({ // Adding some routes
		routes: {
		'todo/:id': 'todo',
		'*actions': 'index'

		},
		index: function(){
			var collection = new Todos();
			var masterView = new MasterView({collection: collection});
			collection.fetch({
				success: function(tasks){
          			$(".main").html(masterView.render().el).show();
        		}

			});
		},
		todo: function(id){
			$(".main").html("<h2>"+id+"</h2>");
		}

	});

	var initialize  = function (){
		// Making a new route-object, and listen to the url where we're heading and what to do.
		var app_router = new AppRouter();
		Backbone.history.start();
	};
	return { 
		initialize: initialize
	};
});