import { add } from "date-fns";
import App from "./app";
import { application } from "./index.js";

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
    const modal = `
        <form class="project_add-project-modal-container">
            <div class="title-container">
                <label>Title</label>
                <input minlength="1" maxlength="15"name="input-name" type="text">
                <div class="p-container"><p class="xeess3">Must contain at least 1 to 15 character</p></div>
            </div>
            <div class="tagcolor-container">
                <label>Tag color</label>
            </div>
            <div class="repitition-type">
                <div>toggle on or off here</div>
            </div>
            <button class="submit-add-project">Add Project</button>
        </form>
    `;


    document.querySelector(".main-body").innerHTML += modal;
    document.querySelector(".project_add-project-modal-container").onsubmit = clickFn;

    function clickFn(event) {
        event.preventDefault();
        //input title validator
        const inputTitle = event.target[0].value;
        validateInput(inputTitle);

        //validate input
        function validateInput(input){
            if(input.length > 0 && input.length < 16){
                validInput();
            } else {
                invalidInput();
            }
        }

        //valid input
        function validInput(){
            application.addProject(inputTitle, false,false);
        }

        //invalid input
        function invalidInput(){
            const p = document.querySelector(".xeess3");
            p.style.display = "block";
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

