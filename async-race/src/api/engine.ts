import { Engine } from '../interfaces/types';
import { ENGINE } from './variables';

export const startEngine = async (id: number): Promise<Engine> => (await fetch(`${ENGINE}?id=${id}&status=started`)).json();
export const stopEngine = async (id: number): Promise<Engine> => (await fetch(`${ENGINE}?id=${id}&status=stopped`)).json();

