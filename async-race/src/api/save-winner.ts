import { Save } from '../interfaces/types';
import { createWinner } from './create-winner';
import { getWinnerAPI } from '../api/get-winner';
import { getWinnerStatusAPI } from '../api/get-winner-status';
import { updateWinner } from './update-winner';

export const saveWinner = async ({ id, time }: Save) => {
    const winnerStatus = await getWinnerStatusAPI(id);
    if (winnerStatus === 404) {
        await createWinner({
            id,
            wins: 1,
            time,
        });
    } else {
        const winner = await getWinnerAPI(id);
        await updateWinner(id, {
            id,
            wins: winner.wins + 1,
            time: time < winner.time ? time : winner.time,
        });
    }
};
