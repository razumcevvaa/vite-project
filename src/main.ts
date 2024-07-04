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

// переменная = (условие) ? значение, которое присвоится в случае истинности условия : Значение, которое присвоится в случае ложности условия
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
// const fruits: string[] = ['банан', 'яблоко', 'киви', 'груша', 'апельсин']
// fruits.sort()
// console.log(fruits)

// 1 Вывод на экран с помощью document.write() в виде списка
// (с помощью тегов ul и li).
// const tagString = `<p style="color:${'white'}; margin:${'20px'}"> ${fruits}</p>`
// document.body.insertAdjacentHTML('beforeend', tagString)
// 2 Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.
// console.log(fruits.indexOf('яблоко'))

//!ДЗ МАССИВЫ
// Задание 1
// type product = {
//     name: string,
//     count: number,
//     isBuyed: boolean,
// }

// const shopList: product[] = [
//     { name: 'сыр', count: 1, isBuyed: true },
//     { name: 'бекон', count: 1, isBuyed: false },
//     { name: 'сливки', count: 1, isBuyed: false },
//     { name: 'паста', count: 1, isBuyed: true },
//     { name: 'яйца', count: 1, isBuyed: false },
// ]
// 1 Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// const shopListOL = document.getElementById('toBuyList') as HTMLOListElement
// function renderBuyList(shopList: product[]) {
//     let html = ''
//     shopList.sort((a, b) => +a.isBuyed - +b.isBuyed).forEach(el => {

//         html += `<li style="color:${el.isBuyed ? 'green' : 'red'}">${el.name} ${el.count} ${!el.isBuyed ? `<button data-name="${el.name}">Отметить купленным</button>` : ''}</li>`

//     })
//     shopListOL.innerHTML = html
// }

// renderBuyList(shopList)

// 2 
// const productNameInput = document.getElementById('productName') as HTMLInputElement
// const productCountInput = document.getElementById('productCount') as HTMLInputElement
// const addProductButton = document.getElementById('addProduct') as HTMLButtonElement

// function addToShopList(arr: product[], name: string, count: number) {
//     if (!name || !count) {
//         alert('Введите продукт и количество')
//         return
//     }
//     let inList = false
//     for (let el of arr) {
//         if (el.name == name && !el.isBuyed) {
//             el.count += count
//             inList = true
//         }
//     }
//     if (!inList) {
//         arr.push({ name, count, isBuyed: false })
//     }
//     renderBuyList(arr)
// }

// addProductButton.addEventListener('click', function () {
//     const count = parseFloat(productCountInput.value.replace(',', '.'))
//     addToShopList(shopList, productNameInput.value, count)
//     productNameInput.value = ''
//     productCountInput.value = ''
// })

// 3 Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
// const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement

// function setBuyed(arr: product[], name: string) {
//     for (let el of arr) {
//         if (el.name == name) {
//             el.isBuyed = true
//         }
//     }
//     renderBuyList(arr)
// }
// setBuyedButton.addEventListener('click', function () {
//     setBuyed(shopList, productNameInput.value)
//     productNameInput.value = ''
//     productCountInput.value = ''
// })
// shopListOL.addEventListener('click', function (e) {
//     const target = e.target as HTMLElement
//     if (target.tagName == 'BUTTON' && target.dataset.name) {
//         setBuyed(shopList, target.dataset.name)
//     }
// })

// з2 
// type Tovar = {
//     name: string,
//     count: number,
//     price: number,
// }
// const chequeShop: Tovar[] = [
//     { name: 'диван', count: 2, price: 40000 },
//     { name: 'стол', count: 1, price: 10000 },
//     { name: 'студ', count: 4, price: 7000 },
//     { name: 'кровать', count: 1, price: 45000 },
//     { name: 'телевизор', count: 1, price: 97000 },
// ]
// 1 Распечатка чека на экран.

// const chequeShopDiv = document.getElementById('cheque_shop') as HTMLDivElement

// function showChequeShop(arr: Tovar[]) {
//     let html = '<h3>check №2342342</h3>'
//     html += '<p>IP Razumtceva</p>'
//     html += `<table><tr>
//     <th>  
//     name
//     </th>
//     <th>  
//     count
//     </th>
//     <th>  
// price
//     </th>
//     </tr>`
//     for (let el of arr) {
//         html += `<tr>
//             <td>  
//             ${el.name}
//             </td>
//             <td>  
//             ${el.count} 
//             </td>
//             <td>  
//             ${el.price}
//             </td>
//         </tr>`
//     }
//     html += '</table>'
//     html += `<h1>TO PAY:   ${sumCheck(arr)}$</h1>`

//     chequeShopDiv.innerHTML = html
// }


// showChequeShop(chequeShop)

// 2 Подсчет общей суммы покупки.
// function sumCheck(arr: Tovar[]) {
//     let sum = 0
//     for (let el of arr) {
//         sum += el.price * el.count
//     }
//     return sum
// }
// console.log(sumCheck(chequeShop))

// function sumCheckg(arr: Tovar[]) {
//     let html = ''
//     let sum = 0
//     for (let el of arr) {
//         sum+=el.price * el.count
//     }
//     html += `<h1>${sum}</h1>`

//     chequeShopDiv.innerHTML += html
// }
// sumCheckg(chequeShop)

