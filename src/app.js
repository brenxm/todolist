import { updateDomProjectList } from "./domManipulation";
import { application } from ".";

export default class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, tagColor, repitiionType, dueDate, event){
        const project = new Project(title, tagColor, repitiionType, dueDate);
        this.projectContainer.push(project);
        updateDomProjectList(application.projectContainer);

        //auto sort
    }

    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType, dueDate){
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;
        this.taskContainer = [];
        this.dueDate = dueDate; 
    }
}

