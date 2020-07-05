"use strict";
var C;
(function (C) {
    //通过接口，在定义方法是可对传入的参数和函数返回值进行约束;
    var calcPrice = function (price) {
        return price * 100;
    };
    var result = calcPrice(10);
    console.log("折扣为:discount = ", result);
})(C || (C = {}));
