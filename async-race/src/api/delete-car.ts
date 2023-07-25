import { GARAGE } from './variables';

export const deleteCar = async (id: number) =>
  (
    await fetch(`${GARAGE}/${id}`, {
      method: 'DELETE',
    })
  ).json();


