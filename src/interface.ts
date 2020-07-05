namespace C {
  interface discount {
    (price: number): number; //申明一个方法
  }

  //通过接口，在定义方法是可对传入的参数和函数返回值进行约束;
  let calcPrice: discount = function (price: number): number {
    return price * 100;
  };

  let result = calcPrice(10);
  console.log("折扣为:discount = ", result);
}
