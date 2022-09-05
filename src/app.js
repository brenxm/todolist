import { updateDomProjectList } from "./domManipulation";
import { application } from ".";

export default class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, tagColor, repitiionType, event){
        const project = new Project(title, tagColor, repitiionType);
        console.log(project);
        this.projectContainer.push(project);
        updateDomProjectList(application.projectContainer);

        //auto sort
    }

    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType){
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;
        this.taskContainer = [];     
    }
}

