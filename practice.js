
//10th question
//var i;
//for(  i =1; i<=15; i++){
//	document.write( i+ " "+"This is getting way to repeting <br\>");
//}
//document.write("This is for while Loop </br>");
//var p = 1;
//while(p<=15){
//	document.write(p + " "+ "This is getting way to repeting <br\>");
//	p++;
//}
//var i ;
//for(i = 1; i<=10; i++){
	//var mul = 6 * i;
	//document.write("6 * " + i+ " = " +mul+ "<br\>");
//}

var i = 0;
var j = 0;
var k;
//for (i = 0; i<5; i++){
	
//	for(j = 0; j<=i; j++){
//		document.write(" * ");
//	}
//	document.write("<br\>");
//}
for( i = 5; i>0; i--){
	for(j = 1; j<i; j++){
		document.write("&nbsp;");
	}
	for(k = 6; k>i; k--){
		document.write("  *  ");
	}
	document.write("<br\>");
}

//11th 


function get_division(){
	var marks =this.SIP+this.GPS+this.Lidar+this.Lab+this.GIS;
	marks = (marks*100)/500;
	document.write("Total Percentage  :"+ marks+"<br\>");
	
	
	if(marks>60){
		document.write("First Division");
	}
	else if(marks>40){
		document.write("Second Division");
	}
	else if(marks>30){
		document.write("Third Division");
	}
	else{
		document.write("Fail");
	}
}
function student(SIP,GPS,Lidar,GIS,Lab){
	this.SIP = SIP;
	this.GPS = GPS;
	this.Lidar = Lidar;
	this.GIS = GIS;
	this.Lab = Lab;
	this.div = get_division;
}
var Ramesh = new student(70,56,75,89,86);
document.write("Ramesh Marks in GPS is" + Ramesh.GPS+"<br\>");
var division = Ramesh.div();
document.write("Ramesh Division is: "+ divison);


//12th 

function get_price(){
	var the_price = 500;
	if(this.speed == 2){
		the_price = the_price+200;
	}
	else {
		the_price = the_price + 100;
	}
	if(this.hdspace == 80){
		the_price = the_price+50;
	}
	else{
		the_price = the_price + 25;
	}
	if(this.ram == 1){
		the_price = the_price + 150;
	}
	else{
		the_price = the_price + 75;
	}
	return the_price;
	
	
}

function computer(speed,hdspace,ram){
	this.speed = speed;
	this.hdspace = hdspace;
	this.ram = ram;
	this.price = get_price;
}
var work_computer = new computer(2,80,1);
var home_computer = new computer(1.5,40,512);
var laptop_computer = new computer(1, 20, 256);

var work_computer_price = work_computer.price();
document.write("The Price of work computer " + work_computer_price+ "<br\>");
var home_computer_price = home_computer.price();
document.write("The Price of home computer " + home_computer_price + "<br\>");
var laptop_computer_price = laptop_computer.price();
document.write("The Price of laptop computer "+ laptop_computer_price+ "<br\>");
