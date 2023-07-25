import { WINNERS } from './variables';

export const getWinnerStatusAPI = async (id: number) => (await fetch(`${WINNERS}/${id}`)).status;
