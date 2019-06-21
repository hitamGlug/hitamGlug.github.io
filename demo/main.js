$(document).ready(function(){
    $(window).scroll(function(){
        // $("#pcNav").toggleClass("scrolled", $(this).scrollTop() > 740);
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
        
            var winTop = $(window).scrollTop();
            if (pos < winTop + 700) {
              $(this).addClass("slide");
            }
        });
    });
    $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
    
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 900, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
        } // End if
    });
    $("#hg-bigpic").hover(function(){
        $("#hg-bigpic").toggleClass("animated jello");
    });
});

// Mobile
$(document).ready(function(){
    $(window).scroll(function(){
        $("#minNav").toggleClass("scrolled", $(this).scrollTop() > 280);
    });
    $("#navMenuBtn").click(function(){
        $("#mobileNavMenu").slideToggle(500);
    });
});
