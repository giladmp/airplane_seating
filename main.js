const plane = document.querySelector('.plane')
let width = 9
let rows = 30
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
            square.setAttribute('name', [Math.floor(i / 9) + 1] + getSeatLetter(i))
        }
        // squares.push(square)
        plane.appendChild(square)
        if (square.className === 'seat') {
            square.innerHTML = square.getAttribute('name').toUpperCase()
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

createPlane()