let $lis = $('.introduce li ');
let $contents = $('.rigthContent li')
let bgMusic = $(".bgMusic");
let $audio = $("audio")[0];
let musicNum = 0;
$("nav a").on("click",function () {
    // $($(this).attr("href")).offset().top 是获取id等于$(this).attr("href")块所在的位置
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
    return false;//不要这句会有点卡顿
});
bgMusic.click(function () {
    musicNum++;
    if (musicNum%2){
        $audio.pause()
    }else {
        $audio.play()
    }
})
$lis.click(function(){
    let index = $(this).index();
    $(this).children().addClass('bottomLine').parent().siblings().children().removeClass('bottomLine');
    for(let i = 0; i < $contents.length; i++){
        $contents[i].className = 'change';
    }
    $contents[index].className = '';
})
let  $skills = $('#page3 .flex li');
$skills.mouseover(function(){
    $(this).children('p.mainM').css('lineHeight','120px').siblings().removeClass('change')
})
