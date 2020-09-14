// 泛型不能应用于类的静态成员
class Log<T> {
  // static run(value: T) {
  run(value: T) {
    console.log(value, 'value')
    return
  }
}
let log1 = new Log<number>()
log1.run(11) // 只能传入number类型
let log2 = new Log()
log2.run('111') // 可以传入任何类型


interface Length {
  length: number
}
// 类型T继承接口Length
function log<T extends Length>(value: T) {
  console.log(value, value.length)
  return value
}
log([1,2,3])
log('123')
log({length: 123})
