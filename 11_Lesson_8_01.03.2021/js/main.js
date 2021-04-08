let content = document.createElement(`div`)
document.body.appendChild(content)

fetch('https://api.sampleapis.com/futurama/characters')
.then(response => response.json())
.then(item => {
    for (const hero of item) {
        let info = document.createElement(`div`)
        let imgHero = document.createElement(`img`)
        let anchor = document.createElement(`a`)      
         
        
        imgHero.src = `${hero.images.main}`

        anchor.innerText = `${hero.id} - ${hero.name.first} - ${hero.name.last}`
        anchor.href = `#`


        info.appendChild(anchor)
        content.appendChild(info)
        content.appendChild(imgHero)
       
    }
})