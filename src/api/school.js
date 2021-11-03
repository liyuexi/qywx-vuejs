
import request from '../utils/request'


export function oauthUrl(query) {
    return request({
      url: '/school/oauthUrl',
      method: 'get',
      params: query 
    })
  }
  
  export function oauthUser(query) {
    return request({
      url: '/school/oauthUser',
      method: 'get',
      params: query 
    })
  }
  
  
export function deptList(query) {
    return request({
      url: '/school/departmentList',
      method: 'get',
      params: query 
    })
  }
  
  
  export function deptUserList(query) {
    return request({
      url: '/school/deptUserList',
      method: 'get',
      params: query 
    })
  }

  export function deptUserDetail(query) {
    return request({
      url: '/school/useDetail',
      method: 'get',
      params: query 
    })
  }
  
  export function subscribeQr(query) {
    return request({
      url: '/school/subscribeQr',
      method: 'get',
      params: query 
    })
  }

  
  export function sendMsg(query) {
    return request({
      url: '/school/sendText',
      method: 'post',
      data: query 
    })
  }
  
  export function sendImg(query) {
    return request({
      url: '/school/sendImage',
      method: 'post',
      data: query 
    })
  }
  
  
  