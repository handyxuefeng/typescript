/**
 * let name:string = "jackie";  //因为global，window上面有这个变量name,也即window.name
 *  Cannot redeclare block-scoped variable 'name'. 无法重复生命块级作用域变量 name
 * 当定义的变量和global上的变量重复定义时，会报错，则要通过export,import实现块级作用域
 */

import { type } from "os";



//1. 字符串类型
let ss:string = '11111';   //定义ss就没有关系，因为global上面没有

//2 数字类型(number)
let x:number = 1;

//3 数组类型(string)
class Animal {
    name:string
    constructor(name:string) {
        this.name = name;
    }
}

let arr: number[] = [1,2,3,4,5,6];
let num:Array<number> = [1,2,3,4,5,6,7,8,9]; //通过泛型执行数组每一项的类型
let person:Array<string> = ['linda','susan'];
let fn:Array<Function> = [(m:any,n:any)=>m+n,function(a:number,b:number){return a + b;}];

let dog = new Animal('cat');
let pig = new Animal('peiqi')
let animal: Array<Animal> = [dog, pig]; 


/***
 4. 元组类型(tuple)
 在 TypeScript 的基础类型中，元组（ Tuple ）表示一个已知数量和类型的数组
 let people:[string,string,string,number] 分别定义 学号，姓名，性别，年龄
*/

let people:[string,string,string,number] = ["A0001","jackie","sex",10];
console.log('people.length = ',people.length);

//5.枚举类型(enum) 
enum Gender{
    GIRL,
    BOY
}
console.log(`李雷是${Gender.BOY}`);
console.log(`韩梅梅是${Gender.GIRL}`);

enum Week{
    MONDAY=1,
    TUESDAY=2
}
console.log(`今天是星期${Week.MONDAY}`);

//常数枚举
const enum Colors {
    Red,
    Yellow,
    Blue
}
let myColors = [Colors.Red, Colors.Yellow, Colors.Blue];

/**
 6.任意类型any
   any就是可以赋值给任意类型，第三方库没有提供类型文件时可以使用any
   类型转换遇到困难时，数据结构太复杂难以定义
*/

let root: any = '123131313'
    root = 123;
    root = true;

/**
 7.null 和 undefined 类型
 null 和 undefined 是其它类型的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined
 */


let m:number | string | boolean | Array<string> | number[] | undefined | null;
    m = 1;
    m = '1';
    m = false;
    m = ['1','2'];
    m = [1,2];
    m = undefined;
    m = null;

/*
8 void 类型 
void 表示没有任何类型
当一个函数没有返回值时，TS 会认为它的返回值是 void 类型。
当我们声明一个变量类型是 void 的时候，它的非严格模式下仅可以被赋值为 null 和 undefined;  
*/  

function greeting(name:string):void {
    console.log("hello", name);
}
greeting('linda');

let description = function(obj:Object):void {
    console.log('信息= ',JSON.stringify(obj));
}
description({a:1,b:2,c:3});


//9. never  类型

// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function error(message: string): never {
    throw new Error(message);
}

// 由类型推论得到返回值为 never
function fail() {
    return new Error("Something failed");
}

// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function infiniteLoop(): never {
    while (true) {}
}

/**
 * 10. 类型推论 
   是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
   定义时未赋值就会推论成any类型
   如果定义的时候就赋值就能利用到类型推论
 */
let xx;
xx =1;
xx = '1';
xx = false;
//xx = [1,2,4];
console.log(typeof xx);

/**
 * 11. 包装对象（Wrapper Object）
 */
let personName = "jackie";
let wrapPerson = new String(personName);
console.log(personName.toUpperCase());
console.log(wrapPerson.toUpperCase());

/**
 * 11.  联合类型
 * 联合类型上只能访问两个类型共有的属性和方法
 */
let name4: string | number;
name4 = 3;
name4 = "linda";
console.log(name4.toUpperCase());

/**
 * 12 . 字符串、数字、布尔值字面量
 * type rules = 1 | '1' | boolea
 */
type Lucky<T> = T;
let lucky: Lucky<any> = '123'; 
    lucky  = 2;
    lucky = false;
    lucky = [1,2,3];
console.log("lucky = ", lucky);


type rules = number | string | boolean;
let  vari : rules = '1234567';
     vari = 1;
     vari = false;
console.log("vari = ", vari);

