import { GARAGE } from './variables';

const updateCarAPI = async (id: number, body: any) =>
    (
        await fetch(`${GARAGE}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

export default updateCarAPI;
