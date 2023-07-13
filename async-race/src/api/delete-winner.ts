import { WINNERS } from './variables';

const deleteWinnerAPI = async (id: number): Promise<void> =>
    (await fetch(`${WINNERS}/${id}`, { method: 'DELETE' })).json();

export default deleteWinnerAPI;
