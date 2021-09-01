import request from '../utils/request'

export function jsSign(query) {
    return request({
      url: '/h5/jsSign',
      method: 'get',
      params: query 
    })
}
  
export function jsAgentSign(query) {
  return request({
    url: '/h5/jsAgentSign',
    method: 'get',
    params: query 
  })
}



