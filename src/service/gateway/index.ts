const HOST = process.env.SERVICE_HOST || '';
const PROTOCOL = process.env.SERVICE_PROTOCOL || '';
const API_NAME = process.env.SERVICE_API_NAME || '';

const apiBaseUrl = PROTOCOL + '://' + HOST + '/' + API_NAME;

export interface RequestOptions {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete';
}

export const request = (opts: RequestOptions) => {
    if (!opts.path || !opts.method) {
        return Promise.reject('Path not defined');
    }

    const url = apiBaseUrl + opts.path;

    const fetchOpts = {
        method: opts.method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, fetchOpts)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }

            return Promise.reject('Error fetching data.');
        })
}