define(["backbone", "jquery", "scripts/views/mainView"], function(Backbone, $, MainView){
	return {
		start: function(){
			var mainView = new MainView({ el: ".main"});
			mainView.render();
			Backbone.history.start();
		}
	};
});