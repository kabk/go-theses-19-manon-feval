
$(document).ready(function(){

var h = $( window ).height();
console.log(''+h/2+'px');
$('.titre').css('margin', h/3+'px 0px '+h/6+'px 0px');

//scroll down
var waypoint = new Waypoint({
  element: document.getElementById('introduction'),
  handler: function(direction) {
    if(direction=='down'){
      $('body').removeClass().addClass('black');
    }},offset: '100%'
})
var waypoint = new Waypoint({
  element: document.getElementById('urban'),
  handler: function(direction) {
    if(direction=='down'){
      $('body').removeClass().addClass('white');
    }},offset: '0%'
})
var waypoint = new Waypoint({
  element: document.getElementById('pollution'),
  handler: function(direction) {
    if(direction=='down'){
      $('body').removeClass().addClass('black');
    }},offset: '0%'
})

//scroll up



var waypoint = new Waypoint({
  element: document.getElementById('urban'),
  handler: function(direction) {
    if(direction=='up'){
      $('body').removeClass().addClass('black');
    }},offset: '50%'
})


var waypoint = new Waypoint({
  element: document.getElementById('pollution'),
  handler: function(direction) {
    if(direction=='up'){
      $('body').removeClass().addClass('white');
    }},offset: '50%'
})

	
});