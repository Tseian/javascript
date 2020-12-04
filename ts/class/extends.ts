class A {
  name: string;
}

class B extends A {
  hello: string;
}

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   //   private state: any;
//   select() {}
//   private state: any;
// }

// class Location {}

const bu = new Button();
