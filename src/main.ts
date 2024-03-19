// import { TRUE } from 'sass'
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
{
    let year = 2007
    let resulte
    if (year % 4 == 0 && year % 100 !== 0) {
        resulte = 'год високосный'
    } else {
        resulte = 'год невисокосный'
    }
    console.log(resulte)
}

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
// let question1 = prompt('Какая планета самая горячая? 1)Венера 2)Меркурий 3)Марс')
// let question2 = prompt('Какая соцсеть появилась в 2003 году? 1)Twitter 2)Facebook 3)My space')
// let question3 = prompt('Самый крупный наркоторговец в истории? 1)Эль Чапо 2)Пабло Эскобар 3)Хоакин Гусман')
// let score = 0
// if (question1 == '1') {
//     score += 2
// }
// if (question2 == '3') {
//     score += 2
// }
// if (question3 == '2') {
//     score += 2
// }
// alert('Вы набрали ' + score + ' очков')


// п2з1 
// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

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

// п2з2
// Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
// let ages = prompt('Сколько вам лет?')
// let correct = prompt('Вам ' + ages + ' лет? 1-да, 2-нет')
// if (correct == '1') {
//     alert('супер!')
// } else if (correct == '2') {
//     alert('жаль')
// }

//п2з4
//Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
// let hour = prompt('Сколько сейчас часов?')
// let minutes = prompt('Сколько минут?')
// let sec = prompt('А сколько секунд?')
// let verify = prompt('сейчас ' + hour + ' часов ' + minutes + ' минут ' + sec + ' секунд, 1-да, 2-нет')
// if (verify == '1') {
//     alert('супер!')
// } else if (verify == '2') {
//     alert('жаль')
// }

//п2з3 
// Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
let numb = -448
let resultat
if (numb = -numb) {
    resultat = +numb
} else {
    resultat = numb
}
console.log(resultat)

//п2з6
// Запросить у пользователя номер месяца и вывести на экран его название.
let numberOfMonth = 8
let Month
switch (numberOfMonth) {
    case 1:
        Month = 'январь'
        break;
    case 2:
        Month = 'февраль'
        break;
    case 3:
        Month = 'март'
        break;
    case 4:
        Month = 'апрель'
        break;
    case 5:
        Month = 'май'
        break;
    case 6:
        Month = 'июнь'
        break;
    case 7:
        Month = 'июль'
        break;
    case 8:
        Month = 'август'
        break;
    case 9:
        Month = 'сентябрь'
        break;
    case 10:
        Month = 'октябрь'
        break;
    case 11:
        Month = 'ноябрь'
        break;

    case 12:
        Month = 'декабрь'
        break;
}
console.log(Month)

//п2з7 
//Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.
{
    let figure1 = 28
    let figure2 = 43
    let arifmetica = '+'
    switch (arifmetica) {
        case '+':
            console.log(figure1 + figure2)
            break;
        case '-':
            console.log(figure1 - figure2)
            break;
        case '*':
            console.log(figure1 * figure2)
            break;
        case '/':
            console.log(figure1 / figure2)
            break;
        default:
            console.log('ошибка')
    }
}

//27.02
//1задание
// {
//     let age = 13
//     if (age >= 14 && age <= 90) {
//         console.log('все хорошо')
// } else {
//         console.log('нужно подрасти')
//     }
// }
// {
//     let age = 30
//     if (!(age >= 14 && age <= 90)) {
//         console.log('нужно подрасти')
//     } else {
//         console.log('все хорошо')
//     }
// }

//задание 2 !!!
// let login = (prompt('Введите логин'))
// let pass
// if (login === 'Админ') {
//     pass = prompt('Введите пароль')
//     if (pass === 'Я главный') {
//         alert('Здравствуйте')
//     } else if (pass == '' || pass == null) {
//         alert('отменено')
//     } else {
//         alert('неверный пароль')
//     }
// } else if (login === '' || login === null) {
//     alert('отменено')
// } else {
//     alert('я вас не знаю')
// }

