var tohome=document.querySelector('.tohome');

tohome.onclick=function (){
	window.location.href="home.html";
}



var form=document.querySelector('form');
form.onsubmit=function(){
	alert('Submitted Successfully');
}