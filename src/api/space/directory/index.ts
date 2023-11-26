import request from '@/config/axios'

export interface DirectoryVO {
  id: number
  sourceId: number
  lft: number
  rgt: number
  level: number
  name: string
}

// 查询目录分页
export const getDirectoryPage = async (params) => {
  return await request.get({ url: `/space/directory/page`, params })
}

// 查询目录详情
export const getDirectory = async (id: number) => {
  return await request.get({ url: `/space/directory/get?id=` + id })
}

// 新增目录
export const createDirectory = async (data: DirectoryVO) => {
  return await request.post({ url: `/space/directory/create`, data })
}

// 修改目录
export const updateDirectory = async (data: DirectoryVO) => {
  return await request.put({ url: `/space/directory/update`, data })
}

// 删除目录
export const deleteDirectory = async (id: number) => {
  return await request.delete({ url: `/space/directory/delete?id=` + id })
}

// 导出目录 Excel
export const exportDirectory = async (params) => {
  return await request.download({ url: `/space/directory/export-excel`, params })
}