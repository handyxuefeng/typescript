"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1.类同时继承类和接口
var A;
(function (A) {
    var Person = /** @class */ (function () {
        function Person() {
            this.num = '';
            this.name = '';
        }
        Person.prototype.getUserName = function () {
        };
        return Person;
    }());
    //一个类只能继承一个父类，但可以继承多个接口
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student() {
            var _this = _super.call(this) || this;
            //实现继承Action中的属性和方法
            _this.action = "";
            return _this;
        }
        Student.prototype.add = function () { };
        Student.prototype.delete = function () { };
        Student.prototype.update = function () { };
        Student.prototype.search = function () { };
        //实现继承Speaker中的speak()方法
        Student.prototype.speak = function () {
        };
        Student.prototype.print = function () {
            console.log(this.action);
        };
        return Student;
    }(Person));
    var stu = new Student();
    stu.action = '学生表操作';
    stu.print();
})(A || (A = {}));
//2 .接口继承接口
var B;
(function (B) {
    var Entity = /** @class */ (function () {
        function Entity() {
            //实现继承接口中的方法
            this.name = '';
        }
        Entity.prototype.add = function () { };
        ;
        Entity.prototype.delete = function () { };
        ;
        Entity.prototype.update = function () { };
        ;
        Entity.prototype.search = function () { };
        ;
        Entity.prototype.print = function () {
            console.log(this.name);
        };
        return Entity;
    }());
})(B || (B = {}));
//3. 函数类型接口
var C;
(function (C) {
    //通过接口，在定义方法是可对传入的参数和函数返回值进行约束;
    var calcPrice = function (price) {
        return price * 100;
    };
    var result = calcPrice(10);
    console.log("折扣为:discount = ", result);
})(C || (C = {}));
//4.可索引接口
var D;
(function (D) {
    var arr1 = [1, 2];
    console.log('arr1 = ', arr1);
    var arr2 = { 1: "A0001", name: "jackie" };
    console.log("arr2 = ", arr2);
    var arr3 = ["1", 20, {}, function () { }];
    console.log("arr3 = ", arr3);
})(D || (D = {}));
//5.构造函数的类型
var E;
(function (E) {
    var Animal = /** @class */ (function () {
        function Animal(_name) {
            this.name = _name;
        }
        return Animal;
    }());
    function getAnimalEnity(clazz, name) {
        return new clazz(name);
    }
    var animal = getAnimalEnity(Animal, "Cat");
    console.log("name = ", animal.name);
    var animal2 = getAnimalEnity(Animal, "Dog");
    console.log("name = ", animal2.name);
    var Person = /** @class */ (function () {
        function Person(opts) {
            this.num = opts.num;
            this.name = opts.name;
            this.sex = opts.sex;
            this.age = opts.age;
        }
        return Person;
    }());
    var getPersonEntity = function (clazz, opts) {
        return new clazz(opts);
    };
    var person1 = getPersonEntity(Person, { num: 'A0001', name: "jackie", sex: "F", age: 10 });
    console.log("person1 = ", person1);
})(E || (E = {}));