// 3 Получение самой дорогой покупки в чеке.
// function maxCheck(arr: Tovar[]) {
//     let max = 0
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].count * arr[i].price > max) {
//             max = arr[i].count * arr[i].price
//         }
//     }
//     return max
// }
// console.log(maxCheck(chequeShop))

// 4 Подсчет средней стоимости одного товара в чеке.
// function averageCheck(arr: Tovar[]) {
//     return sumCheck(arr) / arr.length
// }
// console.log(averageCheck(chequeShop))


// з3 
// const styles = [
//     { color: 'red' },
//     { 'font-size': '20px' },
//     { 'text-align': 'left' },
//     { 'margin': '20px' },
// ]
// function renderText(styles: any[], text: string) {
//     let styleText = ''
//     for (let el of styles) {
//         for (let key in el) {
//             styleText += `${key}:${el[key]};`
//         }
//     }
//     const tagString = `<p style="${styleText}"> ${text}</p>`
//     document.body.insertAdjacentHTML('beforeend', tagString)
// }
// renderText(styles, 'text1')


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
// const llllDIV = document.getElementById("llll") as HTMLDivElement
// 2.3. Вывесли в полученный div текст, "Привет, пользователь"
// llllDIV.innerHTML = 'Привет, пользователь'
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.
// function showEmployees(arr: Employees[], i = -1) {
//     if (i > -1 && i < arr.length) {
//         llllDIV.innerHTML = 'Привет, ' + arr[i].name
//     } else {
//         llllDIV.innerHTML = 'Привет, пользователь'
//     }
// }
// showEmployees(employees, 3)

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
console.log(getEmployeeSalary(employees))
console.log(getEmployeeSalary(newArr(employees, 'prog')))
console.log(getEmployeeSalary(newArr(employees, 'ads')))
console.log(getEmployeeSalary(newArr(employees, 'disign')))

// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.
// const ButtonForEml = document.getElementById('button-for-empl') as HTMLDivElement
// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
// const sumSalary = document.getElementById('sum_sal') as HTMLDivElement
// function conclusionList(arr: Employees[]) {
//     let html = '<ul>'
//     for (let el of arr) {
//         html += `<li>${el.name} ${el.department} ${el.salary}</li>`
//     }
//     sumSalary.innerHTML = `${html}</ul><h3>Sum ${getEmployeeSalary(arr)}</h3>`
// }
// console.log(conclusionList(employees))
// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
//      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"

// function renderButtons(arr: string[]) {
//     let html = ''
//     for (let dep of arr) {
//         html += `<button data-dep="${dep}">${dep.toUpperCase()}</button>`
//     }
//     html += `<button data-dep="all">ALL</button>`
//     ButtonForEml.innerHTML = html
// }
// renderButtons(unicDeps(employees))
// 3.10. Используя div, полученный в задании 3.7
// div37.addEventListener('click', function (e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.dep) {
//      в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
//      в div (3.8) выводить сумму зарплат
//   }
// })
// ButtonForEml.addEventListener('click', function (e) {
//     const target = e.target as HTMLElement
//     if (target.tagName == 'BUTTON' && target.dataset.dep) {
//         if (target.dataset.dep == 'all') {
//             conclusionList(employees)
//         } else {
//             conclusionList(getEmployee(employees, target.dataset.dep))
//         }
//     }
// })


// ! СТРОКИ ПРАКТИКА
// 1 Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.
function findMoreLength(str1: string, str2: string) {
    if (str1.length > str2.length) return 1
    if (str1.length < str2.length) return -1
    else return 0
}
console.log(findMoreLength('lololo', 'lololo'))
console.log(findMoreLength('lololrgro', 'lololo'))
console.log(findMoreLength('lololo', 'lololerero'))

// 2 Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.
function doUpperCase(str: string) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1)
}
console.log(doUpperCase('fuehueihfi'))

// 3 Написать функцию, которая считает количество гласных
// букв в переданной строке.
function countNumOfLow(str: string) {
    const gl = 'уеыаоэяиюёeayuio'
    let count = 0
    for (let char of str) {
        count += gl.includes(char) ? 1 : 0
    }
    return count
}
console.log(countNumOfLow('kgoigjereee'))

// 4 Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.
const spams = [
    '100%',
    '100% бесплатно',
    'увеличение продаж',
    'только сегодня',
    'не удаляйте',
    'ххх',
]
function checkSpam(str: string) {
    let lowerStr = str.toLowerCase()
    for (let spam of spams) {
        if (lowerStr.includes(spam)) return true
    }
    return false
}
console.log(checkSpam('100%'))

// 5 Написать функцию сокращения строки. Функция прини-
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.
function reduceToMaxValue(str: string, maxleng: number) {
    if (str.length > maxleng) {
        let maxStr = str.slice(0, maxleng - 1) + '...'
        return maxStr
    }
}
console.log(reduceToMaxValue('Добро пожаловать!', 6))

// 6 Написать функцию, которая проверяет, является ли переданная строка палиндромом.
function checkPalindrom(str: string) {
    str = str.toLowerCase()
    return str == str.split('').reverse().join('')
}
console.log(checkPalindrom('папа'))
console.log(checkPalindrom('АллА'))

// 7 Написать функцию, которая считает количество слов в предложении.
function countNumOfWords(str: string) {
    return str.split(' ').length
}
console.log(countNumOfWords('здесь три слова'))

// 8 Написать функцию, которая возвращает самое длинное слово из предложения.
function getLongestWord(str: string) {
    let strSplit = str.split(' ')
    let longestWord = 0
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length
        }
    }
    return longestWord
}
console.log(getLongestWord('The quick brown fox jumpedhhh over the lazy dog'))

// 9 Написать функцию, которая считает среднюю длину слова в предложении.
function getSrednLengWord(str: string) {
    let words = str.split(' ')
    let totalLength = 0
    for (let word of words) {
        totalLength += word.length
    }
    return totalLength / words.length
}
console.log(getSrednLengWord('The quick brown fox jumpedhhh over the lazy dog'))

// 10 Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.
function findIndexWord(str: string, symbol: string) {
    const info = {
        position: [] as number[],
        kolvo: 0,
    }
    for (let i = 0; i < str.length; i++) {
        if (symbol == str[i]) {
            info.position.push(i)
            info.kolvo++
        }
    }
    return info
}
console.log(findIndexWord('hello world', 'h'))

