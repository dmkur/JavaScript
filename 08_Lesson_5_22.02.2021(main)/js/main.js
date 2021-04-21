// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || `No title`
//     this.action = action || `No action`
//     this.attrs = attrs || `No attrs`
// }

// let title = `<a></a>`
// let action = ` Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от 
// присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, 
// которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`
// let attibytes = [
//     {tittleOfAttr:`accesskey`, actionOfAttr:`Активация ссылки с помощью комбинации клавиш.`},
//     {tittleOfAttr:`coords`, actionOfAttr:`Устанавливает координаты активной области.`},
//     {tittleOfAttr:`download`, actionOfAttr:`Предлагает скачать указанный по ссылке файл.`}
// ]

// title = `<div></div>`
// action = ` Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`
// attibytes = [
//     {tittleOfAttr:`align`, actionOfAttr:`Задает выравнивание содержимого тега <div>`},
//     {tittleOfAttr:`title`, actionOfAttr:`Добавляет всплывающую подсказку к содержимому.`}   
// ]


// let a = new Tag(title,action,attibytes)
// console.log(a);

//=============================================
//повторення
// function SomeTagDescr(titleTag,action,atters){
//     this.titleTag = titleTag
//     this.action = action
//     this.atters = atters
// }

// let titleTag = `span`
// let action = `Тег <span> предназначен для определения строчных элементов документа.`
// let atters = [
//     {actionName:`accesskey`,attersAction:`Позволяет получить доступ к элементу Позволяетс помощью заданного сочетания клавиш.`},
//     {actionName:`class`,attersAction:`Определяет имя класса, которое позволяет связать тег со стилевым оформлением.`},
//     {actionName:`accesskey`,attersAction:`Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.`},
// ]


// let b = new SomeTagDescr(titleTag,action,atters)
// console.log(b);
//повторення
//=============================================

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Tag{
//     constructor(titleOfTag,action,attrs){
//         this.titleOfTag = titleOfTag
//         this.action = action
//         this.attrs = attrs
//     }

// }

// let title = `<div></div>`
// let action = ` Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`
// let attibytes = [
//     {tittleOfAttr:`align`, actionOfAttr:`Задает выравнивание содержимого тега <div>`},
//     {tittleOfAttr:`title`, actionOfAttr:`Добавляет всплывающую подсказку к содержимому.`}   
// ]


// let a = new Tag(title,action,attibytes)
// console.log(a);
//================================
//повторення

// class DescribeTag{
//     constructor(a,b,c){
//         this.a = a
//         this.b = b
//         this.c = c
//     }
// }

// let tagName = `input`
// let tagAction = `Тег <input> является одним из разносторонних элементов формы`
// let tagAtters = [
//     {attersName:`accept`,attersAction:`Устанавливает фильтр на типы файлов`},
//     {attersName:`accept`,attersAction:`Устанавливает фильтр на типы файлов`},
//     {attersName:`accept`,attersAction:`Устанавливает фильтр на типы файлов`},
//     {attersName:`accept`,attersAction:`Устанавливает фильтр на типы файлов`},
// ]

// let c = new DescribeTag(tagName,tagAction,tagAtters)
// console.log(c);
//==================================


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна 
//швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//повторення=============================================
let car = {
    model:`M3`,
    producer:`Mazda`,
    year:2003,
    maxSpeed:180,
    volume:2.0,
    drive:()=>console.log(`їдемо зі швидкістю ${this.maxSpeed} кm/год`),
    info:function(){
        console.log(`
        model:${this.model}
        producer:${this.producer}
        maxSpeed:${this.maxSpeed}
        year:${this.year}
        volume:${this.volume}
        `);
    },
    increaseMaxSpeed:function(newSpeed,cb){
        this.maxSpeed+=newSpeed
        cb = this.info()
    }
}
car.drive()
car.info()
car.increaseMaxSpeed(200)






//повторення=============================================







// CLASS
// let car = {
//     model:`911`,
//     producer:`Porsche`,
//     year: 1994,
//     maxSpeed: 255,
//     engineVolume: 3.2,
//     drive: function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     },
//     info: function(){
//         console.log(`
//         model:${this.model}
//         producer:${this.producer}
//         year:${this.year}
//         maxSpeed:${this.maxSpeed}
//         engineVolume:${this.engineVolume}
//         `)
//     },
//     increaseMaxSpeed: function(newSpeed){
//         this.maxSpeed += newSpeed
//     },
//     changeYear: function(newValue){
//         this.year = newValue
//     },
//     addDriver: function(array){
//         this.shofer = array
//     }
// }

// car.info()
// car.drive()
// car.changeYear(2021)
// car.increaseMaxSpeed(45)
// car.info()

// car.addDriver({name:`Lola`,age:25})
// console.log(car);




// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume

//     this.drive = function () {
//         console.log(
//             `їдемо зі швидкістю ${this.maxSpeed} km на годину`
//         );
//     }

//     this.info = function () {
//         console.log(`
//             model:${this.model}
//             producer:${this.producer}
//             year:${this.year}
//             maxSpeed:${this.maxSpeed}
//             engineVolume:${this.engineVolume}
//         `);
//     }

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }

