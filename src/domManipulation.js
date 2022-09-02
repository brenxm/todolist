import App from "./app";

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
        let allList;
        container.map(project => {
            const generatedElement = `
            <div class="project-single-container">
                <div class = "project_title">${project.title}</div>
                <div class = "project_description">${project.desciption}</div>
            </div>
        `;
            allList += generatedElement;
        })
        return allList;
    }

    function addProjectButton() {
        const button = document.createElement("button");
        button.classList.add("project_add-button");
        button.textContent = "+";
        button.onclick = addProjectModal;
        document.querySelector(".main-body").appendChild(button);
    }

    document.querySelector(".main-body").innerHTML = generateProjectItem();
    addProjectButton();
}

function addProjectModal(){

    const modal = `
        <div class="project_add-project-modal-container">
            <div class="title-container">
                <label>Title</label>
                <input type="text>
            </div>
            <div class="tagcolor-container">
                <label>Tag color</label>
            </div>
            <div class="repitition-type">
                <div>toggle on or off here</div>
            </div>
            <button class="submit-add-project">Add Project</button>
        </div>
    `;


    document.querySelector(".main-body").innerHTML += modal;
    const button = document.querySelector(".submit-add-projecto");
}

