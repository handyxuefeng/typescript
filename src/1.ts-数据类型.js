"use strict";
/**
 * let name:string = "jackie";  //因为global，window上面有这个变量name,也即window.name
 *  Cannot redeclare block-scoped variable 'name'. 无法重复生命块级作用域变量 name
 * 当定义的变量和global上的变量重复定义时，会报错，则要通过export,import实现块级作用域
 */
Object.defineProperty(exports, "__esModule", { value: true });
//1. 字符串类型
var ss = '11111'; //定义ss就没有关系，因为global上面没有
//2 数字类型(number)
var x = 1;
//3 数组类型(string)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var arr = [1, 2, 3, 4, 5, 6];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //通过泛型执行数组每一项的类型
var person = ['linda', 'susan'];
var fn = [function (m, n) { return m + n; }, function (a, b) { return a + b; }];
var dog = new Animal('cat');
var pig = new Animal('peiqi');
var animal = [dog, pig];
/***
 4. 元组类型(tuple)
 在 TypeScript 的基础类型中，元组（ Tuple ）表示一个已知数量和类型的数组
 let people:[string,string,string,number] 分别定义 学号，姓名，性别，年龄
*/
var people = ["A0001", "jackie", "sex", 10];
console.log('people.length = ', people.length);
//5.枚举类型(enum) 
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log("\u674E\u96F7\u662F" + Gender.BOY);
console.log("\u97E9\u6885\u6885\u662F" + Gender.GIRL);
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 2] = "TUESDAY";
})(Week || (Week = {}));
console.log("\u4ECA\u5929\u662F\u661F\u671F" + Week.MONDAY);
var myColors = [0 /* Red */, 1 /* Yellow */, 2 /* Blue */];
/**
 6.任意类型any
   any就是可以赋值给任意类型，第三方库没有提供类型文件时可以使用any
   类型转换遇到困难时，数据结构太复杂难以定义
*/
var root = '123131313';
root = 123;
root = true;
/**
 7.null 和 undefined 类型
 null 和 undefined 是其它类型的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined
 */
var m;
m = 1;
m = '1';
m = false;
m = ['1', '2'];
m = [1, 2];
m = undefined;
m = null;
/*
8 void 类型
void 表示没有任何类型
当一个函数没有返回值时，TS 会认为它的返回值是 void 类型。
当我们声明一个变量类型是 void 的时候，它的非严格模式下仅可以被赋值为 null 和 undefined;
*/
function greeting(name) {
    console.log("hello", name);
}
greeting('linda');
var description = function (obj) {
    console.log('信息= ', JSON.stringify(obj));
};
description({ a: 1, b: 2, c: 3 });
//9. never  类型
// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function error(message) {
    throw new Error(message);
}
// 由类型推论得到返回值为 never
function fail() {
    return new Error("Something failed");
}
// 返回never的函数 必须存在 无法达到（ unreachable ） 的终点
function infiniteLoop() {
    while (true) { }
}
/**
 * 10. 类型推论
   是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
   定义时未赋值就会推论成any类型
   如果定义的时候就赋值就能利用到类型推论
 */
var xx;
xx = 1;
xx = '1';
xx = false;
//xx = [1,2,4];
console.log(typeof xx);
/**
 * 11. 包装对象（Wrapper Object）
 */
var personName = "jackie";
var wrapPerson = new String(personName);
console.log(personName.toUpperCase());
console.log(wrapPerson.toUpperCase());
/**
 * 11.  联合类型
 * 联合类型上只能访问两个类型共有的属性和方法
 */
var name4;
name4 = 3;
name4 = "linda";
console.log(name4.toUpperCase());
var lucky = '123';
lucky = 2;
lucky = false;
lucky = [1, 2, 3];
console.log("lucky = ", lucky);
var vari = '1234567';
vari = 1;
vari = false;
console.log("vari = ", vari);
