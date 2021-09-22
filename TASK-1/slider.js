$(document).ready(function(){
    $('.sbtn1').click(function(){
      $('.image1').css("marginLeft","0");
    });
    $('.sbtn2').click(function(){
      $('.image1').css("marginLeft","-20%");
    });
    $('.sbtn3').click(function(){
      $('.image1').css("marginLeft","-40%");
    });
    $('.sbtn4').click(function(){
      $('.image1').css("marginLeft","-60%");
    });
    $('.sbtn5').click(function(){
      $('.image1').css("marginLeft","-80%");
    });
    $('a').click(function(){
      $(this).addClass('active').siblings()
              .removeClass('active');
    })
  });

  
 