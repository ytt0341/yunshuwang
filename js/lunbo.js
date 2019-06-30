// 轮播
 var items=document.getElementsByClassName("item");
 var goPreBtn=document.getElementById("gopre");
 var goNextBtn=document.getElementById("gonext");
 var points=document.getElementsByClassName("point");      
 var index=0;
 var clearActive=function(){
      for(var i=0;i<items.length;i++){
       items[i].className='item';
     }
      for(var i=0;i<points.length;i++){
       points[i].className='point';
     }
 }
 var goIndex=function(){
     clearActive();
     points[index].className='point active';
     items[index].className='item active';
 }
 var goNext=function(){
     if(index<8){
         index++;
     }else{
         index=0;
     }
     goIndex();
 }
 var goPre=function(){
     if(index==0){
         index=8;
     }else{
         index--;
     }
     goIndex();
 }
 goNextBtn.addEventListener('click',function(){
   goNext();
 })
 goPreBtn.addEventListener('click',function(){
   goPre();
})
for(var i=0;i<points.length;i++){
   points[i].addEventListener('mouseover',function(){
       var pointIndex=this.getAttribute('data-index');
       index=pointIndex;
       goIndex();
   })
}



