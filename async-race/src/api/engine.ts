import { ENGINE } from './variables';

const controlEngineAPI = async (id: number, status: any) =>
  (
    await fetch(`${ENGINE}?id=${id}&status=${status}`, {
      method: 'PATCH',
    })
  ).json();

export default controlEngineAPI;