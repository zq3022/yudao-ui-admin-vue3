import request from '@/config/axios'

export interface SongVO {
  id: number
  albumId: number
  name: string
  pst: number
  t: number
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  cf: string
  dt: number
  cd: string
  no: number
  ftype: number
  djId: number
  copyright: number
  sId: number
  mark: number
  originCoverType: number
  single: number
  mst: number
  cp: number
  mv: number
  rtype: number
  publishTime: Date
}

// 查询歌曲分页
export const getSongPage = async (params) => {
  return await request.get({ url: `/cf/song/page`, params })
}

// 查询歌曲详情
export const getSong = async (id: number) => {
  return await request.get({ url: `/cf/song/get?id=` + id })
}

// 新增歌曲
export const createSong = async (data: SongVO) => {
  return await request.post({ url: `/cf/song/create`, data })
}

// 修改歌曲
export const updateSong = async (data: SongVO) => {
  return await request.put({ url: `/cf/song/update`, data })
}

// 删除歌曲
export const deleteSong = async (id: number) => {
  return await request.delete({ url: `/cf/song/delete?id=` + id })
}

// 导出歌曲 Excel
export const exportSong = async (params) => {
  return await request.download({ url: `/cf/song/export-excel`, params })
}