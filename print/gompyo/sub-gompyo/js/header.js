$(document).ready(function(){

    let wt = $(window).width();
    if(wt < 768){
        mo()

    }else if(wt >= 768 && wt < 1200){
        tap()

    }else if(wt >= 1200){
        pc()

    }


    function mo(){

    $(document).ready(function() {
        $(".gnb_btn").on("click", function() {
        $("nav").toggleClass("open"); //
        });
    });   

        $(".gnb>li>a").on("click", function() {
        // 현재 클릭된 요소의 형제인 .sub 메뉴를 슬라이드 토글합니다.
        $(this).siblings(".sub").slideToggle();

        // 현재 클릭된 요소의 부모와 형제 요소들에서 .sub 메뉴를 슬라이드 업합니다.
        $(this).parent().siblings().find(".sub").slideUp();
        });
    }

    function tap(){
        //마우스를 올리면 mouseover하위메뉴 펼쳐지고
        //마우스 내리면 mouseout하위메뉴 접어지고
        $(".gnb>li").on("mouseover",function(){
          $(".gnb>li").children(".sub").stop().slideDown(500)
          $(".gnb>li").parents().siblings(".header_box").stop().slideDown(500)
    
        }).on("mouseout",function(){
          $(".gnb>li").children(".sub").stop().slideUp(500);
          $(".gnb>li").parents().siblings(".header_box").stop().slideUp(500)
        })

        $(".pc_sec").on("click",function(){
            $(".search").stop().slideToggle();
        })

    }

    function pc(){
        $(".gnb>li").on("mouseover",function(){
            $(".gnb>li").children(".sub").stop().slideDown(500)
            $(".gnb>li").parents().siblings(".header_box").stop().slideDown(500)
      
          }).on("mouseout",function(){
            $(".gnb>li").children(".sub").stop().slideUp(500);
            $(".gnb>li").parents().siblings(".header_box").stop().slideUp(500)
          })

        $(".pc_sec").on("click",function(){
            $(".search").stop().slideToggle();
        })

        $(document).on('scroll',function(){
            let a = $(window).scrollTop()
            if(a > 200){
                $(".hWrap").children("nav").siblings().removeClass("h_uu");
                $(".hWrap").children("nav").siblings().addClass("h_dd");
                $(".gnb_box").removeClass("h_pp");
                $(".gnb_box").addClass("h_nn");
                $("header").removeClass("h_wu");
                $("header").addClass("h_wd");
                $(".header_box").removeClass("h_bu");
                $(".header_box").addClass("h_bd");
            
            }else{
                $(".hWrap").children("nav").siblings().removeClass("h_dd");
                $(".hWrap").children("nav").siblings().addClass("h_uu");
                $(".gnb_box").removeClass("h_nn");
                $(".gnb_box").addClass("h_pp");
                $("header").removeClass("h_wd");
                $("header").addClass("h_wu");
                $(".header_box").removeClass("h_bd");
                $(".header_box").addClass("h_bu");
            }

        })

    }//pc

        $(window).on("resize",function(){
            document.location.reload()
        })
})