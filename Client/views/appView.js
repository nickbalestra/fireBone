var AppView = Backbone.View.extend({
  template: _.template('<div class="row" style="background-color:<%= hexColor %>"><span><%= hexColor %></span></div>'),

  events: {
    'click .addColor': 'addColor'
  },

  initialize: function(){
    this.collection.on('add', this.render, this);
  },

  render: function(){
    $view = this.$el.html('<div class="addColor"><span>Gimme moar<span></div><div id="colors"></div>');

    this.collection.each(function(color){
      $view.find('#colors').prepend(this.template(color.attributes));
    }, this);

    return $view;
  },


  addColor: function(){
    this.collection.add(new Color());
  }
});
