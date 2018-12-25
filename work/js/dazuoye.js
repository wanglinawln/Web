window.onload=function(){
	var xuanfu = document.getElementsByClassName('xuanfu')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			xuanfu.style.position = 'fixed';
			xuanfu.style.top="0px";			
		}else{
			xuanfu.style.position = 'static';
		}

	}
	var box = document.getElementById('box');
	var slider = document.getElementById('slider');
	var oNavlist = document.getElementById('nav').children;
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var chongzhi=document.getElementById("chongzhi");
	var money=document.getElementById("money");
	var gonggao=document.getElementById("gonggao");
	var big=document.getElementById("big");
	var j1=document.getElementById("j1");
	var j2=document.getElementById("j2");
	var j3=document.getElementById("j3");
	var j4=document.getElementById("j4");
	var j7=document.getElementById("j7");
		j2.onmouseover = function () {
            animate(j2, {
                right:0
            });
        }
        j3.onmouseover = function () {
            animate(j3, {
                right:0
            });
        }
        j7.onmouseover = function () {
            animate(j7, {
                right:0
            });
        }
        j4.onmouseover = function () {
            animate(j4, {
                right:0
            }, function () {
                big.src="../img/erwei.png";
				big.setAttribute("style","margin-top:0px");
            });
        }
        j2.onmouseout = function () {
            animate(j2, {
                right:-80
            });
        }
        j3.onmouseout = function () {
            animate(j3, {
                right:-80
            });
        }
        j7.onmouseout = function () {
            animate(j7, {
                right:-80
            });
        }
        j4.onmouseout = function () {
            animate(j4, {
                right:-80
            }, function () {
                big.src="../img/serwei.png";
				big.setAttribute("style","margin-top:40px");
            });
        }
	var index = 1; 
	var timer;
	var hua;
	var isMoving = false;
	box.onmouseover = function () {
		animate(left, {
			opacity: 0.6
		})
		animate(right, {
			opacity: 0.6
		})
		clearInterval(timer); //图片停止滚动
	}
	box.onmouseout = function () {	
		animate(left, {
			opacity: 0
		})
		animate(right, {
			opacity: 0
		})		
		timer = setInterval(next, 3000); //图片开始接着滚动
	}
	right.onclick = next;
	left.onclick = prev;
	function next() {
		if (isMoving) {
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider, {
			left: -800 * index
		}, function () {
			if (index == 7) {
				slider.style.left = '-800px';
				index = 1;
			}
			isMoving = false;
		});
	}

	function prev() {
		if (isMoving) {
			return;
		}
		isMoving = true;
		index--;
		navmove();
		animate(slider, {
			left: -800 * index
		}, function () {
			if (index == 0) {
				slider.style.left = '-4800px';
				index = 6;
			}
			isMoving = false;
		});
	}
			//按钮点击切换事件
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].index = i;
		oNavlist[i].onclick = function () {
			index = this.index + 1;
			navmove();
			animate(slider, {
				left: -800 * index
			});
		}

	}
			//图片切换时按钮样式跟着切换
	function navmove() {
		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].className = "";
		}
		if (index > 6) {
			oNavlist[0].className = "active";
		} else if (index <= 0) {
			oNavlist[5].className = "active";
		} else {
			oNavlist[index - 1].className = "active";
		}
	}
			//页面打开时自动滚动切换
	timer = setInterval(next, 3000);
	function show(){
		var t=gonggao.offsetTop-1;
		gonggao.style.top=t+"px";
		if (-1 * gonggao.offsetTop >= gonggao.offsetHeight / 2) {
            gonggao.style.top = 0;
        }
    }
    hua= setInterval(show, 10);

        //li添加鼠标移入移出事件
    var go = document.getElementsByClassName("go");
        for (var i = 0; i < go.length; i++) {
            //移出事件
            go[i].onmouseout = function () {
                //不能加 var
                hua = setInterval(show, 10);

            };
            //移入事件
            go[i].onmouseover = function () {
                clearInterval(hua);
            };

	}
}

function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }
	function change(){
		money.innerHTML="¥"+chongzhi.value;
	}