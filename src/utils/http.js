
import axios from 'axios'

// 创建axios实例
//创建了一个http实例，并配置了基础URL和请求超时时间。

const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
//
http.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default http
