import { add } from "date-fns";
import App from "./app";
import { application } from "./index.js";
import { compareAsc, format } from "date-fns";
import projectTag from "./assets/projecttag.svg";
import titleLogo from "./assets/titlelogo.svg";
import deleteIcon from "./assets/trashicon.png";
import editIcon from "./assets/editicon.png";

export function initializeStructure() {
    return `
        <div class=header-container>
            <div class="title-logo-container">
                ${titleLogo}
            </div>
        </div>
        <div class=main-body>
        </div>
        <div class=footer>
            <div>Developed by Bryan Mina</div>
        </div>
    `
}

export function updateDomProjectList(container) {
   if(container.length == 0) return addProjectButton();
   const str = container.reduce((accu, val) => {
        const tempStr = generateProjectItem(val.title, val.color, val.repitiionType, val.taskContainer, val.dueDate);
        const element = new DOMParser().parseFromString(tempStr, "text/xml");
        console.log(element);
        return accu + tempStr;
   }, "")
   document.querySelector(".main-body").innerHTML = str;
   const projectElements = document.querySelectorAll(".single-project-container");
   projectElements.forEach(elem => {
        elem.addEventListener("click", (event)=>{console.log(event.target)});
   })
   addProjectButton();
}

function addProjectModal() {
    let colorSelected;
    let repeated = false;

    function output(){
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
                    <div style="background-color: red" class="color-picker" id="ff2503"></div>
                    <div style="background-color: blue"class="color-picker" id="499cff"></div>
                    <div style="background-color: green"class="color-picker" id="14ff92"></div>
                    <div style="background-color: yellow"class="color-picker" id="e3ff35"></div>
                    <div style="background-color: red"class="color-picker" id="custom"></div>
                </div>
            </div>
            <div class="repitition-type">
                <div>toggle on or off here</div>
                <div class="handle-container">
                    <div class="handle-rail">
                        OFF  ON
                        <div class="handle-head" id="handle-head"></div>
                    </div>
                    <div class="date-input">
                        <label>Due date</label>
                        <input class ="date-input-value"type="date">
                    </div>
                </div>
            </div>
            <button class="submit-add-project">Add Project</button>
        </form>
    `;
        document.querySelector(".main-body").innerHTML += modal;
    }

    output();
    document.querySelector(".project_add-project-modal-container").onsubmit = formSubmit;
    const toggleHandler = document.querySelector(".handle-rail");
    toggleHandler.addEventListener("click", toggleButton);
    const colorPickers = document.querySelectorAll(".color-picker");
    colorPickers.forEach(picker => {
        picker.addEventListener("click", testClick);
    });

    function formSubmit(event) {
        event.preventDefault();

        const inputTitle = event.target[0].value;
        const inputDate = validateDateFormat();
        const inputTagColor = colorSelected == undefined ? "white" : colorSelected.id;

        validateInput(inputTitle);

        function validateInput(input){
            if(input.length < 1 || input.length > 15) return invalidEntry();

            if(!repeated){
                inputDate ? console.log(true) : console.log(false);
                return inputDate ? application.addProject(inputTitle, inputTagColor, repeated, inputDate) : invalidEntry();
                
            }
           
            console.log("called?");
            application.addProject(inputTitle, inputTagColor, repeated, null);

            function invalidEntry(){
                const p = document.querySelector(".xeess3");
                p.style.display = "block";
            }
        }

        function validateDateFormat(){
            const dateSelected = document.querySelector(".date-input-value");
            if (dateSelected.value == "") return null;
            const valid = [];
            const arr = dateSelected.value.split("");
            valid.push(...arr.slice(5, 7));
            valid.push(..."/");
            valid.push(...arr.slice(8, 10));
            valid.push(..."/");
            valid.push(...arr.slice(0, 4));
        
            return valid.join("");
        }
    }

    function testClick(event){
        if(colorSelected == null){
            colorSelected = event.target;
        } else {
            colorSelected.classList.value = "color-picker";
            colorSelected = event.target;
        }

        colorSelected.classList.value = "color-picker--selected";
    }

    function toggleButton(){
        const toggled = "handle-head--toggle";
        const unToggled = "handle-head";
        const head = document.querySelector(`.${unToggled}`);
        const dateContainer = document.querySelector(".date-input");
        const modalContainer = document.querySelector(".project_add-project-modal-container");
        head.id == unToggled ? head.id = toggled : head.id = unToggled;

        if(head.id == toggled){
            //bringout date here
            repeated = true;
            dateContainer.style.display = "none";
            modalContainer.style.height = "240px";
        } else {
            repeated = false;
          
            dateContainer.style.display = "block";
            modalContainer.style.height = "270px";

            //hide date
        }
    }
}

function addProjectButton() {
    const button = document.createElement("button");
    button.classList.add("project_add-button");
    button.textContent = "+";
    button.onclick = addProjectModal;
    document.querySelector(".main-body").appendChild(button);
}

function generateProjectItem(title, tagColor, repitiionType, tasksContainer, dueDate){
    function accessProjectTasks(){
        //opening the task
        console.log("clicked this");
    }

    function output(){
        return `
            <div class="single-project-container">
                ${new TagIcon(`${tagColor}`).renderIcon()}

                <div class="single-project_title-container">
                    <div class="title">${title}</div>
                </div>
                <div class="single-project_tasks-count-container">
                    <span class="sptcc1">Tasks:</span>
                    <span class="sptcc2">${tasksContainer.length}</span>
                </div>
                <div class="single-project_repeated-date-container">${repitiionType ? "<span>repeated</span>" : "<span>Due date:"+ dueDate +"</span>" }</div>
                <div class="single-project_edit-button"><img src=${editIcon}></div>
                <div class="single-project_delete-button"><img src=${deleteIcon}></div>
            </div>
        `
    }

    return output();
}

class TagIcon{
    constructor(colorSelected){
        this.customColor = colorSelected;
        this.class = "";
        this.id = "";
        this.svgFile = projectTag;
    }

    generateCustomClass(){
        this.class = Math.random() * 10000;
        this.id = Math.random() * 10000;
        this.svgFile = this.svgFile.replace("Layer_2", this.id);
        this.svgFile = this.svgFile.replace("cls-1", this.class);
        this.svgFile = this.svgFile.replace("cls-1", this.class);
    }

    updateSvgColor(){
        const testTer = document.createElement("div");
        testTer.innerHTML = this.svgFile;
        const regex = /(?<={fill:#).*?;/i;
        this.svgFile = this.svgFile.replace(regex, this.customColor + ";");
    }

    renderIcon(){
        this.generateCustomClass();
        this.updateSvgColor();
        return `<div class="single-project_tag-container" style="fill:#${this.customColor}">${this.svgFile}</div>`;
    }
}