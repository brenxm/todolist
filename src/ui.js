import { add, compareAsc, format } from 'date-fns';
import App from './project';
import { application } from './index.js';
import returnBtnIcon from "./assets/returnbtn.png"
import projectTag from './assets/projecttag.svg';
import titleLogo from './assets/titlelogo.svg';
import deleteIcon from './assets/trashicon.png';
import editIcon from './assets/editicon.png';

export class Ui {
  static initializeApp() {
    const dom = document.querySelector('#content');
    dom.innerHTML = `
        <div class=header-container>
            <div class="title-logo-container">
                ${titleLogo}
            </div>
        </div>
        <div class=main-body>
        </div>
        <div class="footer">
        <div>Developed by Bryan Mina</div>
      </div>
    `;
  }

  static openProject(project) {
    this.clearContent();
    this.tasksHeader(project);
    if (project.taskContainer.length == 0) Ui.apendTaskBtn();
    const str = project.taskContainer.reduce((accu, val) => `${accu}<div>${val.taskTxt}</div>`, '');
  }

  static displayProjectLst() {
    const mainContent = document.querySelector(".main-body");
    if (application.projectContainer.length == 0) {
      mainContent.innerHTML = "";
    } else {
      const str = application.projectContainer.reduce((acc, val) => acc + generateProjectItem(val), "");
      mainContent.innerHTML = str;
      
      const projs = document.querySelectorAll(".single-project-container");
      
      projs.forEach(elem => elem.addEventListener(
        "click", (event) => {Ui.pullProject(event.target.getAttribute("data-id"))}
      ))
    }
   
    Ui.appendAddBtn();
    Ui.homeHeader();
    
  }

  static appendAddBtn() {
    const mainContent = document.querySelector('.main-body');
    const btn = document.createElement("button");
    btn.classList.add("project_add-button");
    btn.textContent = "+";
    mainContent.appendChild(btn);
    btn.addEventListener("click", addProjectModal)
  }

  static apendTaskBtn(){
    const mainBody = document.querySelector(".main-body");
    const str = `
      <div class="task-container">
        <button class="task-add-btn">Add Task</button> 
      </div>
    `
    mainBody.innerHTML += str;
    const btn = document.querySelector(".task-add-btn");
    btn.addEventListener("click", (event)=>{
      Ui.toggleTaskInput(event);
    })
  }

  static toggleTaskInput(event){
    const btnParent = event.target.parentElement;
    btnParent.removeChild(event.target);
    btnParent.innerHTML = `
      <input class="check-btn" type="checkbox">
      <input class="task-inpt" type="text" placeholder="What am I doing?">
      <div class="task-due-date">
        <span>Due: </span><span>${console.log('somedue daute here')}</span>
      </div>
    `
    const inpt = btnParent.children[1];
    inpt.focus();
  }

  static pullProject(uid) {
    // find the item with this uid
    const project = application.projectContainer.find((project) => project.uid == uid);
    Ui.openProject(project);
  }

  static clearContent() {
    document.querySelector('.main-body').innerHTML = '';
  }

  static tasksHeader(project) {
    const mainHd = document.querySelector(".header-container");
    mainHd.innerHTML = `
        <div class="title-info-hd">
          <div class="return-btn-container">
            <button class="return-btn"><img src=${returnBtnIcon} alt="return button"></button>
          </div>
          <div class="title"><div>${project.title}</div></div>
          <div class="info-container">
            <div>
              due: ${project.dueDate}
            </div>
            <div>
              <span>tasks:</span> <span class="header_task-count"> ${project.taskContainer.length}</span>
            </div>
            <div>
              <span>completedTask:</span> <span class="header_completed-task"> ${project.completedTask}</span>
            </div>
          </div>
        </div>
    `
    const returnBtn = document.querySelector(".return-btn");
    returnBtn.addEventListener("click", Ui.displayProjectLst);
  }

  static appendModalBtns() {
    document.querySelector(".button-container").innerHTML = `
      <button class="submit-add-project">Add Project</button>
      <button class="cancel-add-project">Cancel</button>
    `
    const cancelBtn = document.querySelector(".cancel-add-project");

    //toggle modal
    cancelBtn.addEventListener("click", () => {
      console.log("called");
    });
  }

  static homeHeader() {
    const hd = document.querySelector(".header-container");
    hd.innerHTML = `
      <div class="title-logo-container">
        ${titleLogo}
      </div>
    `
  }

  static clickTest(){
    console.log("clicker");
  }

}

export function updateDomProjectList(container) {
  if (container.length == 0) return addProjectButton();
  const str = container.reduce((accu, val) => {
    const tempStr = generateProjectItem(val);
    return accu + tempStr;
  }, '');
  document.querySelector('.main-body').innerHTML = str;
  const projectElements = document.querySelectorAll('.single-project-container');
  projectElements.forEach((elem) => {
    elem.addEventListener('click', (event) => { Ui.pullProject(event.target.getAttribute('data-id')); });
  });
  addProjectButton();
}

