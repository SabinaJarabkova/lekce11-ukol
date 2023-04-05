console.log('Funguju')


let hours = 0
let minutes = 0

while (hours <= 23) {
    console.log((String(hours)).padStart(2, '0') + ':' + (String(minutes)).padStart(2, '0'))

    if (minutes <= 59) {
        minutes = minutes + 1
        hours = hours
    }

    if (minutes > 59) {
        minutes = 0
        hours = hours + 1
    }
   
}







