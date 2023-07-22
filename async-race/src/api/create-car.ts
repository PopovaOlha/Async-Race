import { CarOBJ, Update } from '../interfaces/types';
import { GARAGE } from './variables';

export const createCar = async (body: Update): Promise<CarOBJ> => {
    const response = await fetch(GARAGE, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  };
