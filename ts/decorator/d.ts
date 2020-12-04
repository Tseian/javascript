function g() {
  console.log("g(): evaluated");
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = async function (...args) {
      console.log(args, "args");
      await original.apply(this, args);
      console.log("aa===");
    };
  };
}

class C {
  async c() {
    return 1;
  }
  @g()
  async method(a) {
    let b = await this.c();
    console.log("djddd", a, b);
  }
}

let c = new C();
c.method("aa");
