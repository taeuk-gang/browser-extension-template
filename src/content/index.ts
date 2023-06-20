import './components/ghost/index'

init()

function init(): void {
  const ghost = document.createElement('flying-boo')
  document.body.appendChild(ghost)
}

export {}
