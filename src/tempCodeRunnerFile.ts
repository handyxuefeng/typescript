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
        return val;
      }
    }
    let myclass = new myClass<number>();
    let res = myclass.add<number>(12);
    console.log("res = ", res);
}