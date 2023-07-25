import { ENGINE } from './variables';

export const drive = async (id: number) => {
    const res = await fetch(`${ENGINE}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
    return res.status === 200 ? { ...(await res.json()) } : { success: false };
  };
