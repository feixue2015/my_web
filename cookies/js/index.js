var arr1 = ["#EC3939", "#E6941A", "#EFF109", "#099A75", "#14EEEF", "#141BEF", "#8307B5", "#DE0DA7", "#2FF30F", "#0D80A2"];
var arr2 = ["#F77C7C", "#FDBD5E", "#FEFF94", "#55E2BE", "#98F2F3", "#878AEF", "#C783E2", "#E687CD", "#9BF78B", "#81C9DE"];
var num = getCookie('color');
if (num == null)
	num = 1;
else
	num = Number(num);
dictate2(num);

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
} 
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function dictate(num) {
	setCookie('color', num, 1);
	dictate2(num);
}

function dictate2(num) {
	var nav1 = document.getElementById("mid-bar");
	nav1.style.borderTopColor = arr1[num - 1];
	var nav2 = document.getElementById("respond1");
	nav2.style.backgroundColor = arr1[num - 1];
	var nav3 = document.getElementsByClassName("respond2");
	for (var i = 0; i < nav3.length; i++)
		nav3[i].style.backgroundColor = arr2[num - 1];
	var font = document.getElementsByClassName("mycolor2");
	for (var j = 0; j < font.length; j++)
		font[j].style.color = arr1[num - 1];
}