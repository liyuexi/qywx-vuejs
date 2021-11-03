import request from '../utils/request'


export function followUserList(query) {
    return request({
      url: '/extcontact/followUserList',
      method: 'get',
      params: query 
    })
  }

export function list(query) {
    return request({
      url: '/extcontact/list',
      method: 'get',
      params: query 
    })
  }

  
  export function detail(query) {
    return request({
      url: '/extcontact/detail',
      method: 'get',
      params: query 
    })
  }
  
  
  export function groupChatlist(query) {
    return request({
      url: '/extcontact/groupChatlist',
      method: 'get',
      params: query 
    })
  }
  
    
  export function groupChatDetail(query) {
    return request({
      url: '/extcontact/groupChatDetail',
      method: 'get',
      params: query 
    })
  }
  

  export function sendWelcomeMs(query) {
    return request({
      url: '/extcontact/sendWelcomeMs',
      method: 'post',
      data: query ,
    })
  }
  

  export function addMsgTemplatea(query) {
    return request({
      url: '/extcontact/addMsgTemplatea',
      method: 'post',
      data: query ,
    })
  }
  