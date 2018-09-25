jQuery(document).ready(function($) {
  $('.animatedFadeInUp').waypoint(function() {
    $(this).addClass('fadeInUp');
  }, { offset: '90%' });

  $('.animatedFadeInLeft').waypoint(function() {
    $(this).addClass('fadeInLeft');
  }, { offset: '90%' });

  $('.animatedFadeInRight').waypoint(function() {
    $(this).addClass('fadeInRight');
  }, { offset: '90%' });

  $('.navbar-toggler').click(function(){
    $('body').toggleClass('open_nav');
  });
  
  $('.close_navbar').click(function(){
    $('body').removeClass('open_nav');
  });

  $('.menus li a[href^="#"], .company li a[href^="#"]').on('click', function (e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      e.preventDefault();

      var target = this.hash,
      $target = $(target);
      var header = $('#header .navbar').height();

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - header
      }, 900, 'swing', function () {
      });
    }
  });

  $("#show_all_team").click(function(){
    $(this).hide();
    $("#technical_team .more-team").css("display", "flex");
    // $("#technical_team").addClass("open");          
  });

  $("#show_all_advisors").click(function(){
    $(this).hide();
    $("#advisors_board .more-advisors").css("display", "flex");
    // $("#advisors_board").addClass("open");
  });

  $(".navbar-nav li a").click(function(){
    $(".navbar-nav li a").removeClass("active");
    $(this).addClass("active").css("transition","all eaase-in-out 0.6s");
  });

  $('.events-slider').owlCarousel({
      loop:true,
      items:3,
      /*autoplay: true,
      autoplayTimeout: 5000,*/
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1024:{
              items:3
          }
      }
  })

});


$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
    $('#header').addClass('fixed-header');
  }
  else {
    $('#header').removeClass('fixed-header');
  }
});

// Countdown timer for Set the date we're counting down to
var countDownDate = new Date("Oct 16, 2018 00:00:00").getTime();
  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
     
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML = "<time>"+ days+"</time>"+" days" + " "+"<time>"+ hours+"</time>" + ": "
      + "<time>"+minutes+"</time>" + ": " + "<time>"+seconds+"</time>" + " time ";
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
      }
  });