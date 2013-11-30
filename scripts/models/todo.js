define(['underscore','backbone.localStorage'], function(_, Backbone) {
  
  var Todo = Backbone.Model.extend({
		defaults: {
			title: "",
			created: "",
			completed: false
		},
		title: function(){ return this.get("title"); },
		created: function(){ return this.get("created"); }


	});
  return Todo;
});