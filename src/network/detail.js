import {newRequest} from "./request";

export  function getDetail(iid) {
    return newRequest({
        url: '/detail',
        params: {
            iid
        }
    })
}


export  class GoodsInfo {
    constructor(columns,itemInfo,services) {
        this.columns = columns
        this.title = itemInfo.title
        this.lowNowPrice = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.services = services
    }

}