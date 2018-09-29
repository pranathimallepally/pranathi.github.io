/*var myimage=document.querySelector('img');
myimage.onclick=function() {
var mysrc=myimage.getAttribute('src');
if(mysrc==='Images/image1.jpg'){
myimage.setAttribute('src','Images/image2.jpg')
}
else{
myimage.setAttribute('src','Images/image1.jpg')
}
}*/
var mybutton=document.querySelector('button');
var myHeading=document.querySelector('h1');
mybutton.onclick=function(){
setUserName();
}
function setUserName(){
var p1=prompt('enter the text here');
localStorage.setItem('name', p1);
  myHeading.textContent = 'Hello, ' +p1;
if(!localStorage.getItem('name')) {
 setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}
}
