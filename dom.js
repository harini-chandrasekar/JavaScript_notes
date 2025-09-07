//DOM--> DOCUMENT OBJECT MODEL
/*
const view1=document.getElementById("view1");//for getting the section id
console.log(view1);
const view2=document.querySelector("#view2");//for any id (it may be session id,div id,h2)
console.log(view2);
view2.style.display="flex";//style vechi css add panalam
view2.style.display="none";// not display the view2 page
*//*
const views=document.getElementsByClassName("view");//linking with class name
console.log(views);
const sameview=document.querySelectorAll(".view");//node list na any id ,class name podalam ,but dot veikanum front la
console.log(sameview);

//div elements ha access pandrom 
const div=view1.querySelectorAll("div");//ulla tags podalam (eg..div,para,.)
console.log(div);// 12 div tag display agum//nodelist of 12 div tags-->because any elements
const samediv=view1.getElementsByTagName("div");
console.log(samediv);//ouput la html colletcions of 12 div

//even div elements mattum edokanum
const evendivs = view1.querySelectorAll("div:nth-child(2n)");
console.log(evendivs);

//particular div vechi style panala,
evendivs[2].style.backgroundColor="blue";//camelcase in styling 

//evendivs[4].style.width="150px";
//all evendivs ku changes pannum na for loop
for(i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor="purple";//even div yella purple la maridom
}
//changing the text content
const nav=document.querySelector("nav h1");
console.log(nav);
console.log(nav.textContent="hello world");//or 
nav.textContent="welcome home";

//innerHTML
const navbar=document.querySelector("nav");//navbar na mela irukara set of header koda solam
navbar.innerHTML="<h1>Home page</h1><p>hello people</p>"//within cotes la html code podalam using inner.html
console.log(navbar);
//alignment of  content//using css
navbar.style.justifyContent="space evenly";
//navbar.style.justifyContent="flex-start";
//navbar.style.justifyContent="flex-end";
//parentElement, child elements, previous elemet yelamae access panalam 
console.log(evendivs[0]);
console.log(evendivs[0].parentElement);//section la parent
console.log(evendivs[0].parentElement.children);//section oda children div
console.log(evendivs[0].parentElement.childNodes);//sec v oda text ,div yelamae,div aprm space irunfha text
console.log(evendivs[0].parentElement.hasChildNodes());//child nodes ituka ilaya so nboolean results
console.log(evendivs[0].parentElement.lastChild);//text dha last child because div aprm space iruku
console.log(evendivs[0].parentElement.lastElementChild);// last div element
console.log(evendivs[0].parentElement.firstChild);//first empy space has text
console.log(evendivs[0].parentElement.firstElementChild);//first div element
console.log(evendivs[0].nextSibling);
console.log(evendivs[0].nextElementSibling);
console.log(evendivs[0].nextElementSibling.nextElementSibling);//0th index aprm irukara div element
console.log(evendivs[0].previousSibling);
console.log(evendivs[0].previousElementSibling);//1st div in odd
*/ /*
--------------------------------------------------------------------------------------------------------------------
//REMOVE AND ADD ELEMENTS 
console.log(view1.lastElementChild.remove());//undefined varuM because 12th div element remove ito irukum 
//add
const newdiv=document.createElement("div");
view1.append(newdiv)//view1 la aprm vara elements ha podanaum , so first ethula podanumo athu varanum
newdiv.textContent=12;
*/

//view2 la div create panum--> practice 1
/*
view2.style.display="flex";//view2 va display paniyachi
const newdivs=document.createElement("div");
view2.append(newdivs);//new div ha view2 page la potachi
newdivs.textContent=1;
newdivs.style.alignItems="center";
newdivs.style.width="150px";
newdivs.style.height="150px";
newdivs.style.backgroundColor="yellow";
newdivs.style.color="black";
newdivs.style.justifyContent="center";
newdivs.style.display="flex";//div ulla crt ha text varum

//create a 12 div elements boxes--> pratice 2

const creatediv=(parent,iter)=>{
    const newdiv=document.createElement("div");

newdiv.textContent=iter;
newdiv.style.alignItems="center";
newdiv.style.width="100px";
newdiv.style.height="100px";
newdiv.style.backgroundColor="yellow";
newdiv.style.color="black";
newdiv.style.justifyContent="center";
newdiv.style.display="flex";
parent.append(newdiv);
}
for (i=0;i<12;i++){
    creatediv(view1,i);//fuction loop ulla call pandrom
}
------------------------------------------------------------------------------------------------------------------------
*/