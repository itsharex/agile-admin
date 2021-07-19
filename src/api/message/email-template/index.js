/*
 * @Description: 邮件模版
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-05-20 15:46:39
 */
import service from '@/utils/request'

/**
 * @description: 列表
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function listApi(params) {
  return service({
    url: '/backstage/email/template/list',
    method: 'get',
    params: params
  })
}

/**
 * @description: 信息
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function infoApi(params) {
  return service({
    url: `/backstage/email/template/info/${ params }`,
    method: 'get'
  })
}

/**
 * @description: 新增
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function addApi(params) {
  return service({
    url: '/backstage/email/template/create',
    method: 'post',
    data: params
  })
}

/**
 * @description: 编辑
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function editApi(params) {
  return service({
    url: '/backstage/email/template/update',
    method: 'post',
    data: params
  })
}

/**
 * @description: 删除
 * @param {*} params
 * @return {*}
 * @author: gumingchen
 */
export function delApi(params) {
  return service({
    url: '/backstage/email/template/delete',
    method: 'post',
    data: params
  })
}
