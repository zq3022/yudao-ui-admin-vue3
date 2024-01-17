import request from '@/config/axios'

export interface PlaylistVO {
  id: number
  userId: number
  name: string
  coverImgId: number
  coverImgUrl: string
  adType: number
  status: number
  opRecommend: number
  highQuality: number
  newImported: number
  trackCount: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: number
  playCount: string
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: number
  description: string
  tags: string
  backgroundCoverId: number
  titleImage: number
  subscribed: number
  shareCount: number
  commentCount: number
  specialType: number
}

// 查询歌单分页
export const getPlaylistPage = async (params) => {
  return await request.get({ url: `/cf/playlist/page`, params })
}

// 查询歌单详情
export const getPlaylist = async (id: number) => {
  return await request.get({ url: `/cf/playlist/get?id=` + id })
}

// 新增歌单
export const createPlaylist = async (data: PlaylistVO) => {
  return await request.post({ url: `/cf/playlist/create`, data })
}

// 修改歌单
export const updatePlaylist = async (data: PlaylistVO) => {
  return await request.put({ url: `/cf/playlist/update`, data })
}

// 删除歌单
export const deletePlaylist = async (id: number) => {
  return await request.delete({ url: `/cf/playlist/delete?id=` + id })
}

// 导出歌单 Excel
export const exportPlaylist = async (params) => {
  return await request.download({ url: `/cf/playlist/export-excel`, params })
}