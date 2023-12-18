import request from '@/config/axios'

export interface PhotoVO {
  id: number
  directoryId: number
  detectedFileTypeName: string
  detectedMimeType: string
  expectedFileNameExtension: string
  imageDescription: string
  make: string
  model: string
  artist: string
  xResolution: string
  yResolution: string
  software: string
  whitePoint: string
  primaryChromaticities: string
  ycbcrCoefficients: string
  ycbcrPositioning: string
  copyright: string
  exposureTime: string
  fnumber: string
  exposureProgram: string
  flash: string
  lensMake: string
  lensModel: string
  makernote: string
  userComment: string
  fileName: string
  fileSize: string
  imageWidth: string
  imageHeight: string
  fileModifiedDate: string
  fileSource: string
  compressionType: string
  dataPrecision: string
  compressedBitsPerPixel: string
  resolutionUnits: string
  orientation: string
  exposureBiasValue: string
  exposureMode: string
  colorSpace: string
  saturation: string
  brightnessValue: string
  whiteBalance: string
  whiteBalanceMode: string
  apertureValue: string
  maxApertureValue: string
  isoSpeedRatings: string
  contrast: string
  sharpness: string
  digitalZoomRatio: string
  shutterSpeedValue: string
  meteringMode: string
  focalLength: string
  subjectDistanceRange: string
  sceneCaptureType: string
  datetimeOriginal: string
  datetimeDigitized: string
  sceneType: string
  sensingMethod: string
}

// 查询相册照片分页
export const getPhotoPage = async (params) => {
  return await request.get({ url: `/album/photo/page`, params })
}

// 查询相册照片详情
export const getPhoto = async (id: number) => {
  return await request.get({ url: `/album/photo/get?id=` + id })
}

// 新增相册照片
export const createPhoto = async (data: PhotoVO) => {
  return await request.post({ url: `/album/photo/create`, data })
}

// 修改相册照片
export const updatePhoto = async (data: PhotoVO) => {
  return await request.put({ url: `/album/photo/update`, data })
}

// 删除相册照片
export const deletePhoto = async (id: number) => {
  return await request.delete({ url: `/album/photo/delete?id=` + id })
}

// 导出相册照片 Excel
export const exportPhoto = async (params) => {
  return await request.download({ url: `/album/photo/export-excel`, params })
}