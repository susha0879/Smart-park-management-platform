import request from './request'

// ·~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~访客相关的接口~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 获取访客的接口
export const deleteInstitutional = (params) => {
  return request({
    url: '/deleteInstitutional',
    method: 'post',
    data: params,
  })
}
