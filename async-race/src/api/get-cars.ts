import { Cars } from '../interfaces/types';
import { GARAGE } from './variables';

export const getCars = async (page: number, limit = 7): Promise<Cars> => {
    const res = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
    const carsCount = {
        items: await res.json(),
        count: Number(res.headers.get('X-Total-Count')),
    };
    return carsCount;
};
