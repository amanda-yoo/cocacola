$(document).ready(function () {

    // ==================== / main slider /

    $('.header_bottom').slick({dots: true});    

    $('.slick-prev').html('<i class="xi-angle-left"></i>');
    $('.slick-next').html('<i class="xi-angle-right"></i>');



    // ==================== / menu 클릭 시 section 이동 /

    var $menu = $('.navi li');
    var $contents = $('body section');

    $menu.click(function (m) {
        m.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index();
        var section = $contents.eq(idx);
        var sectionDistance = section.offset().top;

        $('html,body').stop().animate({scrollTop: sectionDistance}, 1000);
    });



    // ==================== / 스크롤 이벤트 /

    $(window).scroll(function () {

        // nav bar bg색 및 TOP버튼 색 변화
        var sclTop = $(window).scrollTop();

        if (sclTop > 0) {
            $('.header_top').addClass('on');
            $('.topBtn').fadeIn(500);
        } else {
            $('.header_top').removeClass('on');
            $('.topBtn').fadeOut(200);
        };
        
        // 섹션 이동할 때 nav 메뉴 폰트컬러 변화
        $contents.each(function () {
            if (Math.floor($(this).offset().top) <= sclTop) {
                var idx = $(this).index() - 2;
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }else if($('#sec_brand').offset().top > sclTop){
                $menu.removeClass('on');
            };
        });

        // progress bar
        var scrolled = window.pageYOffset;
        var winheight = $(document).height() - $(window).height();
        var sclpercent = (scrolled / winheight) * 100;

        $('.progress_bar').css('width', sclpercent + '%');

        
    });
    


    // ==================== / top button /

    $('.topBtn').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });



    // ==================== / header nav menu (MO ver) /

    $('nav .nav_btn').on('click', function () {

        // 햄버거 버튼 클릭 시 슬라이드 업&다운
        $('nav .navi').toggleClass('on_nav');

        // 햄버거 버튼 클릭 시 햄버거 버튼이 X 모양으로 바뀜
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });

    // 메뉴 영역 클릭 시 메뉴 닫기
    if ($(window).width() < 768) {
        $('nav ul li').on('click', function () {
            $('nav .navi').removeClass('on_nav');
            $('nav .nav_btn').removeClass('on');
        });
    }

    // 메뉴 영역 외 클릭 시 메뉴 닫기
    $('body').click(function (e) {
        if (!$('nav').has(e.target).length) {
            $('nav .navi').removeClass('on_nav');
            $('nav').removeClass('on');
            $('nav .nav_btn').removeClass('on');
        }
    });

    // ==================== / sec_history tab /

    $('.history_tab li a').on('click , focus', function () {
        $('.history_tab li').removeClass();
        $(this).parent().addClass('on');

        return false;
    });



    // ==================== / sec_varieties slider /

    $('.varieties_cont').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                // arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3
                }
            }, {
                breakpoint: 614,
                settings: {
                    // arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });



    // ==================== / sec_csr tab /

    $('.csr_tab li a').on('click , focus', function () {
        $('.csr_tab li').removeClass('on');
        $(this).parent().addClass('on');

        $('.csr_bottom li').removeClass('on');
        $('.csr_bottom li').eq($(this).parent().index()).addClass('on');
        return false;
    });

});