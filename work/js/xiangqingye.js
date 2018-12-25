window.onload=function(){
	var style1=document.getElementById('style1');
	var style2=document.getElementById('style2');
	var xuanze=document.getElementById('xuanze');
	var jian=document.getElementById('jian');
	var jia=document.getElementById('jia');
	var num=document.getElementById('num');
	var zuo=document.getElementById('zuo');
	var you=document.getElementById('you');
	var one=document.getElementById('one');
	var two=document.getElementById('two');
	one.setAttribute("onmouseover","over1()");
	two.setAttribute("onmouseover","over2()");
	one.setAttribute("onmouseout","out()");
	two.setAttribute("onmouseout","out()");
	var paint=document.getElementById('paint');
	var add=document.getElementById('add');
	var cha=document.getElementById('cha');
	var shop=document.getElementById('shop');
	var slider = document.getElementById("slider");
	var m17 = document.getElementById("m17");
	var m14 = document.getElementById("m14");
	var m15 = document.getElementById("m15");
	var Bimg = document.getElementById("Bimg");


	jia.onmouseover=function (){
		var zhi=parseInt(num.value);
		if(zhi==5){
			jia.style.cursor='not-allowed';
		}
		else{
			jia.style.cursor='pointer';
		}
	}
	jian.onmouseover=function (){
		var zhi=parseInt(num.value);
		if(zhi==1){
			jian.style.cursor='not-allowed';
		}
		else{
			jian.style.cursor='pointer';
		}
	}


		m14.onmouseover = function () {
			slider.style.display = 'block';
			m15.style.display = 'block';
		}
		m14.onmouseout = function () {
			slider.style.display = 'none';
			m15.style.display = 'none';
		}

		m14.onmousemove = function (ev) {
			var ev = ev || window.event;

			var oL = ev.clientX - m17.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - m17.offsetTop - slider.offsetHeight / 2;

			var oMaxw = m14.offsetWidth - slider.offsetWidth;
			var oMaxh = m14.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';

			var scale = m15.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL + 'px'
			Bimg.style.top = -scale * oT + 'px'
		}
}
function back1() {
	style1.className="duigou";
	style2.className="";
	xuanze.innerHTML='"'+style1.innerHTML+'"';
}
function back2() {
	style2.className="duigou";
	style1.className="";
	xuanze.innerHTML='"'+style2.innerHTML+'"';
}
function reduce(){
	jia.setAttribute("style","cursor:pointer");
	var shu=parseInt(num.value);
	if (shu<=1) {
		jian.setAttribute("style","cursor:not-allowed");
	}
	else{
		num.value=shu-1;
		if (shu-1==1) {
			jian.setAttribute("style","cursor:not-allowed");
		}
	}
}
function increase(){
	jian.setAttribute("style","cursor:pointer");
	var shu=parseInt(num.value);
	if (shu>=5) {
		jia.setAttribute("style","cursor:not-allowed");
	}
	else{
		num.value=shu+1;
		if (shu+1==5) {
			jia.setAttribute("style","cursor:not-allowed");
		}
	}
}
function change(){
	var num=document.getElementById('num');
	var liang=parseInt(num.value);
	if (liang>=5) {
		num.value=5;
	}
	else if(liang<=1){
		num.value=1;
	}
	else{
		num.value=liang;
	}
}
function turn(){
	if(one.className=="m12"){
		two.className="m12";
		one.className="m16";
		paint.setAttribute('src','../img/pp1.jpeg');
		Bimg.setAttribute('src','../img/pp1.jpeg');
	}
	else{
		two.className="m16";
		one.className="m12";
		paint.setAttribute('src','../img/pp0.jpeg');
		Bimg.setAttribute('src','../img/pp0.jpeg');
	}
}
function buy(){
	var box=document.getElementById("o1");
	box.setAttribute("style","display:block");
	var box1=document.getElementById("a1");
	var box2=document.getElementById("b1");
	var box3=document.getElementById("c1");
	var box4=document.getElementById("k1");
	var box5=document.getElementById("l1");
	var box6=document.getElementById("m1");
	var box7=document.getElementById("n1");
	var box8=document.getElementById("g1");
	var box9=document.getElementById("h");
	box1.setAttribute("style","opacity: 0.3");
	box2.setAttribute("style","opacity: 0.3");
	box3.setAttribute("style","opacity: 0.3");
	box4.setAttribute("style","opacity: 0.3");
	box5.setAttribute("style","opacity: 0.3");
	box6.setAttribute("style","opacity: 0.3");
	box7.setAttribute("style","opacity: 0.3");
	box8.setAttribute("style","opacity: 0.3");
	box9.setAttribute("style","opacity: 0.3");
}
function left(){
	var box=document.getElementById("o1");
	box.setAttribute("style","display:none");
	var box1=document.getElementById("a1");
	var box2=document.getElementById("b1");
	var box3=document.getElementById("c1");
	var box4=document.getElementById("k1");
	var box5=document.getElementById("l1");
	var box6=document.getElementById("m1");
	var box7=document.getElementById("n1");
	var box8=document.getElementById("g1");
	var box9=document.getElementById("h");
	box1.setAttribute("style","opacity: 1");
	box2.setAttribute("style","opacity: 1");
	box3.setAttribute("style","opacity: 1");
	box4.setAttribute("style","opacity: 1");
	box5.setAttribute("style","opacity: 1");
	box6.setAttribute("style","opacity: 1");
	box7.setAttribute("style","opacity: 1");
	box8.setAttribute("style","opacity: 1");
	box9.setAttribute("style","opacity: 1");

}
function over1(){
	one.className="m12";
	if(two.className=="m12"){
		two.className="m16";
	}
	paint.setAttribute('src','../img/pp0.jpeg');
	Bimg.setAttribute('src','../img/pp0.jpeg');
}
function over2(){
	two.className="m12";
	if(one.className=="m12"){
		one.className="m16";
	}
	paint.setAttribute('src','../img/pp1.jpeg');
	Bimg.setAttribute('src','../img/pp1.jpeg');
}
function out(){
	one.className="m16";
	two.className="m16";
}
