define(['backbone', "jquery", "underscore", "scripts/views/createTodoView", "scripts/views/navView", "jade!templates/main"] , function(Backbone, $, _, CreateTodoView, NavView, template) {
	var masterView = Backbone.View.extend({
		 className: 'Content-todo',
		 initialize: function(){
		 	this.$el.hide();
		 	this.$el.append(template());
		 	this.navView = new NavView({el: this.$el.find("#Nav")});
			this.createTodoView = new CreateTodoView({ el: this.$el.find("#TaskInput"), collection: this.collection});


		},
		render: function(){
			this.navView.render();
			this.createTodoView.render();
			this.$el.show();
			return this;
		}
	});
	return masterView;
});