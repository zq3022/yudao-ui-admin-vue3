<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="用户id" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入用户id" />
      </el-form-item>
      <el-form-item label="歌单名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入歌单名称" />
      </el-form-item>
      <el-form-item label="封面图片编号" prop="coverImgId">
        <el-input v-model="formData.coverImgId" placeholder="请输入封面图片编号" />
      </el-form-item>
      <el-form-item label="封面图片URL" prop="coverImgUrl">
        <el-input v-model="formData.coverImgUrl" placeholder="请输入封面图片URL" />
      </el-form-item>
      <el-form-item label="广告类型" prop="adType">
        <el-select v-model="formData.adType" placeholder="请选择广告类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否允许评论" prop="opRecommend">
        <el-input v-model="formData.opRecommend" placeholder="请输入是否允许评论" />
      </el-form-item>
      <el-form-item label="是否高质量" prop="highQuality">
        <el-input v-model="formData.highQuality" placeholder="请输入是否高质量" />
      </el-form-item>
      <el-form-item label="是否新创建" prop="newImported">
        <el-input v-model="formData.newImported" placeholder="请输入是否新创建" />
      </el-form-item>
      <el-form-item label="曲目数量" prop="trackCount">
        <el-input v-model="formData.trackCount" placeholder="请输入曲目数量" />
      </el-form-item>
      <el-form-item label="星级" prop="privacy">
        <el-input v-model="formData.privacy" placeholder="请输入星级" />
      </el-form-item>
      <el-form-item label="曲目更新次数" prop="trackUpdateTime">
        <el-date-picker
          v-model="formData.trackUpdateTime"
          type="date"
          value-format="x"
          placeholder="选择曲目更新次数"
        />
      </el-form-item>
      <el-form-item label="评价线程id" prop="commentThreadId">
        <el-input v-model="formData.commentThreadId" placeholder="请输入评价线程id" />
      </el-form-item>
      <el-form-item label="播放次数" prop="playCount">
        <el-input v-model="formData.playCount" placeholder="请输入播放次数" />
      </el-form-item>
      <el-form-item label="曲目数量更新次数" prop="trackNumberUpdateTime">
        <el-date-picker
          v-model="formData.trackNumberUpdateTime"
          type="date"
          value-format="x"
          placeholder="选择曲目数量更新次数"
        />
      </el-form-item>
      <el-form-item label="订阅量" prop="subscribedCount">
        <el-input v-model="formData.subscribedCount" placeholder="请输入订阅量" />
      </el-form-item>
      <el-form-item label="云曲目数量" prop="cloudTrackCount">
        <el-input v-model="formData.cloudTrackCount" placeholder="请输入云曲目数量" />
      </el-form-item>
      <el-form-item label="是否排序" prop="ordered">
        <el-input v-model="formData.ordered" placeholder="请输入是否排序" />
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <Editor v-model="formData.description" height="150px" />
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <el-input v-model="formData.tags" placeholder="请输入标签" />
      </el-form-item>
      <el-form-item label="封面图片ID" prop="backgroundCoverId">
        <el-input v-model="formData.backgroundCoverId" placeholder="请输入封面图片ID" />
      </el-form-item>
      <el-form-item label="标题图片ID" prop="titleImage">
        <UploadImg v-model="formData.titleImage" />
      </el-form-item>
      <el-form-item label="是否可以被订阅" prop="subscribed">
        <el-input v-model="formData.subscribed" placeholder="请输入是否可以被订阅" />
      </el-form-item>
      <el-form-item label="分享次数" prop="shareCount">
        <el-input v-model="formData.shareCount" placeholder="请输入分享次数" />
      </el-form-item>
      <el-form-item label="评论次数" prop="commentCount">
        <el-input v-model="formData.commentCount" placeholder="请输入评论次数" />
      </el-form-item>
      <el-form-item label="歌单类型(5:用户喜欢的，20：网易创建的，0：用户自己创建的)" prop="specialType">
        <el-select v-model="formData.specialType" placeholder="请选择歌单类型(5:用户喜欢的，20：网易创建的，0：用户自己创建的)">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as PlaylistApi from '@/api/cf/playlist'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  userId: undefined,
  name: undefined,
  coverImgId: undefined,
  coverImgUrl: undefined,
  adType: undefined,
  status: undefined,
  opRecommend: undefined,
  highQuality: undefined,
  newImported: undefined,
  trackCount: undefined,
  privacy: undefined,
  trackUpdateTime: undefined,
  commentThreadId: undefined,
  playCount: undefined,
  trackNumberUpdateTime: undefined,
  subscribedCount: undefined,
  cloudTrackCount: undefined,
  ordered: undefined,
  description: undefined,
  tags: undefined,
  backgroundCoverId: undefined,
  titleImage: undefined,
  subscribed: undefined,
  shareCount: undefined,
  commentCount: undefined,
  specialType: undefined
})
const formRules = reactive({
  userId: [{ required: true, message: '用户id不能为空', trigger: 'blur' }],
  name: [{ required: true, message: '歌单名称不能为空', trigger: 'blur' }]
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
      formData.value = await PlaylistApi.getPlaylist(id)
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
    const data = formData.value as unknown as PlaylistApi.PlaylistVO
    if (formType.value === 'create') {
      await PlaylistApi.createPlaylist(data)
      message.success(t('common.createSuccess'))
    } else {
      await PlaylistApi.updatePlaylist(data)
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
    userId: undefined,
    name: undefined,
    coverImgId: undefined,
    coverImgUrl: undefined,
    adType: undefined,
    status: undefined,
    opRecommend: undefined,
    highQuality: undefined,
    newImported: undefined,
    trackCount: undefined,
    privacy: undefined,
    trackUpdateTime: undefined,
    commentThreadId: undefined,
    playCount: undefined,
    trackNumberUpdateTime: undefined,
    subscribedCount: undefined,
    cloudTrackCount: undefined,
    ordered: undefined,
    description: undefined,
    tags: undefined,
    backgroundCoverId: undefined,
    titleImage: undefined,
    subscribed: undefined,
    shareCount: undefined,
    commentCount: undefined,
    specialType: undefined
  }
  formRef.value?.resetFields()
}
</script>