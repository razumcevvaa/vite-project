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
function changeWidth(rect: Rect, numX: number) {
    rect.bottomRigth.x += numX
    rect.topLeft.x += numX
}
changeWidth(rectangle, 6)

// 7 Функция изменения высоты прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// высоту.
function changeHeight(rect: Rect, numY: number) {
    rect.bottomRigth.y += numY
    rect.topLeft.y += numY
}
changeHeight(rectangle, 10)

// 8 Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.
function changeWidthAndHeight(rect: Rect, numY: number, numX: number) {
    changeWidth(rect, numX)
    changeHeight(rect, numY)
}
changeWidthAndHeight(rectangle, 4, 6)

//9 Функция смещения прямоугольника по оси X. Она при-
// нимает объект-прямоугольник и на сколько единиц его сдвинуть.
function moveX(rect: Rect, numX: number) {
    rect.topLeft.x += numX
    rect.bottomRigth.x += numX
}
moveX(rectangle, 8)

function moveY(rect: Rect, numY: number) {
    rect.topLeft.x += numY
    rect.bottomRigth.x += numY
}
moveY(rectangle, 3)

// 11 Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значе-
// ния: сдвиг по оси X и сдвиг по оси Y.
function moveXY(rect: Rect, numX: number, numY: number) {
    return `сдвиг по оси х: ${moveX(rect, numX)}, сдвиг по оси у: ${moveY(rect, numY)}`
}
console.log(moveXY(rectangle, 13, 4))

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
function showTime(time: Time) {
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

//!МАССИВЫ ПРАКТИКА
// з1 Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним
const arrNumb: number[] = [4, 3, 4, 8, 0, 5, 7, 2, 5, 7]

// 1 Функция принимает массив и выводит его на экран.
function getArray(array: number[]) {
    for (let el of array) {
        console.log(el)
    }
}
getArray(arrNumb)

// 2 Функция принимает массив и выводит только четные
// элементы.
function showEvenNum(array: number[]) {
    for (i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            console.log(array[i])
        }
    }
}
showEvenNum(arrNumb)
// 3 Функция принимает массив и возвращает сумму всех
// элементов массива.
function getSummNumOfArr(array: number[]) {
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
}
getSummNumOfArr(arrNumb)

// 4 Функция принимает массив и возвращает его максималь-
// ный элемент.
function getMaxOfArr(numbers: number[]) {
    let maxValue = Math.max(...numbers)
    console.log(maxValue)
}
getMaxOfArr(arrNumb)
// 5 Функция добавления нового элемента в массив по ука-
// занному индексу.
function addNewElInArr(array: number[], index: number, newEl: number) {
    array.splice(index, 0, newEl)
    return array
}
console.log(arrNumb)
console.log(addNewElInArr(arrNumb, 1, 7))

// 6 Функция удаления элемента из массива по указанному
// индексу.
function deleteElInArr(array: number[], index: number) {
    array.splice(index, 1)
    return array
}
console.log(arrNumb)
console.log(deleteElInArr(arrNumb, 10))

// з2 Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
// const arrNumb: number[] = [4, 3, 4, 8, 0, 5, 7, 2, 5, 7]
const arr2: number[] = [5, 8, 1, 9, 3]

// 1 Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.
function getUnionArray(arrNumb: number[], arr2: number[]) {
    const arr: number[] = []
    for (let el of arrNumb) {
        if (!arr.includes(el)) {
            arr.push(el)
        }
    }
    for (let el of arr2) {
        if (!arr.includes(el)) {
            arr.push(el)
        }
    }
    return arr
}
console.log(getUnionArray(arrNumb, arr2))

// 2 Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
function getCommonUnionArray(arrNumb: number[], arr2: number[]) {
    const arr: number[] = []
    for (let el of arrNumb) {
        if (arrNumb.includes(el) && arr2.includes(el)) {
            if (!arr.includes(el)) {
                arr.push(el)
            }
        }
    }
    return arr
}
console.log(getCommonUnionArray(arrNumb, arr2))