// !СТРОКИ ДЗ
// 1 Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
function getStatisticStr(str: string) {
    const info = {
        letter: 0,
        numb: 0,
        symb: 0,
    }
    const letter = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяqwertyuiopasdfghjklzxcvbnm'
    const allletters = letter + letter.toUpperCase()
    console.log(allletters)
    const numbers = '0123456789'
    const simbols = '?/,.;:!#$%^&*()-+=~'
    for (let char of str) {
        if (allletters.includes(char)) {
            info.letter++
        }
        if (numbers.includes(char)) {
            info.numb++
        }
        if (simbols.includes(char)) {
            info.symb++
        }
    }
    return info
}
console.log(getStatisticStr('o  %^% 7kjoi ,, 33'))

// 2 Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
function getTextNumb(number: number) {
    let first = ['ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять']
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать']
    let third = ['', '', 'Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто']
    if (number >= 0 && number <= 9) {
        return first[number]
    }
    if (number >= 10 && number < 20) {
        return second[number - 10]
    }
    if (number >= 20 && number <= 99) {
        if (number % 10 == 0) {
            return third[number / 10]
        }
        return third[Math.trunc(number / 10)] + ' ' + first[number % 10]
    }
    else {
        return 'Введите двузначное число'
    }
}
console.log(getTextNumb(86))

//3 Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
function changeStr(str: string) {
    let num = '1234567890'
    let chars = str.toUpperCase().split('')
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == str[i])
            chars[i] = chars[i].toLowerCase()
        if (num.includes(chars[i])) {
            chars[i] = '_'
        }
    }
    return chars.join('')
}
console.log(changeStr('FMrs53'))

// 4 Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.
function transformTextStyle(str: string) {

    const strArr = str.split('-')
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
    }
    return strArr.join('')
    // return str.split('-').map((el,i)=> i?el[0].toUpperCase()+el.slice(1):el).join('')

}
console.log(transformTextStyle('background-color'))
console.log(transformTextStyle('-moz-background-color'))

// 5 Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.
function transformAbbreviation(str: string) {
    let words = str.split(' ')
    let abb = ''
    words.forEach(word => {
        abb += word[0].toUpperCase()
    })
    return abb
}
console.log(transformAbbreviation('cascading style sheets'))
console.log(transformAbbreviation('объектно- ориентированное программирование'))

// 6 Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.
function combineStrings(...str: any) {
    return str.join('')
}
console.log(combineStrings('mom', ',', 'gog', 'ookok'))

// 7 Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.
function calculator(primer: string) {
    primer = primer.replaceAll(' ', '')
    if (primer.includes('+')) {
        const arr = primer.split('+')
        return +arr[0] + (+arr[1])
    }
    else if (primer.includes('-')) {
        const arr = primer.split('-')
        return +arr[0] - (+arr[1])
    }
    else if (primer.includes('*')) {
        const arr = primer.split('*')
        return +arr[0] * (+arr[1])
    }
    else if (primer.includes('/')) {
        const arr = primer.split('/')
        return +arr[0] / (+arr[1])
    }
}

console.log(calculator('2 + 89'))
console.log(calculator('5 * 4'))
console.log(calculator('100 / 8'))
console.log(calculator('8 - 556'))

// 8 Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.
function getInfoUrl(str: string) {
    const protocol = str.split('://')[0]
    const domain = str.split('://')[1].split('/')[0]
    const path = str.split(domain)[1]
    return `протокол: ${protocol}, домен: ${domain}, путь: ${path}`
}
console.log(getInfoUrl('https://itstep.org/ua/about'))

// !ПЗ КЛАССЫ
//1
// const printMachDIV = document.getElementById('print-machin') as HTMLDivElement
// class PrintMachine {
//     tag: string
//     fontSize = 20
//     color = 'red'
//     fontFamily = 'verdana'
//     constructor(fontSize: number, color: string, fontFamily: string, tag = 'p') {
//         this.fontSize = fontSize
//         this.color = color
//         this.fontFamily = fontFamily
//         this.tag = tag
//     }
//     print(text: string) {
//         printMachDIV.innerHTML += `<${this.tag} style="font-size:${this.fontSize};font-family:${this.fontFamily}; color: ${this.color}">${text}</${this.tag}>`
//     }
// }

// const mee = new PrintMachine(400, 'yellow', 'verdana')
// mee.print('Hellpp(this is written by a printing machine)')
// let mee2 = new PrintMachine(200, 'red', 'verdana')
// mee2.print('как сделать второй текст')

// 2 Реализовать класс, описывающий новость 
const newsDIV = document.getElementById('news-news') as HTMLDivElement
const newsTitleInput = document.getElementById('nttitle') as HTMLInputElement
const newsTextInput = document.getElementById('nttext') as HTMLInputElement
const newsTagInput = document.getElementById('nttag') as HTMLInputElement
const newsAInput = document.getElementById('nta') as HTMLInputElement
const newsDateInput = document.getElementById('ntd') as HTMLInputElement
const newsAddInput = document.getElementById('ntadd') as HTMLInputElement

newsAddInput.addEventListener('click', () => {
    newsF.addNews(newsTitleInput.value, newsTextInput.value, newsTagInput.value, newsDateInput.value, newsAInput.value)
})
//удалить новость
const newsFindInput = document.getElementById('numNew') as HTMLInputElement
const newsDelInput = document.getElementById('delNew') as HTMLInputElement
newsDelInput.addEventListener('click', () => {
    newsF.deleteNews(+newsFindInput.value)
})
// найти по тегу
const findNInput = document.getElementById('findN') as HTMLInputElement
const finddidInput = document.getElementById('findid') as HTMLInputElement
finddidInput.addEventListener('click', () => {
    newsF.searchNewsByTag(findNInput.value)
})

