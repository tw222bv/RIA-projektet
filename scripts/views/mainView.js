// This is the main-view, more info will come in time
define(['backbone', "jquery", "underscore", "jade!templates/main"] , function(Backbone, $, _, template) {
  var mainView = Backbone.View.extend({
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.html(template());
      return this;
    }
  });
    return mainView;
});
