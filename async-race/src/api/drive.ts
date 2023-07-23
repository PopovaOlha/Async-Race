import { ENGINE } from './variables';

export const drive = async (id: number): Promise<{ success: boolean }> => {
    const response = await fetch(`${ENGINE}?id=${id}&status=drive`).catch();

    return response.status !== 200 ? { success: false } : { ...(await response.json()) };
  };