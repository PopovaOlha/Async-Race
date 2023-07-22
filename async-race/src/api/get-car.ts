import { CarOBJ } from '../interfaces/types';
import { GARAGE } from './variables';

export const getCar = async (id: number): Promise<CarOBJ> => {
    const response = await fetch(`${GARAGE}/${id}`);
    const data = await response.json();
    return data;
  };