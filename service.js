const flights = []
// const flight {

// }
const passengers = []
let isCouple = true // true if we choose to joint seats, false for one passenger
let firstSeat = ''
let secondSeat = ''
let oneSeat = ''

function getSeatLetter(squareNum) {
    switch (squareNum % 9) {
        case 1:
            return 'a'
        case 2:
            return 'b'
        case 3:
            return 'c'
        case 5:
            return 'd'
        case 6:
            return 'e'
        case 7:
            return 'f'
    }
}

function chooseSeats(event) {
    const seat = event.target
    if (isCouple) {   
        if (secondSeat === seat && firstSeat !== '') {
            secondSeat = ''
            paintSeat(seat, false)
        } else if (firstSeat === seat && secondSeat === '') {
            firstSeat = ''
            paintSeat(seat, false)
        } else if (firstSeat === seat && secondSeat !== '') {
            firstSeat = secondSeat
            secondSeat = ''
            paintSeat(seat, false)
        } else if (firstSeat !== '' && secondSeat === '') {
            secondSeat = seat
            paintSeat(seat, true)
        } else if (firstSeat === '' && secondSeat === '') {
            firstSeat = seat
            paintSeat(seat, true)
        }
    } else {
        if (oneSeat === seat) {
            oneSeat = ''
            paintSeat(seat, false)
        } else if (oneSeat !== '') {
            oneSeat.style.backgroundColor = ''
            oneSeat = seat
            paintSeat(seat, true)
        } else if (oneSeat === '') {
            oneSeat = seat
            paintSeat(seat, true)
        }
    }
}
