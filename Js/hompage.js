$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".ux-circle").css({
          transform: 'translate3d( -'+(scroll/65)+'px , +'+(scroll/27)+'px, 0) scale3d(1 , 1, 1 ) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg',
      });
      $(".ui-circle").css({
        transform: 'translate3d( +'+(scroll/40)+'px , +'+(scroll/23)+'px, 0) scale3d(1 , 1, 1 ) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg',

    });
    $(".prot-circle").css({
        transform: 'translate3d( -'+(scroll/46)+'px , +'+(scroll/59)+'px, 0) scale3d(1 , 1, 1 ) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg',

    });
  });




  document.addEventListener("mousemove", parallax);
  function parallax(e){
    document.querySelectorAll(".circle").forEach(function(move){

      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }