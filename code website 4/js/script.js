//this is for the hover boxes

$(function() {
    $('#hover1').hover( function() { $('#hidden-box1').toggle(); } );
});

$(function() {
    $('#hover2').hover( function() { $('#hidden-box2').toggle(); } );
});

//this is for next inside box under title

$(".next1").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberTwo").offset().top - 40,
        scrollLeft: $(".numberTwo").offset().left - $(".numberTwo").width() * 0.5
    }, 3000);
});

$(".next2").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberThree").offset().top - 40,
        scrollLeft: $(".numberThree").offset().left - $(".numberThree").width() * 0.5
    }, 4000);
});

$(".next3").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberFour").offset().top - 40,
        scrollLeft: $(".numberFour").offset().left - $(".numberFour").width() * 0.5
    }, 500);
});

$(".next4").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberFive").offset().top - 40,
        scrollLeft: $(".numberFive").offset().left - $(".numberFive").width() * 0.5
    }, 1000);
});

$(".next5").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberSix").offset().top - 40,
        scrollLeft: $(".numberSix").offset().left - $(".numberSix").width() * 0.5
    }, 2600);
});

$(".next6").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberSeven").offset().top - 40,
        scrollLeft: $(".numberSeven").offset().left - $(".numberSeven").width() * 0.5
    }, 2600);
});

$(".next7").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberEight").offset().top - 40,
        scrollLeft: $(".numberEight").offset().left - $(".numberEight").width() * 0.5
    }, 2600);
});

$(".next8").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberNine").offset().top - 40,
        scrollLeft: $(".numberNine").offset().left - $(".numberNine").width() * 0.5
    }, 2600);
});

//this is for next button inside box under title

$("#chapter1").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberTwo").offset().top - 40,
        scrollLeft: $(".numberTwo").offset().left - $(".numberTwo").width() * 0.5
    }, 100);
});

$("#chapter2").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberThree").offset().top - 40,
        scrollLeft: $(".numberThree").offset().left - $(".numberThree").width() * 0.5
    }, 4000); // where you control the time to scroll
});

$("#chapter3").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberFour").offset().top - 40,
        scrollLeft: $(".numberFour").offset().left - $(".numberFour").width() * 0.5
    }, 1000); // where you control the time to scroll
});

$("#chapter4").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberFive").offset().top - 40,
        scrollLeft: $(".numberFive").offset().left - $(".numberFive").width() * 0.5
    }, 1000); // where you control the time to scroll
});

$("#chapter5").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberSix").offset().top - 40,
        scrollLeft: $(".numberSix").offset().left - $(".numberSix").width() * 0.5
    }, 1000); // where you control the time to scroll
});

$("#chapter6").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberSeven").offset().top - 40,
        scrollLeft: $(".numberSeven").offset().left - $(".numberSeven").width() * 0.5
    }, 1000); // where you control the time to scroll
});

$("#chapter7").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberEight").offset().top - 40,
        scrollLeft: $(".numberEight").offset().left - $(".numberEight").width() * 0.5
    }, 1000); // where you control the time to scroll
});

$("#chapter8").click(function() {
    $('html,body').animate({
        scrollTop: $(".numberNine").offset().top - 40,
        scrollLeft: $(".numberNine").offset().left - $(".numberNine").width() * 0.5
    }, 1000); // where you control the time to scroll
});

//this is for box appearing and disappearing

$(document).ready(function(){
    $(".makeAppear1").click(function(){
        $(".boxAppear1").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberOne").offset().top,
            scrollLeft: $(".numberOne").offset().left
        }, 1000);

    });
    $(".x1").click(function(){
        $(".boxAppear1").slideUp("slow");
    });
});

$(document).ready(function(){
    $(".makeAppear2").click(function(){
        $(".boxAppear2").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberTwo").offset().top,
            scrollLeft: $(".numberTwo").offset().left
        }, 1000);

    });
    $(".x2").click(function(){
        $(".boxAppear2").slideUp("slow");
    });
});


$(document).ready(function(){
    $(".makeAppear3").click(function(){
        $(".boxAppear3").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberThree").offset().top,
            scrollLeft: $(".numberThree").offset().left
        }, 1000);

    });
    $(".x3").click(function(){
        $(".boxAppear3").slideUp("slow");
    });
});


$(document).ready(function(){
    $(".makeAppear4").click(function(){
        $(".boxAppear4").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberFour").offset().top,
            scrollLeft: $(".numberFour").offset().left
        }, 1000);

    });
    $(".x4").click(function(){
        $(".boxAppear4").slideUp("slow");
    });
});

$(document).ready(function(){
    $(".makeAppear5").click(function(){
        $(".boxAppear5").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberFive").offset().top,
            scrollLeft: $(".numberFive").offset().left
        }, 1000);

    });
    $(".x5").click(function(){
        $(".boxAppear5").slideUp("slow");
    });
});

$(document).ready(function(){
    $(".makeAppear6").click(function(){
        $(".boxAppear6").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberSix").offset().top,
            scrollLeft: $(".numberSix").offset().left
        }, 1000);

    });
    $(".x6").click(function(){
        $(".boxAppear6").slideUp("slow");
    });
});

$(document).ready(function(){
    $(".makeAppear7").click(function(){
        $(".boxAppear7").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberSeven").offset().top,
            scrollLeft: $(".numberSeven").offset().left
        }, 1000);

    });
    $(".x7").click(function(){
        $(".boxAppear7").slideUp("slow");
    });
});

$(document).ready(function(){
    $(".makeAppear8").click(function(){
        $(".boxAppear8").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberEight").offset().top,
            scrollLeft: $(".numberEight").offset().left
        }, 1000);

    });
    $(".x8").click(function(){
        $(".boxAppear8").slideUp("slow");
    });
});

$(document).ready(function(){
    $(".makeAppear9").click(function(){
        $(".boxAppear9").slideDown("slow");
        $('html,body').animate({
            scrollTop: $(".numberNine").offset().top,
            scrollLeft: $(".numberNine").offset().left
        }, 1000);

    });
    $(".x9").click(function(){
        $(".boxAppear9").slideUp("slow");
    });
});


