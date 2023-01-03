
var slidercapbtn=document.getElementsByClassName('slidercapbtn');

for(var i=0; i < slidercapbtn.length; i++){
	slidercapbtn[i].onclick=function(){
		window.location.href="home.html#abt";
	}
}



var form=document.querySelector('form');
form.onsubmit=function(){
	alert('Submitted Successfully');
}
   