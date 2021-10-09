"use strict";

// 画面をスクロールした時
$(window).scroll(function(){
    // スクロール量
    let scroll = $(window).scrollTop();
    // サイトの一番上から、ウィンドウの1/3までの距離
    let trigger = $(window).height() / 3;
    // windowの1/3まで到達したら
    if (scroll > trigger){
        // .modalに対してクラスを追加する
        $(".modal").addClass("is-active");
    }
});

$(function(){
    // クローズボタンをクリックしたらモーダルをウェードアウト
    $(".modal-close").click(function(){
        $(".modal").fadeOut();
    });
    // モーダルの背景部分をクリックしたらモーダルをフェードアウト
    $(".modal-bg").click(function(){
        $(".modal").fadeOut();
    });
})


$(function(){
    $(".mv-copy").addClass("is-active");
})