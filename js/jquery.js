window.onscroll = function(){

   if(window.scrollY >= 2290) { 
      document.getElementById('flower').setAttribute(
   "style", "position:absolute; margin-top:2390px;");
   }else {
           document.getElementById('flower').setAttribute(
   "style", "position:fixed; margin-top:;");
        }

};

 jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })