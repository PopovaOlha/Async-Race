import { GARAGE } from './variables';

const getCarAPI: any = async (id: number) => (await fetch(`${GARAGE}/${id}`)).json();

export default getCarAPI;
