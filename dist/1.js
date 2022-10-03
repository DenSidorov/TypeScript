"use strict";
let str = 'Hello, Den';
console.log(str);
str = 'kjhgkj   ';
// =====
const someArrNum = [123, 456]; // generic
const someArrStr = ['123', '456'];
function reverse(array) {
    return array.reverse();
}
reverse(someArrNum);
reverse(someArrStr);
//========
function throuError(message) {
    throw new Error(message);
}
function sayHello(name) {
    console.log(name);
}
const id1 = 1234;
const id2 = '1234';
const rect1 = {
    id: '123',
    size: {
        height: 100,
        width: 200
    }
};
rect1.color = 'ccc';
const rect2 = {}; // в последствии rect2 будет приведён к типу интерфейсу Rect
const rect3 = {};
const rect4 = {
    id: '123',
    size: {
        height: 100,
        width: 200
    },
    getArea() {
        return this.size.height * this.size.width;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
const key = 'name';
const key2 = 'age';
// const key3: PersonKeys = 'gender' -  так уже нельзя
//# sourceMappingURL=1.js.map