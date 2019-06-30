// 活动 公告 选项卡
var lis=document.querySelectorAll(".lb_r2>div>.tab>ul>li");
var uls=document.querySelectorAll(".box>ul");
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
        for(var i=0;i<lis.length;i++){
            lis[i].className='';
        }
        for(var i=0;i<uls.length;i++){
            uls[i].className='';
        }
         this.className='on';
         uls[this.index].className='show';
    }
}
// 楼层1 选项卡
var lis1=document.querySelectorAll(".ts>.title>.tab>ul>li");
var uls1=document.querySelectorAll(".ts>.box>.boxr>ul");
for(var i=0;i<lis1.length;i++){
   lis1[i].index=i;
   lis1[i].onmouseover=function(){
    for(var i=0;i<lis1.length;i++){
        lis1[i].className='';
     }
    for(var i=0;i<uls1.length;i++){
        uls1[i].className='';
     }
     lis1[this.index].className='on';
     uls1[this.index].className='other one';
   }
}