let $lis = $('.introduce li ');
let $contents = $('.rigthContent li')
let bgMusic = $(".bgMusic");
let $audio = $("audio")[0];
let musicNum = 0;
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
    for(let i = 0; i < $contents.length; i++){
        $contents[i].className = 'change';
    }
    $contents[index].className = '';
})
let  $skills = $('#page3 .flex li');
$skills.mouseover(function(){
    $(this).children('p.mainM').css('lineHeight','60px').siblings().removeClass('change')

})