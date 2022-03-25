export const replaceIdsInPath = (path: string, ids: {[key: string]: string | number}) => {
    return path.split('/').map(i => i.startsWith(':') ? ids[i.substring(1)] : i).join('/');
}