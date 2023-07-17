import getCarsAPI from '../../api/get-cars';
import { CarsResponse, WinnersResponse } from '../../interfaces/types';
import { turnOffLoadingAnimation, turnOnLoadingAnimation } from '../../utils/load';
import HeaderView from '../header/header';
import MainView from '../main/main';

const headerView = new HeaderView();

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
          const garagePage = 'Garage';
          const winnersPage = 'Winners';
          let carResponse: CarsResponse; 
          try {
            carResponse = await getCarsAPI(startPage);
            const mainView = new MainView();
            body.append(
            headerView.getHtmlDocument(), mainView.getHtmlDocument());
          } catch (error) {
          }
        
          turnOffLoadingAnimation();
          return body;
        };
} 

