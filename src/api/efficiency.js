import request from '../utils/request'

export function aprrovalFlowInit(query) {
  return request({
    url: '/oa/aprrovalFlowInit',
    method: 'get',
    params: query 
  })
}



export function approvalFlowStatus(query) {
  return request({
    url: '/oa/approvalFlowStatus',
    method: 'get',
    params: query 
  })

}
