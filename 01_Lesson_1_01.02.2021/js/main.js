// присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
// Вывести каждую при помощи console.log , alert, document.write

// let a = 'hello'
// let b = 'owu'
// let c = 'com'

// console.log(a,b,c);
// document.write(a,b,c)
// alert(a)

// let a1 = 'ua'
// let b1 =  1
// let c1 = 10

// console.log(a1,b1,c1);
// document.write(a1,b1,c1)
// alert(a1)

// let a2 = -999
// let b2 = 123
// let c2 = 3.14
// console.log(a2,b2,c2);
// document.write(a2,b2,c2)
// alert(a2)

// let a3 = 2.7
// let b3 = 16
// let c3 = true
// console.log(a3,b3,c3);
// document.write(a3,b3,c)
// alert(a3)

// let a4 =  false 

// console.log(a4);
// document.write(a4)
// alert(a4)


// переопределить каждую переменную из задания 1 дав им произвольные 
// значения Вывести каждую при помощи console.log , alert, document.write

// a = 'helloasd'
// b = 'owu22123'
// c = 'comsdad'

// console.log(a,b,c);
// document.write(a,b,c)
// alert(a)

// a1 = 'ua12313'
// b1 =  122
// c1 = 12222

// console.log(a1,b1,c1);
// document.write(a1,b1,c1)
// alert(a1)

// a2 = -9993
// b2 = 222123
// c2 = 3.14555
// console.log(a2,b2,c2);
// document.write(a2,b2,c2)
// alert(a2)

// a3 = 2.723123
// b3 = 1612313
// c3 = true
// console.log(a3,b3,c3);
// document.write(a3,b3,c)
// alert(a3)

// a4 =  false 

// console.log(a4);
// document.write(a4)
// alert(a4)


// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const PI = 3.14
// const A = 123 
// const AB = 2 
// const H = 'hello world'
// const G = 'hello'
// const T = 'griting'

// console.log(PI,A,AB,H,G,T);
// document.write(PI,A,AB,H,G,T);
// alert(PI)


// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. 
//Вывести каждую при помощи console.log , alert, document.write
// let name = prompt('name')
// let sn = prompt('surname')
// let ln = prompt('lastname')

// console.log(name,sn,ln);
// console.log(`Lol ${name} ${sn} ${ln}`);






// - Взять переменные из задания 4 и сконкатенировать их в одной переменной 
//person.
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// let person = `${name} ${sn} ${ln}`


// - при помощи prompt() получить 3 числа. 
//Привести их к числовому типу при помощи +. вывести их в консоль.
// let n1 = +prompt(`n1`)
// let n2 = +prompt(`n2`)
// let n3 = +prompt(`n3`)
// console.log(n1,n2,n3);


// - при помощи prompt() получить 4 числа. 
//Привести их к числовому типу при помощи parseInt. 
//Сложить их между собой записав результат в переменную result и вывести 
//в консоль браузера
// let n1 = prompt(`n1`)
// let n2 = prompt(`n2`)
// let n3 = prompt(`n3`)
// let n4 = prompt(`n4`)

// let pars1 = parseInt(n1)
// let pars2 = parseInt(n2)
// let pars3 = parseInt(n3)
// let pars4 = parseInt(n4)

// let result = pars1+pars2+pars3+pars4
// console.log(result);

// or

// let num = parseInt(prompt('n1'))
// let num2 = parseInt(prompt('n2'))
// let num3 = parseInt(prompt(`n3`))
// let num4 = parseInt(prompt(`n4`))

// let res = num+num2+num3+num4
// console.log(res);
// console.log(`${num}+${num2}+${num3}+${num4}`);


// - при помощи prompt()  получить 3 числа с плавающей точекой. 
// при помощи parseFloat привести их к соответсвующему типу. 
//Сложить их между собой записав результат в переменную result и 
//вывести в консоль браузера

// let parsF = parseFloat(prompt(`n1`))
// let parseF2 = parseFloat(prompt(`n2`))


// let res = parsF+parseF2
// console.log(res);



// - при помощи prompt()  получить 3 числа с плавающей точекой. 
// Округлить их при помощи Math.round Сложить их между собой записав
//  результат в переменную  и вывести в консоль браузера
// let numM = Math.round(parseFloat(prompt(`n1`)))
// let numM1 = Math.round(parseFloat(prompt(`n2`)))

// let res = numM+numM1
// console.log(res);





// - при помощи prompt()  получить 2 целых числа. 
// Пeривести их к целочисленному типу. Первое число - это число которое 
// будут возводить в степень. Второе число - это число которое является степенью. 
// При помощи Math.pow возвести первое число в степень второго числа.

// let n1 = prompt(`n1`)
// let n2 = prompt(`n2`)

// let res = Math.pow(n1,n2)
// console.log(res);


// 13. С помощью окна ввода, вызываемого методом prompt, 
// сделать сложение двух чисел, а вывод результата при помощи метода alert

// let n1 = parseFloat(prompt(`n1`))
// let n2 = parseFloat(prompt(`n2`))

// let res = n1+n2
// alert(res)




// . Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt(`n1`)
// let b = +prompt(`n2`)
// let c = +prompt(`n3`)

// if (a>b && a>c){
//     if(b>c){
//         console.log(c,b,a);
//     } else {
//         console.log(b,c,a);
//     }
// } else if(b>a && b>c){
//     if(a>c){
//         console.log(c,a,b);
//     } else {
//         console.log(a,c,b);
//     }
// } else if(a>b){
//     console.log(b,a,c);
// } else  {
//     console.log(a,b,c);
// }






// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt(`color`)

// if (color === `red`){
//     console.log(`stop`);
// }else if (color === `yellow`){
//     console.log(`wait`);
// }else if (color === `green`){
//     console.log(`go`);
// } else {
//     console.log(`error`);
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt(`color`)
// let clearRoad = confirm()

// if(color === `green` && clearRoad){
//     console.log(`go baby`);
// }else if(color === `green` && !clearRoad){
//     console.log(`wait baby, idiot in the car`);
// }else if(color === `yellow` && clearRoad){
//     console.log(`wait baby`);
// }else if(color === `yellow` && !clearRoad){
//     console.log(`anyway just wait`);
// }else if(color === `red` && clearRoad){
//     console.log(`anyway STOP`);
// }else if(color === `red` && !clearRoad){
//     console.log(`STOP-STOP baby`);
// }else {
//     console.log(`Lol`);
// }





// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и 
// вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100; 
let b = '100';
let c = true; 
let d = undefined;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));








// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
