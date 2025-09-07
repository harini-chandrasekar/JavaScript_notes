//FUNCTIONS

//1...
/*function sum(num1,num2){
    return num1+num2;
}
console.log(sum(10,20));
//METHOD 1

function Sum(num1,num2){
    console.log(num1);
    console.log(num2);

    if(num1==undefined){
        return num2+num2;
    }
    else if (num2==undefined){
        return num1+num1;
    }
    else if(num1==0){
        return "not defined input";
    }
    else{
        return num1+num2;
    }
}
console.log(Sum(10,40));
console.log(Sum(10));
console.log(Sum(0,10));
console.log(Sum(10,0));
------------------------------------------------------------------------------------------------------------------
//normal program
var email="contact12@gmail.com";
let Email="hghyrthb@hghg.com";
console.log(email.slice(0,"contact12@gmail.com".indexOf("@")));
console.log(Email.slice(0,"contact12@gmail.com".indexOf("@")));

//Email username alone find
var Email="hhhhhhhh12@gmail.com"
function getusername(Email){
    return Email.slice(0,"hhhhhhhh12@gmail.com".indexOf("@"));
}
console.log(getusername(Email));
//usrname first letter should be upper case//doubt...

function propername(name){
    return name.charAt(0).Uppercase();
}
console.log(propername("harini"));

function topropercase(name){
    return name.charAt(0).touppercase();
}
console.log(topropercase("harini"));
*/
/*
//METHOD 2.fucntion(const)
const topropercase=function(name){
    return name;
}
console.log(topropercase("hhhhaaa"));
//METHOD 3.function --function name var ha irukum, fun badhil arrow ==> use pannum
const toPropercase=(Name)=>{
    return Name+"Name";
}
console.log(toPropercase("hhhhhh"));
-------------------------------------------------------------------------------------------------------------------
//SCOPE --VAR, LET, CONSTANT
//global scope
var x=1;
let y=2;
const z=3;
//local scope or block scope
{
    let y=4;
}
//function scope
function myfun(){
    const z=5;
}
console.log(y);// 2 dha print agym because global as first priority
//global
//pending above.....
//ARRAY = []
//creating array 
let myarr=[1,2,3,4];
console.log(myarr);
//adding elements
/*
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
console.log(myArr);
//length of arr
//syntax ----.length
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
console.log(myArr.length);//1+1=2
//finding element using postion// index pota value varum
console.log(myArr[0]);
console.log(myArr[1]);

//last element find panum na
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
console.log(myArr.length -1 );
console.log(myArr.at(-1));
//last elemet another way
console.log(myArr[myArr.length-1]);
------------------------------------------------------------------------------------------------------------------------
//array methods======[push(),pop(),shift(),unshift(),splice()reverse(),join(),split(),concat()]
//adding a new element // methods--shift(),unshift(),push(),pop()----push&pop edhu last element ku use agum,,,shift&unshift edhu first element ku use agum
//PUSH
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.push("user");
console.log(myArr);

//POP
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.pop("welcome");
console.log(myArr);

//UNSHIFT()
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.unshift("wow");
console.log(myArr);

//SHIFT
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.shift();//first element remove panidom
console.log(myArr);

//SHIFT
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.shift("welcome");//element kodotha koda first element dha print pannum
console.log(myArr);

//var la store panni methods use panalam// same as shift and unshift(first element remove and add pannum)
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
const firstelement=myArr.push("hari");
console.log(firstelement)//push() returns the new length of the array after the element is added. Since "hari" was added, the new length is 4.
console.log(myArr);

const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
const firstelement=myArr.pop();
console.log(firstelement)//welcome is output because last element assign agum

//DELETE ELEMENT
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
delete myArr[2];
console.log(myArr);//last element empty katum //but fulla delete agathu so kela paru solution iruku

//SPLICE(), to delete element properly
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.splice(1,1)//last index, number of element to be delete 
console.log(myArr);

//splice delete pana position la vera elemet add panalam
//adding using splice()
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
myArr.splice(1,1,"dharani")//last index, number of element to be delete , add element in that  delete postiion

//REVERSE()
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
const newarr=myArr.reverse();//reverse array va use new arry nu solli oru variable la print panalam
console.log(newarr);

//JOIN()
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
const newarr=myArr.join();// not cotes and brackets serndhu varum 
console.log(newarr);

//SPLIT()
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
const joined=myArr.join(" ");// split pannum na join pannum 
const newarr=joined.split("");//each letter hum split agum
console.log(newarr);

// CONCAT()  //joining two arrays
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
console.log(myArr);
myArrA=["hari",'dharani',"bharathi"];
newArr=myArr.concat(myArrA);
console.log(myArrA);
console.log(newArr);

//SPREAD OPERATOR
const myArr=[]//empty arr
myArr[0]="hello";
myArr[1]="hi";
myArr[2]="welcome";
console.log(myArr);
myArrA=["hari",'dharani',"bharathi"];
console.log(myArrA)
const newArr = [...myArrA,...myArr];//first arrA na athula irukara element print agum, contiues va , irukanum because seperator and athuku aprm irukara myarr elements la print agum
console.log(newArr);
--------------------------------------------------------------------------------------------------------------
//TWO DIMENTIONAL ARRAY
const earnmoneyA=["frontend","backend","fullstack"];
const earnmoneyB=["AI","blockchain","dataAnalytics"];
const growmoneyA=["stacks","realestate","fixed"];
const growmoneyB=["options","features"];
const givemoney=["quality education"];
const earnmoney=[earnmoneyA,earnmoneyB];
const growmoney=[growmoneyA,growmoneyB];
console.log(earnmoney[0][0],earnmoney[1][2]);
console.log(growmoney[0][0],growmoney[1][0]);
console.log(earnmoney[1][0],givemoney[0]);
---------------------------------------------------------------------------------------------------------------
//THREE DIMENTIONAL ARRAY
const earnmoneyA=["frontend","backend","fullstack"];
const earnmoneyB=["AI","blockchain","dataAnalytics"];
const growmoneyA=["stacks","realestate","fixed"];
const growmoneyB=["options","features"];
const givemoney=["quality education"];
const earnmoney=[earnmoneyA,earnmoneyB,givemoney];
const growmoney=[growmoneyA,growmoneyB];
//or channel kulla three arrya , three array ull a, b array, arraya ulla values soo-----three dimentional
const channel=[earnmoney,growmoney,givemoney];
console.log(channel[2][0]);
console.log(channel[0][1][2]);
console.log(channel[0][1][2],channel[1][0][1]);
*/
/*
------------------------------------------------------------------------------------------------------------------
//LOOP STATEMENT
//WHILE LOOP
let i=0;
while( i<5){
    console.log(i);
    i++;
}
//DO WHILE LOOP
let j=0;
do{
    console.log(j);
    j++
}while(j<6)
//
let I=0;
do{
    if(I % 2 === 0 ){ 
        console.log(I)
    }
    I++;
}while(I <=10)
//
J=0;
do{
    if(J %2===0){
        console.log("odd number",J);
    }
    J++
}while(J<=5)
//
let name="harini";
let i=name.length-1;
do{
    console.log(name[i]);
    i=i-1;
}while(i>=0)

//NESTED LOOP
let name="dh";
for(let i=0;i< name.length;i++){
    for(let j=0;j< name.length;j++){
        console.log(i,j);
    }
}

for(i=1;i<=10;i++){
    console.log(i);
}

for(let i=0;i<=10;i=i+2){
    console.log(i);
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // or sum = sum + i;
}
console.log("Sum:", sum); // Output: Sum: 55


//
let sum=5;
for(i=0;i<=10;i++){
    result=sum*i;
    console.log(sum +"*" +i+ "=",result);
}
let str = "hello";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log("Reversed:", reversedStr); // Output: Reversed: olleh

//
let num = 112364756;
let revnum = ""; // Initialize revnum to an empty string

let numStr = num.toString(); // Convert the number to a string

for (let i = numStr.length - 1; i >= 0; i--) {
  revnum += numStr[i];
}

console.log(revnum); // Output: 657463211
//If you need revnum as a number
let reversedNumber = parseInt(revnum);
console.log(reversedNumber)//Output: 657463211
//
let Str="dharani";
let revstr="";
for(i=Str.length-1;i>=0;i--){
    revstr+=Str[i];
}console.log(revstr);
--------------------------------------------------------------------------------------------------------------
// BREAK AND CONTINUE STATEMENT
//BREAK STATEMENT  .....break and continue used inside if and else statements
for(i=0;i<=10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}
//CONTINUE STATEMENT
for(i=0;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}
//EXAMPLE(brak and continue)
let name="bharathi divya";
let firword="";
for(i=0;i<name.length;i++){
    if(name[i]===" "){
        break;
    }firword+=name[i];
}

//even number

for(i=2;i<=20;i=i+2){
    if(i===20){
        break;
    }
    console.log(i);
}
    console.log(firword);

//skip multipe of 5
for(i=1;i<=30;i=i+2){
    if(i%5==0){
        continue;
    }
    console.log(i);
}
//another logic(my)
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
      continue;
    }
    if (i % 2 !== 0) { // Check if odd
      console.log(i);
    }
  }
  */
 
