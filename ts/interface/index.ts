class Student {
  public fullName: string;
  // constructor 可以使用public 对外使用
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
greeter(user);

console.log(user.firstName);
console.log(user.fullName);

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

console.log(Color.Red);