//     this.chengeYear = function(newValue) {
//         this.year = newValue
//     }

//     this.addDriver = function(array){
//         this.shofer = array
//     }
// }


// let car = new Car(`A5`, `Audi`, 2001, 220, 1.8)
// car.drive()
// car.info()
// car.increaseMaxSpeed(100)
// car.chengeYear(2010)
// car.info()

// car.addDriver({name:`lola`, age:25})
// console.log(car);









// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car{
//     constructor(model, producer, year, maxSpeed, engineVolume){
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//     }

//     drive(){
//         console.log(`
//             їдемо зі швидкістю ${this.maxSpeed} km на годину
//         `);
//     }

//     changeYear(newValue){
//         this.year = newValue
//     }

//     increaseMaxSpeed(boost){
//         this.maxSpeed += boost
//     }

//     info(){
//         console.log(`
//             model:${this.model}
//             producer:${this.producer}
//             year:${this.year}
//             maxSpeed:${this.maxSpeed}
//             engineVolume:${this.engineVolume}
//         `);
//     }

//     addDriver(array){
//         this.shoferka = array
//     }
// }

// let car = new Car(`A5`, `Audi`, 2001, 220, 1.8)
// car.drive()
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2010)
// car.info()

// car.addDriver({name:`lola`, age:25})
// console.log(car);









// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Human{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }


// class Cinderella extends Human{
//     constructor(name,age, footSize){    
//         super(name,age)
//         this.footSize = footSize 
//     }
// }


// class Princ extends Human{
//     constructor(name,age,shoeSize){
//         super(name,age)
//         this.shoeSize = shoeSize
//     }

//     findCinderel(array){
//         let find = null
//         for (let item of array) {          
//             if(item.footSize === this.shoeSize){
//                 find = item           
//             }
//         }
//         if(find){
//             console.log(`${find.name} you my cinderella!`);
//         }else{
//             console.log(`Opps`);
//         }
//     }
// }


// let cinderellas1 = new Cinderella(`Lola`,22,37)
// let cinderellas2 = new Cinderella(`Olga`,23,35.6)
// let cinderellas3 = new Cinderella(`Ania`,21,36.7)
// let cinderellas4 = new Cinderella(`Helga`,19,38)
// let cinderellas5 = new Cinderella(`Iryna`,33,37.5)
// let cinderellas6 = new Cinderella(`Pola`,26,36)
// let cinderellas7 = new Cinderella(`Lila`,22,38)
// let cinderellas8 = new Cinderella(`Lilia`,20,38.8)
// let cinderellas9 = new Cinderella(`Natalka`,24,35)
// let cinderellas10 = new Cinderella(`Diana`,25,36)

// let allCindelellas = [cinderellas1,cinderellas2,cinderellas3,cinderellas4,cinderellas5,cinderellas6,cinderellas7,cinderellas8,cinderellas9,cinderellas10]

// let b = new Princ(`John`,21,36)
// b.findCinderel(allCindelellas)




// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ============================================





// let cinderellas1 = new Cinderella(`Lola`,22,37)
// let cinderellas2 = new Cinderella(`Olga`,23,35.6)
// let cinderellas3 = new Cinderella(`Ania`,21,36.7)
// let cinderellas4 = new Cinderella(`Helga`,19,38)
// let cinderellas5 = new Cinderella(`Iryna`,33,37.5)
// let cinderellas6 = new Cinderella(`Pola`,26,36)
// let cinderellas7 = new Cinderella(`Lila`,22,38)
// let cinderellas8 = new Cinderella(`Lilia`,20,38.8)
// let cinderellas9 = new Cinderella(`Natalka`,24,35)
// let cinderellas10 = new Cinderella(`Diana`,25,36)

// let allCindelellas = [cinderellas1,cinderellas2,cinderellas3,cinderellas4,cinderellas5,cinderellas6,cinderellas7,cinderellas8,cinderellas9,cinderellas10]

// function Cinderella(name,age,footSize){
//     this.name = name
//     this.age = age
//     this.footSize = footSize
// }

// function Princ(name,age,shoetSize){
//     this.name = name
//     this.age = age
//     this.shoetSize = shoetSize

//     this.findCinderella = function(array){
//         let item = null
//         for (const host of array) {
//             if(host.footSize === this.shoetSize){
//                 item = host
//             }
//         }
//         if(item){
//             console.log(`Wow you my cinderella ${item.name}`);
//         }else{
//             console.log(`Opps`);
//         }
//     }
// }

// let a = Princ(`los`,21, 37)
// findCinderella(allCindelellas)

