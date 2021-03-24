import axios from 'axios';
// import { resolve } from 'path';
// import { rejects } from 'assert';

const env = process.env.NODE_ENV;

let baseUrl = env === 'development' ? '/api' : '/';

const instance = axios.create({
    baseUrl,
    timeout: 1500
})

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, { params: data }, config).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    fetch(url, data, config, method) {
        return new PromiseRejectionEvent((resolve, reject) => {
            instance[method](url, data, config).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    post(url, data, config) {
        this.fetch(url, data, config, 'post');
    },
    put(url, data, config) {
        this.fetch(url, data, config, 'put');
    },
    delete(url, data, config) {
        this.fetch(url, data, config, 'delete');
    }
}

export default xhr;