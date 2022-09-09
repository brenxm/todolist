import { updateDomProjectList } from "./ui";

export default class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, tagColor, repitiionType, dueDate, uid, event){
        const project = new Project(title, tagColor, repitiionType, dueDate, uid);
        this.projectContainer.push(project);
        updateDomProjectList(this.projectContainer);

        //auto sort
    }


    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType, dueDate, uid){
        this.uid = uid;
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;
        this.taskContainer = [];
        this.dueDate = dueDate; 
        this.completedTask = 0;
    }
}


