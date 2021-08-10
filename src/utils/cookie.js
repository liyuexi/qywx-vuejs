import Cookies from 'js-cookie'

const UserDomain = ".xx.com"
const UserToken = "WeixinToken"

export function getUserToken() {
  return Cookies.get(UserToken,{ domain:WeixinDomain})
}

export function setUserToken(token) {
  return Cookies.set(UserToken, token,{ domain:WeixinDomain})
}

export function removeUserToken() {
  return Cookies.remove(UserToken,{ domain:WeixinDomain})
}
