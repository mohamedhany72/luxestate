window.onload = function(){


/*--------------------------------------- My varibales--------------------------------*/
const myWindow = $(window);

//header resize varibales
var header = $("header");
var nav = $("nav");
var headerImg = $(".header-img");

//add scrolling effect to nav-links
var navLink = $(".navbar-nav a");


/*--------------------------------------- My Functions--------------------------------*/

//make nav bar fixed in position
myWindow.scroll(function(){
    var sc = $(window).scrollTop();
    if (sc > 100){
        $(".navbar").addClass("sticky")
    }else{
        $(".navbar").removeClass("sticky")
    }
});
//header height
function headerHeight(){
    if(myWindow.width() < 768){
        header.height( myWindow.height() - (nav.height() + 15) );
        $(".scroll-down").addClass("d-none");
        if(myWindow.width()/myWindow.height() > 1){
            header.height( myWindow.height()*2 );
            headerImg.height(header.height() - 1);
        }
        if(myWindow.width()/myWindow.height() < 1){
            $("#appartments form").height($(".view-appartments").height() + 40)
        } 
    } else if(myWindow.width()/myWindow.height() < 1){
        header.height( myWindow.height()/2 );
        headerImg.width(header.width() * 0.7);
        headerImg.height(header.height() - 1);
        $(".scroll-down").addClass("d-none");
    } else if(myWindow.width()/myWindow.height() > 2 && myWindow.height() < 400){
        header.height( myWindow.height()*2 );
        headerImg.height(header.height() - 1);
    } else{
        header.height( myWindow.height() - (nav.height() + 15) );
        headerImg.height(header.height() - 1);
        $(".scroll-down").removeClass("d-none");
    };

    //another function for small screen phones
    if(myWindow.height() < 700 && myWindow.width()/myWindow.height() < 1){
        $(".header").addClass("small-screen-header");
    } else {
        $(".header").removeClass("small-screen-header");
    };

    
};
//make scroll down link work
$(".scroll-down").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: ($("#our-company-statistics").offset().top - nav.height() - 70)
    }, 1000)
});
//adusting height of some elements
function someElementsHeight(){
    $(".appartment img").height($(".appartment img").width() * 1.25);
    $("#agents img").height($("#agents img").width() * 1.5);
    $("#awesome-add img").height($("#awesome-add img").width() * 0.6);
}
myWindow.resize(headerHeight());
myWindow.resize(someElementsHeight());
// hide nav bar when open lightbox
function hideNav(){
    
    if($("nav").hasClass("d-none") && $(".modal.fade").hasClass("show") === false ){
        $("nav").removeClass("d-none");
    }else if($("body").hasClass("modal-open")){
        if($("nav").hasClass("d-none") === false){
            $("nav").addClass("d-none");
        }
    }
};
//make the above link trigger the light box 
$(".nav-form-link").click(function(event){
    event.preventDefault();
    $(".subdcribe-button").trigger('click');
    hideNav()
});
myWindow.click(hideNav);
//add scrolling effect to nav-links
navLink.click(function(){
    navLink.removeClass("active");
    var href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
        scrollTop: ($(href).offset().top - nav.height())
    }, 1000)
    $(this).addClass("active");
})

//disaple all links in main and footer
$("main a").click(function(event){
    event.preventDefault();
});
$("footer a").click(function(event){
    event.preventDefault();
});

/*--------------------------------------- My impeded functions--------------------------------*/



/*--------------------------------------- my trial functions--------------------------------*/


// myWindow.scroll(function(){
//     var appartments = document.querySelector('#appartments');
//     var queryappartments = $("#appartments");
//     var bounding = appartments.getBoundingClientRect();
//     console.log(bounding.top);
//     console.log(queryappartments.height());

//     if(bounding.top <= 30 && bounding.top > (queryappartments.height() * -0.5)){
//         console.log("yeah");
//         var linkHref = $(".nav-link[href$='#appartments']")
//         if(linkHref.hasClass(".active") === false){
//             $(".nav-link").removeClass("active");
//             linkHref.addClass("active");
//         }
    // }
    // if(this.oldScroll > this.scrollY){
    //     console.log("true");
        
    // }

    // this.oldScroll = this.scrollY;
// });


// window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    // console.log(this.oldScroll > this.scrollY);
    
//   }


};
