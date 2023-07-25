import { CarOBJ, Update } from '../interfaces/types';
import { GARAGE } from './variables';

export const updateCar = async (id: number, body:Update) =>
  (
    await fetch(`${GARAGE}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();