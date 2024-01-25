import request from '@/config/axios'

export interface UserVO {
  id: number
  userId: number
  userType: number
  nickname: string
  avatarUrl: string
  backgroundUrl: string
  signature: string
  userName: string
  accountType: number
  shortUserName: string
  birthday: Date
  gender: number
  accountStatus: number
  province: number
  city: number
  authStatus: number
  description: string
  defaultAvatar: number
  djStatus: number
  locationStatus: number
  vipType: number
  followed: number
  mutual: number
  lastLoginTime: Date
  lastLoginIp: string
  viptypeVersion: number
}

// 查询cf用户分页
export const getUserPage = async (params) => {
  return await request.get({ url: `/cf/user/page`, params })
}

// 查询cf用户详情
export const getUser = async (id: number) => {
  return await request.get({ url: `/cf/user/get?id=` + id })
}

// 新增cf用户
export const createUser = async (data: UserVO) => {
  return await request.post({ url: `/cf/user/create`, data })
}

// 修改cf用户
export const updateUser = async (data: UserVO) => {
  return await request.put({ url: `/cf/user/update`, data })
}

// 删除cf用户
export const deleteUser = async (id: number) => {
  return await request.delete({ url: `/cf/user/delete?id=` + id })
}

// 导出cf用户 Excel
export const exportUser = async (params) => {
  return await request.download({ url: `/cf/user/export-excel`, params })
}