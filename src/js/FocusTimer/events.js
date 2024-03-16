import { controls } from './elemets.js'
import * as actions from './actions.js'

function registerEvent(events) {
    
  const action = events.target.dataset.action

  if (typeof actions[action] != "function") {
    return
  }

  actions[action]()
}

export function registerControls() {

  controls.addEventListener('click', registerEvent)
} 