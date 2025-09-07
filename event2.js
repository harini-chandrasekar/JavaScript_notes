//event listener
//document(view,h2,p,etc elemets).getEventListener(event,function,usecase)
//use case la true pota bubbling down(changes from top to pottom)
//true na bubbling down, false na bubbling up or empty use case
//div, h2,view ku badhil event.target podoren
//event.stopPropagation(); inside function ,event.preventDefault();-->execute only clicked event
//mela irunthu onu ona click panalam but parent la irunthu child ku pogathi even true or false 

//CLASSLIST-->css la property define pana color mattum dha vaarum
//remove and add in classlist ku badhil toggle podanaum ---.changes itae irukum color
//text ku toggle poda mudiyathu becasue athu css property illa  soo--> if statement ot ternary operator 
//------------------------------------------------------------------------------------------------------------------
//VARIOUS EVENTS ( mouse events, key events ) alter pani perform panalam 
/*
document.addEventListener("readystatechange",(event=>{
    if(event.target.readyState==="complete"){
    console.log("complete");
initApp();}
}));

const initApp=()=>{
const view=document.getElementById("view2");
const div=view.querySelector("div");
const h2=div.querySelector("h2");
view.style.display="flex";
view.addEventListener("dblclick",(event)=>{
   view.classList.toggle("purple");
   view.classList.toggle("darkblue");
   event.preventDefault();
   
},true);
div.addEventListener("mousemove",(event)=>{
    div.classList.toggle("green");
    div.classList.toggle("black");
    event.preventDefault();
}),true;
h2.addEventListener("click",(event)=>{
    const mytext=event.target.textContent;
    mytext==="progress"? console.log(h2.textContent="completed"):console.log(h2.textContent="progress")
    event.stopPropagation();
    event.preventDefault();
},true);
*/
/*
document.addEventListener("readystatechange",(event=>{
    if(event.target.readyState==="complete"){
    console.log("complete");
initApp();}
}));
const initApp=()=>{
const view3=document.querySelector("#view3");
const myform=view3.querySelector("#myForm");
myform.addEventListener("submit",(event)=>{
    console.log("form submitted");
    event.preventDefault();
   }
);
view3.style.display="flex";
myform.style.backgroundColor="purple";
};
*/

/* -->for importing the class in module file
class pizza {
    constructor(){//constructor oru fun
        this.size="medium";
        this.crust="original";
        }
        bake(){//bake oru fun intha mari nareya function declare panalam adhoda name koda() pota podhum
            return `baking a ${this.size} size ${this.crust} crust pizza`;
        }
    }
const anotherobj=new pizza();//anotherobj-->object name kulla pizza class iruku
//console.log(anotherobj.bake());//epo object name vechi access panikalam
//console.log(anotherobj);
export default pizza;
*/