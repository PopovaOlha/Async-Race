import { CarOBJ } from '../interfaces/types';
import { GARAGE } from './variables';

export const getCar = async (id: number): Promise<CarOBJ> => (await fetch(`${GARAGE}/${id}`)).json();
