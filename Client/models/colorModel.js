var Color = Backbone.Model.extend({
  idAttribute: 'hexColor',

  initialize: function(){
    var randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.set('hexColor', randomHex);

  }
});
