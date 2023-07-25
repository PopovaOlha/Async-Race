import { Createwinner } from '../interfaces/types';
import { WINNERS } from './variables';

export const updateWinner = async (id: number, body: Createwinner) =>
    (
        await fetch(`${WINNERS}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
