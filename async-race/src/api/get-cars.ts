import { GARAGE, GARAGE_LIMIT } from './variables';

const getCarsAPI: any = async (pageNumber: number) => {
    const response: Response = await fetch(`${GARAGE}?_page=${pageNumber}&_limit=${GARAGE_LIMIT}`);
    const count: string | null = response.headers.get('X-Total-Count');

    if (!count) {
        throw new Error('X-Total-Count is null');
    }

    return {
        items: await response.json(),
        count,
    };
};

export default getCarsAPI;
