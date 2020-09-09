// 接口用来约束对象/函数的一种契约，必须遵守
// 对象类型的接口（对象中如果存在你id,name之外的属性也可以匹配成功）
interface List {
  readonly id: number; // 只读属性不允许修改
  name: string;
  age? : number, // 可选属性（访问不存在的属性会报错）
  // [x: string]: any // 支持传入多个属性方法1：字符串索引签名
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach(item => {
    console.log(item.id, item.name)
  })
}
// 支持传入多个属性方法2：先用变量存贮再函数传值
let result = {
  data: [
    {id: 1, name: 'A', gender: 'male'},
    {id: 2, name: 'B', age: 10},
  ]
}
render(result)

// 支持传入多个属性方法2：类型断言
render({
  data: [
    {id: 1, name: 'A', gender: 'male'},
    {id: 2, name: 'B', age: 10},
  ]
} as Result)

// 数字索引
interface StringArray {
  [idex: number]: string
}
let cahrs: StringArray = ['A', 'B']

// 字符串索引，两种签名混用
// 下面的情况数字签名索引的值必需是字符串签名索引值的子类型，否则提示不能声明
// 因为javascript内部会将值得类型转换，必须兼容，不兼容就会报错不能声明
interface Names {
  [x: string]: string;
  [z: number]: string;
}
interface Names1 {
  [x: string]: any;
  [z: number]: number;
}

// 函数类型接口 关键字type类型别名（函数类型的名字）
type Add = (x: number, y: number) => number
let add: Add = (a, b) => a + b

// 混合接口定义类库
interface Lib {
  (): void; // Lib是一个函数
  versions: string; // Lib的versions属性是字符串
  doSomeThing(): void // Lib的doSomeThing属性是函数
}
function getLib() {
  // 类型断言as
  let lib: Lib = (() => {}) as Lib
  lib.versions = '1.0'
  lib.doSomeThing = () => {}
  return lib
}
let lib1 = getLib();
lib1.doSomeThing()
let lib2 = getLib();
lib2.doSomeThing()
