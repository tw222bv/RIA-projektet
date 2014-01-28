// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/masterView", "scripts/collections/todos"], function($, _, Backbone, MasterView, Todos){
    var AppRouter = Backbone.Router.extend({ // Adding some routes
        initialize: function(){
            this.todos = new Todos();

            // Fetch tods collection in init method instead of each time the router change route
            var self = this;
            this.tasks = null;
            this.masterView = null;
            this.todos.fetch({
                success: function(tasks) {
                    self.tasks = tasks;
                    self.masterView = new MasterView({el: ".main", collection: self.todos});
                    Backbone.history.start();
                }
            });
        },

        // Two routes can be found in the router, one for single task, the other's a default route
        routes: {
            'todo/:id': 'todo',
            '*actions': 'index'

        },
        
        // This is the default route, whatever you type in the url leads you here
        // "except for #todo/:someId".
        // After fetching the collection, it will render a list for tasks/todos
        index: function(){
            $(".main").append(this.masterView.renderList(this.tasks));
        },

        // This route is for single picked tasks.
        // After fetching the collection, it will get one task/todo and see if it's 
        // not empty. If it's not, it will render single task/todo, else page not found.
        todo: function(id){
            var task = this.tasks.get(id);
            if (typeof task !== "undefined") {
                $(".main").append(this.masterView.renderOne(task));
            } else {
                $(".main").append(this.masterView.renderNotFound());
            }
        }
    });
    return AppRouter;
});