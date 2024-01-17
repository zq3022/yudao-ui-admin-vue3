import request from '@/config/axios'

export interface AlbumVO {
  id: number
  name: string
  picUrl: string
  pic: number
  alia: string
  publishTime: Date
  company: string
  description: string
  commentCount: number
  likedCount: number
  shareCount: number
  songCount: number
}

// 查询专辑分页
export const getAlbumPage = async (params) => {
  return await request.get({ url: `/cf/album/page`, params })
}

// 查询专辑详情
export const getAlbum = async (id: number) => {
  return await request.get({ url: `/cf/album/get?id=` + id })
}

// 新增专辑
export const createAlbum = async (data: AlbumVO) => {
  return await request.post({ url: `/cf/album/create`, data })
}

// 修改专辑
export const updateAlbum = async (data: AlbumVO) => {
  return await request.put({ url: `/cf/album/update`, data })
}

// 删除专辑
export const deleteAlbum = async (id: number) => {
  return await request.delete({ url: `/cf/album/delete?id=` + id })
}

// 导出专辑 Excel
export const exportAlbum = async (params) => {
  return await request.download({ url: `/cf/album/export-excel`, params })
}