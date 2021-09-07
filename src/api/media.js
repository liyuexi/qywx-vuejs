import request from '../utils/request'


  export function uploadMedia(query) {
 
    return request({
      url: '/media/upload',
      method: 'post',
      data: query ,
      headers:{'Content-Type':'multipart/form-data'},
    })
  }
  


  export function uploadImg(query) {
    return request({
      url: '/media/uploadImg',
      method: 'post',
      data: query ,
      headers:{'Content-Type':'multipart/form-data'},
    })
  }
  
  
  export function downloadMedia(query) {
    return request({
      url: '/media/download',
      method: 'get',
      params: query 
    })
  }
    