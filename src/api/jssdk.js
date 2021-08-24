import request from '../utils/request'

export function jsSign(query) {
    alert(query)
    return request({
      url: '/h5/jsSign',
      method: 'get',
      params: query 
    })
  }
  
  export function uploadMedia(query) {
    return request({
      url: '/WeixinAuth/uploadMedia',
      method: 'post',
      data: query 
    })
  }
  

  
