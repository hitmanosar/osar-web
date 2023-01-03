var allbt=document.querySelector('.allbt');
var webt=document.querySelector('.webt');
var mobt=document.querySelector('.mobt');
var desbt=document.querySelector('.desbt');

var imgbox3=document.querySelector('.imgbox3');
var imgbox4=document.querySelector('.imgbox4');
var imgbox5=document.querySelector('.imgbox5');


webt.onclick=function (){
    imgbox3.style.display="none";
    imgbox5.style.display="none";
    imgbox4.style.display="flex";
    webt.style.backgroundColor="#00BFFF";
    webt.style.color="white";
    allbt.style.color="black";
    mobt.style.color="black";
    desbt.style.color="black";
    allbt.style.backgroundColor="#dee5ee";
    mobt.style.backgroundColor="#dee5ee";
	desbt.style.backgroundColor="#dee5ee";
};


allbt.onclick=function (){
	imgbox3.style.display="flex";
	imgbox4.style.display="flex";
	imgbox5.style.display="flex";
	allbt.style.backgroundColor="#00BFFF";
	webt.style.backgroundColor="#dee5ee";
	mobt.style.backgroundColor="#dee5ee";
	desbt.style.backgroundColor="#dee5ee";
	webt.style.color="black";
    allbt.style.color="white";
    mobt.style.color="black";
    desbt.style.color="black";


};


mobt.onclick=function (){
	  imgbox3.style.display="none";
	  imgbox4.style.display="none";
	  imgbox5.style.display="flex";
	  allbt.style.backgroundColor="#dee5ee";
	  webt.style.backgroundColor="#dee5ee";
	  mobt.style.backgroundColor="#00BFFF";
	  desbt.style.backgroundColor="#dee5ee";
	  webt.style.color="black";
      allbt.style.color="black";
      mobt.style.color="white";
      desbt.style.color="black";
};



desbt.onclick=function (){
      imgbox3.style.display="flex";
	  imgbox4.style.display="none";
	  imgbox5.style.display="none"; 
      allbt.style.backgroundColor="#dee5ee";
	  webt.style.backgroundColor="#dee5ee";
	  mobt.style.backgroundColor="#dee5ee";
	  desbt.style.backgroundColor="#00BFFF";
	  webt.style.color="black";
      allbt.style.color="black";
      mobt.style.color="black";
      desbt.style.color="white";

};


var tohome=document.querySelector('.tohome');
tohome.onclick=function (){
	window.location.href="home.html";
}


var form=document.querySelector('form');
form.onsubmit=function(){
	alert('Submitted Successfully');
}