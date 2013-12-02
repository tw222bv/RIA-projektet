// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/content"] , function(Backbone, $, template) {
  var contentView = Backbone.View.extend({
    tagName: 'ul',
    className: 'taskList',
    initialize: function(){
      this.collection.on('all', this.render, this);
    },
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template({ tasks: this.collection.models }));
      return this;
  }
    });
    return contentView;
});
