window.onload=function(){
	user();
	jiantou();
	change();
	shuji();
	tankuang();
}
var count=1;
function user(){
	var user=document.getElementById("user");
	user.onmouseover=function(){
		var userxiala=document.getElementById("userxiala");
		userxiala.style.display="inline-block";
	}
	user.onmouseout=function(){
		var userxiala=document.getElementById("userxiala");
		userxiala.style.display="none";
	}
}
function jiantou(){
	var jt1=document.getElementById("jtz");
	var jt2=document.getElementById("jty");
	jt1.onmouseover=function(){
		var jiantoubj1=document.getElementById("jiantouz");
		jiantoubj1.style.backgroundColor="#000000";
		jiantoubj1.style.opacity="0.4";
	}
	jt1.onmouseout=function(){
		var jiantoubj1=document.getElementById("jiantouz");
		jiantoubj1.style.backgroundColor="";
		jiantoubj1.style.opacity="";
	}
	jt2.onmouseover=function(){
		var jiantoubj2=document.getElementById("jiantouy");
		jiantoubj2.style.backgroundColor="#000000";
		jiantoubj2.style.opacity="0.4";
	}
	jt2.onmouseout=function(){
		var jiantoubj2=document.getElementById("jiantouy");
		jiantoubj2.style.backgroundColor="";
		jiantoubj2.style.opacity="";
	}
}
function tophidden(){
		var top=document.getElementsByClassName("li0");
		var height=document.documentElement.scrollTop;
		if(parseInt(height)>=600){
			top[3].style.display="block";
		}else if(parseInt(height)<600){
			top[3].style.display="none";
		} 
}
function tankuang(){
	var top=document.getElementsByClassName("li0");
	var tangkuang1=document.getElementById("tankuang1");
	var tangkuang2=document.getElementById("tankuang2");
	top[1].onmouseover=function(){
		tangkuang1.style.display="block";
	}
	top[1].onmouseout=function(){
		tangkuang1.style.display="none";
	}
	top[2].onmouseover=function(){
		tangkuang2.style.display="block";
	}
	top[2].onmouseout=function(){
		tangkuang2.style.display="none";
	}
}

