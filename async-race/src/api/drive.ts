import { ENGINE } from './variables';

const driveAPI = async (id: number) => {
  const res: Response = await fetch(`${ENGINE}?id=${id}&status=drive`, {
    method: 'PATCH',
  }).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

export default driveAPI;