// 3 Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.
function getNotCommonUnionArray(arr1: number[], arr2: number[]) {
    const arr: number[] = []
    for (let el of arr1) {
        if (!arr2.includes(el)) {
            if (!arr.includes(el)) {
                arr.push(el)
            }
        }
    }
    return arr
}
console.log(getNotCommonUnionArray(arrNumb, arr2))

// з3 Создать массив фруктов и отсортировать его по алфавиту.
// Написать следующие функции.
const fruits: string[] = ['банан', 'яблоко', 'киви', 'груша', 'апельсин']
fruits.sort()
console.log(fruits)

// 1 Вывод на экран с помощью document.write() в виде списка
// (с помощью тегов ul и li).
const tagString = `<p style="color:${'white'}; margin:${'20px'}"> ${fruits}</p>`
document.body.insertAdjacentHTML('beforeend', tagString)
// 2 Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.
console.log(fruits.indexOf('яблоко'))

//!ДЗ МАССИВЫ
// Задание 1 Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
type product = {
    name: string,
    count: number,
    isBuyed: boolean,
}

const shopList: product[] = [
    { name: 'сыр', count: 1, isBuyed: true },
    { name: 'бекон', count: 1, isBuyed: false },
    { name: 'сливки', count: 1, isBuyed: false },
    { name: 'паста', count: 1, isBuyed: true },
    { name: 'яйца', count: 1, isBuyed: false },
]
// 1 Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
const shopListOL = document.getElementById('toBuyList') as HTMLOListElement
function renderBuyList(shopList: product[]) {
    let html = ''
    shopList.sort((a, b) => +a.isBuyed - +b.isBuyed).forEach(el => {

        html += `<li style="color:${el.isBuyed ? 'green' : 'red'}">${el.name} ${el.count} ${!el.isBuyed ? `<button data-name="${el.name}">Отметить купленным</button>` : ''}</li>`

    })
    shopListOL.innerHTML = html
}

renderBuyList(shopList)

// 2 Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
//? shopList.reduce((count, currentValue) => {
// ?  return +count + +currentValue
// ?}) reduce

const productNameInput = document.getElementById('productName') as HTMLInputElement
const productCountInput = document.getElementById('productCount') as HTMLInputElement
const addProductButton = document.getElementById('addProduct') as HTMLButtonElement

function addToShopList(arr: product[], name: string, count: number) {
    if (!name || !count) {
        alert('Введите продукт и количество')
        return
    }
    let inList = false
    for (let el of arr) {
        if (el.name == name && !el.isBuyed) {
            el.count += count
            inList = true
        }
    }
    if (!inList) {
        arr.push({ name, count, isBuyed: false })
    }
    renderBuyList(arr)
}

addProductButton.addEventListener('click', function () {
    const count = parseFloat(productCountInput.value.replace(',', '.'))
    addToShopList(shopList, productNameInput.value, count)
    productNameInput.value = ''
    productCountInput.value = ''
})

// 3 Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement

function setBuyed(arr: product[], name: string) {
    for (let el of arr) {
        if (el.name == name) {
            el.isBuyed = true
        }
    }
    renderBuyList(arr)
}
setBuyedButton.addEventListener('click', function () {
    setBuyed(shopList, productNameInput.value)
    productNameInput.value = ''
    productCountInput.value = ''
})
shopListOL.addEventListener('click', function (e) {
    const target = e.target as HTMLElement
    if (target.tagName == 'BUTTON' && target.dataset.name) {
        setBuyed(shopList, target.dataset.name)
    }
})

// з2 Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
type Tovar = {
    name: string,
    count: number,
    price: number,
}
const chequeShop: Tovar[] = [
    { name: 'диван', count: 2, price: 40000 },
    { name: 'стол', count: 1, price: 10000 },
    { name: 'студ', count: 4, price: 7000 },
    { name: 'кровать', count: 1, price: 45000 },
    { name: 'телевизор', count: 1, price: 97000 },
]
// 1 Распечатка чека на экран.

