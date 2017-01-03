var x=10; //Firkants startkoordinater
var y=380;

var kugleX=100; //Kugle startkoordinater
var kugleY=4;
var kugleR=4;
var ctx;
var tidKugleY = 25; //Opdatering af kuglens koordinater
var tidCanvas =100; // opdatering af canvas

function tegn(){
	canvas=document.getElementById("canvasTest"); //canvasTest 200x200px	
	ctx=canvas.getContext("2d");	
	canvasTest.width = canvasTest.width; //resetter canvas
	ctx.fillStyle="yellow";
	ctx.fillRect(0, 0, canvasTest.width, canvasTest.height);
	ctx.rect(x,y,20,20);
	ctx.stroke();


	ctx.beginPath();
	ctx.arc(kugleX,kugleY,kugleR,0,2*Math.PI); //arc(x,y,r,sAngle,eAngle,counterclockwise);
	ctx.fillStyle="red";
	ctx.fill();
	
	ctx.stroke();
	
	ramt();
	//kald igen	
	setTimeout(tegn, tidCanvas);//gentegn ved at kalde funktionen igen efter 100ms
	
}

function kugle(){
	kugleY+=1;
	setTimeout(kugle, tidKugleY); //kugles koordinat opdateres
	if(kugleY>=400)
		kugleY= 2;
}

kugle(); //kald kugle ved start



function flytH(){
	x+=10; //flytter figuren TH
	tegn();
}


function flytV(){
	x+=-10;
	tegn();
}

function ramt(){
	if( (kugleX>=x && kugleX<=x+20)&&(kugleY<=y+20&&kugleY>=y) ){
		ctx.font="20px Georgia";
		ctx.strokeText("Ramt!",50,50);
	}
}



 





