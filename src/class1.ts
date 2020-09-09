// 抽象类：只能被继承不能被实例化的类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法，在子类中实现
  abstract sleep(): void
}
// let animal = new Animal()

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  // 实现父类中的抽象方法
  sleep() {
    console.log('dog sleep')
  }
}
let dog = new Dog('wangwang')
// dog.eat()
// dog.sleep()

class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

class WorFlow {
  step1() {
    return this // this指向类本身
  }
  step2() {
    return this // this指向类本身
  }
}

new WorFlow().step1().step2()
console.log(new WorFlow().step1().step2()) // WorFlow

class MyFlow extends WorFlow {
  next() {
    return this // this指向类本身
  }
}

new MyFlow().next().step1().step2()
console.log(new MyFlow().next().step1().step2()) // MyFlow
