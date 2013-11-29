define(['underscore','backbone.localStorage'], function(_, Backbone) {
  
  var Todo = Backbone.Model.extend({
			defaults: {
				title: "",
				created: "",
				completed: false
			},
			validate: function(attrs){
				if(_.isEmpty(attrs.title)){
					return "Missing title";
				}
			}
		});
  return Todo;
});