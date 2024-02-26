import './style.css'

// console.log(typeof 12)
// console.log(typeof '12')
// console.log(typeof true)
// console.log(typeof false)
// console.log(typeof [])
// console.log(typeof undefined)
// console.log(null)
// console.log(`В этой строке мы сложим 2 числа {$newVar+5}`)
// console.log(String(12.5))
// console.log(typeof alert)

// let num1 = 1
// let num2 = 2

// console.log(2 > 1)
// console.log(num1 == num2)
// console.log(num1 != num2)
// console.log(num1 == 1)
// console.log(1 === +'1')

// console.log(+true)
// console.log(+false)
// console.log(+'')

// console.log('z' > 'Z')

// // все значения, которые могут стать ложью
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(false))


// let year = 2011
// if (year == 2015) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// if (year == 2015) {
//     console.log('yes')
// } else if (year == 2010) {
//     console.log('maybe')
// } else {
//     console.log('no')
// }

// let age = 18
// let message
// if (age > 16) {
//     message = 'hello'
// } else {
//     message = 'too yang'
// }
// console.log(message)

// // переменная = (условие) ? значение, которое присвоится в случае истинности условия : Значение, которое присвоится в случае ложности условия
// message = age > 16 ? 'hello' : 'too yang'

// const isThursday = new Date().getDate() == 22 ? true : false
// console.log(isThursday)

// let num = 0
// let resulte
// if (num > 0) {
//     resulte = 1
// } else if (num < 0) {
//     resulte = -1
// } else {
//     resulte = 0
// }
// console.log(resulte)

//д2з1
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
{
    let age = 12
    let message
    if (age <= 11) {
        message = 'ребенок'
    } else if (age <= 18) {
        message = 'подросток'
    } else if (age < 60) {
        message = 'взрослый'
    } else {
        message = 'пенсионер'
    }
    console.log(message)
}
// д2з2
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let numbers = prompt('Введите число от 0 до 9');
// if (numbers == '0') {
//     alert(')')
// } else if (numbers == '1') {
//     alert('!')
// } else if (numbers == '2') {
//     alert('@')
// } else if (numbers == '3') {
//     alert('#')
// } else if (numbers == '4') {
//     alert('$')
// } else if (numbers == '5') {
//     alert('%')
// } else if (numbers == '6') {
//     alert('^')
// } else if (numbers == '7') {
//     alert('&')
// } else if (numbers == '8') {
//     alert('*')
// } else if (numbers == '9') {
//     alert('(')
// } else {
//     alert('Строки запрещены !')
// }

// д2з3
// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
// let number = prompt('Введите трехзначное число');
//     number = number + '';
//     if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
//     {
//         alert('TRUE');
//     }else
//         alert('FALSE');

//д2з4 
//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100
// {
//     let year = 2022
//     let resulte
//     if (year % 4 == 0 && year % 100 !== 0) {
//         resulte = 'год високосный'
//     } else {
//         resulte = 'год невисокосный'
//     }
//     console.log(resulte)
// }

// д2з6 
// Написать конвертор валют. Пользователь вводит количе-ство USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// let dollar = parseFloat(prompt('Введите количество USD') as string)
// let currency = prompt('EUR = 1, UAH = 2, AZN = 3')
// if (currency == '1') {
//     alert(dollar * 0.92 + ' евро')
// } else if (currency == '2') {
//     alert(dollar * 7.20 + ' жэньминьби')
// } else if (currency == '3') {
//     alert(dollar * 1.70 + ' aзербайджанский манат')
// } else {
//     alert('ошибка')
// }

// д2з7 
// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3 %, от 300 до 500 – 5 %, от 500 и выше – 7 %.
// let amount = parseFloat(prompt('Введите сумму покупки:') as string)
// if (amount >= 200 && amount < 300) {
//     alert(amount / 100 * 97 + 'руб. со скидкой 3%');
// } else if (amount >= 300 && amount < 500) {
//     alert(amount / 100 * 95 + 'руб. со скидкой 5%')
// } else if (amount >= 500) {
//     alert(amount / 100 * 93 + 'руб. со скидкой 7%')
// }

// д2з9
// Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-рианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let question1 = prompt('Какая планета самая горячая? 1)Венера 2)Меркурий 3)Марс')
let question2 = prompt('Какая соцсеть появилась в 2003 году? 1)Twitter 2)Facebook 3)My space')
let question3 = prompt('Самый крупный наркоторговец в истории? 1)Эль Чапо 2)Пабло Эскобар 3)Хоакин Гусман')
let score = 0
if (question1 == '1') {
    score += 2
}
if (question2 == '3') {
    score += 2
}
if (question3 == '2') {
    score += 2
}
alert('Вы набрали ' + score + ' очков')


// п2з1 
// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
{
    let num = 0
    let resulte
    if (num > 0) {
        resulte = 'число положительное'
    } else if (num < 0) {
        resulte = 'число отрицательное'
    } else {
        resulte = 'ноль'
    }
    console.log(resulte)
}

let ages = prompt('Сколько вам лет?')
let correct = prompt('Вам ' + ages + ' лет? 1-да, 2-нет')
if (correct == '1') {
    alert('супер!')
} else if (correct=='2') {
    alert('жаль')
}