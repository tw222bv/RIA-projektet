// This is the main-view, it's the motherfucking navigation on the top
define(["jade!templates/nav","backbone", "jquery", "jquery.bootstrap"] , function(template, Backbone, $) {
  var contentView = Backbone.View.extend({
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template());
      return this;
  }
    });
    return contentView;
});
