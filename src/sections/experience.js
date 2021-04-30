function generateExperience() {
  console.log("generating experiences...");
  let container = document.getElementById('experience-container');
  container.setAttribute('class', 'visible');
  container.setAttribute('style', 'display: grid;');
}

export {
  generateExperience,
}