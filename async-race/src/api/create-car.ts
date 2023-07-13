import { GARAGE } from './variables';

const createCarAPI = async (body: Body) =>
    (
        await fetch(GARAGE, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

export default createCarAPI;
