import getCar from './get-car';
import getSortOrder from './get-sort-order';
import { WINNERS, WINNERS_LIMIT } from './variables';

async function getWinnersAPI({ pageNumber, sort, order }) {
    const response: Response = await fetch(
        `${WINNERS}?_page=${pageNumber}&_limit=${WINNERS_LIMIT}${getSortOrder(sort, order)}`
    );
    const items = await response.json();
    const count: string | null = response.headers.get('X-Total-Count');

    if (!count) {
        throw new Error('X-Total-Count is null');
    }

    return {
        items: await Promise.all(
          items.map(async (winner: any) => ({ ...winner, car: await getCar(winner.id) }))
        ),
        count,
      };
    };
    
    export default getWinnersAPI;