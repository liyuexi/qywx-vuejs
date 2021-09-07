import request from '../utils/request'

export function getAgent(query) {
  return request({
    url: '/agent/get',
    method: 'get',
    params: query 
  })
}

export function setAgent(query) {
  return request({
    url: '/agent/set',
    method: 'post',
    data: query 
  })
}


