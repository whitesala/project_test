function checkUsername(){
    let username = document.getElementById('username');
    let usernameMsg = document.getElementById('usernameMsg');
    m = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    //字母开头，允许5-16字节，允许字母数字下划线 
    if(m.test(username.value) == false){
		usernameMsg.innerText= "Beginning with a letter, 5-16 digits in length";
		// 输入有误时显示错误文字
	}else{
		usernameMsg.innerText= "";
		// 当输入正确时，将文本替换为空
	}
}

function checkPassword(){
    let password = document.getElementById('psd');
    let repassword = document.getElementById('repsd');
	let passwordMsg = document.getElementById("psdMsg");
    let repasswordMsg = document.getElementById("repsdMsg");
    let n = /^[a-zA-Z]\w{5,17}$/;
    // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线
	if(n.test(password.value) == false){
		passwordMsg.innerText = "Start with a letter, the length is between 6~18, and can only contain letters, numbers and underscores";
		ispass=false;
	}else{
        passwordMsg.innerText= '';
		if(password.value!=repassword.value){
		    repasswordMsg.innerText="The two passwords are inconsistent";
		    ispass=false;
	    }else{
		    repasswordMsg.innerText="";
	    }
	}
}

function checkEmail(){
    let email = document.getElementById('eml');
	let emailMsg = document.getElementById("emlMsg");
	let p =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(p.test(email.value) == false){
		emailMsg.innerText = 'The mailbox format is incorrect';
	}else{
		emailMsg.innerText = '';
	}
}

function checkTel(){
    let tel = document.getElementById('tel');

    let telMsg = document.getElementById("telMsg");
    let q = /^1[3|4|5|6|7|8|9]\d{9}$/;
    if(q.test(tel.value) == false){
        telMsg.innerText = 'The Telephone format is incorrect';
    }else{
        telMsg.innerText = '';
    }
}

function check(){
    let ispass = true;
    checkUsername();
    checkPassword();
    checkEmail();
    checkTel();
    return ispass;
}
