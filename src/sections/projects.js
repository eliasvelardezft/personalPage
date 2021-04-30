function generateProjects() {
  console.log("generating projects...");
  let container = document.getElementById('projects-container');
  container.setAttribute('class', 'visible');
  container.setAttribute('style', 'display: grid;');
}

export {
  generateProjects,
}