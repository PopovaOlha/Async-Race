export const getSortOrder = (sort: string | null, order: string | null) =>
    sort && order 
    ? `&_sort=${sort}&_order=${order}` 
    : '';
