define(['underscore','backbone'], function(_, Backbone) {
  
  var Todo = Backbone.Model.extend({
		defaults: {
			title: "",
			created: "",
			completed: false
		},
		title: function(){ return this.get("title"); },
		created: function(){ return this.get("created"); },
		completed: function(){ return this.get("completed"); }

	});
  return Todo;
});