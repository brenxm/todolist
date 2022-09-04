import "./styles.scss";
import { compareAsc, format } from "date-fns";
import { initializeStructure, updateDomProjectList } from "./domManipulation";
import App from "./app";


const root = document.querySelector("#content");
root.innerHTML = initializeStructure();

export const application = new App();

updateDomProjectList(application.projectContainer);