//    практика 3
// п3з1
// Вывести # столько раз, сколько указал пользователь.
let userInput = 20
let text = ''
while (userInput) {
    text = text + '#'
    userInput--
}
console.log(text)

//п3з2
//Пользователь ввел число, а на экран вывелись все числа
// от введенного до 0


// п3з3 
// Запросить число и степень. Возвести число в указанную
// степень и вывести результат.
num = 2
let degree = 7
while (num ** degree) {
    console.log(num ** degree)
    break
}

// пз4
// Запросить 2 числа и найти все общие делители.
let a = 5334
let b = 226
text = ''
let min = a < b ? a : b
while (min) {
    if (a % min == 0 && b % min == 0) {
        text += min + ' '
    }
    min--
}
console.log(text)


//п3з5
//Посчитать факториал введенного пользователем числа.
num = 10
let result = 3
while (num) {
    if (num > 0)
        result *= num
    num--
}
console.log(result)

// п3з6
//Предлагать пользователю решить пример 2 + 2 * 2 до тех
// пор, пока он не решит его правильно.
// let primer = parseInt(prompt('Решите пример 2+2*2') as string)
// do {
//     primer = parseInt(prompt('Неверно, попробуйте еще') as string)as number
// } while (primer !== 6){
//     alert('ура')
// }

//п3з7
// Делить число 1000 на 2 до тех пор, пока не получится число
// меньше 50 Вывести это число и сколько делений произвели.
num = 1000
let n = 0
do {
    num /= 2
    n++
} while (num > 50)
console.log(num)
console.log(n)

//п3з8
// Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.
num = 35
for (let i = 1; i < 100; i++) {
    if (i % num == 0) {
        console.log(i)
    }
}

//п3з9
// Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу.
n = 10
let x;

if (n < 2) {
    x = "Число должно быть больше 1";
} else if (n === 2) {
    x = "Простое число";
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        x = "Простое число";
    } else {
        x = "Составное число";
    }
}

console.log(x);

//дз3
//задание 1
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.
a = 20
b = 60
let sum = 0
while (a < b) {
    sum += a
    a++
}
console.log(sum)

// задание 2
// Запросить 2 числа и найти только наибольший общий
// делитель.
n = 4
let m = 40
let new_n = Math.abs(n)
let new_m = Math.abs(m)
let max_divisor = 1
let i = 1;
while (i <= new_n && i <= new_m) {
    if (new_n % i == 0 && new_m % i == 0) {
        max_divisor = i
    }
    i++
}
console.log(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`)

//   задание 3
//   Запросить у пользователя число и вывести все делители
// этого числа.
n = 30
new_n = Math.abs(n)
let divisors = "";
i = 1;
do {
    if (new_n % i == 0) {
        divisors += i + ",";
    }
    i++;
} while (i <= new_n);
console.log(divisors)

// задание 4
// Определить количество цифр в введенном числе.

{
    num = 134
    i = 0
    while (num > 0) {
        num = Math.trunc(num / 10)
        i++
    } console.log(i)
}

// задание 5
// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран.

{
    n = 3045
    let positive_number = 0
    let negative_number = 0
    let null_number = 0
    let even_number = 0
    let odd_number = 0
    for (let i = 0; i < 10; i++) {
        n = parseInt('Введите число: ')
        if (n > 0) {
            positive_number += 1;
        } else if (n < 0) {
            negative_number += 1;
        } else {
            null_number += 1;
        }
        !(n % 2) ? (even_number += 1) : (odd_number += 1);
    }
    console.log(
        `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
    )
}


// задание 6
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.
// do {
//     let a = parseInt(prompt('Введите первое число')as string)
//     let b = parseInt(prompt('Введите второе число')as string)
//     let i = prompt('Выберите знак - + / *')
//     switch (i) {
//         case '+':
//             alert(a + b);
//             break;
//         case '-':
//             alert(a - b);
//             break;
//         case '/':
//             alert(a / b);
//             break;
//         case '*':
//             alert(a * b);
//         default:
//             break;
//     }

