import { WINNERS } from './variables';

const getWinnerStatusAPI = async (id: number): Promise<number> => (await fetch(`${WINNERS}/${id}`)).status;

export default getWinnerStatusAPI;
