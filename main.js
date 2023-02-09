
let width = 9 // 6 seats, 2 windows & 1 path per row 
let rows = 30
// const squares = []

function createPlane() {
    const plane = document.querySelector('.plane')
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
            seatShape.addEventListener('click', onChooseSeat)
        }
    }
}

function onChooseSeat(event) {
    chooseSeats(event)
}

function paintSeat(seat, paint) {
    if (paint) {
        seat.style.backgroundColor = '#c3195d'
    } else {
        seat.style.backgroundColor = ''
    }
}