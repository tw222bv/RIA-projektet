// This is todoView, a backbone-view for only one task/todo
define(['backbone', "jquery","jade!templates/editInput", "jade!templates/oneContent"] , function(Backbone, $, editTemplate,template) {
  var todoView = Backbone.View.extend({
    // Setting a listener when it's initialize. If anything changes, it will re-render
    initialize: function(){
      // Very query, such code
      // Get elements papa-john, get the chosen-one that have the list activated. 
        this.$el.parent().find("ul.navbar-nav").find("li.active").removeClass("active");
        this.listenTo(this.model,"change",this.render)
    },
    // Adding some events
    events: {
      "click .delete-task": "delete",
      "click .complete-task": "check",
      "click .edit-task": "changeHTML",
      "click .edit-task-button": "saveChanges"
    },
    template: template,
    // This will render the single-task view
    render: function (){
      if(this.model.isValid()){
          this.$el.empty();
          console.log(this.model);
          this.$el.append(template({ task: this.model }));
          return this;
      }
        else {
          this.$("#edit-task-input").css("border-color", "red");
      }
    },
    delete: function(e){   
        this.model.destroy();
    },
    // This will set if the task/todo is completed or not. 
    check: function(e){
      var element = $(e.currentTarget);
      var isCompleted;
      if(element.text() === "Completed"){
        isCompleted = false;
      }
      else{
        isCompleted = true;
      }

      if(element){
        this.model.set("completed", isCompleted);
        this.model.save();
      }
    },
    saveChanges: function(e){
      var input = this.$el.find("input").closest("#edit-task-input");
      this.model.set("title", input.val());

      if(this.model.isValid()){
        this.model.save(); // TODO: Fixa vy, om det blir fel validering så kommer de till vy ändå
      }        
    },
    // If you want to edit a task/todo, it will re-render to an input-field to type in.
    changeHTML: function(e){
      var element = this.$el.find("h2").closest(".taskTitle");
      if(element)
      {
        var input = $(editTemplate({ val: element.text() }));
        element.replaceWith(input);
        input.find("#edit-task-input").focus().select();   
      }
    }
  });
  return todoView;
});
