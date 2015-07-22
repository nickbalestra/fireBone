var Color = Backbone.Model.extend({
  idAttribute: 'hexColor',

  initialize: function(){
    var randomHex = Please.make_color({base_color: 'cyan'});
    this.set('hexColor', randomHex);

  }
});
