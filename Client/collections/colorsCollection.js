// Firebase collection binding via backbonefire
//=============================================
//
// var Colors = Backbone.Firebase.Collection.extend({
//   url: 'https://firebone.firebaseio.com/colors',
//   model: Color,
// });

var Colors = Backbone.Collection.extend({
  model: Color,
});
