//封装一个js来处理home的接口
import request from "./request";
export  function getHome() {
    return request({
        url: '/home/multidata'
    })
}