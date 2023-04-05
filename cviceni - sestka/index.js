console.log('Funguju')

const roll = () => {
    //a
    //let hod = Math.floor((Math.random() * 6) + 1)
    //console.log(hod)

    //c
    let i = 0
    while (i < 10) {
        let hod = Math.floor((Math.random() * 6) + 1)
        console.log(hod)

        i = i + 1
    }
}

document.addEventListener('click', roll)



