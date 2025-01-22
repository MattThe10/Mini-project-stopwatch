const startBtn = document.querySelector('.btn-start')
const pauseBtn = document.querySelector('.btn-pause')
const resetBtn = document.querySelector('.btn-reset')
const headerTime = document.querySelector('.header-time')
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
        headerTime.textContent = `${hours}:${minutes}:${seconds}`
        startBtn.classList.add('disabled')
        startBtn.disabled = true
}

function pauseTimer(id) {
    clearInterval(id)
    startBtn.classList.remove('disabled')
    startBtn.disabled = false
}


function resetTimer(id) {
    headerTime.textContent = '0:0:0'
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