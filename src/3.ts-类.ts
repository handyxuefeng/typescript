namespace A {
    class Person {
      //类属性的定义
      num: string;
      name: string;
      sex: string;
      age: number;

      //构造函数
      constructor(opts: any) {
        this.num = opts.num;
        this.name = opts.name;
        this.sex = opts.sex;
        this.age = opts.age;
      }

      getUserName() {
        return this.name;
      }

      //属性访问器getter
      get UserName() {
        console.log("属性访问 = ");
        return this.name;
      }

      //属性存取器setter
      set UserName(newValue) {
        console.log("属性设置 = ", newValue);
        this.name = newValue;
      }
    }


    let person = new Person({ num: "A001", name: "jackie", sex: "F", age: 10 });
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
    class People {
        constructor(public name:string, public sex:string, public age:number) {
            this.name = name ;
            this.sex = sex;
            this.age = age;  
        }
    }
    let people = new People('xm','F',12);

}

//4.设置只读属性
namespace B {
    class Person {
        readonly name:string = '1234'; //
        sex:string;
        age:number;
        constructor(sex:string,age:number){
            this.sex= sex;
            this.age = age;
        }
        set UserName(newValue:string) {
            this.name = newValue; //这里就不能设置了，因为是只读的
        }

    }
}

//5. 类的继承
namespace C {

    class Person {
      name: string; //定义实例的属性，默认省略public修饰符
      age: number;
      constructor(name: string, age: number) {
        //构造函数
        this.name = name;
        this.age = age;
      }
      getName(): string {
        return this.name;
      }
      setName(name: string): void {
        this.name = name;
      }
    }
    
    class Student extends Person { //继承Person
      no: number;
      constructor(name: string, age: number, no: number) {
        super(name, age); //调用父类构造函数
        this.no = no;
      }
      getNo(): number {
        return this.no;
      }
    }
    let s1 = new Student("jackie", 10, 1);
    console.log(s1);

}

//6.类的修饰符

namespace D {
    class Father {
      public name: string; //类里面 子类 其它任何地方外边都可以访问
      protected age: number; //类里面 子类 都可以访问,其它任何地方不能访问
      private money: number; //类里面可以访问， 子类和其它任何地方都不可以访问

      constructor(name: string, age: number, money: number) {
        //构造函数
        this.name = name;
        this.age = age;
        this.money = money;
      }
      getName(): string {
        return this.name;
      }
      setName(name: string): void {
        this.name = name;
      }
    }

    //继承Father
    class Child extends Father {
      constructor(name: string, age: number, money: number) {
        super(name, age, money); //调用父类构造函数
      }
      print() {
          console.log('访问父类的中的age = ',this.age);
      }
      desc() {
        //console.log(`${this.name} ${this.age} ${this.money}`);
        console.log(`${this.name} ------- ${this.age} `);
      }
    }

    let child = new Child("linda", 10, 1000);
    console.log(child.name);
    child.print();
    child.desc();
    // console.log(child.age);  // 报错，只能在父类或者子类中访问
    //console.log(child.money);//报错，age 只能在父类中访问

}


//7.类的静态属性和静态方法
namespace E {
    class Father {
      static className:string = "Father123131"; //静态属性
      static getClassName() {
        return this.className; // 或者写成 return Father.className
      }
      public name: string;
      constructor(name: string) {
        //构造函数
        this.name = name;
      }
    }
    let father = new Father('PPPPPP')
    console.log(Father.className);
    console.log(Father.getClassName());
}

//8.抽象类
namespace F{
    abstract class Animal {
      name: string;
      abstract speak():any;
      constructor(name:string){
        this.name = name;
      }
    }

    //定义一个接口，等着被继承
    interface Flying {
        flying(name:string):any; //接口中的方法，需要在继承该接口的类中实现
    }


    //继承抽象类
    class Cat extends Animal implements Flying {
      constructor(name: string) {
        super(name);
      }

      //实现抽象类的speak方法
      speak() {
        console.log(`${this.name} ----喵喵喵`);
      }

      //实现接口Flying中的flying 方法
      flying(name:string){
         console.log(`${this.name} ----flying`)
      }
    }

    let cat = new Cat('xixi');
    cat.speak();
    cat.flying('bird');
}

//
namespace G {
    class Animal {
      speak(word: string): string {
        return "Animal: " + word;
      }
    }

    //继承Animal
    class Cat extends Animal {
      //在speak  相当于在Cat.prototype.speak = function() {}
      speak(word: string): string {
        return "Cat:" + word;
      }
    }
    //继承Animal
    class Dog extends Animal {
      speak(word: string): string {
        return "Dog:" + word;
      }
    }

    let cat = new Cat();
    console.log(cat.speak("hello cat"));

    let dog = new Dog();
    console.log(dog.speak("hello dog "));
}
