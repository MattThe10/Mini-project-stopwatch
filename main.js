const startBtn = document.querySelector('.btn-start')
const pauseBtn = document.querySelector('.btn-pause')
const resetBtn = document.querySelector('.btn-reset')

const spanHours = document.querySelector('.span-hours')
const spanMinutes = document.querySelector('.span-minutes')
const spanSeconds = document.querySelector('.span-seconds')

let hours = 0
let minutes = 0
let seconds = 0

resetButtons()

startBtn.addEventListener('click', () => {
    pauseBtn.classList.remove('disabled')
    resetBtn.classList.remove('disabled')

    pauseBtn.disabled = false
    resetBtn.disabled = false

    const intervalID = setInterval(startTimer, 100)

    pauseBtn.addEventListener('click', () => {
        pauseTimer(intervalID)
    })

    resetBtn.addEventListener('click', () => {
        resetTimer(intervalID)
    })

})

function startTimer() {
        seconds++
        if(seconds === 60) {
            seconds = 0
            minutes += 1
        }

        if(minutes === 60) {
            hours =+ 1
            minutes = 0
        }
        
        if(seconds < 10) {
            spanSeconds.textContent = '0' + seconds
        } else {
            spanSeconds.textContent = seconds
        }

        if(minutes < 10) {
            spanMinutes.textContent = '0' + minutes
        } else {
            spanMinutes.textContent = minutes
        }

        if(hours < 10) {
            spanHours.textContent = '0' + hours
        } else {
            spanHours.textContent = hours
        }
        startBtn.classList.add('disabled')
        startBtn.disabled = true
}

function pauseTimer(id) {
    clearInterval(id)
    startBtn.classList.remove('disabled')
    startBtn.disabled = false
}


function resetTimer(id) {
    spanSeconds.textContent = '00'
    spanMinutes.textContent = '00'
    spanHours.textContent = '00'
    hours = 0
    minutes = 0
    seconds = 0
    clearInterval(id)
    startBtn.classList.remove('disabled')
    startBtn.disabled = false
    resetButtons()
}

function resetButtons() {
    pauseBtn.classList.add('disabled')
    resetBtn.classList.add('disabled')

    pauseBtn.disabled = true
    resetBtn.disabled = true
}