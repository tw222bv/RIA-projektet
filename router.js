// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/masterView", "scripts/collections/todos", "scripts/views/contentView"], function($, _, Backbone, MasterView, Todos, ContentView){
	var AppRouter = Backbone.Router.extend({ // Adding some routes
		initialize: function(){
			this.todos = new Todos();
			this.masterView = new MasterView({el: ".main", collection: this.todos});
			Backbone.history.start();
		},
		routes: {
		'todo/:id': 'todo',
		'*actions': 'index'

		},
		index: function(){
			var self = this;
			$(".main").find("#TaskInput").show();
			$(".main").find("#Content").empty();

			
			this.todos.fetch({
				success: function(tasks){
					var contentView = new ContentView({ el: $(".main").find("#Content"), collection: tasks});
          			$(".main").append(self.masterView.render().el);
          			contentView.renderIndex();
          			$("#todo").focus();
        		}
			});
		},
		todo: function(id){
			var self = this;
			$(".main").find("#TaskInput").hide();
			$(".main").find("#Content").empty();

			this.todos.fetch({
				success: function(tasks){

					var task = tasks.get(id);
					var contentView = new ContentView({ el: $(".main").find("#Content"), collection: task });
   					$(".main").append(self.masterView.render().el);
          			contentView.renderOne();

				}
			});

		}

	});
	return AppRouter;
});