function addProjectModal() {
  let colorSelected;
  let repeated = false;

  function output() {
    const modal = `
        <form class="project_add-project-modal-container">
            <div class="title-container">
                <label>Title</label>
                <input minlength="1" maxlength="15"name="input-name" type="text">
                <div class="p-container"><p class="xeess3">Must contain at least 1 to 15 character</p></div>
            </div>
            <div class="tagcolor-container">
                <label>Tag color</label>
                <div class="color-container">
                    <div style="background-color: #ff2503" class="color-picker" id="ff2503"></div>
                    <div style="background-color: #499cff"class="color-picker" id="499cff"></div>
                    <div style="background-color: #14ff92"class="color-picker" id="14ff92"></div>
                    <div style="background-color: #e3ff35"class="color-picker" id="e3ff35"></div>
                    <div style="background-color: red"class="color-picker" id="custom"></div>
                </div>
            </div>
            <div class="repitition-type">
                <span>toggle on or off here</span>
                <span class="handle-container">
                    <div class="handle-rail">
                        <div class="handle-head" id="handle-head"></div>
                    </div>
                    <div class="date-input">
                        <label>Due date</label>
                        <input class ="date-input-value"type="date">
                    </div>
                </span>
            </div>
              <div class="button-container">
              </div>
        </form>
    `;
    document.querySelector('.main-body').innerHTML += modal;
    Ui.appendModalBtns();
  }

  output();
  document.querySelector('.project_add-project-modal-container').onsubmit = formSubmit;
  const toggleHandler = document.querySelector('.handle-rail');
  toggleHandler.addEventListener('click', toggleButton);
  const colorPickers = document.querySelectorAll('.color-picker');
  colorPickers.forEach((picker) => {
    picker.addEventListener('click', testClick);
  });

  function formSubmit(event) {
    event.preventDefault();

    const inputTitle = event.target[0].value;
    const inputDate = validateDateFormat();
    const inputTagColor = colorSelected == undefined ? 'white' : colorSelected.id;

    validateInput(inputTitle);

    function validateInput(input) {
      if (input.length < 1 || input.length > 15) return invalidEntry();

      if (!repeated) {
        return inputDate ? application.addProject(inputTitle, inputTagColor, repeated, inputDate, generateUid()) : invalidEntry();
      }

      application.addProject(inputTitle, inputTagColor, repeated, null, generateUid());

      function invalidEntry() {
        const p = document.querySelector('.xeess3');
        p.style.display = 'block';
      }
    }

    function generateUid() {
      const number = Math.random() * 100;
      console.log(number);
      return number;
    }

    function validateDateFormat() {
      const dateSelected = document.querySelector('.date-input-value');
      if (dateSelected.value == '') return null;
      const valid = [];
      const arr = dateSelected.value.split('');
      valid.push(...arr.slice(5, 7));
      valid.push(...'/');
      valid.push(...arr.slice(8, 10));
      valid.push(...'/');
      valid.push(...arr.slice(0, 4));

      return valid.join('');
    }
  }

  function testClick(event) {
    if (colorSelected == null) {
      colorSelected = event.target;
    } else {
      colorSelected.classList.value = 'color-picker';
      colorSelected = event.target;
    }

    colorSelected.classList.value = 'color-picker--selected';
  }

  function toggleButton() {
    const toggled = 'handle-head--toggle';
    const unToggled = 'handle-head';
    const head = document.querySelector(`.${unToggled}`);
    const dateContainer = document.querySelector('.date-input');
    const modalContainer = document.querySelector('.project_add-project-modal-container');
    head.id == unToggled ? head.id = toggled : head.id = unToggled;

    if (head.id == toggled) {
      // bringout date here
      repeated = true;
      dateContainer.style.display = 'none';
      modalContainer.style.height = '260px';
    } else {
      repeated = false;

      dateContainer.style.display = 'block';
      modalContainer.style.height = '280px';

      // hide date
    }
  }
}

function addProjectButton() {
  const button = document.createElement('button');
  button.classList.add('project_add-button');
  button.textContent = '+';
  button.onclick = addProjectModal;
  document.querySelector('.main-body').appendChild(button);
}

function generateProjectItem(project) {
  function output() {
    return `
            <div class="single-project-container" data-id="${project.uid}">
                ${new TagIcon(`${project.color}`).renderIcon()}

                <div class="single-project_title-container" >
                    <div class="title" ">${project.title}</div>
                </div>
                <div class="single-project_tasks-count-container">
                    <span class="sptcc1">Tasks:</span>
                    <span class="sptcc2">${project.taskContainer.length}</span>
                </div>
                <div class="single-project_repeated-date-container">${project.repitiionType ? '<span>repeated</span>' : `<span>Due date:${project.dueDate}</span>`}</div>
                <div class="single-project_edit-button"><img src=${editIcon}></div>
                <div class="single-project_delete-button"><img src=${deleteIcon}></div>
            </div>
        `;
  }

  return output();
}

class TagIcon {
  constructor(colorSelected) {
    this.customColor = colorSelected;
    this.class = '';
    this.id = '';
    this.svgFile = projectTag;
  }

  generateCustomClass() {
    this.class = Math.random() * 10000;
    this.id = Math.random() * 10000;
    this.svgFile = this.svgFile.replace('Layer_2', this.id);
    this.svgFile = this.svgFile.replace('cls-1', this.class);
    this.svgFile = this.svgFile.replace('cls-1', this.class);
  }

  updateSvgColor() {
    const testTer = document.createElement('div');
    testTer.innerHTML = this.svgFile;
    const regex = /(?<={fill:#).*?;/i;
    this.svgFile = this.svgFile.replace(regex, `${this.customColor};`);
  }

  renderIcon() {
    this.generateCustomClass();
    this.updateSvgColor();
    return `<div class="single-project_tag-container" style="fill:#${this.customColor}">${this.svgFile}</div>`;
  }
}
