var shirticon1=document.getElementById('bluecart')
var shirticon2=document.getElementById('orangecart')
var shirticon3=document.getElementById('pinkcart')
var subtotal= 0;
var totalbox=document.getElementById('total')
var subtotalbox=document.getElementById ('subtotal')
var shirt1incart = false
var shirt2incart = false
var shirt3incart = false

	shirticon1.addEventListener("click" function(){
		
		if(shirt1incart === false){
		subtotal +=29;

		shirt1incart=true;
	}
		else {
		
		subtotal-=29;
		shirt1incart=false;
	{

	}
