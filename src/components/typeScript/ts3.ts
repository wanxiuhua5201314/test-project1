class Shape{
  Area:number
  constructor(a:number){
    this.Area=a
  }
}
class Circle extends Shape{
  disp():void{
    console.log("圆的面积："+this.Area)
  }
}
var obj1 = new Circle(223);
obj1.disp();