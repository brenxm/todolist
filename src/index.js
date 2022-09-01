import "./styles.css";
import { compareAsc, format } from "date-fns";
import { initializeStructure, updateDomProjectList } from "./domManipulation";
import App from "./app";

const root = document.querySelector("#content");
root.innerHTML = initializeStructure();

const mainProject = new App();
console.log(mainProject.projectContainer);

mainProject.addProject("Chores", "daily home chores", "blue", true);
mainProject.addProject("Chores", "daily home chores", "blue", true);

updateDomProjectList(mainProject.projectContainer);


console.log(mainProject.projectContainer);
