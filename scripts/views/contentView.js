// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/content"] , function(Backbone, $, template) {
  var contentView = Backbone.View.extend({
    initialize: function(){
      this.collection.on('all', this.render, this);
    },
    events: {
      "click .delete-task": "remove",
      "click #check": "check",
      "mouseenter .oneTodo"   : "hoverOn",
      "mouseleave .oneTodo"   : "hoverOff"
    },
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template({ tasks: this.collection.models }));
      $(".delete-task").hide();
      return this;
    },
    remove: function(e){
      var id = $(e.target).attr("data-id");
      if(id !== ""){
        var model = this.collection.get(id);
        model.destroy();
      }
    },
    check: function(e){
      var id = $(e.target).attr("data-id");
      if(id !== ""){
        var model = this.collection.get(id);
        model.set("completed", e.target.checked);
        model.save();
      }
    },
    hoverOn: function(e){
      $(e.currentTarget).find(".delete-task").show();
    },
    hoverOff: function(e){
      $(e.currentTarget).find(".delete-task").hide();
    }
  });
  return contentView;
});
