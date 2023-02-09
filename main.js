const plane = document.querySelector('.plane')
let width = 9 // 6 seats, 2 windows & 1 path per row 
let rows = 30
let isCouple = false // true if we choose to joint seats, false for one passenger
let firstSeat = ''
let secondSeat = ''
let oneSeat = ''


// const squares = []

function createPlane() {
    for (let i = 0; i < width * rows; i++) {
        const square = document.createElement('div')
        square.setAttribute('id', i)
        if (i % width === Math.floor(width / 2)) {
            square.setAttribute('class', 'path')
        } else if (i % width === 0 || i % width === width - 1) {
            square.setAttribute('class', 'window')
        } else {
            square.setAttribute('class', 'seat')
            square.setAttribute('name', [Math.floor(i / width) + 1] + getSeatLetter(i))
        }
        // squares.push(square)
        plane.appendChild(square)
        if (square.className === 'seat') {
            const seatShape = document.createElement('div')
            seatShape.setAttribute('class', 'seat-shape')
            square.appendChild(seatShape)
            seatShape.innerHTML = square.getAttribute('name').toUpperCase()
            seatShape.addEventListener('click', chooseSeats)
        }
    }
}

function getSeatLetter(squareNum) {
    switch (squareNum % width) {
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
            seat.style.backgroundColor = ''
        } else if (firstSeat === seat && secondSeat === '') {
            firstSeat = ''
            seat.style.backgroundColor = ''
        } else if (firstSeat === seat && secondSeat !== '') {
            firstSeat = secondSeat
            secondSeat = ''
            seat.style.backgroundColor = ''
        } else if (firstSeat !== '' && secondSeat === '') {
            secondSeat = seat
            seat.style.backgroundColor = 'green'
        } else if (firstSeat === '' && secondSeat === '') {
            firstSeat = seat
            seat.style.backgroundColor = 'green'
        }
    } else {
        if (oneSeat === seat) {
            oneSeat = ''
            seat.style.backgroundColor = ''
        } else if (oneSeat !== '') {
            oneSeat.style.backgroundColor = ''
            oneSeat = seat
            seat.style.backgroundColor = 'red'
        } else if (oneSeat === '') {
            oneSeat = seat
            seat.style.backgroundColor = 'red'
        }
    }
}

createPlane()