import { getCars } from '../../api/get-cars';
import { Cars } from '../../interfaces/types';
import { turnOffLoadingAnimation, turnOnLoadingAnimation } from '../../utils/load';
import HeaderView from '../header/header';
import MainView from '../main/main';
import SectionForm from '../section-form/section-form';

const headerView = new HeaderView();
const sectionForm = new SectionForm();
const mainView = new MainView();

export default class App {
    constructor() {
        this.createView();
        document.addEventListener('DOMContentLoaded', this.generateSPA);
        
    }
    createView() {
        document.body.setAttribute('id', 'body');
    }
    generateSPA = async () => {
        const body: HTMLElement | null = document.getElementById('body');
        turnOnLoadingAnimation();
        if (!body) {
            throw new Error("body doesn't exist");
        }
        const startPage = 1;
        let carResponse: Cars;
        try {
            carResponse = await getCars(startPage);
            body.append(headerView.getHtmlDocument(), sectionForm.getHtmlDocument(), mainView.getHtmlDocument());
        } catch (error) {
            console.log('Error');
        }
        turnOffLoadingAnimation();
        return body;
    };
}
