window.onload=function(){
		
    	createCode();    
    }
	var data = [{
		 elmora : "elmora",
		 elmorapwd : "123456"
		 
	},
	{
		tourist : "123",
		touristpwd : "123"
	}
	];
	
	
	function yz(){
		var  username = document.getElementById("user_name").value;
		var  userpwd = document.getElementById("user_pwd").value;
		console.log(username);
		console.log(userpwd);
		
		
		if(data[0].elmora==username && data[0].elmorapwd==userpwd){
			alert("登陆成功！");
			localStorage.setItem("key",username);
			return yzUsername() && yzPassword() && yzyzm();
		}else if(data[1].tourist==username && data[1].touristpwd==userpwd){
			alert("登陆成功！");
			localStorage.setItem("key",username);
			return yzUsername() && yzPassword() && yzyzm();
		}
		if(data[0].elmora!=username && data[0].elmorapwd!=userpwd){
			alert("账号或者密码错误！请检查！");
			return false;
		}else if(data[1].tourist!=username && data[1].touristpwd!=userpwd){
			alert("账号或者密码错误！请检查！");
			return false;
		}
		// if(tourist==username && touristpwd==userpwd){
		// 	alert("登陆成功！");
		// 	localStorage.setItem("key",username);
		// 	return yzUsername() && yzPassword() && yzyzm();
		// }
		alert("账号或者密码错误！请检查！");
		return false;
	}
	function dlsb(){
		
	}
	function PwdLogin() {
	    var login = document.getElementsByClassName("login_con");
	    login[0].classList.remove("hidden");
	    login[0].classList.add("show");
	    login[1].classList.remove("show");
	    login[1].classList.add("hidden");
	    var tags = document.getElementsByClassName("top_tag");
	    tags[0].classList.add("active");
	    tags[1].classList.remove("active");
	    var ad = document.getElementById("AdImg");
	    ad.style.height = "558px";
	}
	function QrcodeLogin() {
	    var login = document.getElementsByClassName("login_con");
	    login[0].classList.remove("show");
	    login[0].classList.add("hidden");
	    login[1].classList.remove("hidden");
	    login[1].classList.add("show");
	    var tags = document.getElementsByClassName("top_tag");
	    tags[1].classList.add("active");
	    tags[0].classList.remove("active");
	    var ad = document.getElementById("AdImg");
	    ad.style.height = "407px";
	}

	function yzPassword(){
		var pwdValue = document.getElementById("user_pwd").value;
		var pwdspan = document.getElementById("passwordspan");
		if(pwdValue==""){
			pwdspan.innerHTML = "请检查密码,密码不能为空";
			return false;
		}else{
			pwdspan.innerHTML = "";
			return true;
		}
	}
	function yzUsername(){
		var usernameInput = document.getElementById("user_name");
		var usernameValue = usernameInput.value;
		var usernamespan = document.getElementById("usernamespan");
		if(usernameValue==""){
			usernamespan.innerHTML = "请检查用户名,用户名不能为空";
			return false;
		}else{
			usernamespan.innerHTML = "";
			return true;
		}
	}
	function yzyzm(){
		 //获取显示区生成的验证码
        var checkCode = document.getElementById("yzmspan").innerHTML;
        //获取输入的验证码
        var inputCode = document.getElementById("auth_code").value;
		var yzmInput = document.getElementById("auth_code");
		var yzmValue = yzmInput.value;
		var yzmspan = document.getElementById("yzmmspan");
		if(yzmValue == ""){
			yzmspan.innerHTML = "请检查验证码,验证码不能为空";
			return false;
			//toUpperCase()把所有小写字母转换为大写字母
		}else if(checkCode.toUpperCase() != inputCode.toUpperCase()){
			yzmspan.innerHTML = "请检查验证码,验证码有误~";
			return false;
		}else{
			yzmspan.innerHTML = "验证码正确";
			return true;
		}
	}
	function createCode() {
        var code = "";
        var codeLength = parseInt(4); //验证码的长度
        var checkCode = document.getElementById("yzmspan");
        ////所有候选组成验证码的字符，当然也可以用中文的
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
        //循环组成验证码的字符串
        for (var i = 0; i < codeLength; i++)
        {
            //获取随机验证码下标
            var charNum = Math.floor(Math.random() * 62);
            //组合成指定字符验证码
            code += codeChars[charNum];
        }
        if (checkCode)
        {
        	checkCode.innerHTML = code;
        }
    }
