import { CarOBJ, Update } from '../interfaces/types';
import { GARAGE } from './variables';

export const updateCar = async (id: number, body: Update): Promise<CarOBJ> => {
    const response = await fetch(`${GARAGE}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};
