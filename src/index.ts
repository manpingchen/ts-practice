import { forEach } from "lodash";

let greeting: string = "Hello TypeScript!";

type Person = {
  name: string;
  age?: number;
};

// interface Person {
//   name: string;
//   age?: number;
// }

let p: Person = {
  name: "Jamie",
  age: 8,
};

function speak(greeting: string) {
  console.log(greeting);
  return `O3O <[${greeting}]`;
}

speak(greeting);
// speak(true);
// speak(123);

const arr = [123, "123", true, p, { a: 1 }, [123]];

let numArr = new Array<number>(); // let numArr: number[] = [];

numArr.push(1);

let numArr2: number[];
// numArr2.push(1); // Variable 'numArr2' is used before being assigned.

console.log({ arr, numArr });

enum Color {
  RED,
  GREEN,
  BLUE,
}

enum Num {
  a = 2,
  b,
}

console.log(Color.RED); // 0
console.log(Color[0]); // RED

class Point {
  x: number = 1;

  constructor(n: number, b: boolean) {
    this.x = n;
  }

  getX() {
    return this.x; // 100
  }

  getXX() {
    function f(this: any) {
      // return this.x; // Error
      return this; // undefined
    }
    return f;
  }

  getXXX() {
    const f = () => {
      return this.x; // 100
    };
    return f;
  }
}

let po = new Point(100, true);
console.log(po.x); // 100
console.log(po.getXX()); // [Function: f]
console.log(po.getXX()()); // undefined
console.log(po.getXXX()()); // [Function: f]

forEach(numArr, (n) => console.log(n));