class News {
    heading
    date
    text
    hashtag
    a
    constructor(heading: string, text: string, hashtag: string, date: string, a: string) {
        this.heading = heading
        this.text = text
        this.hashtag = hashtag
        this.date = new Date(date)
        this.a = a
    }
    getDate() {
        let today = new Date()
        let diffTime = Math.abs(today.getTime() - this.date.getTime())
        let diffDays = diffTime / (1000 * 60 * 60 * 24)
        if (diffDays < 1) {
            return 'Today'
        } else if (diffDays < 7) {
            return `${diffDays} дней назад`
        } else {
            return this.date.toLocaleDateString()
        }
    }
    print() {
        return `<h1>${this.heading}</h1>
        <p class="">${this.getDate()}</p>
        <p>${this.text}</p>
        <a href=" https://www.nytimes.com/2024/04/25/arts/design/san-francisco-museum-sound.html">${this.a}</a>
        <p>${this.hashtag}</p>`
    }
}
const newNews = new News('Music Is More Than Just Sound', 'Music is music. But music is also the stuff surrounding the music.Beethoven`s Fifth Symphony, “The White Album,” Coltrane live at Birdland: On their own, these are but air molecules vibrating across our eardrums. Music becomes sacred partly through the material culture it inspires.And just as music shapes design — think jazz album cover versus metal album cover — design also codes how we hear music. In an old Xeroxed flyer for a punk show was information on how to absorb those songs; in an iconic ad for Maxell cassette  tapes lurked signals about the spirit of rock...', '#music #song #TheNYT', '2024-04-07T18:50:20', ' More')

newNews.print()

// 3 Реализовать класс, описывающий новостную ленту.
// Класс должен содержать:
// ■ массив новостей;
// ■ свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних новостей до старых);
// ■ метод для поиска новостей по тегу (возвращает массив
// новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.

const makeNewsArr = () => {
    const arr = [] as News[]
    if (localStorage.news == 'undefined' || !localStorage.news) {
        return [newNews]
    }
    const rawArr = JSON.parse(localStorage.news) as any[]
    rawArr.forEach(el => {
        arr.push(new News(el.heading, el.text, el.hashtag, el.date, el.a))
    })
    return arr
}

class NewsFeed {
    news: News[]
    constructor() {
        this.news = makeNewsArr()
        this.showAllNews()
    }
    showAllNews(text = 'Новостей пока нет', news = this.news) {
        if (news.length == 0) {
            newsDIV.innerHTML = text
        } else {
            newsDIV.innerHTML = news.map(el => el.print()).join('<br>')
        }
    }
    addNews(heading: string, text: string, hashtag: string, date: string, a: string) {
        this.news.push(new News(heading, text, hashtag, date, a))
        this.showAllNews()
        localStorage.news = JSON.stringify(this.news)
    }
    deleteNews(index: number) {
        if (index > 0 && index <= this.news.length) {
            this.news.splice(index - 1, 1)
            localStorage.news = JSON.stringify(this.news)
        } else {
            console.log('Под таким номером нет новости')
        }
        this.showAllNews()
    }
    sortNewsDate() {
        this.news.sort((a, b) => b.date.getTime() - a.date.getTime())
        this.showAllNews()
    }
    searchNewsByTag(tag: string) {
        this.showAllNews('Ничего не найденo', this.news.filter((item) => item.hashtag.includes(tag)))
    }
}
const newsF = new NewsFeed()
// console.log('dfgfdgd',newsF.news)
// newsF.addNews('Music !!!!!', 'Music is music. But music is also the stuff surrounding the music.Beethoven`s Fifth Symphony, “The White Album,” Coltrane live at Birdland: On their own, these are but air molecules vibrating across our eardrums. Music becomes sacred partly through the material culture it inspires.And just as music shapes design — think jazz album cover versus metal album cover — design also codes how we hear music. In an old Xeroxed flyer for a punk show was information on how to absorb those songs; in an iconic ad for Maxell cassette  tapes lurked signals about the spirit of rock...', '#music #song #TheNYT #mmm', '2024-04-07T18:50:20', ' More')

//!ДЗ КЛАССЫ
// 1 
class Circle {
    #radius
    constructor(radius: number) {
        this.#radius = radius
    }
    get radius() {
        return this.#radius
    }
    set radius(n: number) {
        if (n <= 0) {
            console.log('ошибка блин')
        }
        this.#radius = n
    }
    getDiametr() {
        return this.#radius * 2
    }
    squareCircle() {
        return Math.PI * this.#radius ** 2
    }
    lengthCircle() {
        return 2 * Math.PI * this.#radius
    }
}
const abc = new Circle(15)
console.log(abc.radius)
abc.radius = 20
console.log(abc.radius)
console.log(abc.getDiametr())
console.log(abc.squareCircle())
console.log(abc.lengthCircle())

// 2

