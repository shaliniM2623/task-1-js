//task 1

let a = "Name:"
let b = "shalini"
console.log(`${a} ${b}`);

let c = "ID :"
let d = "EMP101"
console.log(`${c} ${d}`);

let e = "Department :"
let f = "Development"
console.log(`${e} ${f}`);

let g = "Salary :"
let h = "50000"
console.log(`${g} ${h}`);

//let i= confirm("are you permanent employee")
//console.log("Permanent: "+ i);


//task 2

let skill = ["HTML","CSS","JavaScript","React","Git","Node.js"]
console.log(skill[0]);
console.log(skill[2]);
console.log(skill[5]);
console.log(skill);


//task 3

var j="Company Name:"
var k="Stackly"
console.log(`${j}${k}`);

let l="Location :"
let m="salem"
console.log(`${l} ${m}`);

let n=["Technology 1 ","Technology 2","Technology 3","Technology 4"]
console.log(n[1]);
console.log(n);


//task 4

let bsalary= 30000;
let bonus=5000;
let tsal= bsalary+bonus
let tax= 3000
let fnl = bsalary+bonus
console.log("Total Salary :"+tsal);
console.log("tax :" +tax);
console.log("Final salary :" +fnl);

//task 5

let attendane =76
attendane >= 75 ? console.log("ELIGIBLE GOR EXAM"): console.log("NOT ELIGIBLE");

//Task 6

let usname ="admin";
let pas = "12345";
(usname =="admin" && pas == "12345") && console.log("Login successful");
(usname !="admin" && pas != "12345") && console.log("Inalid Credintials");
 

//task 7

let pname ="laptop"
let pprice="45000"
let qty= 2
let tot=pprice*qty


console.log("Produt Nmae :" + pname);
console.log("Price :" + pprice);
console.log("Quantity :" +qty);
console.log("Total : "+ tot);

//task 8

//Let visitors = 100


//pre increment operator
let o=99
let p= ++o
console.log(p);

//post increment operator
let q= 100
let r= q++
console.log(r);


//pre decrement operator
let s= 101
let t= --s
console.log(t);


//post decrement operator
let u=100
let v=u--
console.log(v);


//task 9

// console.log(10 == "10");  true
// console.log(10==="10");    false
// console.log(20!="20");`  false
// console.log(20!=="20");  true
// console.log(5<10);   true
// console.log(15>=20); false
// console.log(100<=100);   true



//task 10   

//employee portal

let w = "Name:"
let x = "shalini"
console.log(`${w} ${x}`);

let cc = "ID :"
let dd = "EMP101"
console.log(`${cc} ${dd}`);

let ee = "Department :"
let ff = "Development"
console.log(`${ee} ${ff}`);

let exp = "3 years"
console.log("Experiene :"+exp);

let gg = "Salary :"
let hh = "50000"
console.log(`${gg} ${hh}`);

let bns=5000
console.log("Bonus : "+bns);

let fsal =55000
console.log("Final Salary :"+fsal);

let skil = ["HTML","CSS","JavaScript","React","Git","Node.js"]
console.log("Skill :"+skil);


let atttendane ="92%"
console.log("Attendance :"+atttendane);


let exm =76
exm >= 75 ? console.log("Exam Status :" +"ELIGIBLE GOR EXAM"): console.log("Exam Status :"+"NOT ELIGIBLE");

let lgn =76
lgn >= 75 ? console.log("Login Status :" +"SUCCESS"): console.log("Login Status :"+"NOT ELIGIBLE");

let lctn = "coimbatore"
console.log("Location :"+lctn);


//bonus task

//shopping bill generator

const itm1=prompt("Enter the name of the item 1")
const itm1_price=prompt("Enter the price of item 1")
const itm1_qty=prompt("Enter the quantity of item1")
const itm1_total=itm1_price*itm1_qty

const itm2=prompt("Enter the name of the item 2")
const itm2_price=prompt("Enter the price of item 2")
const itm2_qty=prompt("Enter the quantity of item2")
const itm2_total=itm2_price*itm2_qty

const item1={name: itm1, prie:itm1_price, quantity : itm1_qty,total : itm1_total};
const item2={name: itm2, prie:itm2_price, quantity : itm2_qty,total : itm2_total};
console.log(item1);
console.log(item2);


const tcart = [itm1_total + itm2_total];

console.log(tcart);

alert(" thankyou!! keeping shopping")




