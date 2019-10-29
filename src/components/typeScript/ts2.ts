class Car{
  engine:string;
  constructor(engine:string){
    this.engine=engine
  }
  disp():void{
    console.log("发动机为："+this.engine)
  }
}
var obj= new Car ("Engine 1");
console.log("读取发动机型号："+obj.engine)