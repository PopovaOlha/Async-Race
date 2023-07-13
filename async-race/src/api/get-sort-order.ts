const getSortOrderAPI = (sort: any, order: any): string => {
    if (sort && order) {
        return `&_sort=${sort}&_order=${order}`;
    }
    return '';
};

export default getSortOrderAPI;
