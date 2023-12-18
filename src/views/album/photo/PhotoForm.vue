<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="目录编号" prop="directoryId">
        <el-input v-model="formData.directoryId" placeholder="请输入目录编号" />
      </el-form-item>
      <el-form-item label="文件类型" prop="detectedFileTypeName">
        <el-input v-model="formData.detectedFileTypeName" placeholder="请输入文件类型" />
      </el-form-item>
      <el-form-item label="MIME类型" prop="detectedMimeType">
        <el-select v-model="formData.detectedMimeType" placeholder="请选择MIME类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="文件后缀" prop="expectedFileNameExtension">
        <el-input v-model="formData.expectedFileNameExtension" placeholder="请输入文件后缀" />
      </el-form-item>
      <el-form-item label="图像描述" prop="imageDescription">
        <Editor v-model="formData.imageDescription" height="150px" />
      </el-form-item>
      <el-form-item label="生产商" prop="make">
        <el-input v-model="formData.make" placeholder="请输入生产商" />
      </el-form-item>
      <el-form-item label="型号" prop="model">
        <el-input v-model="formData.model" placeholder="请输入型号" />
      </el-form-item>
      <el-form-item label="作者" prop="artist">
        <el-input v-model="formData.artist" placeholder="请输入作者" />
      </el-form-item>
      <el-form-item label="水平方向分辨率" prop="xResolution">
        <el-input v-model="formData.xResolution" placeholder="请输入水平方向分辨率" />
      </el-form-item>
      <el-form-item label="垂直方向分辨率" prop="yResolution">
        <el-input v-model="formData.yResolution" placeholder="请输入垂直方向分辨率" />
      </el-form-item>
      <el-form-item label="软件" prop="software">
        <el-input v-model="formData.software" placeholder="请输入软件" />
      </el-form-item>
      <el-form-item label="白点" prop="whitePoint">
        <el-input v-model="formData.whitePoint" placeholder="请输入白点" />
      </el-form-item>
      <el-form-item label="主色度" prop="primaryChromaticities">
        <el-input v-model="formData.primaryChromaticities" placeholder="请输入主色度" />
      </el-form-item>
      <el-form-item label="YCbCr系数" prop="ycbcrCoefficients">
        <el-input v-model="formData.ycbcrCoefficients" placeholder="请输入YCbCr系数" />
      </el-form-item>
      <el-form-item label="YCbCr定位" prop="ycbcrPositioning">
        <el-input v-model="formData.ycbcrPositioning" placeholder="请输入YCbCr定位" />
      </el-form-item>
      <el-form-item label="版权" prop="copyright">
        <el-input v-model="formData.copyright" placeholder="请输入版权" />
      </el-form-item>
      <el-form-item label="曝光时间" prop="exposureTime">
        <el-date-picker
          v-model="formData.exposureTime"
          type="date"
          value-format="x"
          placeholder="选择曝光时间"
        />
      </el-form-item>
      <el-form-item label="光圈系数" prop="fnumber">
        <el-input v-model="formData.fnumber" placeholder="请输入光圈系数" />
      </el-form-item>
      <el-form-item label="曝光程序" prop="exposureProgram">
        <el-input v-model="formData.exposureProgram" placeholder="请输入曝光程序" />
      </el-form-item>
      <el-form-item label="闪光灯" prop="flash">
        <el-input v-model="formData.flash" placeholder="请输入闪光灯" />
      </el-form-item>
      <el-form-item label="镜头厂商" prop="lensMake">
        <el-input v-model="formData.lensMake" placeholder="请输入镜头厂商" />
      </el-form-item>
      <el-form-item label="镜头型号" prop="lensModel">
        <el-input v-model="formData.lensModel" placeholder="请输入镜头型号" />
      </el-form-item>
      <el-form-item label="厂商注释" prop="makernote">
        <el-input v-model="formData.makernote" placeholder="请输入厂商注释" />
      </el-form-item>
      <el-form-item label="用户注释" prop="userComment">
        <el-input v-model="formData.userComment" placeholder="请输入用户注释" />
      </el-form-item>
      <el-form-item label="文件名称" prop="fileName">
        <el-input v-model="formData.fileName" placeholder="请输入文件名称" />
      </el-form-item>
      <el-form-item label="文件大小字节数" prop="fileSize">
        <el-input v-model="formData.fileSize" placeholder="请输入文件大小字节数" />
      </el-form-item>
      <el-form-item label="图片宽度，像素" prop="imageWidth">
        <el-input v-model="formData.imageWidth" placeholder="请输入图片宽度，像素" />
      </el-form-item>
      <el-form-item label="图片高度，像素" prop="imageHeight">
        <el-input v-model="formData.imageHeight" placeholder="请输入图片高度，像素" />
      </el-form-item>
      <el-form-item label="文件修改时间" prop="fileModifiedDate">
        <el-date-picker
          v-model="formData.fileModifiedDate"
          type="date"
          value-format="x"
          placeholder="选择文件修改时间"
        />
      </el-form-item>
      <el-form-item label="文件来源" prop="fileSource">
        <el-input v-model="formData.fileSource" placeholder="请输入文件来源" />
      </el-form-item>
      <el-form-item label="压缩类型" prop="compressionType">
        <el-select v-model="formData.compressionType" placeholder="请选择压缩类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="数据精度" prop="dataPrecision">
        <el-input v-model="formData.dataPrecision" placeholder="请输入数据精度" />
      </el-form-item>
      <el-form-item label="压缩比" prop="compressedBitsPerPixel">
        <el-input v-model="formData.compressedBitsPerPixel" placeholder="请输入压缩比" />
      </el-form-item>
      <el-form-item label="分辨率单位" prop="resolutionUnits">
        <el-input v-model="formData.resolutionUnits" placeholder="请输入分辨率单位" />
      </el-form-item>
      <el-form-item label="方向" prop="orientation">
        <el-input v-model="formData.orientation" placeholder="请输入方向" />
      </el-form-item>
      <el-form-item label="曝光补偿" prop="exposureBiasValue">
        <el-input v-model="formData.exposureBiasValue" placeholder="请输入曝光补偿" />
      </el-form-item>
      <el-form-item label="曝光模式" prop="exposureMode">
        <el-input v-model="formData.exposureMode" placeholder="请输入曝光模式" />
      </el-form-item>
      <el-form-item label="色彩" prop="colorSpace">
        <el-input v-model="formData.colorSpace" placeholder="请输入色彩" />
      </el-form-item>
      <el-form-item label="饱和度" prop="saturation">
        <el-input v-model="formData.saturation" placeholder="请输入饱和度" />
      </el-form-item>
      <el-form-item label="亮度" prop="brightnessValue">
        <el-input v-model="formData.brightnessValue" placeholder="请输入亮度" />
      </el-form-item>
      <el-form-item label="白平衡" prop="whiteBalance">
        <el-input v-model="formData.whiteBalance" placeholder="请输入白平衡" />
      </el-form-item>
      <el-form-item label="白平衡模式" prop="whiteBalanceMode">
        <el-input v-model="formData.whiteBalanceMode" placeholder="请输入白平衡模式" />
      </el-form-item>
      <el-form-item label="光圈" prop="apertureValue">
        <el-input v-model="formData.apertureValue" placeholder="请输入光圈" />
      </el-form-item>
      <el-form-item label="最大光圈值" prop="maxApertureValue">
        <el-input v-model="formData.maxApertureValue" placeholder="请输入最大光圈值" />
      </el-form-item>
      <el-form-item label="感光度" prop="isoSpeedRatings">
        <el-input v-model="formData.isoSpeedRatings" placeholder="请输入感光度" />
      </el-form-item>
      <el-form-item label="对比度" prop="contrast">
        <el-input v-model="formData.contrast" placeholder="请输入对比度" />
      </el-form-item>
      <el-form-item label="锯齿" prop="sharpness">
        <el-input v-model="formData.sharpness" placeholder="请输入锯齿" />
      </el-form-item>
      <el-form-item label="变焦" prop="digitalZoomRatio">
        <el-input v-model="formData.digitalZoomRatio" placeholder="请输入变焦" />
      </el-form-item>
      <el-form-item label="快门" prop="shutterSpeedValue">
        <el-input v-model="formData.shutterSpeedValue" placeholder="请输入快门" />
      </el-form-item>
      <el-form-item label="测光模式" prop="meteringMode">
        <el-input v-model="formData.meteringMode" placeholder="请输入测光模式" />
      </el-form-item>
      <el-form-item label="焦距" prop="focalLength">
        <el-input v-model="formData.focalLength" placeholder="请输入焦距" />
      </el-form-item>
      <el-form-item label="拍摄距离范围" prop="subjectDistanceRange">
        <el-input v-model="formData.subjectDistanceRange" placeholder="请输入拍摄距离范围" />
      </el-form-item>
      <el-form-item label="场景捕捉类型" prop="sceneCaptureType">
        <el-select v-model="formData.sceneCaptureType" placeholder="请选择场景捕捉类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="拍摄时间" prop="datetimeOriginal">
        <el-input v-model="formData.datetimeOriginal" placeholder="请输入拍摄时间" />
      </el-form-item>
      <el-form-item label="数字化时间" prop="datetimeDigitized">
        <el-input v-model="formData.datetimeDigitized" placeholder="请输入数字化时间" />
      </el-form-item>
      <el-form-item label="场景类型" prop="sceneType">
        <el-select v-model="formData.sceneType" placeholder="请选择场景类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="感测方式" prop="sensingMethod">
        <el-input v-model="formData.sensingMethod" placeholder="请输入感测方式" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as PhotoApi from '@/api/album/photo'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  directoryId: undefined,
  detectedFileTypeName: undefined,
  detectedMimeType: undefined,
  expectedFileNameExtension: undefined,
  imageDescription: undefined,
  make: undefined,
  model: undefined,
  artist: undefined,
  xResolution: undefined,
  yResolution: undefined,
  software: undefined,
  whitePoint: undefined,
  primaryChromaticities: undefined,
  ycbcrCoefficients: undefined,
  ycbcrPositioning: undefined,
  copyright: undefined,
  exposureTime: undefined,
  fnumber: undefined,
  exposureProgram: undefined,
  flash: undefined,
  lensMake: undefined,
  lensModel: undefined,
  makernote: undefined,
  userComment: undefined,
  fileName: undefined,
  fileSize: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  fileModifiedDate: undefined,
  fileSource: undefined,
  compressionType: undefined,
  dataPrecision: undefined,
  compressedBitsPerPixel: undefined,
  resolutionUnits: undefined,
  orientation: undefined,
  exposureBiasValue: undefined,
  exposureMode: undefined,
  colorSpace: undefined,
  saturation: undefined,
  brightnessValue: undefined,
  whiteBalance: undefined,
  whiteBalanceMode: undefined,
  apertureValue: undefined,
  maxApertureValue: undefined,
  isoSpeedRatings: undefined,
  contrast: undefined,
  sharpness: undefined,
  digitalZoomRatio: undefined,
  shutterSpeedValue: undefined,
  meteringMode: undefined,
  focalLength: undefined,
  subjectDistanceRange: undefined,
  sceneCaptureType: undefined,
  datetimeOriginal: undefined,
  datetimeDigitized: undefined,
  sceneType: undefined,
  sensingMethod: undefined
})
const formRules = reactive({
  directoryId: [{ required: true, message: '目录编号不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await PhotoApi.getPhoto(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as PhotoApi.PhotoVO
    if (formType.value === 'create') {
      await PhotoApi.createPhoto(data)
      message.success(t('common.createSuccess'))
    } else {
      await PhotoApi.updatePhoto(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    directoryId: undefined,
    detectedFileTypeName: undefined,
    detectedMimeType: undefined,
    expectedFileNameExtension: undefined,
    imageDescription: undefined,
    make: undefined,
    model: undefined,
    artist: undefined,
    xResolution: undefined,
    yResolution: undefined,
    software: undefined,
    whitePoint: undefined,
    primaryChromaticities: undefined,
    ycbcrCoefficients: undefined,
    ycbcrPositioning: undefined,
    copyright: undefined,
    exposureTime: undefined,
    fnumber: undefined,
    exposureProgram: undefined,
    flash: undefined,
    lensMake: undefined,
    lensModel: undefined,
    makernote: undefined,
    userComment: undefined,
    fileName: undefined,
    fileSize: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    fileModifiedDate: undefined,
    fileSource: undefined,
    compressionType: undefined,
    dataPrecision: undefined,
    compressedBitsPerPixel: undefined,
    resolutionUnits: undefined,
    orientation: undefined,
    exposureBiasValue: undefined,
    exposureMode: undefined,
    colorSpace: undefined,
    saturation: undefined,
    brightnessValue: undefined,
    whiteBalance: undefined,
    whiteBalanceMode: undefined,
    apertureValue: undefined,
    maxApertureValue: undefined,
    isoSpeedRatings: undefined,
    contrast: undefined,
    sharpness: undefined,
    digitalZoomRatio: undefined,
    shutterSpeedValue: undefined,
    meteringMode: undefined,
    focalLength: undefined,
    subjectDistanceRange: undefined,
    sceneCaptureType: undefined,
    datetimeOriginal: undefined,
    datetimeDigitized: undefined,
    sceneType: undefined,
    sensingMethod: undefined
  }
  formRef.value?.resetFields()
}
</script>