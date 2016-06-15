import Ember from 'ember';
var url = "../records.json";



// var records = [{
//   id: 1,
//   title: "Ural Thomas & The Pain 2xLP",
//   image: "../ural.jpeg"
// }, {
//   id: 2,
//   title: "SS-034 Azna de L’Ader – Zabaya",
//   image: "../azna.jpeg"
// }, {
//   id: 3,
//   title: "LAC-044 Lejos Nube Cantando: Huaynos y folcloricas del Peru",
//   image: "../lejos.png"
// }];

export default Ember.Route.extend({
  model() {

     return Ember.$.getJSON('../records.json').then(function (response) {
      return response;
    });

  },
});
