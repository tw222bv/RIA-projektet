// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/main"] , function(Backbone, $, template) {
  var mainView = Backbone.View.extend({
  	template: template,
  	render: function (){
  		this.$el.html(template({hello: "Hello World"}));
  		return this;
  	}
  });
  return mainView;
});
