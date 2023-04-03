$(function () {

/* -- '.mainMenu>li'에 호버-- */
let index;
$('.mainMenu>li').hover(function() {
    index = $(this).index();
    // console.log(index);
    // 배경그림 변경
    let urlStr = 'images/bg_gnb_0' + (index+1) + '.png';
    // console.log(urlStr);
    $('.subMenu_bg').css({
        background: "url("+ urlStr +") no-repeat #fff"
    });
    
    //배경 슬라이드 다운
    $('.subMenu_bg').stop(true,true).slideDown(200);

    // 배경높이조절 - 호버한 subMenu의 높이 가져오기
    let target = parseInt($(this).find($('.subMenu')).css('height'));
    console.log(target);
    $('.subMenu_bg').animate({
        height : target
    }, 100);

    // $('.subMenu_bg').stop(true,true).show();
    // 메뉴 li호버한 상태에서 옆으로 이동하면 배경 계속 보이기
    $('.mainMenu>li').mouseenter(function() {
        $('.subMenu_bg').stop(false,true).slidedown(200);
    });

    //메인메뉴 호버하면 중간메뉴 보이기 
    $(this).find('.subMenu').stop(true,true).show(200);
    $(this).find('.subMenu').css('zIndex',100);

}, function() {
    $('.subMenu_bg').stop(true,true).slideUp(300);
    $(this).find('.subMenu').stop(true,true).hide();

}); //end of $('.mainMenu>li').hover() -> 배경 및 중간메뉴 효과


 /* -- 최하위 서브메뉴 보이게(display: block;)-- */
 $('.subMenu>li').hover(function () {
    $(this).find($('ul')).show();


 }, function () {
    $(this).find($('ul')).hide();
    // $(this).removeClass('on');
    // $(this).parents().removeClass('on');

 }); //end of $('.subMenu>li').hover() -> 최하위서브메뉴


/*  *********  목록 꾸미기  *********  */
 // 호버하면 해당 목록 왼쪽 점 색깔 바뀌고, 오른쪽에 화살표 생김
 let urlDot = 'images/bg_gnb_dot.png';
 let urlDoton = 'images/bg_gnb_dot_on.png';
 $('.subMenu>li').hover(function () {
    $(this).children('a').css({
        // listStyle : 'url('+urlDoton+')',
        backgroundImage : 'url('+urlDoton+'), url("images/bg_gnb_arr.png")',
        backgroundPosition: '3%, 50%',
        backgroundRepeat: 'no-repeat'
    });
    // 전문자격의 li는 안보이게
    let none = $(this).parents('li').index();
    console.log(none);
    if(none == 1){
        $(this).css({
            // listStyle : 'none',
            backgroundImage : 'none',
        });
    }
 }, function () { //mouseleave
    $(this).children('a').css({
        // listStyle : 'url('+urlDot+')',
        backgroundImage : 'url('+urlDot+')',
        backgroundPosition: '3%',
        backgroundRepeat: 'no-repeat'
    });
    // 전문자격의 li는 안보이게
    none = $(this).parents('li').index();
    if(none == 1){
        $(this).css({
            // listStyle : 'none',
            backgroundImage : 'none',
        });
    }
 });
    

// li에 hover하면 a의 글자 및 배경색 바뀌기
$('.subMenu>li').on({
    mouseenter : function () {
        // li에 호버하고 있을 때 글자 및 배경색 바뀌기
        $(this).children('a').css({
            backgroundColor: '#0195d3',
            color : '#fff'
        });

        // 최하위 서브메뉴로 갔을 때
        //최하위 서브메뉴 : 배경색, 글자색 되돌아오기
        $('.ssubM > li > a').hover(function() {
            $(this).css({
                backgroundImage : 'url('+urlDoton+')',
                backgroundPosition: '3%',
                backgroundColor: '#0195d3',
                color : '#fff'
            });
        }, function () {
            $(this).css({
                backgroundImage : 'url('+urlDot+')',
                backgroundPosition: '3%',
                backgroundColor: 'transparent',
                color : '#4f4f4f'
            });
        });
    },
    mouseleave : function() {
        $('.subMenu>li>a').css({
            backgroundColor: 'transparent',
            color : '#4f4f4f'
        });
    }
}); //end of .on()

 //전문자격(.subMenu02)도 배경색 바뀌기
 $('.subMenu02 div>a').hover(function() {
    $(this).css({
        backgroundImage: 'url("images/bg_gnb_dot_on.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '3%',
        backgroundColor: '#0195d3',
        color : '#fff'
    });
 }, function() {
    $(this).css({
        backgroundImage: 'url("images/bg_gnb_dot.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '3%',
         backgroundColor: 'transparent',
        color : '#4f4f4f'
    });
 });


});