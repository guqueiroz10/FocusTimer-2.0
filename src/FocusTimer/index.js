import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(hours, minutes, seconds) {
    state.hours = hours
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    
    events.registerControls()
    events.setMinutes()
    events.setHours()
    events.updateTime()
    events.updateSound()
}