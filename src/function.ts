// 函数的定义
function add1(x: number, y: number) {
  return x + y
}

// 定义函数类型（并没有实现函数 ）
let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number
interface add4 {
  (x: number, y: number):  number
}

// 函数的参数(可写参数必须在必写参数的后面)
function add5(x: number, y?: number) {
  return y ? x + y : x
}
console.log(add5(1, 3), 'add5')

// 在必写参数前的参数都是必传的，如果使用默认值则必须传undefined
// 必写参数后有默认值的参数可以不传值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(add6(1, undefined, 3), 'add6')

// 函数参数使用剩余参数，语法同es6
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add7(1, 1, 1, 1, 1), 'add7')

// 函数重载，函数类型写在前面，函数实现写在后面（第三个add8）
function add8(...args: number[]): number;
function add8(...args: string[]): string;
function add8(...args: any[]): any {
  let first = args[0]
  if (typeof first === 'string') {
    return args.join('')
  }
  if (typeof first === 'number') {
    return args.reduce((pre, cur) => pre + cur)
  }
}
console.log(add8(1, 2, 3, 4), 'add8')
console.log(add8('1', '2', '3', '4'), 'add8')

export {}
