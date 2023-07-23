import { Createwinner, Winners } from '../interfaces/types';
import { getCar } from './get-car';
import { getSortOrder } from './get-sort-order';
import { WINNERS } from './variables';

export const getWinners = async (page: number, limit: 10, sort: string, order: string): Promise<Winners> => {
    const response = await fetch(`${WINNERS}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
    const items = await response.json();
    return {
        items: await Promise.all(
            items.map(async (winner: Createwinner) => ({ ...winner, car: await getCar(winner.id) }))
        ),
        count: Number(response.headers.get('X-Total-Count')),
    };
};
