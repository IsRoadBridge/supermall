//封装一个js来处理home的接口
import {request,newRequest} from "./request";
export  function getHome() {
    return request({
        url: '/home/multidata'
    })
}

export  function getHomeGoods(type,page) {
    return newRequest({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}