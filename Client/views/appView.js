var AppView = Backbone.View.extend({
  template: _.template('<div class="row" style="background-color:<%= hexColor %>"><span><%= hexColor %></span></div>'),

  events: {
    'click #add': 'addColor',
    'click #remove': 'remove',
    'click #reset': 'reset'
  },

  initialize: function(){
    this.collection.on('add remove reset', this.render, this);
  },

  render: function(){
    $view = this.$el.html('<div class="addColor"><span id="add">Gimme moar</span><span id="remove">Gimme less</span><span id="reset">Gimme me none</span></div><div id="colors"></div>');

    this.collection.each(function(color){
      $view.find('#colors').prepend(this.template(color.attributes));
    }, this);

    return $view;
  },

  addColor: function(){
    var randomHex = Please.make_color({base_color: 'cyan'});
    this.collection.add({hexColor: randomHex});
  },

  remove: function(){
    this.collection.pop();
  },

  reset: function(){
    this.collection.reset();
  }
});