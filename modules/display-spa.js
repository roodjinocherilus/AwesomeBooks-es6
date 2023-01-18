
import {btnAddNew} from "./dom-element.js";
import {btnContact} from "./dom-element.js";
import {btnList} from "./dom-element.js";
import {listB} from "./dom-element.js";
import {form} from "./dom-element.js";
import {subtitle} from "./dom-element.js";
import {contact} from "./dom-element.js";

const list = () => {
  listB.classList.remove('hide');
  subtitle.classList.add('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
  btnList.classList.add('blue');
  btnList.classList.remove('link_nav');
  btnAddNew.classList.add('link_nav');
  btnContact.classList.add('link_nav');
}
const addNew = () => {
  listB.classList.add('hide');
  subtitle.classList.remove('hide');
  form.classList.remove('hide');
  contact.classList.add('hide');
  btnAddNew.classList.add('blue');
  btnAddNew.classList.remove('link_nav');
  btnList.classList.add('link_nav');
  btnContact.classList.add('link_nav');
}

const contactNav = () => {
  listB.classList.add('hide');
  subtitle.classList.add('hide');
  form.classList.add('hide');
  contact.classList.remove('hide');
  btnContact.classList.add('blue');
  btnContact.classList.remove('link_nav');
  btnList.classList.add('link_nav');
  btnAddNew.classList.add('link_nav');
}

btnList.addEventListener('click', list);

btnAddNew.addEventListener('click', addNew);

btnContact.addEventListener('click', contactNav);