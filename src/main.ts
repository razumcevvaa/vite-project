import './style.css'
console.log ('klklf')

// п1 з1
// запросите у пользователя число, возведите это число во 2 степень и выведите его на экран
// let num = prompt('введите число') as string
// alert('ваше число во 2 степени', parseInt(num**2))

// п1 з2
// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
// let num = parseInt(prompt('введите первое число'))
// let num2 = parseInt(prompt('введите второе число'))
// alert('среднее арифметическое' + (num+num2)/2)

// п1 з3
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
// let num = parseInt(prompt('введите сторону квадрата'))
// alert('площадь квадрата' + num**2)

// п1 з4
// Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
// let num = parseInt(prompt('введите километры для перевода в мили'))
// const KM_IN_MILI = 0.621371
// alert('миль' + num * KM_IN_MILI)

// п1 з5
// Реализуйте калькулятор. Пользователь вводит два числа,а программа выводит результаты действий + - * между этими числами.
// let a = parseInt(prompt('первое число'))
// let b = parseInt(prompt('второе число'))
// alert('сложение' + (a + b))
// alert('вычетание' + (a - b))
// alert('умножение' + (a * b))

// п1 з6
// Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
// let a = parseInt(prompt('введите число a'))
// let b = parseInt(prompt('Введите число b'))
// alert('x=' + (-b) / a)

// п1 з7 
// Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
// let hours = prompt("Введите текущее количество часов:");
// let minutes = prompt("Введите текущее количество минут:");


// п1 з8 
// Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
// let num = prompt('введите трехзначное число')
// let second = Math.floor ((num%100)/10)
// alert ('вторая цифра '+ second)

// п1 з9
// Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
// let num = prompt('введите пятизначное число')
// let lastGigure = num % 10
// let remaining = Math.floor(num / 10)
// alert('число после перемещения последней цифры в начало' + lastGigure + remaining)

// п1 з10
// Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
// const salary = 250
// let summ = prompt('введите общую сумму продаж за месяц')
// let saleAmount = Math.floor(summ * 0.1)
// alert('ваша зарплата в долларах ' + (saleAmount + salary))



// д1з1
// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// let name = prompt('как вас зовут?')
// alert('Привет,' + name)

// д1з2
// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// let age = prompt('В каком году вы родилились?')
// const YEAR = 2024
// alert('Вам ' + (YEAR - age))

// д1з3
// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// let perimetr = prompt('Введите длину квадрата')
// alert('Периметр равен: ' + perimetr*4)

// д1з4
// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// let radius = prompt('введите радиус окружности')
// alert('Площадь окружности равен ' + Math.PI*radius*radius)

// д1з5
// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// let distance = prompt('Сколько км до этого города?')
// let time = prompt('За сколько часов нужно добраться?')
// alert('Вам нужно двигаться со скоростью ' + distance / time + 'км/ч') 

// д1з6
// Реализуйте конвертор валют. Пользователь вводит доллары программа переводит в евро. Курс валюты храните в константе.
// let doll = prompt('доллары')
// const exchangeRate = 0.93
// let result = doll*exchangeRate
// alert('в евро ' + result)

// д1з7
// Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
// let flashDriveSize = prompt("Укажите объем флешки в Гб:")
// const fileSizeMB = 820
// let flashDriveSizeMB = flashDriveSize * 1024
// let filesCount = Math.floor(flashDriveSizeMB / fileSizeMB)
// alert('На флешку объемом '+flashDriveSize+' Гб поместится примерно '+filesCount+' файлов размером 820 Мб.');

// д1з8
// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется
// let money = prompt('сколько у вас денег?')
// let price = prompt('цена одной шоколадки')
// let kolvo = Math.floor(money / price)
// let remains = money%kolvo
// alert('Вы можете купить ' + kolvo + 'шоколадок и у вас останется' + remains) 

// д1з9 
// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
// let number = prompt("Введите трехзначное число:");
// if(number.length !== 3) {
    // alert("Пожалуйста, введите трехзначное число.");
// } else {
    // let reversedNumber = Number(number.toString().split("").reverse().join(""));
    // alert(`Число задом наперед: ${reversedNumber}`);
// }

// д1з10 
// Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch
// let number = prompt("Введите целое число:");
// let isEven = number % 2 === 0;
// let result = isEven ? "Число четное." : "Число нечетное.";
// alert(result);