// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)



let random = Math.random()
let msg = `H`

let promis = new Promise(resolve => {
    setTimeout(()=>{
        resolve(`H`)
    },random)
})

promis.then((result)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`H`)
            console.log(result);
        },random)
    })
}).then((result) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result +=`e`)
            console.log(result);
        },random)
    })
}).then(result=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(result+= `l`)
            console.log(result);
        },random)
    })
}).then(result =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result+=`l`)
            console.log(result);
        },random)
    })
}).then(result=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result+=`o`)
            console.log(result);
        },random)
    })
}).then(result=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result+=` `)
        },random)
    })
}).then(result=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result+=`W`)
            console.log(result);
        },random)
    })
}).then(result=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result+=`o`)
            console.log(result);
        },random)
    })
}).then(result=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(result+=`r`)
            console.log(result);
        },random)
    })
}).then(value =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(value+=`l`)
            console.log(value);
        },random)
    })
}).then(value=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(value+=`d`)
            console.log(value);
        },random)
    })
}).then(value=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(value+=`!`)
            console.log(value);
        },random)
    })
})