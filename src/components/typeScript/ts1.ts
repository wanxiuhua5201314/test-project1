// ts接口
interface IPerson {
  firstName:string,
  lastName:string,
  sayHi:()=>string
}
var customer:IPerson={
  firstName:"Tom",
  lastName:"Hanks",
  sayHi:():string =>{
    return "Hi there"
  }
}
console.log("Customer对象",customer)