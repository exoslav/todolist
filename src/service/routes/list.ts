import { request, RequestOptions } from 'service/gateway';

const getTodoListOpts: RequestOptions = {
    path: '/list',
    method: 'get'
};

export const getTodoList = () => {
    return request(getTodoListOpts);
}
