import { GARAGE } from './variables';

export const getCarAPI = async (id: number) => {
    const response = await fetch(`${GARAGE}/${id}`);
    const data = await response.json();
    return data;
};

export default getCarAPI;
