const btnOpen = document.querySelector('.btn-open');
const btnClouse = document.querySelector('.btn-clouse');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contacts');

btnOpen.addEventListener('click', openNavigation);
btnClouse.addEventListener('click', clouseNavigation);

function openNavigation() {
  btnOpen.classList.add('is-hidden');
  btnClouse.classList.remove('is-hidden');
  about.classList.add('show-about');
  about.classList.remove('hide-about');
  services.classList.add('show-services');
  services.classList.remove('hide-services');
  projects.classList.add('show-projects');
  projects.classList.remove('hide-projects');
  contact.classList.add('show-contacts');
  contact.classList.remove('hide-contacts');
}

function clouseNavigation() {
  btnOpen.classList.remove('is-hidden');
  btnClouse.classList.add('is-hidden');
  about.classList.remove('show-about');
  about.classList.add('hide-about');
  services.classList.remove('show-services');
  services.classList.add('hide-services');
  projects.classList.remove('show-projects');
  projects.classList.add('hide-projects');
  contact.classList.remove('show-contacts');
  contact.classList.add('hide-contacts');
}
