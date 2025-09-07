/*
//creating a card-->
//  EVENT LISTENERS
view2.style.display="flex";//view2 va display paniyachi
const h2=document.querySelector("h2");
const newdiv=document.createElement("div");
view2.append(newdiv);
newdiv.append(h2);
newdiv.style.alignItems="center";
newdiv.style.width="150px";
newdiv.style.height="150px";
newdiv.style.backgroundColor="yellow";
h2.style.color="black";
h2.style.alignItems="center";
h2.style.justifyContent="center"
newdiv.style.justifyContent="center";
newdiv.style.display="flex";
//syntax==> .addEventListener(event,function,usecase)
const dosomething=()=>{
    alert("doing something");
}
//1....ADDING EVENT LISTENER
h2.addEventListener("click",dosomething,false);
h2.removeEventListener("click",dosomething,false);
//newdiv.addEventListener("click",dosomething,false)
//view2.addEventlistener("click",dosomething,false);
*/
/*
//using anonomous function
view2.style.display="flex";//view2 va display paniyachi
const h2=document.querySelector("h2");
const newdiv=document.createElement("div");
view2.append(newdiv);
newdiv.append(h2);
newdiv.style.alignItems="center";
newdiv.style.width="150px";
newdiv.style.height="150px";
newdiv.style.backgroundColor="yellow";
h2.style.color="black";
h2.style.alignItems="center";
h2.style.justifyContent="center"
newdiv.style.justifyContent="center";
newdiv.style.display="flex";

//2...readystatechange-->oading complete acha ilaya check pannum
document.addEventListener("readystatechange",
(event)=>{
if(event.target.readystate==="complete"){
    console.log("complete!");
    initApp();
}});

//3.....bubblingUp phase
**/  /*
view2.style.display="flex";//view2 va display paniyachi
const h2=document.querySelector("h2");
const newdiv=document.createElement("div");
view2.append(newdiv);
newdiv.append(h2);
newdiv.style.alignItems="center";
newdiv.style.width="150px";
newdiv.style.height="150px";
newdiv.style.backgroundColor="yellow";
h2.style.color="black";
h2.style.alignItems="center";
h2.style.justifyContent="center"
newdiv.style.justifyContent="center";
newdiv.style.display="flex";
//type of method nesessary before startiong app(******)
document.addEventListener('DOMContentLoaded', (event) => {
    initApp();
});
    const initApp = () => {
        const view = document.querySelector("#view2"); // Use the correct 'view' variable
        const newdiv = view.querySelector("div");       // Use 'view' here as well
        const h2 = view.querySelector("h2");
    
        view.addEventListener("click", (event) => {
            view.style.backgroundColor = "black";
        });
    
        newdiv.addEventListener("click", (event) => {   // Use 'newdiv' here
            newdiv.style.backgroundColor = "purple";
        });
    
        h2.addEventListener("click", (event) => {
            event.target.textContent = "hello world"; // Corrected typo
        });
    };
*/    /*
//4.....true means capture phase
view2.style.display="flex";//view2 va display paniyachi
const h2=document.querySelector("h2");
const newdiv=document.createElement("div");
view2.append(newdiv);
newdiv.append(h2);
newdiv.style.alignItems="center";
newdiv.style.width="150px";
newdiv.style.height="150px";
newdiv.style.backgroundColor="yellow";
h2.style.color="black";
h2.style.alignItems="center";
h2.style.justifyContent="center"
newdiv.style.justifyContent="center";
newdiv.style.display="flex";
document.addEventListener('DOMContentLoaded', (event) => {
    initApp();
});
const initApp = () => {
    const view = document.querySelector("#view2"); // Use the correct 'view' variable
    const newdiv = view.querySelector("div");       // Use 'view' here as well
    const h2 = view.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "black";
    },true);

    newdiv.addEventListener("click", (event) => {   // Use 'newdiv' here
        newdiv.style.backgroundColor = "purple";
    },true);

    h2.addEventListener("click", (event) => {
        event.target.textContent = "hello world";},true)
    };//child press pana yelamae change agathu, parent press pana parent mattum change aguthu
*/
/*
//5....event.stopPropagation//ethukuaptm vara event perform agathuh
view2.style.display="flex";//view2 va display paniyachi
const h2=document.querySelector("h2");
const newdiv=document.createElement("div");
view2.append(newdiv);
newdiv.append(h2);
newdiv.style.alignItems="center";
newdiv.style.width="150px";
newdiv.style.height="150px";
newdiv.style.backgroundColor="yellow";
h2.style.color="black";
h2.style.alignItems="center";
h2.style.justifyContent="center"
newdiv.style.justifyContent="center";
newdiv.style.display="flex";
document.addEventListener('DOMContentLoaded', (event) => {
    initApp();
});
const initApp = () => {
    const view = document.querySelector("#view2"); // Use the correct 'view' variable
    const newdiv = view.querySelector("div");       // Use 'view' here as well
    const h2 = view.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "black";
    },true);

    newdiv.addEventListener("click", (event) => { 
        event.stopPropagation();  //h2 work agathu
        newdiv.style.backgroundColor = "purple";
    },true);
*//*
//6...claslist-->,athi mathi colour change aganum
    
        view2.style.display="flex";//view2 va display paniyachi
        const h2=document.querySelector("h2");
        const newdiv=document.createElement("div");
        view2.append(newdiv);
        newdiv.append(h2);
        newdiv.style.alignItems="center";
        newdiv.style.width="150px";
        newdiv.style.height="150px";
        newdiv.style.backgroundColor="yellow";
        h2.style.color="black";
        h2.style.alignItems="center";
        h2.style.justifyContent="center"
        newdiv.style.justifyContent="center";
        newdiv.style.display="flex";
        document.addEventListener('DOMContentLoaded', (event) => {
            initApp();
        });
        const initApp = () => {
            const view = document.querySelector("#view2"); // Use the correct 'view' variable
            const newdiv = view.querySelector("div");       // Use 'view' here as well
            const h2 = view.querySelector("h2");
        
            view.addEventListener("click", (event) => {
                view.classList.add("white");
                view.classList.remove("darkblue");// Make sure you have darkblue in your CSS
            });
        
            newdiv.addEventListener("click",(event)=>{
                newdiv.style.backgroundColor = "purple";
            });
        
            h2.addEventListener("click", (event) => {
                event.target.textContent = "hello world";});}
                */
//7.. toogle (click and change the colour)
//DOMCOntentLoaded-->event 
