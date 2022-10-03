let str : string = 'Hello, Den'
console.log(str)
str = 'kjhgkj   '

// =====
const someArrNum: Array<number> = [123, 456]  // generic
const someArrStr: Array<string> = ['123', '456']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(someArrNum)
reverse(someArrStr)

//========
function throuError(message: string): never {  // nevre = функция никогда не прекращает действия, либо выдаст ошибку
    throw new Error(message)
}

function sayHello(name: string): void {  // void - функция ничего не вернёт
    console.log(name)    
}


type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type someType = string | number | undefined

/// =================================================
interface Rect {
    readonly id: string  // только чтение
    color?: string  // не обязательный
    size: {
        height: number
        width: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        height: 100,
        width: 200
    }
}

rect1.color = 'ccc'

const rect2 = {} as Rect  // в последствии rect2 будет приведён к типу интерфейсу Rect
const rect3 = <Rect>{}

// Наследование

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '123',
    size: {
        height: 100,
        width: 200
    },
    getArea(): number {
        return this.size.height * this.size.width
    }
}

// ====

interface IClock {
    time: Date,
    setTime(date: Date) : void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date) : void {
        this.time = date
    }
}


///===================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

/// Oprators

interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person  // 'name' | 'age'

const key: PersonKeys = 'name'
const key2: PersonKeys = 'age'
// const key3: PersonKeys = 'gender' -  так уже нельзя

