console.log('Funguju')

const kameny = document.querySelectorAll('.kamen')

const handleClick = (event) => {
    let header = document.querySelector('h1')
    header.innerHTML = event.target.textContent
    //console.log(event.target.textContent)
    const zvuk = new Audio(`tony/${event.target.textContent}.mp3`)
    zvuk.play()
}

kameny.forEach ((kamen) => {
    kamen.addEventListener('click', handleClick)
})
