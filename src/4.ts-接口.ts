//1.类同时继承类和接口
namespace A {
    interface Speaker {
       speak():void;
    }
    interface Action {
        action:string;
        add():void;
        delete():void;
        update():void;
        search():void;
    }
    class Person {
        num:string='';
        name:string='';
        constructor(){

        }
        getUserName(){

        }
    }

    //一个类只能继承一个父类，但可以继承多个接口
    class Student extends Person implements Speaker, Action {
      constructor() {
        super();
      }
      //实现继承Action中的属性和方法
      action: string = "";
      add() {}
      delete() {}
      update() {}
      search() {}

      //实现继承Speaker中的speak()方法
      speak(){

      }

      
      print() {
        console.log(this.action);
      }
    }

    let stu = new Student();

    stu.action='学生表操作';

    stu.print();
}

//2 .接口继承接口

namespace B {
    interface operate1 {
        name:string;
        add():void;
        delete():void;
       // (str:string):string; 
    }

    interface oper extends operate1 {
        update():void;
        search():void;
    }

    class Entity implements oper {
      constructor() {


      }

      //实现继承接口中的方法
      name:string='';
      add() {};
      delete() {};
      update(){};
      search(){};
      


      print(){
          console.log(this.name)
      }
    }

}

//3. 函数类型接口
namespace  C {
    interface discount {
        (price:number):number; //申明一个方法
    }

    //通过接口，在定义方法是可对传入的参数和函数返回值进行约束;
    let calcPrice: discount = function (price: number): number {
      return price * 100;
    }; 

    let result = calcPrice(10);
    console.log("折扣为:discount = ", result);
}

//4.可索引接口
namespace D {

    interface IndexOne {
        [index:number]:number;
    }
    let arr1: IndexOne = [1, 2];
    console.log('arr1 = ',arr1);

    interface IndexTwo {
        [index:string]:string; //
    }
    let arr2:IndexTwo = {1:"A0001",name:"jackie"};
    console.log("arr2 = ", arr2);


    interface IndexThree {
        [index:string]:any;
    }
    let arr3: IndexThree = ["1", 20,{},function(){}];
    console.log("arr3 = ", arr3);


    interface IndexFour {
        [index:number]:string;
    }

    let arr4 : IndexFour = {
        1:"1",
        2:"2"
    }
    console.log("arr4 = ", arr4);




}

//5.构造函数的类型
namespace E {

    class Animal {
        public name:string;
        constructor(_name:string){
            this.name = _name;
        }
    }

    interface initAnimalInterface {
        new (name:string):Animal;  //在 TypeScript 中，我们可以用 interface 来描述类
    }

    function getAnimalEnity( clazz: initAnimalInterface, name: string): Animal {
           return new clazz(name);
    }
    let animal = getAnimalEnity(Animal, "Cat");
    console.log("name = ", animal.name);

    let animal2 = getAnimalEnity(Animal, "Dog");
    console.log("name = ", animal2.name);



    class Person {
         num:string;
         name:string;
         sex:string;
         age:number;
         constructor(opts:any) {
             this.num = opts.num;
             this.name = opts.name;
             this.sex= opts.sex;
             this.age = opts.age;
         }
    }

    interface initPersonEntity {
        new(opts:any):Person; //在 TypeScript 中，我们可以用 interface 来描述类
    }

    let getPersonEntity = function(clazz:initPersonEntity,opts:any) {
        return new clazz(opts);
    }

    let person1 = getPersonEntity(Person,{num:'A0001',name:"jackie",sex:"F",age:10});

    console.log("person1 = ", person1);

}