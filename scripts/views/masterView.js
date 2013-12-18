define(['backbone', "jquery", "underscore", "scripts/views/createTodoView", "scripts/views/navView", "jade!templates/main", "scripts/views/contentView", "scripts/views/todoView", "jade!templates/pageNotFound"] , function(Backbone, $, _, CreateTodoView, NavView, template, ContentView, TodoView, PageNotFound) {
	var masterView = Backbone.View.extend({
		 className: 'Content-todo',
		 initialize: function(){
			this.$el.hide();
		},
		render: function(){


			if (this.contentView){this.contentView.remove();}

		 	this.$el.append(template());
		 	this.navView = new NavView({el: this.$el.find("#Nav")});
			this.createTodoView = new CreateTodoView({ el: this.$el.find("#TaskInput"), collection: this.collection});
			this.navView.render();
			this.createTodoView.render();
			return this;
		},
		renderList: function(tasks){
			this.render();

			this.$el.find("#TaskInput").show();
          	this.contentView = new ContentView({ el: this.$el.find("#Content"), collection: tasks});
          	this.contentView.render();
          	$("#todo").focus();
          	this.$el.show();
			
		},
		renderOne: function(task){
			this.render();

          	this.$el.find("#TaskInput").hide();
			this.contentView = new TodoView({ el: this.$el.find("#Content"), model: task });
			this.contentView.render();
			this.$el.show();
		},
		renderNotFound: function(){
			this.render();

			this.$el.find("#TaskInput").hide();
			this.$el.find("#Content").empty();
			this.$el.find("#Content").append(PageNotFound());
			this.$el.show();

		}

	});
	return masterView;
});