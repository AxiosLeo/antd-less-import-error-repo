import { request } from 'umi';

/**
 * 获取当前的用户
 * GET /api/user/curr
 * @param options
 * @returns
 */
export const currentUser = async (options?: Record<string, any>) => {
  return request<{
    data: API.CurrentUser;
  }>('/api/user/curr', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 退出登录接口
 * POST /api/user/logout
 * @param options
 * @returns
 */
export const logout = async (options?: Record<string, any>) => {
  return request<Record<string, any>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/**
 * 登录接口
 * POST /api/user/login
 * @param body
 * @param options
 * @returns
 */
export const login = async (body: API.LoginParams, options?: Record<string, any>) => {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * 此处后端没有提供注释
 * GET /api/notices
 * @param options
 * @returns
 */
export const getNotices = async (options?: Record<string, any>) => {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}
