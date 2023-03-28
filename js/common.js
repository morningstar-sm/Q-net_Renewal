$(function () {

/* --호버하면 내려오는 배경-- */
$('.mainMenu>li').hover(function() {
    index = $(this).index();
    // console.log(index);
    // 배경 변경
    let urlStr = 'images/bg_gnb_0' + (index-1) + '.png';
    // console.log(urlStr);
    $('.subMenu_bg').css({
        background: "url("+ urlStr +") no-repeat #fff"
    });    
   
    //배경 슬라이드 다운
    $('.subMenu_bg').stop(true,true).slideDown(800);

    // 높이조절 - 호버한 subMenu의 높이 가져오기
    let target = parseInt($(this).find($('.subMenu')).css('height'));
    $('.subMenu_bg').animate({
        height : target
    }, 100);

    // 메뉴 li호버한 상태에서 옆으로 이동하면 배경 계속 보이기
    if($('.mainMenu>li').hover){
        $('.subMenu_bg').stop(false,true).show();
    }
}, function() {
    $('.subMenu_bg').stop(true,true).slideUp(300);
});

/* --메뉴 호버하면 서브메뉴 보이기-- */
$('.mainMenu>li').hover(function () {
    $(this).find('.subMenu').stop(true,true).slideDown(500);
}, function () {
    $(this).find('.subMenu').stop(true,true).hide();
});

 /* --on클래스 줘서, 그 최하위 서브메뉴 보이게(display: block;)-- */
 $('.subMenu>li').hover(function () {
    //클래스 줘서 미리 설정한 css값 적용되게 함
    $(this).addClass('on');
    // $(this).parents().addClass('on');
 }, function () {
    $(this).removeClass('on');
    // $(this).parents().removeClass('on');
 });


/* --목록 꾸미기-- */
 // 호버하면 해당 목록 왼쪽 점 색깔 바뀜
 let urlDot = 'images/bg_gnb_dot.png';
 let urlDoton = 'images/bg_gnb_dot_on.png';
 $('.subMenu li').hover(function () {
    $(this).css({
        backgroundImage : 'url('+urlDoton+')',
        backgroundPosition: 'left',
        // backgroundImage : 'url('+urlDoton+'), url("images/bg_gnb_arr.png")',
        // backgroundPosition: 'left, center',
        backgroundRepeat: 'no-repeat'
    });
 }, function () {
    $(this).css({
        backgroundImage : 'url('+urlDot+')',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat'
    });
 });
    

// a에 hover하면 글자 및 배경색 바뀌기(수정 중)
//다른 li로 갔을 때 
 $('.subMenu>li').hover(function () {
    //중간 서브메뉴 : 배경+글자색 남기
    $('.subMenu>li>a').hover(function () {
        $(this).css({
            backgroundColor: '#0195d3',
            color : '#fff'
        });    
    }, function () {
        $(this).css({
            backgroundColor: 'transparent',
            color : '#0195d3'
        });
    });
    //최하위 서브메뉴 : 배경색, 글자색 되돌아오기
    $('.ssubM > li > a').hover(function() {
        $(this).css({
        backgroundColor: '#0195d3',
        color : '#fff'
        });    
    }, function () {
        $(this).css({
            backgroundColor: 'transparent',
            color : '#4f4f4f'
        });
    });
 }, function () {
    $('.subMenu>li>a').css({color : '#4f4f4f'});
    // $('.subMenu>div>li>a').css({color : '#4f4f4f'});
 });



});