$( document ).ready(function() {

  function chapitre (el) {
    if(el.dataset.color == "black"){
      $('body').removeClass().addClass('black');
    }
    if(el.dataset.color == "white"){
      $('body').removeClass().addClass('white');
    }
  }

  ScrollReveal().reveal('.chapitre',{
    delay: 0,
    distance: '0px',
    duration: 0,
    easing: '',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: true,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    afterReveal: chapitre});
 
});

