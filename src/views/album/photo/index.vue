<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="目录编号" prop="directoryId">
        <el-input
          v-model="queryParams.directoryId"
          placeholder="请输入目录编号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="文件类型" prop="detectedFileTypeName">
        <el-input
          v-model="queryParams.detectedFileTypeName"
          placeholder="请输入文件类型"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="MIME类型" prop="detectedMimeType">
        <el-select
          v-model="queryParams.detectedMimeType"
          placeholder="请选择MIME类型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="文件后缀" prop="expectedFileNameExtension">
        <el-input
          v-model="queryParams.expectedFileNameExtension"
          placeholder="请输入文件后缀"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="生产商" prop="make">
        <el-input
          v-model="queryParams.make"
          placeholder="请输入生产商"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="型号" prop="model">
        <el-input
          v-model="queryParams.model"
          placeholder="请输入型号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="作者" prop="artist">
        <el-input
          v-model="queryParams.artist"
          placeholder="请输入作者"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="水平方向分辨率" prop="xResolution">
        <el-input
          v-model="queryParams.xResolution"
          placeholder="请输入水平方向分辨率"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="垂直方向分辨率" prop="yResolution">
        <el-input
          v-model="queryParams.yResolution"
          placeholder="请输入垂直方向分辨率"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="软件" prop="software">
        <el-input
          v-model="queryParams.software"
          placeholder="请输入软件"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="白点" prop="whitePoint">
        <el-input
          v-model="queryParams.whitePoint"
          placeholder="请输入白点"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="主色度" prop="primaryChromaticities">
        <el-input
          v-model="queryParams.primaryChromaticities"
          placeholder="请输入主色度"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="YCbCr系数" prop="ycbcrCoefficients">
        <el-input
          v-model="queryParams.ycbcrCoefficients"
          placeholder="请输入YCbCr系数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="YCbCr定位" prop="ycbcrPositioning">
        <el-input
          v-model="queryParams.ycbcrPositioning"
          placeholder="请输入YCbCr定位"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="版权" prop="copyright">
        <el-input
          v-model="queryParams.copyright"
          placeholder="请输入版权"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曝光时间" prop="exposureTime">
        <el-date-picker
          v-model="queryParams.exposureTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="光圈系数" prop="fnumber">
        <el-input
          v-model="queryParams.fnumber"
          placeholder="请输入光圈系数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曝光程序" prop="exposureProgram">
        <el-input
          v-model="queryParams.exposureProgram"
          placeholder="请输入曝光程序"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="闪光灯" prop="flash">
        <el-input
          v-model="queryParams.flash"
          placeholder="请输入闪光灯"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="镜头厂商" prop="lensMake">
        <el-input
          v-model="queryParams.lensMake"
          placeholder="请输入镜头厂商"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="镜头型号" prop="lensModel">
        <el-input
          v-model="queryParams.lensModel"
          placeholder="请输入镜头型号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="厂商注释" prop="makernote">
        <el-input
          v-model="queryParams.makernote"
          placeholder="请输入厂商注释"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="用户注释" prop="userComment">
        <el-input
          v-model="queryParams.userComment"
          placeholder="请输入用户注释"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker
          v-model="queryParams.createTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="文件名称" prop="fileName">
        <el-input
          v-model="queryParams.fileName"
          placeholder="请输入文件名称"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="文件大小字节数" prop="fileSize">
        <el-input
          v-model="queryParams.fileSize"
          placeholder="请输入文件大小字节数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="图片宽度，像素" prop="imageWidth">
        <el-input
          v-model="queryParams.imageWidth"
          placeholder="请输入图片宽度，像素"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="图片高度，像素" prop="imageHeight">
        <el-input
          v-model="queryParams.imageHeight"
          placeholder="请输入图片高度，像素"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="文件修改时间" prop="fileModifiedDate">
        <el-date-picker
          v-model="queryParams.fileModifiedDate"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="文件来源" prop="fileSource">
        <el-input
          v-model="queryParams.fileSource"
          placeholder="请输入文件来源"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="压缩类型" prop="compressionType">
        <el-select
          v-model="queryParams.compressionType"
          placeholder="请选择压缩类型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="数据精度" prop="dataPrecision">
        <el-input
          v-model="queryParams.dataPrecision"
          placeholder="请输入数据精度"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="压缩比" prop="compressedBitsPerPixel">
        <el-input
          v-model="queryParams.compressedBitsPerPixel"
          placeholder="请输入压缩比"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="分辨率单位" prop="resolutionUnits">
        <el-input
          v-model="queryParams.resolutionUnits"
          placeholder="请输入分辨率单位"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="方向" prop="orientation">
        <el-input
          v-model="queryParams.orientation"
          placeholder="请输入方向"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曝光补偿" prop="exposureBiasValue">
        <el-input
          v-model="queryParams.exposureBiasValue"
          placeholder="请输入曝光补偿"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曝光模式" prop="exposureMode">
        <el-input
          v-model="queryParams.exposureMode"
          placeholder="请输入曝光模式"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="色彩" prop="colorSpace">
        <el-input
          v-model="queryParams.colorSpace"
          placeholder="请输入色彩"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="饱和度" prop="saturation">
        <el-input
          v-model="queryParams.saturation"
          placeholder="请输入饱和度"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="亮度" prop="brightnessValue">
        <el-input
          v-model="queryParams.brightnessValue"
          placeholder="请输入亮度"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="白平衡" prop="whiteBalance">
        <el-input
          v-model="queryParams.whiteBalance"
          placeholder="请输入白平衡"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="白平衡模式" prop="whiteBalanceMode">
        <el-input
          v-model="queryParams.whiteBalanceMode"
          placeholder="请输入白平衡模式"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="光圈" prop="apertureValue">
        <el-input
          v-model="queryParams.apertureValue"
          placeholder="请输入光圈"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="最大光圈值" prop="maxApertureValue">
        <el-input
          v-model="queryParams.maxApertureValue"
          placeholder="请输入最大光圈值"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="感光度" prop="isoSpeedRatings">
        <el-input
          v-model="queryParams.isoSpeedRatings"
          placeholder="请输入感光度"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="对比度" prop="contrast">
        <el-input
          v-model="queryParams.contrast"
          placeholder="请输入对比度"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="锯齿" prop="sharpness">
        <el-input
          v-model="queryParams.sharpness"
          placeholder="请输入锯齿"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="变焦" prop="digitalZoomRatio">
        <el-input
          v-model="queryParams.digitalZoomRatio"
          placeholder="请输入变焦"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="快门" prop="shutterSpeedValue">
        <el-input
          v-model="queryParams.shutterSpeedValue"
          placeholder="请输入快门"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="测光模式" prop="meteringMode">
        <el-input
          v-model="queryParams.meteringMode"
          placeholder="请输入测光模式"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="焦距" prop="focalLength">
        <el-input
          v-model="queryParams.focalLength"
          placeholder="请输入焦距"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="拍摄距离范围" prop="subjectDistanceRange">
        <el-input
          v-model="queryParams.subjectDistanceRange"
          placeholder="请输入拍摄距离范围"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="场景捕捉类型" prop="sceneCaptureType">
        <el-select
          v-model="queryParams.sceneCaptureType"
          placeholder="请选择场景捕捉类型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="拍摄时间" prop="datetimeOriginal">
        <el-input
          v-model="queryParams.datetimeOriginal"
          placeholder="请输入拍摄时间"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="数字化时间" prop="datetimeDigitized">
        <el-input
          v-model="queryParams.datetimeDigitized"
          placeholder="请输入数字化时间"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="场景类型" prop="sceneType">
        <el-select
          v-model="queryParams.sceneType"
          placeholder="请选择场景类型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="感测方式" prop="sensingMethod">
        <el-input
          v-model="queryParams.sensingMethod"
          placeholder="请输入感测方式"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['album:photo:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['album:photo:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="图片编号" align="center" prop="id" />
      <el-table-column label="目录编号" align="center" prop="directoryId" />
      <el-table-column label="文件类型" align="center" prop="detectedFileTypeName" />
      <el-table-column label="MIME类型" align="center" prop="detectedMimeType" />
      <el-table-column label="文件后缀" align="center" prop="expectedFileNameExtension" />
      <el-table-column label="图像描述" align="center" prop="imageDescription" />
      <el-table-column label="生产商" align="center" prop="make" />
      <el-table-column label="型号" align="center" prop="model" />
      <el-table-column label="作者" align="center" prop="artist" />
      <el-table-column label="水平方向分辨率" align="center" prop="xResolution" />
      <el-table-column label="垂直方向分辨率" align="center" prop="yResolution" />
      <el-table-column label="软件" align="center" prop="software" />
      <el-table-column label="白点" align="center" prop="whitePoint" />
      <el-table-column label="主色度" align="center" prop="primaryChromaticities" />
      <el-table-column label="YCbCr系数" align="center" prop="ycbcrCoefficients" />
      <el-table-column label="YCbCr定位" align="center" prop="ycbcrPositioning" />
      <el-table-column label="版权" align="center" prop="copyright" />
      <el-table-column label="曝光时间" align="center" prop="exposureTime" />
      <el-table-column label="光圈系数" align="center" prop="fnumber" />
      <el-table-column label="曝光程序" align="center" prop="exposureProgram" />
      <el-table-column label="闪光灯" align="center" prop="flash" />
      <el-table-column label="镜头厂商" align="center" prop="lensMake" />
      <el-table-column label="镜头型号" align="center" prop="lensModel" />
      <el-table-column label="厂商注释" align="center" prop="makernote" />
      <el-table-column label="用户注释" align="center" prop="userComment" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="文件名称" align="center" prop="fileName" />
      <el-table-column label="文件大小字节数" align="center" prop="fileSize" />
      <el-table-column label="图片宽度，像素" align="center" prop="imageWidth" />
      <el-table-column label="图片高度，像素" align="center" prop="imageHeight" />
      <el-table-column label="文件修改时间" align="center" prop="fileModifiedDate" />
      <el-table-column label="文件来源" align="center" prop="fileSource" />
      <el-table-column label="压缩类型" align="center" prop="compressionType" />
      <el-table-column label="数据精度" align="center" prop="dataPrecision" />
      <el-table-column label="压缩比" align="center" prop="compressedBitsPerPixel" />
      <el-table-column label="分辨率单位" align="center" prop="resolutionUnits" />
      <el-table-column label="方向" align="center" prop="orientation" />
      <el-table-column label="曝光补偿" align="center" prop="exposureBiasValue" />
      <el-table-column label="曝光模式" align="center" prop="exposureMode" />
      <el-table-column label="色彩" align="center" prop="colorSpace" />
      <el-table-column label="饱和度" align="center" prop="saturation" />
      <el-table-column label="亮度" align="center" prop="brightnessValue" />
      <el-table-column label="白平衡" align="center" prop="whiteBalance" />
      <el-table-column label="白平衡模式" align="center" prop="whiteBalanceMode" />
      <el-table-column label="光圈" align="center" prop="apertureValue" />
      <el-table-column label="最大光圈值" align="center" prop="maxApertureValue" />
      <el-table-column label="感光度" align="center" prop="isoSpeedRatings" />
      <el-table-column label="对比度" align="center" prop="contrast" />
      <el-table-column label="锯齿" align="center" prop="sharpness" />
      <el-table-column label="变焦" align="center" prop="digitalZoomRatio" />
      <el-table-column label="快门" align="center" prop="shutterSpeedValue" />
      <el-table-column label="测光模式" align="center" prop="meteringMode" />
      <el-table-column label="焦距" align="center" prop="focalLength" />
      <el-table-column label="拍摄距离范围" align="center" prop="subjectDistanceRange" />
      <el-table-column label="场景捕捉类型" align="center" prop="sceneCaptureType" />
      <el-table-column label="拍摄时间" align="center" prop="datetimeOriginal" />
      <el-table-column label="数字化时间" align="center" prop="datetimeDigitized" />
      <el-table-column label="场景类型" align="center" prop="sceneType" />
      <el-table-column label="感测方式" align="center" prop="sensingMethod" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['album:photo:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['album:photo:delete']"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <PhotoForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import * as PhotoApi from '@/api/album/photo'
import PhotoForm from './PhotoForm.vue'

defineOptions({ name: 'Photo' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  directoryId: null,
  detectedFileTypeName: null,
  detectedMimeType: null,
  expectedFileNameExtension: null,
  imageDescription: null,
  make: null,
  model: null,
  artist: null,
  xResolution: null,
  yResolution: null,
  software: null,
  whitePoint: null,
  primaryChromaticities: null,
  ycbcrCoefficients: null,
  ycbcrPositioning: null,
  copyright: null,
  exposureTime: [],
  fnumber: null,
  exposureProgram: null,
  flash: null,
  lensMake: null,
  lensModel: null,
  makernote: null,
  userComment: null,
  createTime: [],
  fileName: null,
  fileSize: null,
  imageWidth: null,
  imageHeight: null,
  fileModifiedDate: [],
  fileSource: null,
  compressionType: null,
  dataPrecision: null,
  compressedBitsPerPixel: null,
  resolutionUnits: null,
  orientation: null,
  exposureBiasValue: null,
  exposureMode: null,
  colorSpace: null,
  saturation: null,
  brightnessValue: null,
  whiteBalance: null,
  whiteBalanceMode: null,
  apertureValue: null,
  maxApertureValue: null,
  isoSpeedRatings: null,
  contrast: null,
  sharpness: null,
  digitalZoomRatio: null,
  shutterSpeedValue: null,
  meteringMode: null,
  focalLength: null,
  subjectDistanceRange: null,
  sceneCaptureType: null,
  datetimeOriginal: null,
  datetimeDigitized: null,
  sceneType: null,
  sensingMethod: null
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await PhotoApi.getPhotoPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await PhotoApi.deletePhoto(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await PhotoApi.exportPhoto(queryParams)
    download.excel(data, '相册照片.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>