define(['backbone', "jquery", "jade!templates/main"] , function(Backbone, $, template) {
  return Backbone.View.extend({
  	template: template,
  	render: function (){
  		this.$el.html(template({hello: "Hello World"}));
  		return this;
  	}
  });
});
