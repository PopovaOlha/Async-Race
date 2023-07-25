import { Createwinner, GetWinnersParams, Winners } from '../interfaces/types';
import { getCar } from './get-car';
import {getSortOrder} from '../api/get-sort-order';
import { WINNERS } from './variables';

export const getWinners = async ({ page, limit = 10, sort, order }:  GetWinnersParams)=> {
    const res = await fetch(`${WINNERS}?_page=${page}&_limit=${limit}&${getSortOrder(sort, order)}`);
    const items = await res.json();
    return {
        items: await Promise.all(items.map(async (winner: Createwinner) => ({ ...winner, car: await getCar(winner.id) }))),
        count: Number(res.headers.get('X-Total-Count')),
      };
    };
