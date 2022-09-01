export default class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, description, tagColor, repitiionType){
        const project = new Project(title, description, tagColor, repitiionType);
        this.projectContainer.push(project);
    }

    //remove project    
}

class Project{
    constructor(title, description, tagColor, repitiionType){
        this.title = title;
        this.description = description;
        this.color = tagColor;
        this.repitiionType = repitiionType;     
    }
}
