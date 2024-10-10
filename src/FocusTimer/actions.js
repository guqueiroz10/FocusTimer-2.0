import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle
    ('running')
    
    timer.countdown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove
    ('running')
    timer.updateDisplay()
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.hours.setAttribute('contenteditable', true)
    el.hours.focus()
}

export function addFiveMinutes() {
    let minutes = Number(el.minutes.textContent)

    minutes += 5

    state.minutes = minutes
    timer.updateDisplay(state.hours, state.minutes, state.seconds)
}