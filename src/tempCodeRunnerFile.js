"use strict";
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
