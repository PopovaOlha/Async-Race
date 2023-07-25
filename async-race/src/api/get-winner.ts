import { WINNERS } from './variables';

export const getWinnerAPI = async (id: number) => (await fetch(`${WINNERS}/${id}`)).json();

