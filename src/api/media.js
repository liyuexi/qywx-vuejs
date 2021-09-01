export function uploadMedia(query) {
    return request({
      url: '/media/upload',
      method: 'post',
      data: query 
    })
  }
  

  export function uploadMedia(query) {
    return request({
      url: '/media/upload-img',
      method: 'post',
      data: query 
    })
  }
  
  
  export function downloadMedia(query) {
    return request({
      url: '/media/download',
      method: 'post',
      data: query 
    })
  }
    