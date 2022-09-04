import { add } from "date-fns";
import App from "./app";
import { application } from "./index.js";
import { compareAsc, format } from "date-fns";


//initialize main structure
export function initializeStructure() {
    return `
        <div class=header-container>
            <h1>TodoList</h1>
        </div>
        <div class=main-body>
        </div>
        <div class=footer>
            <div>Developed by Bryan Mina</div>
        </div>
    `
}

export function updateDomProjectList(container) {
    function generateProjectItem() {
        if (container.length == 0) return "";
        const str = container.reduce((accu, val) => {
            const singleProject = `
            <div class="project-single-container">
                <div class = "project_title">${val.title}</div>
                <div class = "project_description">${val.color}</div>
            </div>
        `;
            return accu + singleProject;
        }, "");
        return str;
    };
    document.querySelector(".main-body").innerHTML = generateProjectItem();
    addProjectButton();
}

function addProjectModal() {
    let colorSelected = null;
    let repeated = false;

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
                    <div style="background-color: red" class="color-picker" id="red"></div>
                    <div style="background-color: blue"class="color-picker" id="blue"></div>
                    <div style="background-color: green"class="color-picker" id="green"></div>
                    <div style="background-color: yellow"class="color-picker" id="yellow"></div>
                    <div style="background-color: red"class="color-picker" id="custom"></div>
                </div>
            </div>
            <div class="repitition-type">
                <div>toggle on or off here</div>
                <div class="handle-container">
                    <div class="handle-rail">
                        ON  OFF
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
    document.querySelector(".project_add-project-modal-container").onsubmit = formSubmit;
    const toggleHandler = document.querySelector(".handle-rail");
    toggleHandler.addEventListener("click", toggleButton);

    function formSubmit(event) {
        event.preventDefault();
        const inputTitle = event.target[0].value;
        validateInput(inputTitle);

        function validateInput(input){
            if(input.length > 0 && input.length < 16 && validateDateFormat() ){
                application.addProject(inputTitle, colorSelected == null ? "white": colorSelected.id, repeated);
            } else {
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
            
            return valid;
        }
    }

    const colorPickers = document.querySelectorAll(".color-picker");
    colorPickers.forEach(picker => {
        picker.addEventListener("click", testClick);
    });

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
            dateContainer.style.display = "block";
            modalContainer.style.height = "270px";
        } else {
            repeated = false;
            dateContainer.style.display = "none";
            modalContainer.style.height = "240px";

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

