import { WINNERS } from './variables';

const getWinnerAPI: any = async (id: number) => (await fetch(`${WINNERS}/${id}`)).json();

export default getWinnerAPI;