class HtmlElement {
    tag: string
    isSingle: boolean
    text: string
    atributes = [] as any[]
    styles = [] as any[]
    elements = [] as HtmlElement[]
    constructor(tag: string, text = '') {
        const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
        this.tag = tag
        this.text = text
        this.isSingle = singleArr.includes(tag) ? true : false
    }
    setAtribute(name: string, value: string) {
        this.atributes.push({ name, value })
    }
    setStyle(name: string, value: string) {
        this.styles.push({ name, value })
    }
    prepend(el: HtmlElement) {
        this.elements.unshift(el)
    }
    append(el: HtmlElement) {
        this.elements.push(el)
    }
    getHtml(): string {
        const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
        const attrCopy = [...this.atributes]
        if (this.styles.length) {
            attrCopy.push({ name: 'style', value: styles })
        }
        if (this.isSingle) {
            if (this.text) {
                attrCopy.push({ name: 'area-label', value: this.text })
            }
            const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
            return `<${this.tag} ${atributes}>`
        } else {
            const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
            return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
        }
    }
}
const wrapper = new HtmlElement('div')
wrapper.setAtribute('id', 'wrapper')
wrapper.setStyle('display', 'flex')
const div = new HtmlElement('div')
div.setStyle('width', '300px')
div.setStyle('margin', '10px')
const h3 = new HtmlElement('h3', 'Lorem')
const img = new HtmlElement('img')
img.setStyle('width', '100%')
img.setAtribute('src', '1.gif')
img.setAtribute('alt', 'Lorem')
const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
p.setStyle('text-align', 'justify')
const ala = new HtmlElement('a', ' More...')
ala.setAtribute('href', 'https://www.lipsum.com/')
ala.setAtribute('target', '_blank')
p.append(ala)
div.append(img)
div.append(p)
div.prepend(h3)
wrapper.append(div)
wrapper.append(div)
const heDiv = document.getElementById('he') as HTMLDivElement
heDiv.innerHTML = wrapper.getHtml()


let now = new Date()
console.log(now)
let date = new Date(2012, 1, 20, 3, 12)
console.log(date.toLocaleString())

function getWeekDay(date: Date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}
date = new Date(2012, 0, 3)
console.log(getWeekDay(date))

function getLocalDay(date: Date) {
    let day = date.getDay()
    if (day == 0) {
        day = 7
    }
    return day
}
date = new Date(2012, 0, 3)
console.log(getLocalDay(date))

function getDateAgo(date: Date, days: number) {
    let dateCopy = new Date(date)
    dateCopy.setDate(date.getDate() - days)

    return dateCopy.getDate()
}
date = new Date(2015, 0, 2)
console.log(getDateAgo(date, 1))
console.log(getDateAgo(date, 2))
console.log(getDateAgo(date, 365))

function getLastDayOfMonth(year: number, month: number) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}
console.log((getLastDayOfMonth(2012, 0)))
console.log((getLastDayOfMonth(2012, 1)))

function getSecondsToday() {
    let date = new Date()
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
}
date = new Date(2012, 0, 3, 10)
console.log(getSecondsToday())

//!ЧАСЫ
const timeNodeDIV = document.getElementById('secondsToTomorrow') as HTMLDivElement
function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '')
}

let timerId = setInterval(() =>
    timeNodeDIV.innerHTML = getCurrentTimeString(),
    1000
)
const watchS = document.getElementById('watch-start') as HTMLInputElement
const watchSTop = document.getElementById('watch-stop') as HTMLInputElement
watchS.addEventListener('click', () => {
    clearInterval(timerId)
    timerId = setInterval(() =>
        timeNodeDIV.innerHTML = getCurrentTimeString(),
        1000)
})
watchSTop.addEventListener('click', () => {
    clearInterval(timerId)
})

// таймер до конца пары
const timeTomDIV = document.getElementById('time-tom') as HTMLDivElement
let now1 = new Date()
let tomorrow = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate(), 21, 20)
let diff = tomorrow.getTime() - now1.getTime()
function timesAndM() {
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    diff -= 1000
    if (diff < 0) {
        tomorrow.setDate(tomorrow.getDate() + 1)
        diff = tomorrow.getTime() - now1.getTime()
    } else if (diff == 0) {
        timeTomDIV.classList.add('para-and')
    }
    return (minutes + ':' + seconds)

}
setInterval(
    () => timeTomDIV.innerHTML = timesAndM().toString(), 1000
)
// 3пз Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки.

class CssClass {
    styles = [] as Record<string, string>[]
    name: string
    constructor(name: string) {
        this.name = name
    }
    setStyle(name: string, value: string) {
        this.styles.push({ name, value })
    }
    removeProperty(name: string) {
        const index = this.styles.findIndex(el => el.name == name)
        if (index !== 1) this.styles.splice(index, 1)
    }

    getCss() {
        const styles = this.styles.map((el) => el.name + ':' + el.value).join(';')
        return `.${this.name}{${styles}}`
    }
}

const descCss = document.getElementById('st') as HTMLDivElement
const bigRed = new CssClass('bigRed')
bigRed.setStyle("color", "red")
bigRed.setStyle("color", "green")
bigRed.setStyle("font-size", "30px")
bigRed.setStyle("font-family", "Arial")
console.log(bigRed.getCss())
bigRed.removeProperty("font-family")
bigRed.removeProperty("color")
console.log(bigRed.getCss())

descCss.innerHTML += bigRed.getCss()
// 4 Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент,описанный с помощью класса HtmlElement;
// ■ метод getCode(), который возвращает строку с html ко-
// дом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных
// элементов).
class HtmlBlock {
    styles = [] as CssClass[]
    element: HtmlElement
    constructor(styles: CssClass[], element: HtmlElement) {
        this.styles = styles
        this.element = element
    }
    getCode() {
        return {
            styles: this.styles.map(el => el.getCss()).join('\n'),
            html: this.element.getHtml()
        }
    }
}
const docCss = document.getElementById('st') as HTMLDivElement
const bigGreen = new CssClass('bigGreen')
const docDiv = document.getElementById('he') as HTMLDivElement
bigGreen.setStyle("color", "pink")
bigGreen.setStyle("color", "white")
bigGreen.setStyle("font-size", "40px")
bigGreen.setStyle("font-family", "Times New Roman")
console.log(bigGreen.getCss())
bigGreen.removeProperty("font-family")
bigGreen.removeProperty("color")

const wrapClass = new CssClass('wrap')
wrapClass.setStyle("display", "flex")

