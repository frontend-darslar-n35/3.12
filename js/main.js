// var firstname
// console.log(firstname)

// let firstname = "Hello World"

// console.log(firstname)

// sampleFunc()
// sampleFunc2()
// console.log(sampleFunc2)
// console.log(sampleFunc)


// const sampleFunc2 = function () {
//     console.log("Second sampleFunc working...")
// }

// function sampleFunc() {
//     console.log("SampleFunc working...")
// }

// var name

// var name = "Hello World"

// console.log(age)
// if (true) {
//     console.log(age)
//     var age = 31;
// }
// console.log(age)

// const numbers = [12, 14, 2, 13, 65, 0]

// let s = 0
// for (let i = 0; i < numbers.length; i++) {
//     // console.log(s)
//     // console.log(i)
//     s += numbers[i]
// }

// console.log(s)


// function setNumber() {
//     s = 20;
// }

// s = 0;
// console.log(s)

// setNumber()

// console.log(s)



// function forEachCallback(value, index, arr) {
//     console.log("Index:", index, " Value:", value, "array:", arr)
// }

// numbers.forEach(forEachCallback)

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++)callback(arr[i], i, arr);
// }

// forEach(numbers, forEachCallback)

// console.log(numbers.includes(15))

// function includes(arr, el) {
//     let isHave = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) isHave = true
//     }
//     return isHave
// }

// console.log(includes(numbers, 15))
const numbers = [12, 14, 2, 13, 65, 0, -1]
// [12, 2, 13, 14, 0, 65],
// [2, 12, 13, 0, 14, 65],
// [2, 12, 0, 13, 14, 65],
// [2, 0, 12, 13, 14, 65],
// [0, 2, 12, 13, 14, 65]    

// function sort(arr) {

//     for (let j = 0; j < arr.length - 1; j++) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i + 1];
//                 arr[i + 1] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }

//     return arr
// }

// console.log(sort(numbers))

var state = [
    ["x", "o", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]


var boardEl = document.querySelector("[data-board]")
var toggleBtn = document.querySelector(".toggle")

boardEl.addEventListener("click", () => {
    if (toggleBtn.textContent === "x") toggleBtn.textContent = "o"
    else {
        toggleBtn.textContent = "x"
    }
})

renderBoard()

function renderBoard() {
    boardEl.innerHTML = null
    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
            let divEl = document.createElement("div")
            divEl.textContent = state[i][j]
            divEl.className = "board__cell"
            divEl.setAttribute('data-x', i)
            divEl.setAttribute('data-y', j)
            divEl.addEventListener('click', (e) => {
                let x = e.target.getAttribute("data-x") - 0
                let y = e.target.getAttribute("data-y") - 0
                state[x][y] = toggleBtn.textContent
                renderBoard()
                if (checkIsWin(state)) {
                    console.log("Yutdingiz")
                }
            })
            boardEl.appendChild(divEl)

        }
    }
}


function printState(arr) {
    for (let i = 0; i < arr.length; i++) {
        let row = `${i + 1} `
        for (let j = 0; j < arr[i].length; j++) {
            row += `|${arr[i][j]}|`
        }
        console.log(row)
    }
}

function columnRowCheck(arr) {
    isWin = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[0][i] !== " " && arr[1][i] == " " && arr[2][i] !== " " && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) isWin = true
        if (arr[i][1] !== " " && arr[i][0] !== " " && arr[i][2] !== " " && arr[i][1] === arr[i][0] && arr[i][0] === arr[i][2]) isWin = true
    }

    return isWin
}

function diagonalCheck(arr) {
    let diagonalTemp = arr[0][0]
    isWin = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][i] !== diagonalTemp && arr[i][i] === " ") {
            isWin = false
        }
        diagonalTemp = arr[i][i]
    }
    return isWin
}

function diagonalReverseCheck(arr) {
    let isWin = true;
    let diagonalReverseTemp = arr[0][arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][arr.length - 1 - i] !== diagonalReverseTemp && arr[i][arr.length - 1 - i] === " ") {
            isWin = false
        }
        console.log("x", i, "y:", arr.length - 1 - i)
        console.log(arr[i][arr.length - 1 - i])
        diagonalReverseTemp = arr[i][arr.length - 1 - i];
    }
    return isWin
}

function checkIsWin(arr) {
    return diagonalCheck(arr) || columnRowCheck(arr) || diagonalReverseCheck(arr)
}

printState(state)

console.log(checkIsWin(state))