import request from '@/config/axios'

export interface ArtistVO {
  id: number
  name: string
  briefDesc: string
  musicSize: number
  albumSize: number
  mvSize: number
  picId: number
  picUrl: string
}

// 查询艺术家分页
export const getArtistPage = async (params) => {
  return await request.get({ url: `/cf/artist/page`, params })
}

// 查询艺术家详情
export const getArtist = async (id: number) => {
  return await request.get({ url: `/cf/artist/get?id=` + id })
}

// 新增艺术家
export const createArtist = async (data: ArtistVO) => {
  return await request.post({ url: `/cf/artist/create`, data })
}

// 修改艺术家
export const updateArtist = async (data: ArtistVO) => {
  return await request.put({ url: `/cf/artist/update`, data })
}

// 删除艺术家
export const deleteArtist = async (id: number) => {
  return await request.delete({ url: `/cf/artist/delete?id=` + id })
}

// 导出艺术家 Excel
export const exportArtist = async (params) => {
  return await request.download({ url: `/cf/artist/export-excel`, params })
}