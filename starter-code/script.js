//===========================Hamburger Menu========================================   
    
    let fixed = false;

    $("#hamburger").on("click", function(){
        $("#hamburger").toggleClass("is-active");
        $(".openMobileNav").toggleClass("closedMobileNav");
        $(".greyBoxOpen").toggleClass("greyBoxClosed");
        
        if (fixed==false){
            fixed = true;
            $("body").css("position", "fixed");
        } else if (fixed==true){
            fixed = false;
            $("body").css("position", "");
        }
    });
    


    $(".openMobileNav ul li a").on("click", function(event){
        event.preventDefault();
        $("#hamburger").toggleClass("is-active");
        $(".openMobileNav").toggleClass("closedMobileNav");
        $(".greyBoxOpen").toggleClass("greyBoxClosed");

        if (fixed==false){
            fixed = true;
            $("body").css("position", "fixed");
        } else if (fixed==true){
            fixed = false;
            $("body").css("position", "");
        }
    });

//===========================Home Background======================================
let windowWidth = $(window).width();
 
if (windowWidth >= 375 && windowWidth < 768){
    $("#indexBody").css("background-image", "url('./assets/home/background-home-tablet.jpg')");
} else if (windowWidth >= 768){
    $("#indexBody").css("background-image", "url('./assets/home/background-home-desktop.jpg')");
}

//===========================Destination Background=====================================
 
if (windowWidth >= 375 && windowWidth < 768){
    $("#moonBody").css("background-image", "url('./assets/destination/background-destination-tablet.jpg')");
} else if (windowWidth >= 768){
    $("#moonBody").css("background-image", "url('./assets/destination/background-destination-desktop.jpg')");
}
