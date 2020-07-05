"use strict";
/**
 * 函数的定义
*/
var printUserName = function (f, l) {
    console.log(f + l);
    return f + l;
};
printUserName('刘', '思思');
var getJsonObj = function (num, name, sex, age) {
    return {
        num: num, name: name, sex: sex, age: age
    };
};
//1.没有返回值
function greeting(str) {
    console.log('hello' + str);
}
//2.有返回值
function sum(a, b) {
    return a + b;
}
function Gerenate(a, b) {
    return a + "---" + b;
}
var newStr = Gerenate('11111', 88888);
console.log("newStr = ", newStr);
//3.可选参数
function printPerson(idcard, num, name, sex, age) {
    console.log(idcard, "num = ", num, "name=", name, "sex=", sex, "age=", age);
}
printPerson('123', 'jackie');
//4.默认参数
function ajax(url, method) {
    if (method === void 0) { method = "GET"; }
    console.log(url, method);
}
ajax("/users");
//5.剩余参数
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log(nums);
    return nums.reduce(function (val, item) { return (val += item); }, 0);
}
console.log(add(1, 2, 3));
function print(x) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    console.log(x + '---->' + nums);
}
print(1, 2, 3, 4, 5, 6, 7);
/**
 * 6.函数重载
 * 在Java中的重载，指的是两个或者两个以上的同名函数，参数不一样
 * 在TypeScript中，表现为给同一个函数提供多个函数类型定义
 */
var obj = {};
function attr(val) {
    if (typeof val === "number") {
        obj.age = val;
    }
    else {
        obj.name = val;
    }
}
attr("2123");
attr(9);
attr(true);
console.log(obj);
function getResult(x, y) {
    if (typeof x == 'number' && typeof y === 'number') {
        console.log(x + y);
    }
    else if (typeof x == 'string' && typeof y === 'string') {
        console.log('111111= ', x + y);
    }
    else if (typeof x == 'object' && typeof y === 'object') {
        return { x: x, y: y };
    }
    else {
        return 'any';
    }
}
getResult('1', '1');
