$(document).ready(function(){
    $(window).scroll(function(){
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 380);
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
        
            var winTop = $(window).scrollTop();
            if (pos < winTop + 700) {
              $(this).addClass("slide");
            }
        });
    });
});