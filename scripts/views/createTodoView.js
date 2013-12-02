// This is the createtodo-view, more info will come in time
define(['backbone', "jquery", "jade!templates/todoForm"] , function(Backbone, $, template) {
  var contentView = Backbone.View.extend({
    template: template,
    events: {
      "keypress #Todo": "alert"
    },
    alert: function(e){


    },
    render: function (){
      this.$el.empty();
      this.$el.append(template());
      return this;
  }
    });
    return contentView;
});
