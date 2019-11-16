
//Expandable "Want to confirm that you're registered?" menu option//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Expandable "Should I vote early or on election day?" menu option//
var acc = document.getElementsByClassName('accordionEarly');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Expandable "What to bring" menu option//
var acc = document.getElementsByClassName('accordionBring');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//expandable "Sources" menu option//
// var acc = document.getElementsByClassName('accordionSources');
// var i;
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");
//
//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


//Psuedo code for "Print Registration Card Online"
  //On clicking the desktop-computer.svg element, add the class: .flipInX
  //Append the HTML that builds the card
  // If front card is shown on click, show back card
  // If back card is shown on click, show front card

//From https://wesbos.com/animate-css-and-jquery/
// $(function() {
//
// $('.imgWrap').on('click',function(){
//     $('.img_description').hide();
//     // $(this).toggleClass('animated flipInX');
//     $(this).addClass('animated flipInX').one('animationend',
//     function() {
//       $(this).removeClass('animated flipInX');
//       $('.backCard').show();
//       $('#desktopImg').hide();
//       function flip() {
//
// }
//
//     });
//
//   })
// })


//Trying Zak's way:

$(function() {

$('.imgWrap').on('click',function(){
    // $('.img_description').hide();
    // $(this).toggleClass('animated flipInX');
    // $(".img_description").hide();
    $(this).toggleClass("flipped").addClass('animated flipInX').one('animationend',
    function() {
      $(this).removeClass('animated flipInX');
      //hide "click me"

  })

    });

  })

//Fill out and mail your application
  $(function() {

  $('.mailingAddress').on('click',function(){
      // $('.img_description').hide();
      // $(this).toggleClass('animated flipInX');
      // $(".img_description").hide();
      $(this).toggleClass("flipped").addClass('animated flipInX').one('animationend',
      function() {
        $(this).removeClass('animated flipInX');
        //hide "click me"

    })

      });

    })




// $('#computer').click(function(){
//   $('#desktopImg').addClass("flipInX");
// })
//
// $('button').click(function(){
//   $('body').toggleClass('dark');
// })
