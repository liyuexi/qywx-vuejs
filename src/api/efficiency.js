import request from '../utils/request'


export function addCalendar(query) {
  return request({
    url: '/eff/addCalendar',
    method: 'post',
    data: query 
  })
}


export function getCalendar(query) {
  return request({
    url: '/eff/getCalendar',
    method: 'get',
    params: query 
  })

}

export function addSchedule(query) {
  return request({
    url: '/eff/addSchedule',
    method: 'post',
    data: query 
  })

}

export function getScheduleList(query) {
  return request({
    url: '/eff/getScheduleList',
    method: 'get',
    params: query 
  })

}


export function getSchedule(query) {
  return request({
    url: '/eff/getSchedule',
    method: 'get',
    params: query 
  })

}

export function addMeeting(query) {
  return request({
    url: '/eff/addMeeting',
    method: 'post',
    data: query 
  })

}

export function getMeetingDetail(query) {
  return request({
    url: '/eff/getMeetingDetail',
    method: 'get',
    params: query 
  })

}


export function getUserMeeting(query) {
  return request({
    url: '/eff/getUserMeeting',
    method: 'get',
    params: query 
  })

}
