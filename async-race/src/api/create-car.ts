import { Update } from '../interfaces/types';
import { GARAGE } from './variables';

export const createCar = async (body: Update) =>
    (
        await fetch(`${GARAGE}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
