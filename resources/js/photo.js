
$(document).ready(function(){

$("img").hide();

// TITRE
var photo1 = new Waypoint({
  element: document.getElementById('titre-1'),
  handler: function(direction) {
    if(direction=='down'){
      $('#photo-1').show()
    }
    if(direction=='up'){
      $('#photo-1').hide()
    }},offset: '-100%'
})

var photo2 = new Waypoint({
  element: document.getElementById('text-1'),
  handler: function(direction) {
    if(direction=='down'){
      $('#photo-2').show()
      $('#photo-1').hide()
    }
    if(direction=='up'){
      $('#photo-2').hide()
      $('#photo-1').show()
    }},offset: '-100%'
})

var photo3 = new Waypoint({
  element: document.getElementById('text-2'),
  handler: function(direction) {
    if(direction=='down'){
      $('#photo-2').hide()
      $('#photo-3').show()
    }
    if(direction=='up'){
        $('#photo-2').show()
        $('#photo-3').hide()
      }
    },offset: '-100%'
})

// PHOTO 3
var photo4 = new Waypoint({
  element: document.getElementById('titre-2'),
  handler: function(direction) {
    if(direction=='down'){
      $('#photo-3').hide()
      $('#photo-4').show()
    }
    if(direction=='up'){
      $('#photo-3').show()
      $('#photo-4').hide()
    }},offset: '-100%'
})



});