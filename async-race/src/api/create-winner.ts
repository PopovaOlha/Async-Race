import { Createwinner } from '../interfaces/types';
import { WINNERS } from './variables';

export const createWinner = async (body: Createwinner) =>
    (
        await fetch(`${WINNERS}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
