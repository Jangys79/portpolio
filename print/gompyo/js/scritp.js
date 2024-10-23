$(document).ready(function(){

    let wt = $(window).width();
    if(wt < 768){
        mo()

    }else{
        pc()

    }
/*모바일 함수*/
    function mo(){


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        clickable: true,
      },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $(window).on("resize",function(){
        document.location.reload()
    })


    }/*모바일 끝*/


    function pc(){

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          pagination: {
              el: ".swiper-pagination",
          clickable: true,
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
    $(window).on("resize",function(){
      document.location.reload()
  })
  //웹 페이지가 브라우저 창의 크기가 변경될 때마다 페이지를 새로 고침하도록 설정
        
    
    }//pc함수

    AOS.init();
  

})//document