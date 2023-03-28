window.onload = function () {

//이미지 슬라이더 구현 시작
//무한루프
/*
$('.slider_panel').append($('div.ing_li').eq(0).clone());
$('.slider_panel').append($('div.ing_li').eq(1).clone());
$('.slider_panel').append($('div.ing_li').eq(2).clone());
$('.slider_panel').prepend($('div.ing_li').eq(-4).clone());
$('.slider_panel').prepend($('div.ing_li').eq(-5).clone());
$('.slider_panel').prepend($('div.ing_li').eq(-6).clone());

let index = 3;
moveSlider(index);

// 좌, 우 화살표 버튼 이동 함수
$('.left_control').click(function() {
    if(index > 0) {
        index--;
        moveSlider(index);
    } else {
        $('.slider_panel').css('left',-1250);
        index = 4;
        moveSlider(index);
    }
});
$('.right_control').click(function () {
    if(index < 5) {
        index++;
        moveSlider(index);
    } else {
        $('.slider_panel').css('left', 0)
        index = 1;
        moveSlider(index);
    }
});

//이미지 슬라이더 구현 함수
function moveSlider(index) {
    $('.slider_panel').animate({
        left : -(index*250)
    },'slow');
}
*/
//버튼 사라지는 이미지 슬라이더
let index = 0;
moveSlider(index);

$('.left_control').click(function() {
        index--;
        moveSlider(index);
});
$('.right_control').click(function () {
        index++;
        moveSlider(index);
});

//이미지 슬라이더 구현 함수
function moveSlider(index) {
    if(index < 2 && index > -1) {
        $('.left_control').fadeIn(100);
        $('.right_control').fadeIn(100);
    }
    if(index == 1 ) {
        $('.right_control').fadeOut(100);
    }
    if(index == 0 ) {
        $('.left_control').fadeOut(100);
    }
    $('.slider_panel').animate({
        left : -(index*250)
    },'slow');
}

}//end of window.onload