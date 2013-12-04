// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/masterView", "scripts/collections/todos"], function($, _, Backbone, MasterView, Todos){
	var AppRouter = Backbone.Router.extend({ // Adding some routes
		initialize: function(){
			this.collection = new Todos();
			this.masterView = new MasterView({el: ".main", collection: this.collection});
			Backbone.history.start();
		},
		routes: {
		'todo/:id': 'todo',
		'*actions': 'index'

		},
		index: function(){
			var that = this;
			this.collection.fetch({
				success: function(tasks){
          			$(".main").append(that.masterView.render().el).show();
          			$("#todo").focus();
        		}
			});
		},
		todo: function(id){
			$(".main").html("<h2>"+id+"</h2>");
		}

	});
	return AppRouter;
});