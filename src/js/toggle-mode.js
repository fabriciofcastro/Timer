let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

function toggle(event) {
  document.documentElement.classList.toggle('light')
  const modo = darkMode ? 'light' : 'dark'

  event.currentTarget.querySelector('span').textContent = `${modo} modo ativado`

  darkMode = !darkMode
}

buttonToggle.addEventListener('click', toggle )