// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу



// let numArray = [1,2,3,4,5]
// let strArray = [`hello`, `bye`,`Vasya`,`cars`,`love is`]
// let mixArray = [`Neo`, 72, true, `Kolia`]
// console.log(numArray,strArray,mixArray);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray = []

// emptyArray[5] = `love is`
// emptyArray[4] = 123.1
// emptyArray[3] = `true`
// emptyArray[2] = undefined
// emptyArray[1] = true
// emptyArray[0] = {name:`Olga`, age:27, status:true}

// emptyArray[6] = ()=>console.log(`hello`);

// console.log(emptyArray);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i=0;i<5;i++){
//     document.write(`<div>Heloo baby</div>`)
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let i=0;i<5;i++){
//     document.write(`<div>Heloo baby ${i}</div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// for (let i = 0; i < 10; i++) {
//     document.write(`<h1>Js, love you</h1>`)
    
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// i=0
// while(i<10){
//     document.write(`<h1>Cs_Go ${i} </h1>`)
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let newArray = [10,25.5,3,4,5,6,7,88,999,10, `lol`]
// for (let i = 0; i < newArray.length; i++) {
    //     console.log(newArray[i]);
    //     // console.log(i);
    
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//let newArray = [`hello`, `bye`,`Vasya`,`cars`,`love is`,`lol`]
// for(i=0;i<newArray.length;i++){
//     console.log(newArray[i]);
// }

// for (const iterator of newArray) {
//     console.log(iterator);
// }

// for (const key in newArray) {    
//     console.log(newArray[key]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let newArray = [`love is`,10,25.5,3,4,`lol`,true]
// for(let iter of newArray){
//     console.log(iter);
// }

// for(let i in newArray){
//     console.log(`----`,newArray[i]);
// }

// for(i=0;i<newArray.length;i++){
//     console.log(newArray[i]);
// }

// a=0
// while(a<newArray.length){
//     console.log(`---`,newArray[a]);
//     a++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. 
// За допомогою if та typeof вивести тільки булеві елементи
//let newArray = [`love is`,10,25.5,3,4,`lol`,true,`false`,false]
// for(let i of newArray){
//     if(typeof i === `boolean`){
//         console.log(i);
//     }
// }

// for(a in newArray){
//     if(typeof newArray[a] === `boolean`){
//         console.log(newArray[a]);
//     }
// }

// newArray.forEach(i=>console.log(i))

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let newArray = [`love is`,10,25.5,3,4,`lol`,true,`false`,false]
// for(let element of newArray){
//     if(typeof element === `number`){
//         console.log(element);
//     }
// }

// for(let i = 0;i<newArray.length;i++){
//     if(typeof newArray[i] === `number`){
//         console.log(` ` + newArray[i]);
//     }
// }

// for(let a in newArray){
//     if(typeof newArray[a] === `number`){
//         console.log(newArray[a]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let newArray = [`love is`,10,25.5,3,4,`lol`,true,`false`,false]
// for(let el of newArray){
//     if(typeof el === `string`){
//         console.log(el);
//     }
// }

// for(let i=0;i<newArray.length;i++){
//     if(typeof newArray[i] === `string`){
//         console.log(`--`+newArray[i]);
//     }
// }

// for(let jo in newArray){
//     if(typeof newArray[jo] === `string`){
//         console.log(newArray[jo]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
// Вивести в консоль всі його елементи в циклі.





// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i)    
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i=0;i<100;i++){
//     console.log(i)
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <200; i+=2) {
//     console.log(i);
//     document.write(`step: ${i} <br>`)    
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2 === 0){
//         console.log(i);
//     }
    
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2 === 1){
//         console.log(i);
//     } 
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)



// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c']
// let result = ``
// for (let i = 0; i < array.length; i++) {
//     result += array[i];
// }
// console.log(result);  



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c']
// let result = ``

// i=0
// while(i<array.length){
//     result += array[i]
//     i++
// }
// console.log(result);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c']
// let result = ``
// for(let i in array){
//     result += array[i]
// }
// console.log(result);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c']
// let result = ``
// for(let i of array){
//     result += i
// }
// console.log(result);

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = [ 'a', 'b', 'c']

// for (let i = 1; i<=3; i++) {
//     array.push(i)    
// }
// console.log(array);



// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

//let array = [1, 2, 3]
// let arrayNew = []
// arrayNew.push(array.reverse())


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array = [1, 2, 3]
// console.log([...array,4,5,6]);
// or
// let array = [1, 2, 3]
// for(let i=4;i<7;i++){
//     array.push(i)
// }
// console.log(array);



// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// console.log([4,5,6,...array]);
// or
// let array = [1, 2, 3]
// for(let i=6;i>=4;i--){
//     array.unshift(i) 
// } 
// console.log(array);


// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою 
// shift()

// let array = ['js', 'css', 'jq']
// console.log(array);
// console.log(array.shift()); //shift відрізав перший елемент
// console.log(array); //відповідно array вже без `js`

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за 
// допомогою pop()
// let array = ['js', 'css', 'jq']
// console.log(array);
// console.log(array.pop()); //аналогічно shift лише з кінця
// console.log(array);//відповідно arrray без осьаннього елементу


// - Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції slice перетворіть масив в [4, 5].
// let array = [1, 2, 3, 4, 5]
// console.log(array.slice(3));
// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції slice перетворіть масив в [1,2].
// let array = [1, 2, 3, 4, 5]

// let arrayNew = array.slice(0,2)
// console.log(arrayNew);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції
//  splice перетворіть масив в [1, 4, 5].
// let array = [1, 2, 3, 4, 5]

