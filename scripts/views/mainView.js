// This is the main-view, more info will come in time
define(['backbone', "jquery", "jade!templates/main"] , function(Backbone, $, template) {
  var mainView = Backbone.View.extend({
    initialize: function(){
      this.collection.on('all', this.render, this);
      /*var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //Months are zero based
      var curr_year = d.getFullYear();
      var stringDate = curr_date + "-" + curr_month + "-" + curr_year;
      this.collection.create( title: "HolyShieet" , created: stringDate });*/
    },
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template({hello: "Hello World", tasks: this.collection.models }));
      return this;
  }
    });
    return mainView;
});
