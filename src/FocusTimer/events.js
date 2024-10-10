import state from "./state.js"
import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action  //capturando os eventos de click para verificar quais deles são ações da aplicação
        if(typeof actions [action] != "function"){
            return
        }
        
        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}

export function setHours() {
    el.hours.addEventListener('focus', () => {
        el.hours.textContent = ""
    })

    el.hours.onkeypress = (event) => /\d/.test(event.key)

    el.hours.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 23 ? 23 : time

        state.hours = time
        state.seconds = 0

        updateDisplay()
        el.hours.removeAttribute('contenteditable')
    })
}

export function addTime() {
    el.plus.addEventListener('click', () => {
       actions.addFiveMinutes()
    })
}

export function startForestSound() {
    el.forestSound.addEventListener('click', () => {
        sounds.forestSound.play()
    })
}