// } while (confirm('Хотите ли вы решить еще один пример?'))

// задание 7
// Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).
{
    let num = ('39424')
    let sdvig = 4
    let i = num.length > 0 ? sdvig % num.length : 0
    num.slice(i) + num.slice(0, i)
    console.log(i)
}

// задание 8
// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.
// let arr_Week = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
// ]
// i = 0
// let stop = true
// while (stop == true) {
//     stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
//     i++
//     if (i > 6) {
//         i = 0;
//     }
// }
// console.log("Вывод дней недели окончен!")




//практика 4 ФУНКЦИИ
//задание1
// Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.
function getMin(a: number, b: number) {
    if (a < b) {
        return a
    }
    return b
}

console.log(getMin(3, 5))

// задание 2
// Написать функцию, которая возводит переданное число
// в указанную степень.
function pow(x: number, n: number): number {
    if (n != 1) {
        return x *= pow(x, n - 1)
    } else {
        return x
    }
}
console.log((pow(2, 4)))



// задание 3
// Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.
function getNum(figure1: number, figure2: number, arifmetica: string) {
    switch (arifmetica) {
        case '+':
            return figure1 + figure2
            break;
        case '-':
            return figure1 - figure2
            break;
        case '*':
            return figure1 * figure2
            break;
        case '/':
            return figure1 / figure2
            break;
        default:
            return 'ошибка'
    }
}

console.log(getNum(1, 5, '-'))

// задание 4
// Написать функцию, которая проверяет, является ли пере-
// данное ей число простым.
function getPrimeNum(a: number) {
    if (a == 0) {
        return false
    } else if (a === 2) {
        return ('простое')
    } else {
        for (var x = 2; x < a; x++) {
            if (a % x === 0) {
                return ('не простое')
            }
        }
        return ('простое')
    }
}
console.log(getPrimeNum(5))

// задание 5
// Написать функцию, которая принимает число и выводит
// таблицу умножения для этого числа. Вызовите функцию
// для всех чисел от 2 до 9
function ShowTimesTableForNum(a: number) {
    if (a > 1 && a < 10) {
        return (`
        ${a}*2=${a * 2}  
        ${a}*3=${a * 3}  
        ${a}*4=${a * 4}  
        ${a}*5=${a * 5}  
        ${a}*6=${a * 6}  
        ${a}*7=${a * 7}  
        ${a}*8=${a * 8}  
        ${a}*9=${a * 9} 
        `)
    }
    return 'введите число от 2 до 9'
}

console.log(ShowTimesTableForNum(2))
console.log(ShowTimesTableForNum(3))
console.log(ShowTimesTableForNum(4))
console.log(ShowTimesTableForNum(5))
console.log(ShowTimesTableForNum(6))
console.log(ShowTimesTableForNum(7))
console.log(ShowTimesTableForNum(8))
console.log(ShowTimesTableForNum(9))
console.log(ShowTimesTableForNum(360))

// задание 6
// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй. В функции исполь-
// зовать только + - * /, оператор % не использовать.
function getRemaiderOfNum(a: number, b: number) {
    return a - b * Math.floor(a / b)
}
console.log(getRemaiderOfNum(11, 3))

// задание 7
// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает их сумму.
function sumNumbers(n1: number, n2 = 0, n3 = 0, n4 = 0, n5 = 0) {
    return n1 + n2 + n3 + n4 + n5
}
console.log(sumNumbers(8, 9, 7, 9, 8))



//практика 5 РЕКУРСИИ
// задание 1
// Написать функцию, которая вычисляет факториал задан-
// ного числа.
function getFactorialOfNum(n: number): number {
    if (n == 1) {
        return n
    } else {
        return n * getFactorialOfNum(n - 1)
    }
}
console.log(getFactorialOfNum(6))

