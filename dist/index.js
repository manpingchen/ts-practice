"use strict";
let greeting = "Hello TypeScript!";
// interface Person {
//   name: string;
//   age?: number;
// }
let p = {
    name: "Jamie",
    age: 8,
};
function speak(greeting) {
    console.log(greeting);
    return `O3O <[${greeting}]`;
}
speak(greeting);
// speak(true);
// speak(123);
const arr = [123, "123", true, p, { a: 1 }, [123]];
let numArr = new Array(); // let numArr: number[] = [];
numArr.push(1);
let numArr2;
// numArr2.push(1); // Variable 'numArr2' is used before being assigned.
console.log({ arr, numArr });
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var Num;
(function (Num) {
    Num[Num["a"] = 2] = "a";
    Num[Num["b"] = 3] = "b";
})(Num || (Num = {}));
console.log(Color.RED); // 0
console.log(Color[0]); // RED
class Point {
    constructor(n, b) {
        this.x = 1;
        this.x = n;
    }
    getX() {
        return this.x; // 100
    }
    getXX() {
        function f() {
            // return this.x; // Error
            return this;
        }
        return f;
    }
    getXXX() {
        const f = () => {
            return this.x;
        };
        return f;
    }
}
let po = new Point(100, true);
console.log(po.x); // 100
console.log(po.getXX()); // [Function: f]
console.log(po.getXX()());
console.log(po.getXXX()()); //[Function: f]
//# sourceMappingURL=index.js.map