//header sticky
$(document).on('scroll',function(){
   if($(this).scrollTop() > 1){
       $('header').addClass('sticky');
   } else {
       $('header').removeClass('sticky');
   }
});


//below this used for arrow-to-top
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    var link,
        toggleScrollToTopLink = function () {

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {

                link.fadeIn(700);
            } else {

                link.fadeOut(700);
            }

        };

    $(document).ready(function () {

        link = $(".scroll-to-top");

        $(window).scroll(toggleScrollToTopLink);

        toggleScrollToTopLink();

        link.on("click", function () {
            $('body, html').animate({scrollTop: 0},700);
        });
    });
})();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
