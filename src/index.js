import "./styles.css";
import { compareAsc, format } from "date-fns";
import { initializeStructure } from "./domManipulation";
import App from "./app";

const root = document.querySelector("#content");
root.innerHTML = initializeStructure();

const mainProject = new App();
console.log(mainProject.projectContainer);