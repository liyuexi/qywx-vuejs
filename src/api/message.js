import request from '../utils/request'

export function sendMsg(query) {
  return request({
    url: '/message/sendtext',
    method: 'post',
    data: query 
  })
}

export function sendImg(query) {
  return request({
    url: '/message/sendImage',
    method: 'post',
    data: query 
  })
}


