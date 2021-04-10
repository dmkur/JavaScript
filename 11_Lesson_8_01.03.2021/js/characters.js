let url = new URL(location)
let nameHero = url.searchParams.get(`name`)
let surname = url.searchParams.get(`lastname`)
let full = JSON.parse(url.searchParams.get(`full`))
console.log(full);

let h1 = document.getElementsByTagName(`h1`)[0];
h1.innerText = `${nameHero} ${surname}`