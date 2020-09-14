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






// ts解析报错，Cannot redeclare block-scoped variable 'x'，但是x是唯一的
// 报错原因：ts默认是将DOM typing作为全局运行环境，变量与全局中的变量出现了重复报错
// 解决办法：将脚本封装到module中，在Typescript中，只要文吉安存在import/export关键字，都被视为module
export {};