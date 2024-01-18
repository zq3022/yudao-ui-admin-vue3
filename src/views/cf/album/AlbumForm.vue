<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="专辑名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入专辑名称" />
      </el-form-item>
      <el-form-item label="专辑封面" prop="picUrl">
        <UploadImg v-model="formData.picUrl" />
      </el-form-item>
      <el-form-item label="封面id" prop="pic">
        <el-input v-model="formData.pic" placeholder="请输入封面id" />
      </el-form-item>
      <el-form-item label="alisa" prop="alia">
        <el-input v-model="formData.alia" placeholder="请输入alisa" />
      </el-form-item>
      <el-form-item label="发布时间" prop="publishTime">
        <el-date-picker
          v-model="formData.publishTime"
          type="date"
          value-format="x"
          placeholder="选择发布时间"
        />
      </el-form-item>
      <el-form-item label="发行公司" prop="company">
        <el-input v-model="formData.company" placeholder="请输入发行公司" />
      </el-form-item>
      <el-form-item label="专辑介绍" prop="description">
        <Editor v-model="formData.description" height="150px" />
      </el-form-item>
      <el-form-item label="评论条数" prop="commentCount">
        <el-input v-model="formData.commentCount" placeholder="请输入评论条数" />
      </el-form-item>
      <el-form-item label="点赞数" prop="likedCount">
        <el-input v-model="formData.likedCount" placeholder="请输入点赞数" />
      </el-form-item>
      <el-form-item label="分享数" prop="shareCount">
        <el-input v-model="formData.shareCount" placeholder="请输入分享数" />
      </el-form-item>
      <el-form-item label="曲目数量" prop="songCount">
        <el-input v-model="formData.songCount" placeholder="请输入曲目数量" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as AlbumApi from '@/api/cf/album'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  name: undefined,
  picUrl: undefined,
  pic: undefined,
  alia: undefined,
  publishTime: undefined,
  company: undefined,
  description: undefined,
  commentCount: undefined,
  likedCount: undefined,
  shareCount: undefined,
  songCount: undefined
})
const formRules = reactive({
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
      formData.value = await AlbumApi.getAlbum(id)
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
    const data = formData.value as unknown as AlbumApi.AlbumVO
    if (formType.value === 'create') {
      await AlbumApi.createAlbum(data)
      message.success(t('common.createSuccess'))
    } else {
      await AlbumApi.updateAlbum(data)
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
    name: undefined,
    picUrl: undefined,
    pic: undefined,
    alia: undefined,
    publishTime: undefined,
    company: undefined,
    description: undefined,
    commentCount: undefined,
    likedCount: undefined,
    shareCount: undefined,
    songCount: undefined
  }
  formRef.value?.resetFields()
}
</script>