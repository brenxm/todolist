import './styles.scss';
import { initializeStructure, updateDomProjectList, Ui } from './ui';
import App from './project';

Ui.initializeApp();
export const application = new App();

updateDomProjectList(application.projectContainer);
   