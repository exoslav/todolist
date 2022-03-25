import { replaceIdsInPath } from 'service/utils';

const HOST = process.env.SERVICE_HOST || '';
const PROTOCOL = process.env.SERVICE_PROTOCOL || '';
const API_NAME = process.env.SERVICE_API_NAME || '';

const apiBaseUrl = PROTOCOL + '://' + HOST + '/' + API_NAME;

export interface RequestOptions {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete';
}

export const request = (opts: RequestOptions, params?: any): Promise<any> => {
    let path = opts.path;

    if (!path || !opts.method) {
        return Promise.reject('Path not defined');
    }

    if (path && params?.ids) {
        path = replaceIdsInPath(path, params.ids);
    }

    const url = apiBaseUrl + path;

    return fetch(url);
}