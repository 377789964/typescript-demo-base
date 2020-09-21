// 类型推断
// let a = 1
// let b = [1, null]

// let c = (x = 1) => x + 1 // 推断c是number类型

window.onkeydown = (event) => {
  console.log(event, 'event')
}

// 类型推断不一定准确，可以使用类型断言
interface Foo {
  bar: number
}
// let foo = {} as Foo
// foo.bar = 9 // 如果不赋bar属性也不会报错，因此推荐声明的时候定义属性
let foo: Foo = {
  bar: 8
}

// 类型兼容性
// 当一个类型可以被赋值给另一个类型x的时候
let s: string = 'a'
s = null //修改配置文件 "strictNullChecks": false

// 接口的兼容性
interface X {
  a: any,
  b: any
}
interface Y {
  a: any,
  b: any,
  c: any,
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x = y // 成员少的可以兼容成员多的
// y = x // 报错不能赋值

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}
// 一个参数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c:number) => {}
// hof(handler2) // 不能传入（参数比函数类型中传入参数多）

// 可选参数和剩余参数
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
a = b // 固定参数兼容可选参数
a = c // 固定参数兼容剩余参数
b = c // 可选参数不兼容固定参数 修改配置文件 "strictFunctionTypes": false
b = a // 可选参数不兼容剩余参数 修改配置文件 "strictFunctionTypes": false

let handler3 = (a: string) => {}
// hof(handler3) //不兼容


// 函数参数 p2d p3d函数兼容性是成员多的兼容成员少的（与接口相反，成员少的兼容成员多的）
interface Poinnt3D {
  x: number;
  y: number;
  z: number;
}
interface Poinnt2D {
  x: number;
  y: number;
}
let p3d = (point: Poinnt3D) => {}
let p2d = (point: Poinnt2D) => {}
p3d = p2d
// p2d = p3d // 不能赋值 需要兼容：修改配置文件 "strictFunctionTypes": false

// 函数返回值 函数兼容，目标函数的返回值类型必须与原函数返回值类型一致
let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'Beijing'})
f = g // 参数少的兼容参数多的
// g = f // 不兼容

// 函数重载（参数个数必须一致，返回值类型也必须兼容）
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}

// 枚举类型兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple // 枚举和number类型兼容
// let color: Color.Red = Fruit.Apple // 枚举之间完全不兼容

// 类兼容性（和接口相似，只比较实例属性结构，不比较静态 构造函数）
// class A {
//   constructor(p: number, q: number) {}
//   id: number = 1
// }
// class B {
//   static s = 1
//   constructor(p: number) {}
//   id: number = 2
// }
// let aa = new A(1, 2)
// let bb = new B(3)
// aa = bb // 两个实例都有id属性 兼容
// bb = aa // 两个实例都有id属性 兼容

class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = '' // 如果存在私有属性则不兼容bb
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = '' // 如果存在私有属性则不兼容aa
}
let aa = new A(1, 2)
let bb = new B(3)
// aa = bb // 不兼容
// bb = aa // 不兼容


// ts解析报错，Cannot redeclare block-scoped variable 'x'，但是x是唯一的
// 报错原因：ts默认是将DOM typing作为全局运行环境，变量与全局中的变量出现了重复报错
// 解决办法：将脚本封装到module中，在Typescript中，只要文件存在import/export关键字，都被视为module
export {};