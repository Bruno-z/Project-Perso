"use strict"
$(document).ready(function () {
    $("#coucou").click(function () {
        if ($('#champsmotdepasse').attr("type") == "password") {

            $("#champsmotdepasse").attr("type", "text");
            $(this).text("Cacher");
            $(this).removeClass("btn-dark");

            $(this).addClass("btn-info");



        }
        else {
            $('#champsmotdepasse').attr("type", "password");
            $(this).text("Afficher");
            $(this).removeClass("btn-info");
        }


    }

    );

    function showMessageOnHover(onclick) {

    }



    $(function () {
        $('.example-popover').popover({
            container: 'body'
        })
    })

    $(function () {
        $('[data-toggle="popover"]').popover()
    })



});
$(document).ready(
    function removeLoading() {
        let load = document.getElementById("myLoading");
        document.body.removeChild(load);
    }/* code here */);
$(function () { /* code here */ });




$(document).ready(function () {
    $('.col-4-lg').hover(
        //triger when mouse hover
        function() {
            $(this).animate({
                marginTop: "-=1%",

            },200);

        },
        // trigger when mousse out hover
        //triger when mouse hover
        function() {
            $(this).animate({
                marginTop: "0%",

            },200);

        }


    );

});

$(function () {
    'use strict';
    $(window).scroll(function (){
      var nav = $('.navbar');
      if ($(window).scrollTop() >= nav.height()){
        nav.addClass('scrolled');
      } else {
        nav.removeClass('scrolled');
      }
    });
  // Shor if :  $(window).scrollTop() >= nav.height() ? nav.addClass('scrolled'); : nav.removeClass('scrolled');
  
  // Deal With Tabs
  $('.tabs-switch li').click(function () {
    // Add Class selected To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');
    // Hide All Divs
    $('.tabs-section .tabs-content > div').hide();
    // Show Div Connected With This Link
    $('.' + $(this).data('class')).show(); // as you say => class.show() exp: ('.tab-one').show()
  });
  });
  



// // A $( document ).ready() block.
// $(document).ready(function () {
//     console.log("ready!");




//     function showMe(onclick){
//         $('#helllo').onclick(function () {
//             if ($("#helllo").attr("type") === "password") {
//                 $("#helllo").attr("type", "text");
//                 $(".allo").html("Hide Password ?", "hide password");
//                 $(".allo").css("background-color", "red");
//                 $(".allo").css("border-color", "red");



//             }
//             else {
//                 $("#helllo").attr("type", "password");
//                 $(".allo").html("Show Password ?");
//                 $(".allo").css("background-color", "green");
//                 $(".allo").css("border-color", "green");

//             }

//         });

//     }






// })

