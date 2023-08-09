$(window).on('scroll', function(event){
    var scrollPos = $(document).scrollTop() + 76;
    $(".nav-link").each(function () {
        if (scrollPos <= 76) {return}
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos) {
        currLink.parent().addClass("active").siblings().removeClass("active"); 
        return;
      }
      else{
        currLink.parent().removeClass("active");
      }
    })
  })
 