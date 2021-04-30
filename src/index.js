import { generateMain } from './sections/main'
import { generateProjects } from './sections/projects'
import { generateSkills } from './sections/skills'
import { generateExperience } from './sections/experience'
import { generateContact } from './sections/contact'

function clearAll() {
  let main = document.getElementById('main-container');
  let projects = document.getElementById('projects-container');
  let experience = document.getElementById('experience-container');
  let skills = document.getElementById('skills-container');
  let contact = document.getElementById('contact-container');
  let sections = [main, projects, experience, skills, contact];
  sections.forEach(section => {
    section.setAttribute('style', 'display: none;');
    section.setAttribute('class', 'not-visible');
  });
}

function animation(id) {
  let section = document.getElementById(id);
  let clase = section.className.includes('visible') ? 'visible' : 'not-visible';
  section.setAttribute('class', clase);
  if (section.className.includes('visible')) {
    section.id === 'main-container' ? 
      section.setAttribute('style', 'color: grid;') :
      section.setAttribute('style', 'display: flex;'); 
    window.setTimeout(function(){
      section.style.opacity = 1;
      section.style.transform = 'scale(1)';
    },0);
  }
  if (section.className.includes('not-visible')) {
    section.style.opacity = 0;
    section.style.transform = 'scale(0)';
    window.setTimeout(function(){
      section.setAttribute('style', 'display: none;');
    },700); // timed to match animation-duration
  }
}
let mainLink = document.getElementById('main-link');
mainLink.addEventListener('click', () => {
  animation('main-container');
  clearAll(); 
  generateMain();
});

let projectsLink = document.getElementById('projects-link');
projectsLink.addEventListener('click', () => {
  animation('projects-container');
  clearAll();
  generateProjects();
});

let experienceLink = document.getElementById('experience-link');
experienceLink.addEventListener('click', () => {
  animation('experience-container');
  clearAll();
  generateExperience();
});

let skillsLink = document.getElementById('skills-link');
skillsLink.addEventListener('click', () => {
  animation('skills-container');
  clearAll();
  generateSkills();
});

let contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', () => {
  animation('contact-container');
  clearAll();
  generateContact();
  document.getElementById('form').setAttribute('style', 'display: block;');
});


clearAll();
animation('main-container');

