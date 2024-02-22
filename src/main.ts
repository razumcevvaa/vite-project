import './style.css'

console.log(typeof 12)
console.log(typeof '12')
console.log(typeof true)
console.log(typeof false)
console.log(typeof [])
console.log(typeof undefined)
console.log(null)
console.log(`В этой строке мы сложим 2 числа {$newVar+5}`)
console.log(String(12.5))
console.log(typeof alert)

let num1 = 1
let num2 = 2

console.log(2 > 1)
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 == 1)
console.log(1 === +'1')

console.log(+true)
console.log(+false)
console.log(+'')

console.log('z' > 'Z')

// все значения, которые могут стать ложью
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))


let year = 2011
if (year == 2015) {
    console.log('yes')
} else {
    console.log('no')
}

if (year == 2015) {
    console.log('yes')
} else if (year == 2010) {
    console.log('maybe')
} else {
    console.log('no')
}

let age = 18
let message
if (age > 16) {
    message = 'hello'
} else {
    message = 'too yang'
}
console.log(message)

// переменная = (условие) ? значение, которое присвоится в случае истинности условия : Значение, которое присвоится в случае ложности условия
message = age > 16 ? 'hello' : 'too yang'

const isThursday = new Date().getDate() == 22 ? true : false
console.log(isThursday)

let num = 0
let resulte
if (num > 0) {
    resulte = 1
} else if (num < 0) {
    resulte = -1
} else {
    resulte = 0
}
console.log(resulte)