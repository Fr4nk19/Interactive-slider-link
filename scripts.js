/*Add Class 'active'*/
$(".item1").hover(function () {
    $(".slide-menu > div").removeClass("active");
    $(".slides > div").removeClass("active");
    $(".slides").removeAttr("style");
    $(".item1").addClass("active");
    $(".slide1").addClass("active");
    if ( $(".slide1").hasClass( "active" ) ) {
      $(".slides").css("transform", "translate3d(0px, 0px, 0px)");
    }
  });
  
  
  $(".item2").hover(function () {
    $(".slide-menu > div").removeClass("active");
    $(".slides > div").removeClass("active");
    $(".slides").removeAttr("style");
    $(".item2").addClass("active");
    $(".slide2").addClass("active");
    if ( $(".slide2").hasClass( "active" ) ) {
      $(".slides").css("transform", "translate3d(-20%, 0px, 0px)");
    }
  });
  
  
  $(".item3").hover(function () {
    $(".slide-menu > div").removeClass("active");
    $(".slides > div").removeClass("active");
    $(".slides").removeAttr("style");
    $(".item3").addClass("active");
    $(".slide3").addClass("active");
    if ( $(".slide3").hasClass( "active" ) ) {
      $(".slides").css("transform", "translate3d(-40%, 0px, 0px)");
    }
  });
  
  
  $(".item4").hover(function () {
    $(".slide-menu > div").removeClass("active");
    $(".slides > div").removeClass("active");
    $(".slides").removeAttr("style");
    $(".item4").addClass("active");
    $(".slide4").addClass("active");
    if ( $(".slide4").hasClass( "active" ) ) {
      $(".slides").css("transform", "translate3d(-60%, 0px, 0px)");
    }
  });
  
  
  $(".item5").hover(function () {
    $(".slide-menu > div").removeClass("active");
    $(".slides > div").removeClass("active");
    $(".slides").removeAttr("style");
    $(".item5").addClass("active");
    $(".slide5").addClass("active");
    if ( $(".slide5").hasClass( "active" ) ) {
      $(".slides").css("transform", "translate3d(-80%, 0px, 0px)");
    }
  });
  
  
  