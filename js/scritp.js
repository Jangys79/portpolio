$(document).ready(function() {
    function checkWidth() {
        let wt = $(window).width();
        if (wt < 834) {
            mo();
        } else if (wt >= 834 && wt < 1200) {
            tap();
        } else if (wt >= 1200) {
            pc();
        }
    }

checkWidth();

// 리사이즈
$(window).resize(function() {
    checkWidth();
});

/* 모바일 함수 */
function mo() {
    // gnb_btn 클릭 시 gnb_box 열고 닫기
    $(".gnb_btn").on("click", function(event) {
        event.stopPropagation();
        $(".gnb_box").toggleClass("open");
    });

    // close_btn 클릭 시 gnb_box 닫기
    $(".close_btn").on("click", function(event) {
        event.stopPropagation(); 
        $(".gnb_box").removeClass("open"); 
    });

    // 문서 클릭 시 gnb_box 닫기
    $(document).on("click", function() {
        $(".gnb_box").removeClass("open");
    });

    // gnb_box 클릭 시 이벤트 전파 방지
    $(".gnb_box").on("click", function(event) {
        event.stopPropagation();
    });

    // 메뉴 클릭 시 해당 섹션으로 스크롤 이동 및 gnb_box 닫기
    $("li").on("click", function() {
        let i = $(this).index();
        let dis = $('.wrap').children().eq(i).offset().top;

        $('html, body').stop().animate({ 'scrollTop': dis });

        // gnb_box 닫기
        $('.gnb_box').removeClass("open"); 
    });

    // 스크롤 시 해당 섹션에 맞는 메뉴 활성화
    $(window).on('scroll', function() {
        let scr = $(window).scrollTop(); // 현재 스크롤 위치
        let top2 = $('.About_me').offset().top;
        let top3 = $('.Skill').offset().top;
        let top4 = $('.Pro').offset().top;
        let top5 = $('.Dein').offset().top;

        if (0 <= scr && scr < top2) {
            $('li').eq(0).addClass('on').siblings().removeClass('on');
        } else if (top2 <= scr && scr < top3) {
            $('li').eq(1).addClass('on').siblings().removeClass('on');
        } else if (top3 <= scr && scr < top4) {
            $('li').eq(2).addClass('on').siblings().removeClass('on');
        } else if (top4 <= scr && scr < top5) {
            $('li').eq(3).addClass('on').siblings().removeClass('on');
        } else {
            $('li').eq(4).addClass('on').siblings().removeClass('on');
        }
    });

    $(".popup-image").on('click', function() {
        let popupImgSrc = $(this).data("popup-src"); 
        let titTxt = $(this).data("title"); 
        let conTxt = $(this).data("content");
    
        $(".view").stop().fadeIn(); 
        $(".viewpic").html(`<img src="${popupImgSrc}" alt="${titTxt}">`); 
        $(".viewtxt h4").text(titTxt); 
        $(".viewtxt p").text(conTxt); 
    });
    
    
    $(".viewX, .bgClose").on('click', function() {
        $(".view").fadeOut();
    });



    window.addEventListener('scroll', function() {
        const scrollBar = document.querySelector('.scroll-bar');
        const backName = document.querySelector('.back_name');
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / windowHeight) * 100;
    
        scrollBar.style.width = `${scrollPercentage}%`;
    
        const redValue = Math.floor(255 - (scrollPercentage * 222 / 100)); 
        const greenValue = Math.floor(255 - (scrollPercentage * 222 / 100));
        const blueValue = Math.floor(255 - (scrollPercentage * 222 / 100));
        backName.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`; 
    });


// 화면 크기 체크
function checkWidth() {
}
      

    }/*모바일끝*/

    function tap(){
  // gnb_btn 클릭 시 gnb_box 열고 닫기
  $(".gnb_btn").on("click", function(event) {
    event.stopPropagation();
    $(".gnb_box").toggleClass("open");
});

// close_btn 클릭 시 gnb_box 닫기
$(".close_btn").on("click", function(event) {
    event.stopPropagation(); 
    $(".gnb_box").removeClass("open"); 
});

// 문서 클릭 시 gnb_box 닫기
$(document).on("click", function() {
    $(".gnb_box").removeClass("open");
});

// gnb_box 클릭 시 이벤트 전파 방지
$(".gnb_box").on("click", function(event) {
    event.stopPropagation();
});

// 메뉴 클릭 시 해당 섹션으로 스크롤 이동 및 gnb_box 닫기
$("li").on("click", function() {
    let i = $(this).index();
    let dis = $('.wrap').children().eq(i).offset().top;

    $('html, body').stop().animate({ 'scrollTop': dis });

    // gnb_box 닫기
    $('.gnb_box').removeClass("open"); 
});

// 스크롤 시 해당 섹션에 맞는 메뉴 활성화
$(window).on('scroll', function() {
    let scr = $(window).scrollTop(); // 현재 스크롤 위치
    let top2 = $('.About_me').offset().top;
    let top3 = $('.Skill').offset().top;
    let top4 = $('.Pro').offset().top;
    let top5 = $('.Dein').offset().top;

    if (0 <= scr && scr < top2) {
        $('li').eq(0).addClass('on').siblings().removeClass('on');
    } else if (top2 <= scr && scr < top3) {
        $('li').eq(1).addClass('on').siblings().removeClass('on');
    } else if (top3 <= scr && scr < top4) {
        $('li').eq(2).addClass('on').siblings().removeClass('on');
    } else if (top4 <= scr && scr < top5) {
        $('li').eq(3).addClass('on').siblings().removeClass('on');
    } else {
        $('li').eq(4).addClass('on').siblings().removeClass('on');
    }
});

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 18000,
                disableOnInteraction: false,
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
              },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });


          $(".popup-image").on('click', function() {
            let popupImgSrc = $(this).data("popup-src"); 
            let titTxt = $(this).data("title"); 
            let conTxt = $(this).data("content");
        
            $(".view").stop().fadeIn(); 
            $(".viewpic").html(`<img src="${popupImgSrc}" alt="${titTxt}">`); 
            $(".viewtxt h4").text(titTxt); 
            $(".viewtxt p").text(conTxt); 
        });
        
        
        $(".viewX, .bgClose").on('click', function() {
            $(".view").fadeOut();
        });

        window.addEventListener('scroll', function() {
            const scrollBar = document.querySelector('.scroll-bar');
            const backName = document.querySelector('.back_name');
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / windowHeight) * 100;
        
            scrollBar.style.width = `${scrollPercentage}%`;
        
            const redValue = Math.floor(255 - (scrollPercentage * 222 / 100)); 
            const greenValue = Math.floor(255 - (scrollPercentage * 222 / 100));
            const blueValue = Math.floor(255 - (scrollPercentage * 222 / 100));
            backName.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`; 
        });







    }/*탭 끝*/
    function pc(){

// gnb_btn 클릭 시 gnb_box 열고 닫기
  $(".gnb_btn").on("click", function(event) {
    event.stopPropagation();
    $(".gnb_box").toggleClass("open");
});

// close_btn 클릭 시 gnb_box 닫기
$(".close_btn").on("click", function(event) {
    event.stopPropagation(); 
    $(".gnb_box").removeClass("open"); 
});

// 문서 클릭 시 gnb_box 닫기
$(document).on("click", function() {
    $(".gnb_box").removeClass("open");
});

// gnb_box 클릭 시 이벤트 전파 방지
$(".gnb_box").on("click", function(event) {
    event.stopPropagation();
});

// 메뉴 클릭 시 해당 섹션으로 스크롤 이동 및 gnb_box 닫기
$("li").on("click", function() {
    let i = $(this).index();
    let dis = $('.wrap').children().eq(i).offset().top;

    $('html, body').stop().animate({ 'scrollTop': dis });

    // gnb_box 닫기
    $('.gnb_box').removeClass("open"); 
});

// 스크롤 시 해당 섹션에 맞는 메뉴 활성화
$(window).on('scroll', function() {
    let scr = $(window).scrollTop(); // 현재 스크롤 위치
    let top2 = $('.About_me').offset().top;
    let top3 = $('.Skill').offset().top;
    let top4 = $('.Pro').offset().top;
    let top5 = $('.Dein').offset().top;

    if (0 <= scr && scr < top2) {
        $('li').eq(0).addClass('on').siblings().removeClass('on');
    } else if (top2 <= scr && scr < top3) {
        $('li').eq(1).addClass('on').siblings().removeClass('on');
    } else if (top3 <= scr && scr < top4) {
        $('li').eq(2).addClass('on').siblings().removeClass('on');
    } else if (top4 <= scr && scr < top5) {
        $('li').eq(3).addClass('on').siblings().removeClass('on');
    } else {
        $('li').eq(4).addClass('on').siblings().removeClass('on');
    }
});

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 18000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
              },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
     
          $(".popup-image").on('click', function() {
            let popupImgSrc = $(this).data("popup-src"); // 팝업에 표시할 이미지의 src
            let titTxt = $(this).data("title"); // 제목
            let conTxt = $(this).data("content"); // 내용
        
            $(".view").stop().fadeIn(); // 팝업 열기
            $(".viewpic").html(`<img src="${popupImgSrc}" alt="${titTxt}">`); // 팝업에 표시할 이미지
            $(".viewtxt h4").text(titTxt); // 제목 설정
            $(".viewtxt p").text(conTxt); // 내용 설정
        });
        
        // 팝업 닫기
        $(".viewX, .bgClose").on('click', function() {
            $(".view").fadeOut(); // 팝업 닫기
        });
    
        window.addEventListener('scroll', function() {
            const scrollBar = document.querySelector('.scroll-bar');
            const backName = document.querySelector('.back_name');
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / windowHeight) * 100;
        
            scrollBar.style.width = `${scrollPercentage}%`;
        
            const redValue = Math.floor(255 - (scrollPercentage * 222 / 100)); 
            const greenValue = Math.floor(255 - (scrollPercentage * 222 / 100));
            const blueValue = Math.floor(255 - (scrollPercentage * 222 / 100));
            backName.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`; 
        });





    
    }//pc함수

    AOS.init();


  

})//document