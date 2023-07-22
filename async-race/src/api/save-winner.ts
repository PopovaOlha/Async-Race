import { Save } from "../interfaces/types";
import { createWinner } from "./create-winner";
import getWinner from "./get-winner";
import getWinnerStatus from "./get-winner-status";
import { updateWinner } from "./update-winner";

export const saveWinner = async ({ id, time }: Save): Promise<void> => {
    const winnerStatus = await getWinnerStatus(id);
    if (winnerStatus === 404) {
      await createWinner({
        id,
        wins: 1,
        time,
      });
    } else {
      const winner = await getWinner(id);
      await updateWinner(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    }
  };