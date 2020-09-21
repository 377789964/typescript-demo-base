
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'aaa'

// 数组
let arr1: Array<number | string> = [1, 2, 3, 'aaa']
let arr2: number[] = [1, 2, 3]

// 元祖（特殊数组）
let tuple: [number, string] = [1, 'kkk']
tuple.push(2) // 开发中不推荐使用
console.log(tuple) // 不会报错
// console.log(tuple[2]) // 不能越界访问

// 函数(返回值类型可以不写)
// let add = (x: number, y: number) => x + y
// 变量定义了函数类型，默认会推断返回值类型：number
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// undefined null
let un: undefined = undefined // 不能将其他数据赋值给undefined
let nu: null = null // 不能将其他数据赋值给null
num = undefined
num = null

// void 没有返回值,例如没有返回值的函数
let noReturn = () => {}

// any 任意类型可以任意赋值(不指定变量类型则默认为any类型)
let x

// never 函数永远不会返回就是never类型
// 抛出错误
let arr = () => {
  throw new Error('error')
}
// 死循环
let endless = () => {
  while(true) {}
}

// 枚举类型 一组有名字的常量集合（类似通讯录，姓名-电话号码）
// 数字枚举(使用名字或者常量都可以访问原理是反向映射，后面的成员自动递增)
// 字符串枚举不支持反向映射
// 枚举成员是只读，不支持修改
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owiner,
  Guster
}
console.log(Role)
// 枚举成员（定义时不会进行计算，只有程序执行的时候才会计算值），枚举成员必须定义值
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = 'length'.length
}
// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

// 不同类型的枚举不能进行比较
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'hellow', b = 'world' }
let e: E = 3
let f: F = 4
let g: F = 4
// e === f
console.log(f === g)

export {}
