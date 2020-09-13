// 类类型的接口不能包含私有属性和被保护属性
// 接口只能约束类的公有成员
// 接口中不能约束类的构造函数
interface Human {
  // new (name: string): void
  name: string;
  eat(): void
}
// 类实现接口（必须实现接口中所有的属性）
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  eat() {}
  sleep() {}
}
// 接口继承接口
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}
// 接口继承多个接口
interface Boy extends Man, Child {}
let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口继承类（相当于接口抽象了类的成员）
// 接口继承的类中不能包含私有和受保护成员
class Auto {
  state = 1
  // private state2 = 0
}
interface AutoInterface extends Auto {

}
// 类实现接口
class C implements AutoInterface {
  state = 1
}
// Bus作为Auto的子类来实现接口AutoInterface
class Bus extends Auto implements AutoInterface {

}
