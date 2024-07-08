$(function(){

    $(function(){
        $(".main li , .sub_bg").mouseover(function(){
            $(".sub, .sub_bg").stop().slideDown();
        })
    }) /* over */

        $(".main li , .sub_bg").mouseout(function(){
            $(".sub, .sub_bg").stop().slideUp();
        }) /* out */



        //이미지 영역

        $(".fade li").hide()
        $(".fade li").eq(0).show();

        var n = 0 ; // 0 1 2

        setInterval(function(){

            if(n==2){
                n=0;
            }else{
                n++;
            }//

            $(".fade li").eq(n).fadeIn().siblings().fadeOut();

            console.log(n);

        } , 2500)


    })//j end