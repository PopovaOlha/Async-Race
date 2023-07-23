import { WINNERS } from './variables';

export const deleteWinner = async (id: number): Promise<void> =>
    (await fetch(`${WINNERS}/${id}`, { method: 'DELETE' })).json();
