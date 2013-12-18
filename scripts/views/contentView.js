// This is the listView, but it says contentView? Yeah I know, deal with it. 
define(['backbone', "jquery", "jade!templates/content", "jade!templates/editInput", "jade!templates/oneContent"] , function(Backbone, $, template,editTemplate, oneTemplate) {
  var contentView = Backbone.View.extend({
    // Setting a listener when it's initialize. If anything happens, it will re-render
    initialize: function(){
        this.listenTo(this.collection,"all",this.render)
    },
    // very events, such functions
    events: {
      "click .delete-task": "delete",
      "click #check": "check",
      "mouseenter .oneTodo": "hoverOn",
      "mouseleave .oneTodo": "hoverOff",
      "dblclick .taskTitle": "changeHTML",
      "blur #edit-task-input": "changeHTML",
      "keypress #edit-task-input": "blur",
      "keypress .edit-task-button": "blur"
    },
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template({ tasks: this.collection.models }));

      return this;
    },
    delete: function(e){
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
    // I think you can figure out almost everything, except for this badass, it's a supermegafunction.
    // It will change the h2-tag into a input-field, crazy right?
    // So you can change the content of the task/todo
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
    // Here's some button-magic, does it have a delete-button? Or is the task/todo invincible? 
    hoverOn: function(e){
      $(e.currentTarget).find(".delete-task").removeClass("hideButton");
    },
    hoverOff: function(e){
      $(e.currentTarget).find(".delete-task").addClass("hideButton");
    }
  });
  return contentView;
});
