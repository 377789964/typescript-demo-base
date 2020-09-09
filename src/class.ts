// class Dog {
//   // 构造函数前使用private关键字,表示该类不能被实例化,不能被继承
//   // 构造函数前使用protected关键字,表示该类不能被实例化只能被继承
//   constructor(name: string) {
//     // 在构造函数中初始化实例属性（必须初始化，可以在构造函数中初始化）
//     this.name = name
//   }
//   // public name: string = 'aaa' // 也可以直接初始化
//   // 类的所有属性默认都是publick
//   public name: string
//   run() {}
//   // 私有成员，只能在类的内部调用，实例不能调用
//   private pri(){}
//   // 保护成员, 只能在类或者子类中使用，不能再实例中访问
//   protected pro(){}
//   // 只读属性(必须初始化)
//   readonly legs: number = 4
//   // 静态成员， 只能通过类调用（子类中可以访问，但是实例不能访问）
//   static food: string = 'bones'
// }
// console.log(Dog.prototype, 'prototype')
// let dog = new Dog('wangwang')
// console.log(dog)

// class Husky extends Dog {
//   constructor (name: string, color: string) {
//     super(name)
//     // this的使用必須在super的后面
//     this.color = color
//     this.pro()
//   }
//   color: string
// }