// array.splice(1,2);
// console.log(array);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції 
// splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let array = [1, 2, 3, 4, 5]

// array.splice(3,0,`a`,`b`);
// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції 

// splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let array = [1, 2, 3, 4, 5]

// array.splice(1,0,`a`,`b`);
// array.splice(6,0,`b`)
// array.splice(8,0,`e`)
// console.log(array);

// - Взяти масив з 10 чисел або створити його. 
//Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [10,12,11,80,85,86,12,223,-18]
// for(let i of array){
//     if(i%2===0){
//         console.log(i);
//     }
// }




// - Взяти масив з 10 чисел або створити його. 
//Створити 2й порожній масив. За допомогою будь-якого циклу та push () 
//скопіювати значення одного масиву в інший

// let array = [10,12,11,80,85,86,12,223,-18]
// let emptyArr = []
// for(let i of array){
//     emptyArr.push(i)
// }
// console.log(emptyArr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
//За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array = [10,12,11,80,85,86,12,223,-18]
// let emptyArr = []

// for(let i in array){
//     emptyArr[i] = array[i] 
// }
// console.log(emptyArr);

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//let array=[2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
// i=0
// while(i<array.length){
//     console.log(array[i]);
//     i++
// }

// i=10
// while(i>0){
//     console.log(array[i]);
//     i--
// }
// 2. перебрати його циклом for
// for(let a=0;a<array.length;a++){
//     console.log(array[a]);
// }
// for(let i=9;i>-1;i--){
//     console.log(array[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i=1
// while(i<array.length){
//     console.log(array[i]);
//     i+=2
// }
// i=9
// while(i>-1){
//     console.log(array[i]);
//     i-=2
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(a=1;a<array.length;a+=2){    
//     console.log(array[a]);    
// }

// for(a=9;a>-1;a-=2){    
//     console.log(array[a]);    
// }


// 5. перебрати циклом while та вивести  числа тільки парні значення
//let array=[2,17,13,6,22,31,45,66,100,-18]
// i=0
// while(i<array.length){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
//     i++
// }

// i=9
// while(i>-1){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
//     i--
// }



// 6. перебрати циклом for та вивести  числа тільки парні  значення
//let array =[2,17,13,6,22,31,45,66,100,-18]
// for(a=0;a<array.length;a++){
//     if(array[a] % 2 === 0){
//         console.log(array[a]);
//     }
// }
// for(a=9;a>-1;a--){
//     if(array[a] % 2 === 0){
//         console.log(array[a]);
//     }
//}


// 7. замінити кожне число кратне 3 на слово "okten"
//let array=[2,17,13,6,22,31,45,66,100,-18]
// for(let i of array){
//     if(i % 3 === 0){
//         i = `okten`
//     }
//     console.log(i);
// }

// for(let i=0;i<array.length;i++){
//     if(array[i] % 3 === 0){
//         array[i] = `okten`
//     }
// }

// for(let i=9;i>-1;i--){
//     if(array[i] % 3 === 0){
//         array[i] = `okten`
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let emptyArr = []
// for(let i = 0;i<99;i+=2){
//     emptyArr.push(i);
// }
// console.log(emptyArr);


// let emptyArr = []
// for(let i = 1;i<51;i+=2){
//     emptyArr.push(i);
// }
// console.log(emptyArr);


// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// let emptyArr = []

// for(let i=0;i<49;i+=2){
//     emptyArr.push(i)
// }
// console.log(emptyArr);
// 2. заповнити його 50 непарними числами за допомоги циклу.

// let emptyArr = []
// for(let i=1;i<=49;i+=2){
//     emptyArr.push(i)
// }
// console.log(emptyArr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let emptyArr = []
// for(let i=0;i<10;i++){
//     emptyArr[i] = Math.floor(Math.random()*(732-8)+8)
// }  
// console.log(emptyArr);

//2. вывести на консоль  каждый третий елемент
// for(let i=2;i<10;i+=3){
//     console.log(emptyArr[i]);
// }
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.


//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
// let newArr = []
// for(let i=2;i<10;i+=3){
//     if(emptyArr[i]%2===0){
//         newArr.push(emptyArr[i])
//     }
// }
// console.log(newArr);

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let emptyArr = []
// for(let i=0;i<10;i++){
//     emptyArr[i] = Math.floor(Math.random()*(732-8)+8)
// }  
// console.log(emptyArr);

// let newArr = []
// for(let i=0;i<10;i++){
//     if(emptyArr[i+1]%2===0){
//          console.log(emptyArr[i]);
//     }
// }




//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість 
// окремої покупки. обрахувати середній чек.
// let numArr = [100,250,50,168,120,345,188]
// const sumArr = (a, b) => a + b;
// let res = numArr.reduce(sumArr) / numArr.length 
// console.log(res);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 
// та перемістити їх в інший масив.
// let emptyArray = []
// for(let i=0;i<10;i++){
//     emptyArray[i] = Math.floor(Math.random()*(10-1)+5)
// }
// console.log(emptyArray);

// let newArr = []
// for(let t of emptyArray){
//     t = t*5
//     newArr.push(t)
// }
// console.log(newArr);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). 
// пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
// let mixArray = [`Neo`, 72, true, `Kolia`,5.2]
// let newArr = []
// for(let t of mixArray){
//     if(typeof t === `number`){
//         newArr.push(t)
//     }
// }
// console.log(newArr);


// - Відтворити роботу годинника, відрахувавши 2 хвилини 
// (2 цикли! 1й - хвилини, 2й - секунди)

//- Відтворити роботу годинника, відрахувавши  2 години  
//(3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
