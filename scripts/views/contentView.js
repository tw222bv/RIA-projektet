// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/content", "jade!templates/editInput", "jade!templates/oneContent"] , function(Backbone, $, template,editTemplate, oneTemplate) {
  var contentView = Backbone.View.extend({
    initialize: function(){
        this.collection.on('add', this.renderIndex, this);
        this.collection.on('change', this.renderIndex, this);
        this.collection.on('remove', this.renderIndex, this);
      
    },
    events: {
      "click .delete-task": "remove",
      "click #check": "check",
      "mouseenter .oneTodo": "hoverOn",
      "mouseleave .oneTodo": "hoverOff",
      "dblclick .taskTitle": "changeHTML",
      "blur #edit-task-input": "changeHTML",
      "keypress #edit-task-input": "blur",
      "keypress .edit-task-button": "blur"
    },
    template: template,
    renderIndex: function (){
      this.$el.empty();
      this.$el.append(template({ tasks: this.collection.models }));
      return this;
    },
    renderOne: function(){
      this.$el.append(oneTemplate({ task: this.collection }));
      return this;
    },
    remove: function(e){
        var id = $(e.target).closest(".oneTodo").attr("data-id");

        if(id !== ""){
          var model = this.collection.get(id);
          model.destroy();
        
        }
    },
    check: function(e){
      var id = $(e.target).closest(".oneTodo").attr("data-id");

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
        var input = $(editTemplate({ val: element.text() }));
        element.replaceWith(input);
        input.find("#edit-task-input").focus().select();   
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
      $(e.currentTarget).find(".delete-task").removeClass("hideButton");
    },
    hoverOff: function(e){
      $(e.currentTarget).find(".delete-task").addClass("hideButton");
    }
  });
  return contentView;
});