const blockClass = new CssClass('block')
blockClass.setStyle("width", "300px")
blockClass.setStyle("margin", "10px")

const imgClass = new CssClass('img')
imgClass.setStyle("width", "100%")
imgClass.setStyle("color", "blueviolet")

const textClass = new CssClass('text')
textClass.setStyle("text-align", "justify")

const block = new HtmlBlock([wrapClass, blockClass, imgClass, textClass], wrapper)

docCss.innerHTML += bigGreen.getCss()
docDiv.innerHTML = wrapper.getHtml()
const blockCode = block.getCode()
docCss.innerHTML += blockCode.styles
docDiv.innerHTML = blockCode.html

// const block = new HtmlBlock([bigGreen,], wrapper)
docCss.innerHTML += bigGreen.getCss()
docDiv.innerHTML = wrapper.getHtml()

// ДЗ5 Реализовать класс, описывающий простой маркер. 
const markText = document.getElementById('marker') as HTMLDivElement
const fillM = document.getElementById('fillM') as HTMLButtonElement
class Marker {
    color
    ink
    constructor(color: string, ink: number) {
        this.color = color
        this.ink = ink
    }
    get markerProps() {
        return [this.color, this.ink]
    }
    print(text: string) {
        markText.style.color = this.color
        for (let i = 0; i < text.length; i++) {
            if (this.ink != 0) {
                markText.innerHTML += text[i]
                if (text[i] == ' ') continue
                this.ink -= 0.5
            } else if (this.ink == 0) {
                fillM.innerHTML = 'Marker is over. Fill?'
                break
            }
        }
    }
}
class FilledMarker extends Marker {
    fill(ink: number) {
        if (ink > 100) {
            ink = 100
        }
        else {
            this.ink += ink
        }
    }
}
let marker = new FilledMarker('red', 5)
const textMar = 'Класс — это шаблон или чертеж, по которому можно создавать объекты одного типа. Он определяет общие свойства и методы для всех объектов, которые будут созданы на его основе. Класс содержит в себе конструктор — метод, который вызывается при создании нового объекта и инициализирует его свойства.  Класс также содержит в себе другие методы (функции), которые определяют поведение объекта. Методы класса хранятся в специальном свойстве prototype, которое является прототипом для всех объектов, созданных на основе класса.'
marker.print(textMar)
fillM.addEventListener('click', () => {
    marker.fill(100)
    marker.print(textMar)
    fillM.innerHTML = 'Fill'
})
// Реализуйте класс ExtendedDate, унаследовав его от стандарт-
// ного класса Date и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.
class ExtendedDate extends Date {
    constructor() {
        super()
    }
    toText() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        const day = [
            'первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое', 'десятое',
            'одинадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семнадцатое', 'восемнадцатое', 'девятнадцатое', 'двадцатое',
            'двадцать первое', 'двадцать второе', 'двадцать трете', 'двадцать четвертое', 'двадцать пятое', 'двадцать шестое', 'двадцать седьмое', 'двадцать восьмое',
            'двадцать девятое', 'тридцатое', 'тридцать первое'
        ]
        return `${day[this.getDate() - 1]} ${months[this.getMonth()]}`
    }
    checkDate() {
        let date = new Date
        if (date < this) {
            return false
        }
        return true
    }
    leapYear() {
        let year = new Date
        if (year.getDate() % 4 == 0 && year.getDate() % 100 !== 0) {
            return 'год високосный'
        }
        return 'год невисокосный'
    }
    nextDate() {
        return `${this.getDate()} ${this.getMonth()}`
    }
}
const extendedDate = new ExtendedDate()
console.log(extendedDate.toText())
console.log(extendedDate.checkDate())
console.log(extendedDate.leapYear())
console.log(extendedDate.nextDate())

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().
class Employee {
    name: string | undefined
    departament: string | undefined
    age: number | undefined
    salary: number | undefined
    constructor(name: string, departament: string, age: number, salary: number) {
        this.name = name
        this.departament = departament
        this.age = age
        this.salary = salary
    }
}
const employeesNew = [
    new Employee('Федотова Арина Глебовна', 'ads', 20, 2100),
    new Employee('Голикова Мария Филипповна', 'prog', 22, 3500),
    new Employee('Панин Александр Германович', 'ads', 27, 2100),
    new Employee('Романов Эмиль Макарович', 'prog', 30, 3100),
    new Employee('Смирнов Никита Александрович', 'prog', 28, 3800),
    new Employee('Александрова Майя Вячеславовна', 'ads', 25, 2900),
    new Employee('Крылов Богдан Максимович', 'disign', 27, 2500),
    new Employee('Мухина Айша Константиновна', 'disign', 30, 2100),
    new Employee('Кошкин Богдан Максимович', 'buh', 29, 2200),
    new Employee('Муразова Айша Константиновна', 'buh', 30, 2300),
]
class EmpTable {
    arr: Employee[]
    constructor(arr: Employee[]) {
        this.arr = arr
    }
    getHtml() {
        let html = `<table> <thead>`
        html += `<tr><th>Имя</th><th>Отдел</th><th>Возраст</th><th>ЗП</th></tr></thead><tbody>`
        for (let el of this.arr) {
            html += `<tr><td>${el.name}</td><td>${el.departament}</td><td>${el.age}</td><td>${el.salary}</td></tr>`
        }
        html += `</tbody></table>`
        return html
    }
}
const emp = new EmpTable(employeesNew)
const empTableDiv = document.querySelector('#empTable') as HTMLDivElement
empTableDiv.innerHTML = emp.getHtml()

// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
// for (let li of document.querySelectorAll('#fauna li')) {
//     let text = li?.firstChild?.data.trim()
//     let count = li.getElementsByTagName('li').length
//     console.log(text + ' ' + count)
// }

