$(document).ready(function(){
    
    $('li').on("click", function() {
        let i = $(this).index();
        console.log(i)
        $(".img_box").eq(i).show()
        .siblings(".img_box").hide(); 

       $(this).addClass("on")
        .siblings().removeClass("on")
    });




      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 5000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
          
          },
      });


      let SwiperTop = new Swiper('.swiper_top',{
        spaceBetween:0,// 슬라이드 사이 여백
        speed:10000, // 속도 조정 
        centeredSlides:true, // 센터모드
        autoplay:{
                delay:5000, //시간설정
        },
        loop:true,
        slidesPerView:3,
        // 한슬라이드에 보여줄 개수,'/auto'는 각 슬라이드 넓이에 맞게 자동 설정
        disableOnInrtaction:true, 
        // false 설정하면 스와이프 후 자동재생이 비활성화 되지않음
        allowTouchMove:false, 
        // false 시에 스와이핑이 되지 않음
        //버튼으로만 스와핑이 조작 가능함
    });

      AOS.init();


})//document