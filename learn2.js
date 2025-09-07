/*
//OBJECTS---key,values,different data types
const myobj={
    name:"harini"}
    console.log(myobj.name);
    console.log(myobj);
myobj.rollno=22931;
console.log(myobj);

    const anotherobj = {//obj inside obj
        studname: "dharani",
        studroll: 615,
        studper: { 
          maths: "80%", 
          science: '90%'
        },
        studarr : ['studies','academic','games']
    };
    console.log(anotherobj);
    console.log(anotherobj.studarr);
    console.log(anotherobj.studper);//dot notation
    console.log(anotherobj['studroll']);//another notation , way of printing values

    const Anotherobj = {
        studname: "dharani",
        studroll: 615,
        studper: { 
          maths: "80%", 
          science: '90%'
        },
        studarr : ['studies','academic','games'],
        action:function(){
            return `the studname is${this.studper.maths}`;
        }
    };
    console.log(Anotherobj.action());//function ha dot notation la podanum na () irukanum
    //inherit in objects
    const AnotherObj = {
        studname: "dharani",
        studroll: 615,
        studper: { 
          maths: "80%", 
          science: '90%'
        },
        studarr : ['studies','academic','games'],
        action:function(){
            return `the studname is${this.studper.maths}`;
        }
    };
    console.log(AnotherObj);
    const car=Object.create(AnotherObj);//car andra pudhu object kulla already irukara obj edothunu vantom
    car.studid=1234;//adding key on new car obj
    console.log(car);
    console.log(car.action());
    console.log(car.studid);
    //overwrite
    car.action=function(){
        return `the studname is harini`;
    }
    console.log(car.action());
const teach=Object.create(car);//new teach nu oru obj create panii athla car oda values podalam adha inherit ok...
console.log(teach);
console.log(teach.studarr);

//keys and values mattum print panalam
console.log(Object.keys(AnotherObj));
console.log(Object.values(anotherobj));
//keyword vechi key and values ha print panalam----> for in 
for(let property in AnotherObj){
    console.log(`${property},is ${AnotherObj[property]}`);
}
//delete and add -->keys and values
delete AnotherObj.studarr//delete+
console.log(AnotherObj);
AnotherObj.address="hhhaaaa";//add
console.log(AnotherObj.address);
delete AnotherObj.action//delete  and no function bracket for function
console.log(AnotherObj);
//check property
console.log(AnotherObj.hasOwnProperty('studarr'));//false because (studarr,action) hum delete paniyachi
//particular value edokalam//destructuring the object
const {studname,studarr,studid,studper,studroll}=AnotherObj;
console.log(studname);
//OR
function sings({studid}){
    return studid;
}
console.log(sings(car));//or
function sings(studid){return studid};
console.log(sings(car));
------------------------------------------------------------------------------------------------------------------------------
//CLASSSES
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
console.log(anotherobj.bake());//epo object name vechi access panikalam
console.log(anotherobj);

//(variable ha declare panum )value direct ha kodkalama 
class pizza {
    constructor(typepizza,sizepizza,crustpizza){//constructor oru fun
        this.type=typepizza;
        this.size=sizepizza;
        this.crust=crustpizza;
        }
        bake(){//bake oru fun intha mari nareya function declare panalam adhoda name koda() pota podhum
            return `baking a ${this.size} size ${this.crust}  ${this.type} crust pizza`;
        }
    }
const anotherpizza=new pizza("peeprio","medium","original");//anotherobj-->object name kulla pizza class iruku
console.log(anotherpizza.bake());//epo object name vechi access panikalam
console.log(anotherpizza);
----------------------------------------------------------------------------------------------------------------------------------------
// GET AND SET METHODS() or function()--> used to alter any varibale oda value ,these methor is used for which variable may alter
class pizza {
    constructor(typepizza,sizepizza,crustpizza,toppingspizza){//constructor oru fun
        this.type=typepizza;
        this.size=sizepizza;
        this.crust=crustpizza;
        this.toppings=toppingspizza;
    }
    bake() {//bake oru fun intha mari nareya function declare panalam adhoda name koda() pota podhum
        return `baking a ${this.size} size ${this.crust}  ${this.type} crust pizza with ${this.toppings}`;
    }

     gettoppings() {
            return this.toppings;
        }
    settoppings(toppingspizza) {
            return this.toppings=toppingspizza;
        }

        }  
const anotherpizza=new pizza("peeprio","medium","original");//anotherobj-->object name kulla pizza class iruku
console.log(anotherpizza.settoppings("tomato"));
console.log(anotherpizza.gettoppings());
console.log(anotherpizza);
console.log(anotherpizza.bake());
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//(INSTEAD OF REPLACE, USING STORE)more varibale ha replace panama store panalam
class pizza {
    constructor(typepizza, sizepizza, crustpizza, toppingspizza) {
        this.type = typepizza; // Added this.type
        this.size = sizepizza;
        this.crust = crustpizza;
        this.toppings = toppingspizza || []; // Initialize to an empty array if no toppings are provided
    }

    bake() {
        return `baking a ${this.size} ${this.type} crust pizza with ${this.toppings}`;
    }

    gettoppings() {
        return this.toppings;
    }

    settoppings(toppingspizza) {
        return  this.toppings.push(toppingspizza); //push returns the new length of the array
         // Return the array for better chaining
    }
}


class superpizza extends pizza {
    constructor(sizepizza, crustpizza,toppingspizza) { // Add other parameters
        super("margirita", sizepizza, crustpizza, []); // Call super with all required arguments
        this.size = sizepizza; // You can still override if needed
    }

    bake() {
        return `baking a ${this.size} size ${this.crust} ${this.type} with ${this.toppings}`;
    }
}

const myspecialpizza = new superpizza("medium", "thin"); // Pass size and crust
console.log(myspecialpizza.settoppings("tomato"));
myspecialpizza.settoppings("eggs");
console.log(myspecialpizza.bake()); // Corrected method name
------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
class animal{
    constructor(dogname,dogcolor){
        this.name=dogname;
        this.color=dogcolor;
    }
    getdogname(){
        return this.dogname;
    }
    setdogname(dogname){
        return this.name=dogname;
    }
}
class specialdog extends animal{
    constructor(dogname,dogcolor,dogbread,dognature){
        super(dogname,dogcolor);// child la iladhathu yella property hum call panum
        this.nature=dognature;
        this.bread=dogbread;
    }
    message(){
        return `this dog is ${this.name} and color is ${this.color}, with ${this.bread} bread and with ${this.nature} `;
    }
}
const myAobj=new animal("rover","black");
const myobj=new specialdog("dharani","black","lab","soft");
console.log(myobj.message());
//E COMMERCE EXAMPLE
class product{
    constructor(productname,productprice,percentage){
        this.name=productname;
        this.price=productprice;
        this.percent=percentage;
    }
    calculatediscount(){
        const discount=this.price*(this.percent/100);
        return discount;
    }
    displayinfo(){
        return`${this.name}--${this.price}--${this.calculatediscount()}`;
    }
}
class lipstick extends product{
    constructor(productname,productprice,percentage,lipstickcolor,lipstickbrand){
        super(productname,productprice,percentage);
        this.color=lipstickcolor;
        this.brand=lipstickbrand;
    }
    displayinfo(){
        return `${super.displayinfo()} --${this.color}--${this.brand}`;
    }
}
class cream extends product{
    constructor(productname,productprice,percentage,creambrand){//cons kulla parent oda propert koda vaganum
        super(productname,productprice,percentage)//super la ena vagaromo athu dha inherit agum
        this.brand=creambrand;
    }
    displayinfo(){
        return ` ${super.displayinfo()}--${this.brand}`;
    }
}
const obj=new product("helmet",1000,10);
const Aobj=new lipstick("lipstick",1500,20,"pink","lakme");
const Bobj=new cream("cream",500,40,"dermodoc");
console.log(obj.displayinfo());
console.log(Aobj.displayinfo());
console.log(Bobj.displayinfo());
---------------------------------------------------------------------------------------------------------------------------------------------------------
//PUBLIC AND PRIVATE PROPERTY
//public na veliya irunthu . poto access panalam
//private na ula mattum dha access pana mudium
class pizza{
    crust="original";//public
    #sause="tomato";//private 3 la initiate agum
    constructor(pizzacrust,pizzassuse){
        this.crust=pizzacrust;
        this.sause=pizzassuse;
    }
    getcrust(){
        return this.crust;
    }
    setcrust(pizzacrust){
        return this.crust=pizzacrust;
    }
    bake(){
        return `baking a ${this.crust} pizza with ${this.#sause} sausse`;
    }
}
const Obj=new pizza("arti","chilli")// sause ku undefined nu varum because private value ha matha mudiyathu veliya ok va

console.log(Obj.bake());//tomato dha varum because athu private no change 
-------------------------------------------------------------------------------------------------------------------------------------------------
// JSON --> JAVA SCRIPT OBJECT ORIENTED LANGUAGE
*/
//MODULES
//first export panito aprm import pananum
//any one function default,necessray (live server irukanum),html page la type modula ha irukanum
//two methods of export iruku 
const earnmoney=()=>{//2....normal function munadi direct ha default podalam
    return "earn money";
};
const givemoney=()=>{
    return "give money";
}; 
const growmoney=()=>{
    return "grow money";
};
export default earnmoney;//1...function vechi default ha oru function mattum export panalam
export {givemoney,growmoney};//matha function ha nomral ha export panum
