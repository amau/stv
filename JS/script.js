$(function(){
$('.icon_add').click(
  function(){
    $('.application-panel').toggleClass("show");
    $('.icon_add').toggleClass("slideRight");
    $('.icon_youtube').toggleClass("show2");
    $('.icon_add').toggleClass("slideRight");
    $('.bottom_finish').toggleClass("show3");
    $('.icon_add').toggleClass("slideRight");
  }
);
$('.bottom_finish').click(
  function(){
    $('.application-panel').toggleClass("show");
    $('.bottom_finish').toggleClass("show3");
    $('.icon_youtube').toggleClass("show2");
  }
);
$('.icon_youtube').click(
  function(){
    $('.icon_youtube2').toggleClass("show4");
    $('.icon_added').toggleClass("show11");
  }
);
$('.icon_added').click(
  function(){
    $('.application-panel').toggleClass("show");
    $('.icon_add').toggleClass("slideRight");
    $('.icon_youtube').toggleClass("show2");
    $('.icon_add').toggleClass("slideRight");
    $('.bottom_finish').toggleClass("show3");
    $('.icon_add').toggleClass("slideRight");
  }
);
$('.icon_voice').click(
  function(){
    $('.voicesearching-panel').toggleClass("show5");
    $('.back-bottom').toggleClass("show7");
    $('.search-bottom').toggleClass("show6");
    $('.word_runningman').toggleClass("show15");
  }
  
);

$('.back-bottom').click(
  function(){
    $('.voicesearching-panel').toggleClass("show5");
    $('.back-bottom').toggleClass("show7");
    $('.search-bottom').toggleClass("show6");
    $('.word_runningman').toggleClass("show15");
  }
);
$('.search-bottom').click(
  function(){
    $('.voicesearching-panel').toggleClass("show5");
    $('.back-bottom').toggleClass("show7");
    $('.search-bottom').toggleClass("show6");
    $('.word_runningman').toggleClass("show5");
  }
);

$('.word_runningman').click(
  function(){
    $('.word_runningman').toggleClass("show12");
   }
);

$('#icon_yanes').click(
  function(){
    $('.account_panel').toggleClass("show16");
    $('.secondaccount_panel').toggleClass("show17");
   }
);
$('#Play').click(
  function(){
    $('.page_playmovie').toggleClass("show18");
    $('.bottom_cancel').toggleClass("show19");
   }
);
$('.bottom_cancel').click(
  function(){
    $('.page_playmovie').toggleClass("show18");
    $('.bottom_cancel').toggleClass("show19");
   }
);
$('.bottom_youtubeapp').click(
  function(){
    $('.page_youtubedownload').toggleClass("show18");
    $('.backbutton_playstore').toggleClass("show22");

   }
);
$('.backbutton_playstore').click(
  function(){
    $('.page_youtubedownload').toggleClass("show18");
    $('.backbutton_playstore').toggleClass("show22");

   }
);



});