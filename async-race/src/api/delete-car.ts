import { GARAGE } from './variables';

const deletetCarAPI = async (id: number): Promise<void> =>
    (await fetch(`${GARAGE}/${id}`, { method: 'DELETE' })).json();

export default deletetCarAPI;
