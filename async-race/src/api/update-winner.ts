import { WINNERS } from './variables';

const updateWinnerAPI = async (body:any) =>
  (
    await fetch(`${WINNERS}/${body.id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default updateWinnerAPI;