const chequeShopDiv = document.getElementById('cheque_shop') as HTMLDivElement

function showChequeShop(arr: Tovar[]) {
    let html = '<h3>check №2342342</h3>'
    html += '<p>IP Razumtceva</p>'
    html += `<table><tr>
    <th>  
    name
    </th>
    <th>  
    count
    </th>
    <th>  
price
    </th>
    </tr>`
    for (let el of arr) {
        html += `<tr>
            <td>  
            ${el.name}
            </td>
            <td>  
            ${el.count} 
            </td>
            <td>  
            ${el.price}
            </td>
        </tr>`
    }
    html += '</table>'
    chequeShopDiv.innerHTML = html
}


showChequeShop(chequeShop)

// 2 Подсчет общей суммы покупки.
function sumCheck(arr: Tovar[]) {
    let sum = 0
    for (let el of arr) {
        sum += el.price * el.count
    }
    return sum
}
console.log(sumCheck(chequeShop))

// function sumCheckg(arr: Tovar[]) {
//     let html = ''
//     for (let el of arr) {
//         html += `<h1>
//         ${el.price * el.count}
//         </h1>`
//     }
//     chequeShopDiv.innerHTML = html
// }
// sumCheckg(chequeShop)

// 3 Получение самой дорогой покупки в чеке.
function maxCheck(arr: Tovar[]) {
    let max = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i].count * arr[i].price > max) {
            max = arr[i].count * arr[i].price
        }
    }
    return max
}
console.log(maxCheck(chequeShop))

// 4 Подсчет средней стоимости одного товара в чеке.
function averageCheck(arr: Tovar[]) {
    return sumCheck(arr) / arr.length
}
console.log(averageCheck(chequeShop))


// з3 Создать массив css-стилей (цвет, размер шрифта, выравнива-
//     ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
//     ект, состоящий из двух свойств: название стиля и значение стиля.
//     Написать функцию, которая принимает массив стилей и
//     текст, и выводит этот текст с помощью document.write() в тегах
//     <p></p>, добавив в открывающий тег атрибут style со всеми сти-
//     лями, перечисленными в массиве.
const styles = [
    { color: 'red' },
    { 'font-size': '20px' },
    { 'text-align': 'left' },
    { 'margin': '20px' },
]
function renderText(styles: any[], text: string) {
    let styleText = ''
    for (let el of styles) {
        for (let key in el) {
            styleText += `${key}:${el[key]};`
        }
    }
    const tagString = `<p style="${styleText}"> ${text}</p>`
    document.body.insertAdjacentHTML('beforeend', tagString)
}
renderText(styles, 'text1')

// з4 Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1 Вывод на экран всех аудиторий.
// 2 Вывод на экран аудиторий для указанного факультета.
// 3 Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4 Функция сортировки аудиторий по количеству мест.
// 5 Функция сортировки аудиторий по названию (по алфа-
// виту).



// 02.04.24
// Есть массив объектов
type Employees = {
    name: string,
    department: string,
    salary: number,
}

