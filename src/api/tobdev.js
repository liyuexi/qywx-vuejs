import request from '../utils/request'

export function verify(query) {
  return request({
    url: '/tobdev/verify',
    method: 'get',
    params: query 
  })
}

export function get(query) {
  return request({
    url: '/tobdev/get',
    method: 'get',
    params: query 
  })
}

export function set(query) {
  return request({
    url: '/tobdev/set',
    method: 'post',
    data: query 
  })
}


export function verifyFile(query) {
  return request({
    url: '/tobdev/verifyFile',
    method: 'post',
    data: query 
  })
}


