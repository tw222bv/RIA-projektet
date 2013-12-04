// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/content"] , function(Backbone, $, template) {
  var contentView = Backbone.View.extend({
    initialize: function(){
      this.collection.on('all', this.render, this);
    },
    events: {
      "click .delete-task": "remove",
      "click #check": "check",
      "mouseenter .oneTodo": "hoverOn",
      "mouseleave .oneTodo": "hoverOff",
      "dblclick .taskTitle": "changeHTML",
      "blur #edit-task-input": "changeHTML",
      "keypress #edit-task-input": "blur"
    },
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template({ tasks: this.collection.models }));
      $(".delete-task").hide();
      return this;
    },
    remove: function(e){
      var id = $(e.target).closest("tr").attr("data-id");
      if(id !== ""){
        var model = this.collection.get(id);
        model.destroy();
      }
    },
    check: function(e){
      var id = $(e.target).closest("tr").attr("data-id");
      if(id !== ""){
        var model = this.collection.get(id);
        model.set("completed", e.target.checked);
        model.save();
      }
    },
    blur: function(e){
      var element = $(e.currentTarget);
      if(e.which === 13){
        element.blur();
      }
    },
    changeHTML: function(e){
      var element = $(e.currentTarget);
      if(element.hasClass("taskTitle"))
      {
        var input = $("<input id='edit-task-input' class='form-control input-lg' type='text' value='"+element.text()+"' />");
        element.replaceWith(input);
        input.focus().select();    
      }
      else{
          var id = element.closest("tr").attr("data-id");
          var model = this.collection.get(id); 
          model.set("title", element.val());
          if(model.isValid()){
            model.save(); // TODO: Fixa vy, om det blir fel validering så kommer de till vy ändå
          }        
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
