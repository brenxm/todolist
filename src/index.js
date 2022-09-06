import "./styles.scss";
import { compareAsc, format } from "date-fns";
import { initializeStructure, updateDomProjectList } from "./domManipulation";
import App from "./app";
import projectTag from "./assets/projecttag.svg";
import titleLogo from "./assets/titlelogo.svg";


const root = document.querySelector("#content");
root.innerHTML = initializeStructure();

export const application = new App();

updateDomProjectList(application.projectContainer);