// задание 2
// Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.
function showAllNum(start: number, end: number): void {
    if (start > end) {
        return
    }
    console.log(start)
    showAllNum(start + 1, end)
}
showAllNum(1, 5)


function showAllNumBack(start: number, end: number): void {
    if (start < end) {
        return
    }
    console.log(start)
    showAllNumBack(start - 1, end)
}
showAllNumBack(5, 1)


// задание 3
// Написать функцию, которая выводит переданное ей число задом наперед.
// Например: число 1234 вывести как 4321
function getReverseNum(n: number): number {
    if (n < 10) {
        return n
    } else {
        return + (n % 10 + '' + getReverseNum(Math.floor(n / 10)))
    }
}
console.log(getReverseNum(9849))

// задание 4
// Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
function getSumOfDigits(n: number): number {
    if (n < 10) {
        return n
    } else {
        return n % 10 + getSumOfDigits(Math.floor(n / 10))
    }
}
console.log(getSumOfDigits(344))

// задание 5
// Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).
function getBracketsPairsByNum(n: number): string {
    if (!n) {
        return ''
    } else {
        return '(' + getBracketsPairsByNum(n - 1) + ')'
    }
}

// return '(' + getBracketsPairsByNum(4) +')' = return '(' + getBracketsPairsByNum(3) +')' =(((())))
// return '(' + getBracketsPairsByNum(3) +')'= return '(' + getBracketsPairsByNum(2) +')' = ((()))
// return '(' + getBracketsPairsByNum(2) +')' = return '(' + getBracketsPairsByNum(1) +')' =(())
// return '(' + getBracketsPairsByNum(1) +')'= return '(' + getBracketsPairsByNum(0) +')' =()

console.log(getBracketsPairsByNum(4))

//дз РЕКУРСИИ
// Написать функцию возведения числа в степень.
function pow2(x: number, n: number): number {
    if (n != 1) {
        return x *= pow2(x, n - 1)
    } else {
        return x
    }
}
console.log((pow2(2, 4)))

// Написать функцию поиска наибольшего общего делителя.
function getLardestDivisor(a: number, b: number): number {
    if (b == 0)
        return a
    if (a > b)
        return getLardestDivisor(b, a % b)
    else
        return getLardestDivisor(a, b % a)
}
console.log(getLardestDivisor(4, 6))

// Написать функцию для поиска максимальной цифры в числе.
function getMinDigitInNum(a: number, b = 0): number {
    if (a % 10 > b) {
        b = a % 10
    }
    if (n > 10) {
        getMinDigitInNum(a / 10)
    }
    return b
}
console.log(getMinDigitInNum(348379))


// Написать функцию, которая определяет простое ли пере-
// данное число.
function isPrime(n: number, divisor = 2): boolean {
    if (n < 2) {
        return false;
    } else if (divisor >= Math.sqrt(n)) {
        return true;
    } else if (n % divisor === 0) {
        return false;
    } else {
        return isPrime(n, divisor + 1);
    }
}
console.log(isPrime(17))

// Написать функцию для вывода всех множителей передан-
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3



// Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8
// function getFibonacci(n: number): number {
//     if (n == 1 && n == 2) {
//         return 1
//     } else {
//         return getFibonacci(n - 1) + getFibonacci(n - 2)
//     }
// }
// console.log(getFibonacci(10)) ОШИБКА

//практика 6 ОБЬЕКТЫ

// Создать объект, описывающий автомобиль (производитель,
//     модель, год выпуска, средняя скорость), и следующие функции
//     для работы с этим объектом.
type Car = {
    brand: string,
    model: number,
    year: number,
    speed: number
}

const car = {
    brand: 'porsche',
    model: 911,
    year: 2018,
    speed: 200
}

//     1 Функция для вывода на экран информации об автомобиле.
function showInfoAboutCar(car: Car) {
    console.log(car)
}
showInfoAboutCar(car)