const employees: Employees[] = [
    { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
    { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
    { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
    { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
    { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
    { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
    { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
    { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
]
// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10
const nNum: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
function getNNum(numbers: number[]) {
    for (let i = 0; i < 10; i++) {
        return numbers
    }
}
console.log(getNNum(nNum))

// 1.2.  Добавить в функцию опциональные параметры начального и конечного значения массив
function generateArray(start = 0, end = start + 10) {
    return { start, end }
}
console.log(generateArray(20))
console.log(generateArray(30, 28))
console.log(generateArray(742))
//  (если конечный элемент массива не передат, то он больше нечального на 10) . Вызвать функцию несаколько раз

// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве
function getRandomArr(n: number) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1
    }
    return arr
}
console.log(getRandomArr(6))

// 2.1. В файле html создать пустой div с произвольным id
// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement
const llllDIV = document.getElementById("llll") as HTMLDivElement
// 2.3. Вывесли в полученный div текст, "Привет, пользователь"
llllDIV.innerHTML = 'Привет, пользователь'
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.
function showEmployees(arr: Employees[], i = -1) {
    if (i > -1 && i < arr.length) {
        llllDIV.innerHTML = 'Привет, ' + arr[i].name
    } else {
        llllDIV.innerHTML = 'Привет, пользователь'
    }
}
showEmployees(employees, 3)

// 2.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
function newArr(arr: Employees[], department: string) {
    return arr.filter((el) => el.department == department)
  }
  newArr(employees, 'ads')
  console.log(newArr(employees, 'ads'))

function showElements(arr: Employees[]) {
    console.log(arr)
    console.log(arr[0])
    console.log(arr[0].name)
    console.log(arr[0].department)
    console.log(arr[0].salary)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name)
    }
    for (let empl of arr) {
        console.log(empl.name)
    }
    const newArr = [4, 45, 6]
    return newArr
}
const вернулаФункция = showElements(employees)
console.log(вернулаФункция)

// Все функции вызывать несколько раз с разными параметрами
// 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
// deps.includes
// [ads, prog, disign]

function unicDeps(arr: Employees[]) {
    const unic: string[] = []
    arr.forEach(el => {
        if (!unic.includes(el.department)) {
            unic.push(el.department)
        }
    })
    return unic
}

console.log(unicDeps(employees))

// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
function sortEmpl(arr: Employees[], key: 'name' | 'department' | 'salary') {
    return arr.sort((a, b) => {
        if (a[key] > b[key]) return 1
        if (a[key] < b[key]) return -1
        return 0
    })
}
console.log(sortEmpl(employees, 'name'))
console.log(sortEmpl(employees, 'department'))
console.log(sortEmpl(employees, 'salary'))
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// 3.3. Написать функцию, аналогичную описанной в задании 3.2., но сортирующую в обратном порядке
function sortEmplReturn(arr: Employees[], key: 'name' | 'department' | 'salary') {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) return 1
        if (a[key] > b[key]) return -1
        return 0
    })
}
console.log(sortEmplReturn(employees, 'name'))
console.log(sortEmplReturn(employees, 'department'))
console.log(sortEmplReturn(employees, 'salary'))
// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
function findEmplByName(arr: Employees[], name: string) {
    for (let el of arr) {
        if (el.name == name) {
            return el
        }
    }
    return undefined
}
console.log(findEmplByName(employees, 'Романов Эмиль Макарович'))
console.log(findEmplByName(employees, 'Илья'))

// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
function getEmployee(arr: Employees[], department: string) {
    return arr.filter((el) => el.department == department)
}
getEmployee(employees, 'prog')
console.log(getEmployee(employees, 'prog'))
console.log(getEmployee(employees, 'disign'))
// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву
function getEmployeeSalary(arr: Employees[]) {
    let sum = 0
    for (let el of arr) {
        sum += el.salary
    }
    return sum
}
console.log( getEmployeeSalary(employees))
console.log( getEmployeeSalary(newArr(employees, 'prog')))
console.log( getEmployeeSalary(newArr(employees, 'ads')))
console.log( getEmployeeSalary(newArr(employees, 'disign')))

// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.
const ButtonForEml = document.getElementById('button-for-empl') as HTMLDivElement
// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
const sumSalary = document.getElementById('sum_sal') as HTMLDivElement
function conclusionList(arr:Employees[]){
    let html ='<ul>'
    for (let el of arr){
        html +=`<li>${el.name} ${el.department} ${el.salary}</li>`
    }
    sumSalary.innerHTML = `${html}</ul><div>Sum ${getEmployeeSalary(arr)}</div>`
}
console.log(conclusionList(employees))
// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
//      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
// 3.10. Используя div, полученный в задании 3.7
// div37.addEventListener('click', function (e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.dep) {
//      в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
//      в div (3.8) выводить сумму зарплат
//   }
// })