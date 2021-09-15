import request from '../utils/request'


//
export function oauthUrl(query) {
  return request({
    url: '/h5/oauthUrl',
    method: 'get',
    params: query 
  })
}

export function oauthUser(query) {
  return request({
    url: '/h5/oauthUser',
    method: 'get',
    params: query 
  })
}

export function oauthAdminUrl(query) {
  return request({
    url: '/admin/oauthUrl',
    method: 'get',
    params: query 
  })
}

export function oauthAdminUser(query) {
  return request({
    url: '/admin/oauthUser',
    method: 'get',
    params: query 
  })
}


export function schoolOauthUrl(query) {
  return request({
    url: '/h5/oauthUrl',
    method: 'get',
    params: query 
  })
}

export function schoolOauthUser(query) {
  return request({
    url: '/h5/oauthUser',
    method: 'get',
    params: query 
  })
}



export function deptList(query) {
  return request({
    url: '/contact/departmentList',
    method: 'get',
    params: query 
  })
}


export function deptUserList(query) {
  return request({
    url: '/contact/deptUserList',
    method: 'get',
    params: query 
  })
}

export function deptUserDetailList(query) {
  return request({
    url: '/contact/deptUserDetailList',
    method: 'get',
    params: query 
  })
}


export function deptUserDetail(query) {
  return request({
    url: '/contact/useDetail',
    method: 'get',
    params: query 
  })
}









