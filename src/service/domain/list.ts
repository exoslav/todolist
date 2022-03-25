import { request, RequestOptions } from 'service/gateway';

const getTodoListOpts: RequestOptions = {
    path: '/list',
    method: 'get'
};

const getTodoDetailOpts: RequestOptions = {
    path: '/list/:itemId',
    method: 'get'
};

export const getTodoList = () => {
    return request(getTodoListOpts);
}

export const getTodoDetail = (itemId: string) => {
    const params = { ids: { itemId }};
    return request(getTodoDetailOpts, params);
}