// let link = document.querySelector('a')
// let selector = 'a[href*="://"]:not(a[href^="http://internal.com"])'
// let links = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>
// links.forEach(link => link.style.color = 'orange')

// ИЗМЕНЕНИЕ ДОКУМЕНТА
// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },

//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// } as Record<string, any>
// function createTree(container: HTMLDivElement, obj: Record<string, any>) {
//     container.innerHTML = createTreeText(obj)
// }
// function createTreeText(obj: Record<string, any>) {
//     let li = ''
//     let ul
//     for (let key in obj) {
//         li += `<li>${key}${createTreeText(obj[key])}</li>`
//     }
//     if (li) {
//         ul = `<ul>${li}</ul>`
//     }
//     return ul || ''
// }
// @ts-ignore
// createTree(container, data)

// 2 Выведите список потомков в дереве
// let listAn = document.querySelectorAll('#animals li')
// for (let li of listAn) {
//     let count = li.getElementsByTagName('li').length
//     if (!count) continue
// @ts-ignore
//     li.firstChild.data += `(${count})`
// }

// 3 Создайте календарь в виде таблицы
function createCalendar(elem: any, year: number, month: number) {
    let mon = month - 1
    let data = new Date(year, mon)
    let table = `<h4>${getMonth(mon)}</h4><table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th><tr/><tr>`
    for (let i = 0; i < getDay(data); i++) {
        table += '<td></td>'
    }
    const today = new Date().getDate()
    const todayMonth = new Date().getMonth()
    while (data.getMonth() == mon) {
        const isToday = today === data.getDate() && todayMonth == mon
        table += `<td${isToday ? ' class="highlight"' : ''}>` + data.getDate() + '</td$>'
        if (getDay(data) % 7 == 6) {
            table += '</tr><tr>'
        }
        data.setDate(data.getDate() + 1)
    }

    if (getDay(data) != 0) {
        for (let i = getDay(data); i < 7; i++) {
            table += '<td></td>'
        }
    }
    table += '</tr></table>'
    elem.innerHTML = table
}

function getDay(date: Date) {
    let day = date.getDay()
    if (day == 0) day = 7
    return day - 1
}


function getMonth(monthN: number) {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    return months[monthN]
}

let calendar = document.getElementById('calendar')
createCalendar(calendar, 2024, 6)

const calMonthInp = document.getElementById('month') as HTMLInputElement
const calenInp = document.getElementById('month-sub') as HTMLInputElement
calenInp.addEventListener('click', () => {
    createCalendar(calendar, 2024, +calMonthInp.value)
})

// СТИЛИ И КЛАССЫ
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым.
type options = {
    top?: number,
    right?: number
    html?: string
    class?: string
}
function showNotification(options: options) {
    if (!options.top) options.top = 10
    if (!options.right) options.right = 10
    if (!options.html) options.html = ''
    if (!options.class) options.class = ''
    let notification = document.createElement('div')
    notification.innerHTML = options.html
    notification.classList.add('notification')
    if (options.class) {
        notification.classList.add(options.class)
    }
    // notification.style.top = window.innerHeight/2-150 + 'px' 
    // чтобы поставить в центр
    notification.style.top = options.top + 'px'
    notification.style.right = options.right + 'px'
    document.body.append(notification)
    setTimeout(() => notification.remove(), 2000)
}
setInterval(() => {
    showNotification({
        top: 30,
        right: 50,
        html: '<img src="./src/news.jpeg">'
    })
}, 2200)

//! cкример
// const scrimer = setInterval(() => {
//     showNotification({
//         html: '<div class="skrimer"></div>'
//     })
//     clearInterval(scrimer)
// }, 9000)

// Размеры и прокрутка элементов
{
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.color = 'white'
    document.body.append(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    console.log(scrollWidth)
}


const coords = document.getElementById('coords') as HTMLDivElement
// document.onclick = function (e) {
//     coords.innerHTML = e.clientX + ':' + e.clientY;
// }
const ball = document.getElementById('ball') as HTMLImageElement
const field = document.getElementById('field') as HTMLDivElement
ball.style.left = (field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = (field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'


// let fieldTop = fieldCoords.y>document.documentElement.clientHeight?fieldCoords.y-window.scrollY:fieldCoords.y
// console.log(fieldTop)
// console.log(document.documentElement.clientHeight)
// console.log(fieldCoords.y)
// console.log(window.scrollY)
// console.log(fieldCoords.y-window.scrollY)

// console.log(fieldCoords.y, field.clientTop)

field.addEventListener('click', function (event) {
    let fieldCoords = field.getBoundingClientRect()
    coords.innerHTML = event.clientX + ':' + event.clientY;
    let ballCoords = {
        top: event.clientY - fieldCoords.y - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    }
    //    console.log(fieldTop, window.scrollY, field.clientTop, ballCoords.top,  event.clientY)
    if (ballCoords.top < 0) ballCoords.top = 0
    if (ballCoords.left < 0) ballCoords.left = 0
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight
    }
    ball.style.left = ballCoords.left + 'px'
    ball.style.top = ballCoords.top + 'px'
})
const butHid = document.getElementById('hider') as HTMLInputElement
const butUnHid = document.getElementById('unhider') as HTMLInputElement
butHid.onclick = function () {
    ball.hidden = true
}
butUnHid.onclick = () => {
    ball.hidden = false
}

// МЕНЮ ОТКРЫВАЕТСЯ И ЗАКРЫвается
const openMenu = document.getElementById('but-for-mune') as HTMLSpanElement
// openMenu.addEventListener('click', ()=>{
//     textBlock.classList.add('open')
// })
openMenu.onclick = (e) => {
    const eTarget = e.target as HTMLElement
    const target = eTarget.closest('span')
    if (!target) return
    if (target.parentElement) target.parentElement.classList.toggle('open')
}

const allMessage = document.querySelector('.messages-iphone') as HTMLDivElement
allMessage.addEventListener('click', (e) => {
    const eTarget = e.target as HTMLElement
    const target = eTarget.closest('.read')
    if (!target) return
    let mess = target.closest('.message')
    mess?.remove()
})

// карусель
const carousel = document.querySelector('.container-for-carousel') as HTMLDivElement
let width = 305
let count = 3
let amount = document.querySelectorAll('.porshe > li').length
let rest = amount - count
let porshe = document.querySelector('.porshe') as HTMLUListElement
let position = 0

carousel.querySelector('.left')?.addEventListener('click', () => {
    if (amount - rest >= 2 * count) {
        position -= count * width
        rest += count
    } else {
        position -= (amount - rest - count) * width
        rest = amount - count
    }
    porshe.style.transform = `translateX(${-position}px`
})
carousel.querySelector('.right')?.addEventListener('click', () => {
    if (rest >= count) {
        position += count * width
        rest -= count
    } else {
        position += rest * width
        rest = 0
    }
    porshe.style.transform = `translateX(${-position}px`
})

// Поймайте переход по ссылке
const content = document.getElementById('contents') as HTMLDivElement
content.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    let el = target.closest('a')
    if (el) {
        const isLiving = confirm(`Перейти на другую стараницу ${el.href}?`)
        if (!isLiving) {
            e.preventDefault()
        }
    }
})
const slider = document.getElementById('slider') as HTMLDivElement
const thumb = slider.querySelector('.thumb') as HTMLDivElement
thumb.onmousedown = function (event) {
    event.preventDefault()
    let shiftX = event.clientX - thumb.getBoundingClientRect().left
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    function onMouseMove(event: any) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left
        if (newLeft < 0) {
            newLeft = 0
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth
        if (newLeft > rightEdge) {
            newLeft = rightEdge
        }
        thumb.style.left = newLeft + 'px'
    }
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mousemove', onMouseMove)
    }
}
thumb.ondragstart = function () {
    return false
}



