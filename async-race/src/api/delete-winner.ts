import { WINNERS } from './variables';

export const deleteWinner = async (id: number) => (await fetch(`${WINNERS}/${id}`, { method: 'DELETE' })).json();
