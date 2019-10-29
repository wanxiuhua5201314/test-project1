var Car = /** @class */ (function () {
  function Car (engine) {
    this.engine = engine
  }
  Car.prototype.disp = function () {
    console.log('发动机为：' + this.engine)
  }
  return Car
}())
var obj = new Car('Engine 1')
console.log('读取发动机型号：' + obj.engine)
