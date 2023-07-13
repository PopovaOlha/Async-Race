import { WINNERS } from './variables';

const createWinnerAPI = async (body: any) =>
    (
        await fetch(WINNERS, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

export default createWinnerAPI;
