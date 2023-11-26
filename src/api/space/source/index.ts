import request from '@/config/axios'

export interface SourceVO {
  id: number
  path: string
  type: number
}

// 查询目录源分页
export const getSourcePage = async (params) => {
  return await request.get({ url: `/space/source/page`, params })
}

// 查询目录源详情
export const getSource = async (id: number) => {
  return await request.get({ url: `/space/source/get?id=` + id })
}

// 新增目录源
export const createSource = async (data: SourceVO) => {
  return await request.post({ url: `/space/source/create`, data })
}

// 修改目录源
export const updateSource = async (data: SourceVO) => {
  return await request.put({ url: `/space/source/update`, data })
}

// 删除目录源
export const deleteSource = async (id: number) => {
  return await request.delete({ url: `/space/source/delete?id=` + id })
}

// 导出目录源 Excel
export const exportSource = async (params) => {
  return await request.download({ url: `/space/source/export-excel`, params })
}