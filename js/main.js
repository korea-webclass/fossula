$(document).ready(function(){
    var $body = $('body');
    var $header = $('header');
    var $video = $('.visual-box video');
    var $gnblist = $('.gnb-list');
    var $gnbA = $('.gnb-list > a');
    var $lnb = $('.lnb');

    // 헤더 고정
    $(window).scroll(function(){ // 스크롤이 0보다 크면 { } 안에 코드 실행
        if($(this).scrollTop() > $video.height()){ // 스크롤 값 > $video 요소의 높이 값
            $header.addClass('fixed'); // $header 요소 .fixed 추가
        }else{
            $header.removeClass('fixed'); // $header 요소 .fixed 추가
        }
    });

    // 헤더 메뉴
    // $gnblist.mouseenter(function(){
    //     $(this).children(".lnb").stop().slideDown(200);
    //     $header.stop().animate({ height: '593px', backgroundColor: 'red'}); // 마우스 오버 하면 헤더 높이 200px 
    //     $body.children(".open").animate();

    //     $(".gnb-list").mouseleave(function(){
    //         $(this).children(".lnb").stop().slideUp(200);
    //         $header.stop().animate({ backgroundColor: 'transparent'});
    //     });
    // })
});
