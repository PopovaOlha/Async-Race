import { Cars } from '../interfaces/types';
import { GARAGE } from './variables';

export const getCars = async (page: number, limit = 7): Promise<Cars> => {
    const response = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}}`);
    return {
        items: await response.json(),
        count: Number(response.headers.get('X-Total-Count')),
    };
};
