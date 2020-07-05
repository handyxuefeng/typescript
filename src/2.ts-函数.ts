/**
 * 函数的定义
*/

//用type来定义函数类型 或者 别名 
type GetUserName = (firstName:string,lastName:string) => string; //定义一个函数类型，函数返回值为string

let printUserName: GetUserName = function(f:string,l:string):string {
    console.log(f +  l);
    return f + l;
}
printUserName('刘','思思');


type getPersonInfo = (num:string,name?:string,sex?:string, age?:number) => {
    num:string,
    name:string,
    sex:string,
    age:number
};
let getJsonObj: getPersonInfo = function (num:string,name?:string,sex?:string, age?:number):any {
    return {
        num,name,sex,age
    }
}



//1.没有返回值
function greeting(str:string):void{
    console.log('hello' + str);
}

//2.有返回值
function sum(a:number,b:number):number{
   return a+b;
}
function Gerenate(a:string, b:number) : any {
    return `${a}---${b}`;
}
let newStr = Gerenate('11111',88888);
console.log("newStr = ", newStr);

//3.可选参数
function printPerson(idcard:string,num?:string,name?:string,sex?:string,age?:number):any {
    console.log(idcard, "num = ", num, "name=", name, "sex=", sex, "age=", age);
}
printPerson('123','jackie');

//4.默认参数
function ajax(url: string, method: string = "GET") {
  console.log(url, method);
}
ajax("/users");


//5.剩余参数
function add(...nums: number[]) {
    console.log(nums);
  return nums.reduce((val, item) => (val += item), 0);
}
console.log(add(1, 2, 3));

function print(x:number,...nums:Array<number>) {
    console.log(x + '---->' + nums);
}
print(1,2,3,4,5,6,7);

/**
 * 6.函数重载
 * 在Java中的重载，指的是两个或者两个以上的同名函数，参数不一样
 * 在TypeScript中，表现为给同一个函数提供多个函数类型定义
 */

let obj: any = {};
function attr(val: string): void;
function attr(val: number): void;
function attr(val:boolean):void;
function attr(val: any): void {
  if (typeof val === "number") {
    obj.age = val;
  } else {
    obj.name = val;
  }
}
attr("2123");
attr(9);
attr(true);
console.log(obj);


function getResult(x: number,y:number): void;
function getResult(x: string,y:string): void;
function getResult(x:any,y:any): any {
    if(typeof x =='number' &&  typeof y ==='number'){
        console.log(x + y);
    }
    else if(typeof x =='string' &&  typeof y ==='string') {
         console.log('111111= ', x + y);
    }else if(typeof x =='object' &&  typeof y ==='object'){
        return {x,y};
    }else{
        return 'any';
    }
}

getResult('1','1') 
