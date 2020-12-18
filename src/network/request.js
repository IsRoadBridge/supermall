import Axios from "axios";

 export function request(config) {
     const instance = Axios.create({
         baseURL: 'http://123.207.32.32:8000',
         timeout: 5000
     })
    //axios请求拦截器，用于在拦截请求，在请求上加token之类的操作可以在这做
/*    instance.interceptors.request.use(config =>{
        console.log(config);
        return config
    },err =>{
        return Promise.reject(err)
    })*/
    //axios响应拦截器，用于返回请求错误信息
    instance.interceptors.response.use(res =>{
        return res.data
    },err =>{
        return Promise.reject(error.response.status)
    })

    return instance(config)
}

 export  function newRequest(config) {
    const instance = Axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })
    //axios请求拦截器，用于在拦截请求，在请求上加token之类的操作可以在这做
    /*    instance.interceptors.request.use(config =>{
            console.log(config);
            return config
        },err =>{
            return Promise.reject(err)
        })*/
    //axios响应拦截器，用于返回请求错误信息
    instance.interceptors.response.use(res =>{
        return res.data
    },err =>{
        return Promise.reject(error.response.status)
    })

    return instance(config)
}
