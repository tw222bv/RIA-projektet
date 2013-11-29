// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/main"] , function(Backbone, $, template) {
  var mainView = Backbone.View.extend({
  	initialize: function(){
  		this.collection.on('all', this.render, this);
  	},
  	template: template,
  	render: function (){
  		this.$el.empty();
      console.log(this.collection);
  		this.$el.html(template({hello: "Hello World", tasks: this.collection }));
  		return this;
  	}
  });
  return mainView;
});
