$("#hamburger").on("click", function(){
  $(this).toggleClass("hamburger__open");
  $( ".mainNav" ).toggleClass( "open" );
  $(".topNavContainer").toggleClass( "nav-display-on" );
  $("html").toggleClass( "fixed" );
});