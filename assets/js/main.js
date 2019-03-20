
var options = {
    strings: ["", "Learn how to create Progressive Web Apps and Addons for Mozilla Firefox.", "@Hyderabad Institute of Technology and Management, Medchal, Hyderabad", "On 22nd March from 9:30am to 3:30pm."],
    typeSpeed: 60,
    smartBackspace: true,
    loop: true,
    backDelay: 950,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '<span class="char-sym">|</span>',
    autoInsertCss: true,
    autoInsertCss: true,
    // startDelay: 1500,
}

var typed = new Typed(".info-para", options);

function uiOptimizations(){
    var width = screen.width;
    var lgLayout = document.getElementsByClassName('lg-layout')[0];
    var smLayout = document.getElementsByClassName('sm-layout')[0];

    if(width > 768){
        lgLayout.classList.add('col-md-5');
        lgLayout.innerHTML = "<img src='assets/images/addons-new.png' class='topic-image' alt='pwa-image'>";
    }else{
        smLayout.classList.add('col-lg-5');
        smLayout.innerHTML = "<img src='assets/images/addons-new.png' class='topic-image' alt='pwa-image'>";
    }
}

uiOptimizations()