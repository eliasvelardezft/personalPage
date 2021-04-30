function generateMain() {
  let container = document.getElementById('main-container');
  container.setAttribute('class', 'visible');
  container.setAttribute('style', 'display: grid;');
}

export {
  generateMain,
}