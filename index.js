$(document).ready(function(){
    //详情页展示
    $(".left a").hover(function(){
        $(".list-detail").css("display","block");
    },function(){
        $(".list-detail").css("display","none");
    });
    //手动控制轮播
     $(".img li").eq(0).show();
     $(".num li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index;
        $(".img li").eq(index).fadeIn(300).siblings.fadeOut(300);
     })
     $(".right .left").click(function(){
        showLast();
     })
     $(".right .right").click(function(){
        showNext();
     })
     //自动控制轮播
     var i=0;
     var t=setInterval(showNext,1500);
     function showNext(){
        if(i==3){
            i=0;
        }else{
            i++;
        }
        index=i;
        $(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
        $(".num li").eq(index).addClass("active").siblings().removeClass("active");
     };
     function showLast(){
        if(i==0){
            i=3;
        }else{
            i--;
        }
        index=i;
        $(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
        $(".num li").eq(index).addClass("active").siblings().removeClass("active");
     };
});

