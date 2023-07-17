import getCarsAPI from '../../api/get-cars';
import { CarOBJ } from '../../interfaces/types';
import View from '../../utils/view';
import CarRoad from '../car-road/car-road';
import FormView from '../form/form';
import './main.css';

const CssStyles = {
    MAIN: 'garage',
};
export default class MainView extends View {
    page: number
    count: number;
    constructor() {
        const paramsMain = {
            tag: 'main',
            classNames: [CssStyles.MAIN],
            textContent: '',
            callback: null,
        };
        super(paramsMain);
        this.configureView();
        this.count = 4;
        this.page = 1;
        this.getCarMet(this.page);
    }
    configureView = () => {
        const formView = new FormView();
        this.elementCreater.addInnerElement(formView.getHtmlDocument());

}
async getCarMet(page: number): Promise<void> {
    this.count = (await getCarsAPI(this.page)).count;
    ((await getCarsAPI(page)).items as Array<CarOBJ>).forEach((el) => {
      const caradnroad = new CarRoad(el);
      this.elementCreater.addInnerElement(caradnroad.getHtmlDocument());
      caradnroad.addCarImg(el.id);
});
}
}