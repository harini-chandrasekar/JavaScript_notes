/* 
var myvar="balachandra";
console.log(myvar);
console.log(typeof myvar);
---------------------------------------------------------------------------------------------------------------------
// STRING PROPERTIES
console.log(myvar.length);
// STRING METHODS
//charAt()
console.log(myvar.charAt(0,7));
//indeOf()
console.log(myvar.indexOf("a"));
console.log(myvar.indexOf("an"));
//lastindexOf()
console.log(myvar.lastIndexOf("a"));
//slice()   5 inex la irudhu n-1 index char varaikum printpannum
console.log(myvar.slice(5,7));
console.log(myvar.slice(6,3));  //--->not answer because bigger in  first 
//touppsecase()  toLowercase()
console.log(myvar.toUpperCase());
console.log(myvar.toLowerCase());
//includes 
console.log(myvar.includes(0));//--> include ula kodokara string  ilana number include acha ilaya nu sollum
//split()
console.log(myvar.split("a"));
console.log(myvar.split(""));
var myvar="bala ,chandra";
var myvar="balachandra";
//constant
const mynum=20;
const myfloat=20.7;
const myVar="harini";
console.log(mynum);
console.log(mynum+myfloat+myvar);// = ku badhil (+,-,&,<=,>=,*,===)indha mari various com, arithmetic operations perform panalam
console.log(mynum+30);
//number() in constant
console.log(Number(myVar));
console.log(Number(myfloat));
console.log(Number(mynum));
console.log(Number(myVar)+3);
console.log(Number(mynum)+3);
console.log(Number(true)+1);//true=1
console.log(Number(false)+4);// false=0
---------------------------------------------------------------------------------------------------------------------
//METHODS
//isInteger()
console.log(Number.isInteger(myVar));
console.log(Number.isInteger(myfloat));
console.log(Number.isInteger(mynum));
console.log(Number.isInteger(20));
console.log(Number.isInteger("harini"));
//parsefloat()
console.log(Number.parseFloat(myVar));
console.log(Number.parseFloat(mynum));
console.log(Number.parseFloat(myfloat));
//parseInt()
console.log(Number.parseInt(myVar));
console.log(Number.parseInt(mynum));
console.log(Number.parseInt(myfloat));
//tostring() //doubt...............
console.log(Number.parseFloat(myVar));
console.log(Number.parseFloat(mynum));
console.log(myfloat.toString());//black color o/p visible ana adhu string
var combo = myfloat+20;// first assign pana string value edothukum so add panudhu
console.log(combo);
console.log(mynum.toString())
console.log(typeof mynum);
//chaning()
console.log(parseInt(mynum).toExponential(20));
var myNum= 408.9000;
console.log(myNum.toExponential().toString());
//fixed()-->point aprm vara number of integer ha fixed value ula kookanum
console.log(myfloat.toFixed(2));
console.log(mynum.toFixed(5));
//isNaN()& number.isNaN()
console.log(isNaN(myNum));// because it is float so false
console.log(isNaN(myvar));
console.log(Number.isNaN("44"));
console.log(Number.isNaN("Harini"));
//math properties
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.pow(3,2));
console.log(Math.max(10,45,0,0,23));//--.>02 start with zero not accepted
console.log(Math.min(0,40,3,5,2));
console.log(Math.round(Math.PI));//-->5 below & above whole value edokum
----------------------------------------------------------------------------------------------------------------------------
IF ELSE STATEMENT
//if else statement //EG 1
let Viewer="full js video";
let Reply;
if(Viewer){
    Reply= `enjoy ${Viewer}`;
}
else{
    Reply="Sorry will upload soon"
}
console.log(reply);   
//else if statement EG 2
let bannedcustomer=true;
let viewer;//-->msg inga kodoka kodathu kodotha viewer true idom
let reply;
if(viewer){
    reply= `enjoy ${viewer}`;
}
else if(bannedcustomer){
    reply="sorry not for you";
}
else{
    reply="Sorry will upload soon"
}
console.log(reply);
---------------------------------------------------------------------------------------------------------------------
//CHALLENGE GRADE CALCULATOR
//--> nareya else if use panalam && else ulla if use panalam
let testscore=70;//--> user input ha label in html la use panalam
let grade;
let collegestudent=true;
if(testscore>=90){
    grade="O";
}
else if(testscore>=80){
    grade="A"
}
else if(testscore>=70){
    grade="B";
}
else if(testscore>=60){
    grade="c";
}
else{
    if(collegestudent){
        grade="RA"//reappear
    }
    else{
    grade="fail";
}}
console.log(grade);
//SWITCH CASE STATEMENT && case ulla if use panalam
//syntax:
 switch(expression& values){
case 1 :
   console.log();
   break;
default:
    console.log();
}  
//expression
switch(Math.floor(Math.random()*4)){//--.compare the 3 with all the cases
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("no match")
}
//values
switch(4){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("not match");
}
---------------------------------------------------------------------------------------------------------------------
// stone, paper, rock ...game design in switch
---------------------------------------------------------------------------------------------------------------------
//TERNARY OPERATOR --->better than if else and swith because single line la condition,true-exp and false-exp
//syntax
//condition? expIftrue:expIfalse;
let subscriber='subscriber';
let response= subscriber? "welcome":"please subscribe";
console.log(response);
//conditon continues condition varum --->grade calculator
let Testscore=49;
let Grade=Testscore>=90?"O":Testscore>=80?"A":Testscore>=70?"C":"F";
console.log(Grade);
----------------------------------------------------------------------------------------------------------------------
//GAME- ROCK PAPER SISSORS(USING TERNARY)
let player='sissors'
let computer='paper';
let result=computer===player?"tie":computer==="rock"&&player==='sissors'?"computer Win":computer==="paper"&&player==="rock"?"computer win":computer==='sissors'&&player==='paper'?"computer win":"player win";
console.log(result);
---------------------------------------------------------------------------------------------------------------------
//USER INTERATION //USER INPUT
//confirm,prompt,nullcostring,trim()
let my=confirm('hello world');  //-->for msg to ok or cancel
console.log(my);
let My=prompt("enter your name");//-->msg store agum & cancel pana null varudhu
console.log(My);
//to avoid null && Null co string
let MY=prompt("enter your Name");//-->data store agum & cancel pana null varadhu badhil "you did not entere varum"
console.log(MY?? "you didn not entered");
//
let mY=prompt("enter your good name");//-->data kodokama ok panalum "you did not entered varum" katanum
if(mY){
    console.log(mY??"you did not entered");
}
else{
    console.log("you did not entered");
}
console.log(mY.length);
//trim()-->name pakathula space store panama irukum means space ha trim pannum
let mymsg=prompt("enter your very good name");
if(mymsg){
    console.log(mymsg??"you did not entered");
}
else{
    console.log("you did not entered");
}
console.log(mymsg.trim().length);//-->trim() na space ha vetrum
-----------------------------------------------------------------------------------------------------------------------------
//GAME DESIGN 
 Playgame=confirm("shall we play game");
if(Playgame){// 2 choice irukum player and computer
    let Playerchoice=prompt("enter any one from (rock, paper, sissors)");//  playerchoice 1
    if (Playerchoice){
        let playerone=Playerchoice.trim().toLowerCase();
        if(
        Playerchoice==="rock"||Playerchoice==="sissors"||Playerchoice==="paper"
    ){
    let computerchoice=Math.floor(Math.random()* 3 + 1); //computer choice 2
    let computer=computerchoice===1?"rock":computerchoice===2?"sissors":"paper";
    let Result=computer===player?"tie":computer==="rock"&&player==='sissors'?"computer Win":computer==="paper"&&player==="rock"?"computer win":computer==='sissors'&&player==='paper'?"computer win":"player win";
    alert(Result);
    let playagain=confirm("play again?")
    playagain?location.reload():alert("thank you for playing")
    }
        else{
           alert("not correct one entered");
    }}
    else{
        alert("changed mind");
    }}
else{
    alert("may be next time");
}

*/