// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/masterView", "scripts/collections/todos"], function($, _, Backbone, MasterView, Todos){
	var AppRouter = Backbone.Router.extend({ // Adding some routes
		initialize: function(){
			this.todos = new Todos();
			this.masterView = new MasterView({el: ".main", collection: this.todos});
			Backbone.history.start();
		},
		// Two routes can be found in the router, one for single task, the other's a default route
		routes: {
		'todo/:id': 'todo',
		'*actions': 'index'

		},
		// This is the default route, whatever you type in the url leads you here
		// "except for #todo/:someId".
		// After fetching the collection, it will render a list for tasks/todos
		index: function(){
			var self = this;
			this.todos.fetch({
				success: function(tasks){
          			$(".main").append(self.masterView.renderList(tasks));
        		}
			});
		},
		// This route is for single picked tasks.
		// After fetching the collection, it will get one task/todo and see if it's 
		// not empty. If it's not, it will render single task/todo, else page not found.
		todo: function(id){
			var self = this;
			this.todos.fetch({
				success: function(tasks){
					var task = tasks.get(id);
					if(typeof task !== "undefined"){
   						$(".main").append(self.masterView.renderOne(task));
   					}else{
   						$(".main").append(self.masterView.renderNotFound());
   					}
				}
			});
		}
	});
	return AppRouter;
});