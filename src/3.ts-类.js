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
var A;
(function (A) {
    var Person = /** @class */ (function () {
        //构造函数
        function Person(opts) {
            this.num = opts.num;
            this.name = opts.name;
            this.sex = opts.sex;
            this.age = opts.age;
        }
        Person.prototype.getUserName = function () {
            return this.name;
        };
        Object.defineProperty(Person.prototype, "UserName", {
            //属性访问器getter
            get: function () {
                console.log("属性访问 = ");
                return this.name;
            },
            //属性存取器setter
            set: function (newValue) {
                console.log("属性设置 = ", newValue);
                this.name = newValue;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var person = new Person({ num: "A001", name: "jackie", sex: "F", age: 10 });
    console.log("1.", person.getUserName);
    console.log("2.", person.UserName);
    person.UserName = "susan";
    console.log("3.", person.UserName);
    /**
     * 通过public 把属性设置到类属性的属性上
        class People {
            constructor(public name:string, public sex:string, public age:number) {
                this.name = name ;
                this.sex = sex;
                this.age = age;
            }
        }
        等价于下面的写法
        class People {
            name:string;
            sex:string;
            age:number;
            constructor(name,sex,age) {
                this.name = name ;
                this.sex = sex;
                this.age = age;
            }
        }


    *
    */
    var People = /** @class */ (function () {
        function People(name, sex, age) {
            this.name = name;
            this.sex = sex;
            this.age = age;
            this.name = name;
            this.sex = sex;
            this.age = age;
        }
        return People;
    }());
    var people = new People('xm', 'F', 12);
})(A || (A = {}));
//4.设置只读属性
var B;
(function (B) {
    var Person = /** @class */ (function () {
        function Person(sex, age) {
            this.name = '1234'; //
            this.sex = sex;
            this.age = age;
        }
        Object.defineProperty(Person.prototype, "UserName", {
            set: function (newValue) {
                this.name = newValue; //这里就不能设置了，因为是只读的
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
})(B || (B = {}));
//5. 类的继承
var C;
(function (C) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            //构造函数
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (name) {
            this.name = name;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, no) {
            var _this = _super.call(this, name, age) || this;
            _this.no = no;
            return _this;
        }
        Student.prototype.getNo = function () {
            return this.no;
        };
        return Student;
    }(Person));
    var s1 = new Student("jackie", 10, 1);
    console.log(s1);
})(C || (C = {}));
//6.类的修饰符
var D;
(function (D) {
    var Father = /** @class */ (function () {
        function Father(name, age, money) {
            //构造函数
            this.name = name;
            this.age = age;
            this.money = money;
        }
        Father.prototype.getName = function () {
            return this.name;
        };
        Father.prototype.setName = function (name) {
            this.name = name;
        };
        return Father;
    }());
    //继承Father
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, age, money) {
            return _super.call(this, name, age, money) || this;
        }
        Child.prototype.print = function () {
            console.log('访问父类的中的age = ', this.age);
        };
        Child.prototype.desc = function () {
            //console.log(`${this.name} ${this.age} ${this.money}`);
            console.log(this.name + " ------- " + this.age + " ");
        };
        return Child;
    }(Father));
    var child = new Child("linda", 10, 1000);
    console.log(child.name);
    child.print();
    child.desc();
    // console.log(child.age);  // 报错，只能在父类或者子类中访问
    //console.log(child.money);//报错，age 只能在父类中访问
})(D || (D = {}));
//7.类的静态属性和静态方法
var E;
(function (E) {
    var Father = /** @class */ (function () {
        function Father(name) {
            //构造函数
            this.name = name;
        }
        Father.getClassName = function () {
            return this.className; // 或者写成 return Father.className
        };
        Father.className = "Father123131"; //静态属性
        return Father;
    }());
    var father = new Father('PPPPPP');
    console.log(Father.className);
    console.log(Father.getClassName());
})(E || (E = {}));
//8.抽象类
var F;
(function (F) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    //继承抽象类
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        //实现抽象类的speak方法
        Cat.prototype.speak = function () {
            console.log(this.name + " ----\u55B5\u55B5\u55B5");
        };
        //实现接口Flying中的flying 方法
        Cat.prototype.flying = function (name) {
            console.log(this.name + " ----flying");
        };
        return Cat;
    }(Animal));
    var cat = new Cat('xixi');
    cat.speak();
    cat.flying('bird');
})(F || (F = {}));
//
var G;
(function (G) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.speak = function (word) {
            return "Animal: " + word;
        };
        return Animal;
    }());
    //继承Animal
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //在speak  相当于在Cat.prototype.speak = function() {}
        Cat.prototype.speak = function (word) {
            return "Cat:" + word;
        };
        return Cat;
    }(Animal));
    //继承Animal
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.speak = function (word) {
            return "Dog:" + word;
        };
        return Dog;
    }(Animal));
    var cat = new Cat();
    console.log(cat.speak("hello cat"));
    var dog = new Dog();
    console.log(dog.speak("hello dog "));
})(G || (G = {}));