// 2 Функция для подсчета необходимого времени для пре-
//     одоления переданного расстояния со средней скоростью.
//     Учтите, что через каждые 4 часа дороги водителю необхо-
//     димо делать перерыв на 1 час.
function getTimeOfWay(S: number) {
    let time = S / car.speed
    let breaks = Math.floor(time / 4)
    time += breaks
    console.log(`To cover a distance of ${S} km, it will take ${time} hours, considering breaks`)
}
// сделать перевод час в минуты
getTimeOfWay(90)


// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом.
type Fraction = {
    numerator: number,
    denominator: number
}

const fraction1: Fraction = {
    numerator: 1,
    denominator: 2
}

const fraction2 = {
    numerator: 3,
    denominator: 10
} as Fraction

function transformToCommonDenominator(fr1: Fraction, fr2: Fraction) {
    return {
        fr1: {
            numerator: fr1.numerator * fr2.denominator,
            denominator: fr1.denominator * fr2.denominator
        },
        fr2: {
            numerator: fr2.numerator * fr1.denominator,
            denominator: fr1.denominator * fr2.denominator
        }
    }
}

// 1 Функция сложения 2 - х объектов - дробей.

function getSumOfFractions(fr1: Fraction, fr2: Fraction) {
    const commonFractions = transformToCommonDenominator(fr1, fr2)
    return {
        numerator: commonFractions.fr1.numerator + commonFractions.fr2.numerator,
        denominator: commonFractions.fr1.denominator
    }
}
console.log(getSumOfFractions(fraction1, fraction2))

function getRedusedSumOfFractions(fr1: Fraction, fr2: Fraction) {
    const result = getSumOfFractions(fr1, fr2)
    return getReductedFraction(result)
}
console.log(getRedusedSumOfFractions(fraction1, fraction2))

// 2 Функция вычитания 2 - х объектов - дробей.

function getSubtrOfFractions(fr1: Fraction, fr2: Fraction) {
    const commonFractions = transformToCommonDenominator(fr1, fr2)
    const result = {
        numerator: commonFractions.fr1.numerator - commonFractions.fr2.numerator,
        denominator: commonFractions.fr1.denominator
    }
    return getReductedFraction(result)
}
console.log(getSubtrOfFractions(fraction1, fraction2))

// 3 Функция умножения 2 - х объектов - дробей.

function getMulOfFractions(fr1: Fraction, fr2: Fraction) {
    const result = {
        numerator: fr1.numerator * fr2.numerator,
        denominator: fr1.denominator * fr2.denominator
    }
    return getReductedFraction(result)
}
console.log(getMulOfFractions(fraction1, fraction2))

// 4 Функция деления 2 - х объектов - дробей.

function getDivOfFractions(fr1: Fraction, fr2: Fraction) {
    const result = {
        numerator: fr1.numerator * fr2.denominator,
        denominator: fr1.denominator * fr2.numerator
    }
    return getReductedFraction(result)
}

console.log(getDivOfFractions(fraction1, fraction2))

// 5 Функция сокращения объекта - дроби.

function getReductedFraction(fr: Fraction) {
    const min = fr.numerator < fr.denominator ? fr.numerator : fr.denominator
    for (let i = min; i > 1; i--) {
        if (fr.numerator % i == 0 && fr.denominator % i == 0) {
            fr.numerator /= i
            fr.denominator /= i
            return getReductedFraction(fr)
        }
    }
    return fr
}

// Создать объект, описывающий прямоугольник (хранит коор-
// динаты левой верхней и правой нижней точек), и написать следу-
// ющие функции для работы с таким объектом.
type Rect = {
    topLeft: {
        x: number,
        y: number
    },
    bottomRigth: {
        x: number,
        y: number
    }
}

const rectangle = {
    topLeft: {
        x: 3,
        y: 6
    },
    bottomRigth: {
        x: 10,
        y: 2
    }
}
//1 Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).
function showCoordinat(rect: Rect) {
    console.log(rect)
}
showCoordinat(rectangle)

