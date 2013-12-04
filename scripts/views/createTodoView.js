// This is the createtodo-view, more info will come in time
define(['backbone', "jquery", "jade!templates/todoForm"] , function(Backbone, $, template) {
  var contentView = Backbone.View.extend({
    template: template,
    events: {
      "keypress #todo": "add",
      "click #addTask": "add"
    },
    add: function(e){
      if(e.which === 13 || e.which === 1 && e.currentTarget.id === "addTask"){
        this.input = $("#todo");
        if(this.input.val().trim().length && this.input.val().trim().length < 12){
          var input = this.input.val().trim();
          if(input.match(/^[a-zåäö\s]*$/i)){
            this.collection.create({title: this.input.val(), created: new Date() });
            $("#todo").val("");
          }
          else{
            // TODO make error-message wrong format
          }
        }
        else{
          // TODO: make error-message between 1-11 characters
        }
      }
    },

    render: function (){
      this.$el.empty();
      this.$el.append(template());
      return this;
  }
    });
    return contentView;
});
