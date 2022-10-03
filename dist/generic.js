"use strict";
// const a = new Array(2)
// const car: string[] = ['BMW', 'Mers', 'Audi']
// // То же самое:
// const car2: Array<string> = ['BMW', 'Mers', 'Audi']
// const promise = new Promise<string> (resolve => {
//     setTimeout(() => {
//         resolve('Hello')
//     }, 2000);
// })
// promise.then(data => {
//     console.log(data.toLowerCase);
// })
// // То же самое:
// const promise2: Promise<number> = new Promise (resolve => {
//     setTimeout(() => {
//         resolve(11111)
//     }, 2000);
// })
// promise2.then(data => {
//     console.log(data.toString);
// })
//===============
// function mergeObj<T,R> (a: T, b: R) {
//     return Object.assign({}, a, b)
// }
// const merged = mergeObj({name: 'Den'}, {age: 41})
// console.log(merged)
// Но в таком случае мы можем передать вместо объектов и другие типы:
// const merged2 = mergeObj('Den', '42')
// Можно уточнить:
// function mergeObj<T extends object,R extends object> (a: T, b: R) {
//     return Object.assign({}, a, b)
// }
// const merged2 = mergeObj('Den', '42')
// console.log(merged2)
///===================
// interface ILength {
//     length: number
// }
// function symbolCount<T extends ILength> (value: T) {
//     return {
//         value,
//         count: `У объекта ${value.length} символов`
//     }
// }
// console.log(symbolCount('skdgflgkjerkl;gjnserg  ergewrge 111').count)
// console.log(symbolCount(['У', 'массивов', 'есть', 'свойство', 'langth']))
// console.log(symbolCount({length: 20})) // у объекта есть созданное поле length
// console.log(symbolCount(20)) /// а у number нет length = ошибка
///===================
// function getKeyValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }
// const obj1 = {
//     name: 'Den',
//     age: 20,
//     // job: 'webworker'
// }
// console.log(getKeyValue(obj1, 'name'));
// console.log(getKeyValue(obj1, 'age'));
// console.log(getKeyValue(obj1, 'job'));
///===================
class Collections {
    constructor(_items = []) {
        this._items = _items;
    }
    add(_items) {
        this._items.push(_items);
    }
    remove(_items) {
        this._items = this._items.filter(_item => _item !== _items);
    }
    get items() {
        return this._items;
    }
}
const string = new Collections(['1', '2', '3']);
string.add('4');
string.remove('1');
console.log(string.items);
const namber = new Collections([1, 2, 3]);
namber.add(4);
namber.remove(1);
console.log(namber.items);
//==============
// interface ICar {
//     model: string,
//     year: number
// }
// function carValidation(model: string, year: number): ICar {
//     const car: Partial<ICar> = {}
//     if (model.length > 3) {
//         car.model = model
//     }
//     if (year > 2000) {
//         car.year = year
//     }
//     return car as ICar
// }
// const ford: Readonly<ICar> = {
//     model: 'ford',
//     year: 2010
// }
// ford.model = 'audi'
//# sourceMappingURL=generic.js.map