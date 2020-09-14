// // 泛型: 不预先确定数据类型，具体类型在使用的时候确定
// // 保证传入和返回数据类型一致
// function log<T>(value: T): T {
//   console.log(value)
//   return value
// }
// log<string[]>(['a', 'b'])
// log(['a', 'b'])

// // 类型别名 定义泛型函数类型
// // type Log = <T>(value: T) => T
// // let myLog: Log = log
// // 泛型接口等价上面的类型别名,
// // 如果T没有默认值则实现接口的时候必须显示声明(否则会报错)
// // 有默认值可以实现接口时不显示声明类型使用默认类型
// interface Log<T = string> {
//   (value: T): T
// }
// let myLog: Log = log
// let yourLog: Log<number> = log