let animTimer = 0

function carMoveAnimation(el:HTMLElement, run:boolean, direction:boolean, deg=0) {
    if (!run) {
        if (animTimer) clearTimeout(animTimer)
        return
    }
    animTimer = setTimeout(()=>{
        if (direction) {
            if (parseInt(el.style.left)+el.offsetWidth<document.documentElement.clientWidth+20) {
                el.style.left = parseInt(el.style.left)+5+'px'
                carMoveAnimation(el, run, direction,deg)
            } else {
                el.style.transformOrigin = `${el.offsetHeight-50}px ${el.offsetWidth-50}px`
                deg+=180
                el.style.transform = `rotate(${deg}deg)`
                carMoveAnimation(el, run, !direction,deg)
            }
        } else {
            if (parseInt(el.style.left)>20) {
                el.style.left = parseInt(el.style.left)-5+'px'
                carMoveAnimation(el, run, direction,deg)
            } else {
                deg+=180
                el.style.transform = `rotate(${deg}deg)`
                carMoveAnimation(el, run, !direction,deg)
            }
        }
    },20)
}

// дорога с машинками
document.addEventListener('mousedown', function (event) {
    let isDragging = false
    const target = event.target as HTMLElement
    if (event.shiftKey) {
        let carEl = target.closest('.draggable') as HTMLElement
        let shiftX = event.clientX - carEl.getBoundingClientRect().left
        let shiftY = event.clientY - carEl.getBoundingClientRect().top
        carEl.style.position = 'absolute'
        carEl.style.zIndex = '1001'
        carEl.style.left = event.pageX - shiftX + 'px'
        carEl.style.top = event.pageY - shiftY + 'px'
        carMoveAnimation(target,true,true)
        return
    }
    carMoveAnimation(target,false,true)
    let carEl = target.closest('.draggable') as HTMLElement
    if (!carEl) return
    event.preventDefault()
    carEl.ondragstart = function () {
        return false
    }

    let shiftX = event.clientX - carEl.getBoundingClientRect().left
    let shiftY = event.clientY - carEl.getBoundingClientRect().top

    startDrag()

    function onMouseUp() {
        finishDrag()
    }

    function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY)
    }

    function startDrag() {
        if (isDragging) {
            return
        }
        isDragging = true
        carEl.style.position = 'absolute'
        carEl.style.zIndex = '1001'
        carEl.style.left = event.pageX - shiftX + 'px'
        carEl.style.top = event.pageY - shiftY + 'px'
        document.addEventListener('mousemove', onMouseMove)
        carEl.addEventListener('mouseup', onMouseUp)
    }

    function finishDrag() {
        if (!isDragging) return
        isDragging = false
        document.removeEventListener('mousemove', onMouseMove)
        carEl.removeEventListener('mouseup', onMouseUp)
    }
    function moveAt(clientX: number, clientY: number) {
        let newX = clientX - shiftX
        let newY = clientY - shiftY

        let newBottom = newY + carEl.offsetHeight;

        console.log(newBottom, window.scrollY + carEl.offsetHeight)
        if (newBottom > document.documentElement.clientHeight + window.scrollY) {
            let scrollY = Math.min(document.documentElement.offsetHeight - newBottom, 10)
            window.scrollBy(0, scrollY)
            newY = Math.min(newY, document.documentElement.clientHeight + window.scrollY - carEl.offsetHeight)
        }
        if (newBottom < window.scrollY + carEl.offsetHeight) {
            let scrollY = Math.min(document.documentElement.offsetHeight + newBottom, 10)
            window.scrollBy(0, -scrollY)
            newY = Math.max(newY, window.scrollY)
        }
        carEl.style.left = newX + 'px'
        carEl.style.top = newY + 'px'
    }
})