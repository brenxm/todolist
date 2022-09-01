//initialize main structure
export function initializeStructure(){
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

export function updateDomProjectList(container){
    let accumulator = "";
    container.map(project => {
        const generatedElement = `
            <div class="project-single-container">
                <div class = "project_title">${project.title}</div>
                <div class = "project_description">${project.desciption}</div>
            </div>
        `;

        accumulator += generatedElement;
    })

    const addProjectButton = `
        <div class="project_add-button-container">
            <button onclick = >+</button>
        </div>
    `;

    accumulator += addProjectButton;

    document.querySelector(".main-body").innerHTML = accumulator;
}