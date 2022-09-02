export default class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, tagColor, repitiionType){
        const project = new Project(title, tagColor, repitiionType);
        this.projectContainer.push(project);

        //auto sort
    }

    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType){
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;     
    }
}
