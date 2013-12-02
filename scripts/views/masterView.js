define(['backbone', "jquery", "underscore", "scripts/views/contentView", "scripts/views/mainView"] , function(Backbone, $, _, ContentView, MainView) {
	var masterView = Backbone.View.extend({
		 className: 'Content-todo',
		 initialize: function(){
			this.contentView = new ContentView({collection: this.collection})
	
			this.$el.hide();
			this.$el.append(this.contentView.render().el);
		},
		render: function(){
			this.$el.show();
			return this;
		}
	});
	return masterView;
});