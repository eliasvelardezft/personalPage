function generateSkills() {
  console.log("generating skills...");
  let container = document.getElementById('skills-container');
  container.setAttribute('class', 'visible');
  container.setAttribute('style', 'display: block;');
}

export {
  generateSkills,
}