// 2 Функция принимает объект-прямоугольник и возвращает его ширину.
function getWidthOfRect(rect: Rect) {
    return rect.bottomRigth.x - rect.topLeft.x
}
console.log(getWidthOfRect(rectangle))

// 3 Функция принимает объект-прямоугольник и возвращает его высоту.
function getHeightOfRect(rect: Rect) {
    return rect.topLeft.y - rect.bottomRigth.y
}
console.log(getHeightOfRect(rectangle))

// 4 Функция принимает объект-прямоугольник и возвращает его площадь.
function getSquareOfRect(rect: Rect) {
    return getWidthOfRect(rect) * getHeightOfRect(rect)
}
console.log(getSquareOfRect(rectangle))

//5 Функция принимает объект-прямоугольник и возвращает его периметр.
function getPerimetrOfRest(rect: Rect) {
    return (getWidthOfRect(rect) + getHeightOfRect(rect)) * 2
}
console.log(getPerimetrOfRest(rectangle))

// 6 Функция изменения ширины прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить ширину.
function changeWidth(rect: Rect) {
    return getWidthOfRect(rect) + 20
}
console.log(changeWidth(rectangle))

// 7 Функция изменения высоты прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// высоту.
function changeHeight(rect: Rect) {
    return getHeightOfRect(rect) + 10
}
console.log(changeHeight(rectangle))

// 8 Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.
function changeWidthAndHeight(rect: Rect) {
    return changeWidth(rect) + changeHeight(rect)
}
console.log(changeWidthAndHeight(rectangle))

//9 Функция смещения прямоугольника по оси X. Она при-
// нимает объект-прямоугольник и на сколько единиц его сдвинуть.
function moveX(rect: Rect) {
    return rect.topLeft.x + 10
}
console.log(moveX(rectangle))

function moveY(rect: Rect) {
    return rect.topLeft.y + 10
}
console.log(moveY(rectangle))

// 11 Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значе-
// ния: сдвиг по оси X и сдвиг по оси Y.
function moveXY(rect: Rect) {
    return `сдвиг по оси х: ${moveX(rect)}, сдвиг по оси у: ${moveY(rect)}`
}
console.log(moveXY(rectangle))

//12 Функция для проверки, находится ли точка внутри пря-
// моугольника. Она принимает объект-прямоугольник и
// координаты точки.
function isPointInside(rect: Rect, point: { x: number, y: number }): boolean {
    return point.x >= rect.topLeft.x && point.x <= rect.bottomRigth.x && point.y >= rect.topLeft.y && point.y <= rect.bottomRigth.y;
}
console.log("Точка (3, 3) находится внутри прямоугольника?", isPointInside(rectangle, { x: 3, y: 3 }))

// Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
type Time = {
    hour: number,
    minutes: number,
    seconds: number
}
const time: Time = {
    hour: 10,
    minutes: 34,
    seconds: 22
}
// 1 Функция вывода времени на экран.
function showTime(time:Time) {
    return `${time.hour}:${time.minutes}:${time.seconds}`
}

// 2 Функция изменения времени на переданное количество секунд.
function changeSeconds(seconds: number) {
    time.seconds += seconds
    if (time.seconds >= 60) {
        let extraMinutes = Math.floor(time.seconds / 60);
        time.seconds %= 60;
        changeMinutes(extraMinutes)
    }
}
// 3 Функция изменения времени на переданное количество минут.
function changeMinutes(minutes: number) {
    time.minutes += minutes
    if (time.minutes >= 60) {
        let extraHours = Math.floor(time.minutes / 60);
        time.minutes %= 60;
        changeHours(extraHours)
    }
}
// 4 Функция изменения времени на переданное количество часов.
function changeHours(hours: number) {
 time.hour = (time.hour + hours) % 24
}
console.log(showTime(time))
changeSeconds(60)
console.log(showTime(time))
changeMinutes(45)
console.log(showTime(time))
changeHours(5)
console.log(showTime(time))

//workkkk