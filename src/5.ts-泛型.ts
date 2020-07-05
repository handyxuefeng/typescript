//泛型的创建

namespace A {
    
    //参数类型为任意类型，范围更为广泛
    function initAnyTypeArray (len:number,val:any):Array<any> {
        let arr = [];
        for(let i=0;i<len;i++) {
            arr[i] = val;
        }
        return arr;
    }
    let arr1 = initAnyTypeArray(10,function(){});
    console.log('arr = ',arr1);

    let arr2 = initAnyTypeArray(10, '1');
    console.log("arr = ", arr2);

     let arr3 = initAnyTypeArray(10, Math.floor(Math.random()*1000));
     console.log("arr = ", arr3);



    //函数的形参为T，这个时候T就是动态了，不同any的是，数组的每一项都是相同类型
    function generateArray<T=number>(len: number, val: T): Array<T> {
       let arr: Array<T>= [];
       for (let i = 0; i < len; i++) {
         arr[i] = val;
       }
       return arr;
    }

    let arr4 = generateArray<number>(10,1);
    console.log('arr4 = ',arr4);

    let arr5 = generateArray<string>(10, "xxxx");
    console.log("arr5 = ", arr5);

    let arr6 = generateArray<Function>(10, function(){});
    console.log("arr6 = ", arr6);

   



}

//2.泛型类

namespace B {
    class createGenericsClass<T> {
        list:T[] = [];
        constructor(){

        }
        add(val:T) {
          this.list.push(val);
        }
        getMax():T {
           let max= this.list[0];
           for(let i =1;i<this.list.length ;i++) {
               if(max < this.list[i]) {
                   max = this.list[i];
               }
           }
           return max;
        }
    }

    let myArray = new createGenericsClass<number>();
    for(let i =0;i< 10;i++) {
        myArray.add(Math.floor(Math.random()*100000));
    }

    let max = myArray.getMax();
    console.log('max= ',max);

    let myName = new createGenericsClass<string>();
    myName.add("linda");
    myName.add("susan");
    myName.add("jackie");
    console.log(myName.list);

}

//3. 泛型接口
namespace C {
    //定义一个泛型接口
    interface myInteface {
        <T>(a:T,b:T):T;
    }

    let myMethod:myInteface = function<T>(a:T,b:T) : T {
        return a || b;
    }
    let res1 = myMethod<number>(1,2);
    let res2 = myMethod<string>("jackie","linda");


    interface commonInterface<T> {
        name:T[];
        add<T>(a:T,b:T):T;
    }

    class myClass<T> implements commonInterface<T> {
        name:any[] = []; //泛型数组
        add<T>(x:T,y:T):T{
            this.name.push(x);
            this.name.push(y);
            return this.name[0];
        }
        sort()  {
            this.name = this.name.sort(function(a,b){
               return b-a;
            });
        } 
    }

    let myclass = new myClass<number>();
    myclass.add<number>(1,2);
    myclass.sort();
    console.log('myclass.name = ',myclass.name);


    interface Cart<T> {
        list:T[]
    }
    let cart:Cart<{name:string,price:number}> = {
       list:[{name:'book',price:10}]
    }
    console.log(cart.list[0]);
}

//4.泛型约束

namespace D {
    function logger<T>(val:T) {
        // console.log(val.length); //在函数中使用泛型的时候，由于预先并不知道泛型的类型，所以不能随意访问相应类型的属性或方法。
    }

    interface myInteface {
        len:number;
    }

    function print<T extends myInteface>(val:T){
        console.log(val.len);
    }

    function printLog<T extends string>(val:T) {
        console.log(val.length);
    }
    printLog<string>("123456789");


    class myClass<T> implements myInteface {
      len: number = 0;
      add<T extends number>(val: T): any {
        console.log(val.toFixed(2));
        return val.toFixed(2);
      }
    }
    let myclass = new myClass<number>();
    let res = myclass.add<number>(12);
    console.log("res = ", res);
}