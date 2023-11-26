import request from '@/config/axios'

export interface DirectoryPermissionVO {
  id: number
  directoryId: number
  userId: number
  manage: boolean
  writable: boolean
  readable: boolean
}

// 查询目录权限分页
export const getDirectoryPermissionPage = async (params) => {
  return await request.get({ url: `/space/directory-permission/page`, params })
}

// 查询目录权限详情
export const getDirectoryPermission = async (id: number) => {
  return await request.get({ url: `/space/directory-permission/get?id=` + id })
}

// 新增目录权限
export const createDirectoryPermission = async (data: DirectoryPermissionVO) => {
  return await request.post({ url: `/space/directory-permission/create`, data })
}

// 修改目录权限
export const updateDirectoryPermission = async (data: DirectoryPermissionVO) => {
  return await request.put({ url: `/space/directory-permission/update`, data })
}

// 删除目录权限
export const deleteDirectoryPermission = async (id: number) => {
  return await request.delete({ url: `/space/directory-permission/delete?id=` + id })
}

// 导出目录权限 Excel
export const exportDirectoryPermission = async (params) => {
  return await request.download({ url: `/space/directory-permission/export-excel`, params })
}