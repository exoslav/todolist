import { request, RequestOptions } from 'service/gateway';

const getCategoriesOpts: RequestOptions = {
    path: '/categories',
    method: 'get'
};

export const getCategories = () => {
    return request(getCategoriesOpts);
}
