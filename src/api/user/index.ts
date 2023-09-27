import api from '../index'

export function _hello() {
  return api({
    method: 'GET',
    url: '/user/hello',
  })
}