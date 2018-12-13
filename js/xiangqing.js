window.onload=function(){
let price=$("price").value;
let zeng=$("zeng");
let jian=$("jian");
let vul=$("vul");
zeng.onclick=function(){
    let shu=parseInt(vul.value)+1;
    vul.value=shu;
}
jian.onclick=function(){
    let shu=parseInt(vul.value)-1;
     if(shu<0){
         alert("没东西了");
         return;
     }
     vul.value=shu;

}
     $("bigBox").onmousemove = function(event){

		let evt = event || window.event;
		//1、数据
		let mirrorWidth = $("mirrorBox").offsetWidth;
		let mirrorHeight = $("mirrorBox").offsetHeight;
		let left1 = evt.pageX-this.offsetLeft-mirrorWidth/2;
		let top1 = evt.pageY-this.offsetTop-mirrorHeight/2;
		
		//2、边界
		if(left1<0){
			left1=0;
		}
		if(left1>this.offsetWidth-mirrorWidth){
			left1=this.offsetWidth-mirrorWidth
		}
		
		if(top1<0){
			top1=0;
		}
		if(top1>this.offsetHeight-mirrorHeight){
			top1=this.offsetHeight-mirrorHeight
		}
		//3、改变外观
		$("mirrorBox").style.left = left1+"px";
		$("mirrorBox").style.top = top1+"px";
		$("showBox").style.backgroundPosition = (-2*left1)+"px "+(-2*top1)+"px";
  }
//放大镜的原理: 我们的mark横向是box的一半，纵向也是box的一半，那么右侧的大图横向（纵向）应该是左侧小图的2倍
  
}
  
function $(id){
    return document.getElementById(id);
}
