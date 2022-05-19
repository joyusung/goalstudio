$(function(){
    // 윈도우의 가로길이를 win_width변수에 저장
    var win_width=$(window).width();
    // 만약 win_width값이 1024이상이면
    if(win_width>1024){
        // pc버전
        
        // 주메뉴에 마우스 오버했을 때 서브메뉴 나옴
        $('header nav > ul > li').hover(function(){
            $(this).find('.sub').stop().slideDown(300);
        },function(){
            $(this).find('.sub').stop().slideUp(300);
        });

        // 풀페이지
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips:['MAIN','NEW PODUCT','SHOP','LOOK BOOK','CULTURE','OFFLINE','GOAL STUDIO'],
            // fullpage의 내용이 모두 로드(Load)되고 나면 function(){}의 내용을 실행함
            afterLoad:function(anchorLink, index){
                // 만약 section의 인덱스 번호가 7라면
                if(index==8){
                    // 내비게이션 사라짐
                    $('#fp-nav').fadeOut(300);
                }else{
                    // fullpage 내비게이션 나타남
                    $('#fp-nav').fadeIn(300);
                }
            }
        });

        $('section.brand .b_btn > .box1 > a').hover(function(){
            $('section.brand .b_btn > .box1 > .deco').stop().fadeIn(300);
        },function(){
            $('section.brand .b_btn > .box1 > .deco').stop().fadeOut(100);
        });

        $('section.brand .b_btn > .box2 > a').hover(function(){
            $('section.brand .b_btn > .box2 > .deco').stop().fadeIn(300);
        },function(){
            $('section.brand .b_btn > .box2 > .deco').stop().fadeOut(100);
        });

        // header sticky
        setInterval(header_color,1);
        function header_color(){
            if($('body').hasClass('fp-viewing-0')===true){
                $('header').css({'background':'linear-gradient(to bottom, #111 10%, transparent 100%)'});
            }else{
                $('header').css({'background-color':'black'});
            }
        }

        $('.tab_shop .center_box').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 800,
        });

        $('footer .top').click(function(){
            $.fn.fullpage.moveTo(1,1);
        });
    }else if(win_width>768){
        $('a').click(function(e){
            e.preventDefault();
        })
        // 태블릿 버전, 모바일버전
        // 모바일 버전 주메뉴를 클릭했을 때 서브메뉴 나옴
        $('.mobile_nav nav > ul > li').click(function(e){
            e.preventDefault();
            // 만약 클릭한 주메뉴에 active가 없다면
            if($(this).attr('class') !='active'){
                $('.mobile_nav nav > ul > li').removeClass('active');
                $(this).addClass('active');
                $('.mobile_nav  nav > ul > li .sub').hide();
                $(this).find('.sub').stop().slideDown();
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').stop().slideUp();
            }
        });
        $('.menu_btn a i').click(function(e){
            e.preventDefault();
            $('.mobile_nav').fadeIn(300);
            $('.mobile_nav_in').css({
                'right':0
            });
        });
        $('.mobile_top_menu .mobile_close').click(function(e){
            e.preventDefault();
            $('.mobile_nav').fadeOut(300);
            $('.mobile_nav_in').css({
                'right':'-60%'
            });
        });
        
        $('.full_top').click(function(){
            $('html,body').animate({
                scrollTop:0
            });
        });
        
        // top버튼이 아래쪽에서 조금 위쪽에 위치되었다 있다가 홈페이지를 위로 올리면 (footer높이만큼) 브라우저 오른쪽아래에 고장되도록 하는 코드
        $(window).scroll(function(){
        // $('footer').offset().top: footer의 위쪽 위치값이 브라우저의 높이값고 떨어져있는 거리
            if($(window).scrollTop()+$(window).height()>=$('footer').offset().top){
                $('.full_top').addClass('active');
            }else{
                $('.full_top').removeClass('active');
            }
            var sTop=$(this).scrollTop();
            // top일때 사라짐
            if(sTop>150){
                $('.full_top').removeClass('active2');
            }else{
                $('.full_top').addClass('active2');
            }
        });
        $('.tab_shop .center_box').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 800,
        });
    }else{
        $('a').click(function(e){
            e.preventDefault();
        })
        // 태블릿 버전, 모바일버전
        // 모바일 버전 주메뉴를 클릭했을 때 서브메뉴 나옴
        $('.mobile_nav nav > ul > li').click(function(e){
            e.preventDefault();
            // 만약 클릭한 주메뉴에 active가 없다면
            if($(this).attr('class') !='active'){
                $('.mobile_nav nav > ul > li').removeClass('active');
                $(this).addClass('active');
                $('.mobile_nav  nav > ul > li .sub').hide();
                $(this).find('.sub').stop().slideDown();
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').stop().slideUp();
            }
        });
        $('.menu_btn a i').click(function(e){
            e.preventDefault();
            $('.mobile_nav').fadeIn(300);
            $('.mobile_nav_in').css({
                'right':0
            });
        });
        $('.mobile_top_menu .mobile_close').click(function(e){
            e.preventDefault();
            $('.mobile_nav').fadeOut(300);
            $('.mobile_nav_in').css({
                'right':'-60%'
            });
        });
        
        $('.full_top').click(function(){
            $('html,body').animate({
                scrollTop:0
            });
        });
        
        // top버튼이 아래쪽에서 조금 위쪽에 위치되었다 있다가 홈페이지를 위로 올리면 (footer높이만큼) 브라우저 오른쪽아래에 고장되도록 하는 코드
        $(window).scroll(function(){
        // $('footer').offset().top: footer의 위쪽 위치값이 브라우저의 높이값고 떨어져있는 거리
            if($(window).scrollTop()+$(window).height()>=$('footer').offset().top){
                $('.full_top').addClass('active');
            }else{
                $('.full_top').removeClass('active');
            }
            var sTop=$(this).scrollTop();
            // top일때 사라짐
            if(sTop>150){
                $('.full_top').removeClass('active2');
            }else{
                $('.full_top').addClass('active2');
            }
        });


        // 여기만 다름 else if와 다름
        $('.tab_shop .center_box').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 800,
        });
        var sw=0;
        $('section.shop .mobile_shop .more').click(function(){
            if(sw==0){
                sw=1;
                $('section.shop .mobile_shop .tab_menu1 li').stop().slideDown();
                $(this).addClass('active');
            }else{
                sw=0;
                $('section.shop .mobile_shop .tab_menu1 li').stop().fadeOut();
                $(this).removeClass('active');
                $('.mobilde_shop .tab_menu1').addClass('active');
            } 
        });

        $('section.shop .tab_header .tab_menu1 li').click(function(e){
            e.preventDefault();
            $(this).removeClass('active');
            var tab_Num=$(this).index();
            $('section.shop .tab_shop .box').removeClass('active');
            $('section.shop .tab_shop .box').eq(tab_Num).addClass('active');
            $('section.shop .tab_shop .box').hide();
            $('section.shop .tab_shop .box.active').show();
            $('section.shop .tab_shop .box.active').css({
                'animation':'opac 1.5s linear'
            });
            $('section.shop .mobile_shop .tab_menu1 li').stop().hide();
            console.log(tab_Num);
        });
    }

    // 비주얼 swiper
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 5000,
        },
        loop:true,
        effect:'fade',
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
    });
    // slick slider
    $('.look').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
    $('section.shop .tab_shop .box').hide();
    $('section.shop .tab_shop .box:first-child').show();
    $('section.shop .tab_header .tab_menu li').click(function(e){
        e.preventDefault();
        var tab_Num=$(this).index();
        $('section.shop .tab_header .tab_menu li a').css({'color':'#111'});
        $(this).find('a').css({'color':'#5ea152'});
        $('section.shop .tab_shop .box').removeClass('active');
        $('section.shop .tab_shop .box').eq(tab_Num).addClass('active');
        $('section.shop .tab_shop .box').hide();
        $('section.shop .tab_shop .box.active').show();
        $('section.shop .tab_shop .box.active').css({
            'animation':'opac 1.5s linear'
        });
    });
    $('section.shop .view_more .view_box a').hover(function(){
        $('section.shop .view_more .view_box i').stop().fadeIn(300);
    },function(){
        $('section.shop .view_more .view_box i').stop().fadeOut(100);
    });

     
    // offline img fadeIn slider
    $('.store_left ul li').hide();
    $('.store_left ul li:first').show();
    function fn(){
        $('section.offline .store_left ul li:first').fadeOut().next().fadeIn().end().appendTo('.store_left ul')
    }
    setInterval(fn,5000);
});