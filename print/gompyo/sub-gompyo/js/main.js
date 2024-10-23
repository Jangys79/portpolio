$(document).ready(function(){
    let win = $(window).width();
    if(win < 800){
        mobile()
    }else if(win >= 800 && win < 1200){
        tap()
    }else if(win >= 1200){
        pc()
    }

    function mobile(){


    }// mobile

    function tap(){
        gsap.to(".img1",{
            scrollTrigger:{
                trigger:".tit1",
                start:"-50% 0%",
                end:"=+155%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img2",{
            scrollTrigger:{
                trigger:".tit2",
                start:"-200% 0%",
                end:"=600%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img3",{
            scrollTrigger:{
                trigger:".tit3",
                start:"-45% 0%",
                end:"=+150%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img4",{
            scrollTrigger:{
                trigger:".tit4",
                start:"-40% 0%",
                end:"=+130%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img5",{
            scrollTrigger:{
                trigger:".tit5",
                start:"-45% 0%",
                end:"=+180%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
    }// tap

    function pc(){
        gsap.to(".img1",{
            scrollTrigger:{
                trigger:".tit1",
                start:"-170% 0%",
                end:"=+350%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img2",{
            scrollTrigger:{
                trigger:".tit2",
                start:"-300% 0%",
                end:"=+900%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img3",{
            scrollTrigger:{
                trigger:".tit3",
                start:"-150% 0%",
                end:"=+450%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img4",{
            scrollTrigger:{
                trigger:".tit4",
                start:"-110% 0%",
                end:"=+400%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })
        gsap.to(".img5",{
            scrollTrigger:{
                trigger:".tit5",
                start:"-130% 0%",
                end:"=+600%",
                markers:false,
                pin:true,
                scrub:true,
            }
        })

        $(".bar>li").on("click", function(){
            let i = $(this).index();
            let gnb = $("section").children("article").eq(i).offset().top;
            $("html,body").stop().animate({"scrollTop" : gnb},1500)
            $(".bar>li").removeClass()
            $(".bar>li").eq(i).addClass("on")
        })
        $(window).on("scroll", function(){
            
            let ht = $(window).height();
            console.log(ht)
            let src = $(window).scrollTop();
            console.log(src)

            if(src > 500 && src <= 2000){
                $(".bar>li").removeClass()
                $(".bar>li").eq(0).addClass("on")
                $(".bar>li").css("color", "#222")
            }else if(src > 2000 && src <= 4400){
                $(".bar>li").removeClass()
                $(".bar>li").eq(1).addClass("on")
            }else if(src > 4400 && src <= 6200){
                $(".bar>li").removeClass()
                $(".bar>li").eq(2).addClass("on")
            }else if(src > 6200 && src <= 7900){
                $(".bar>li").removeClass()
                $(".bar>li").eq(3).addClass("on")
            }else if(src > 7900){
                $(".bar>li").removeClass()
                $(".bar>li").eq(4).addClass("on")
            }else{
                $(".bar>li").removeClass()
                $(".bar>li").css("color", "white")
            }
            // let scr = $("article .img_box").eq(i).scrollTop();
            // for(var i = 0; i<5; i++){
            //     if(scr>=ht*i && scr<ht*(i+1)){
            //         $(".bar>li").removeClass()
            //         $(".bar>li").eq(i).addClass("on")
            //     }
          //  }
        })

        // $("article").on("mousewheel",function(e,d){
        //     if(d<0){
        //         // 마우스 휠 내릴 때
        //         let nxt = $(this).next().offset().top;
        //         $("html,body").stop().animate({"scrollTop":nxt})
        //     }else if(d>0){
        //         // 마우스 휠 올릴 때
        //         let pre = $(this).prev().offset().top;
        //         $("html,body").stop().animate({"scrollTop":pre})
        //     }
        // })

    }// pc

    $(window).on("resize",function(){
        document.location.reload()
    })
    

})// document