import { Cars } from '../interfaces/types';
import { GARAGE, GARAGE_LIMIT } from './variables';

export const getCars = async (page: number, limit = GARAGE_LIMIT): Promise<Cars> => {
    const res = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
    const carsCount = {
        items: await res.json(),
        count: Number(res.headers.get('X-Total-Count')),
    };
    return carsCount;
};
