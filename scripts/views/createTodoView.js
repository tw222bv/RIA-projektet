// This is the createtodo-view, more info will come in time
define(['backbone', "jquery", "jade!templates/todoForm"] , function(Backbone, $, template) {
  var contentView = Backbone.View.extend({
    template: template,
    events: {
      "keypress #todo": "add"
    },
    add: function(e){
      if(e.which === 13){
        this.input = $("#todo");
        if(this.input.val().trim().length){
          var input = this.input.val().trim();
          if(input.match(/^[a-zåäö\s]*$/i)){
            this.collection.create({title: this.input.val(), created: new Date() });
            $("#todo").val("");
          } 
        }

      }

    },
    render: function (){
      this.$el.empty();
      $("#todo").focus();
      this.$el.append(template());
      return this;
  }
    });
    return contentView;
});
