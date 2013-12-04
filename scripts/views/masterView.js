define(['backbone', "jquery", "underscore", "scripts/views/contentView", "scripts/views/createTodoView", "scripts/views/navView", "jade!templates/main"] , function(Backbone, $, _, ContentView, CreateTodoView, NavView, template) {
	var masterView = Backbone.View.extend({
		 className: 'Content-todo',
		 initialize: function(){
		 	this.$el.hide();
		 	this.$el.append(template());
		 	this.navView = new NavView({el: "#Nav"});
			this.createTodoView = new CreateTodoView({ el: "#TaskInput", collection: this.collection});
			this.contentView = new ContentView({ el: "#Content", collection: this.collection});

		},
		render: function(){
			this.$el.show();
			this.navView.render();
			this.createTodoView.render();
			this.contentView.render();
			return this;
		}
	});
	return masterView;
});