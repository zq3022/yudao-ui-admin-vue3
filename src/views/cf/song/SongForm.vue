<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="专辑id" prop="albumId">
        <el-input v-model="formData.albumId" placeholder="请输入专辑id" />
      </el-form-item>
      <el-form-item label="歌曲名" prop="name">
        <el-input v-model="formData.name" placeholder="请输入歌曲名" />
      </el-form-item>
      <el-form-item label="pst" prop="pst">
        <el-input v-model="formData.pst" placeholder="请输入pst" />
      </el-form-item>
      <el-form-item label="t" prop="t">
        <el-input v-model="formData.t" placeholder="请输入t" />
      </el-form-item>
      <el-form-item label="pop" prop="pop">
        <el-input v-model="formData.pop" placeholder="请输入pop" />
      </el-form-item>
      <el-form-item label="st" prop="st">
        <el-input v-model="formData.st" placeholder="请输入st" />
      </el-form-item>
      <el-form-item label="ft" prop="rt">
        <el-input v-model="formData.rt" placeholder="请输入ft" />
      </el-form-item>
      <el-form-item label="fee" prop="fee">
        <el-input v-model="formData.fee" placeholder="请输入fee" />
      </el-form-item>
      <el-form-item label="v" prop="v">
        <el-input v-model="formData.v" placeholder="请输入v" />
      </el-form-item>
      <el-form-item label="cf" prop="cf">
        <el-input v-model="formData.cf" placeholder="请输入cf" />
      </el-form-item>
      <el-form-item label="dt" prop="dt">
        <el-input v-model="formData.dt" placeholder="请输入dt" />
      </el-form-item>
      <el-form-item label="cd" prop="cd">
        <el-input v-model="formData.cd" placeholder="请输入cd" />
      </el-form-item>
      <el-form-item label="no" prop="no">
        <el-input v-model="formData.no" placeholder="请输入no" />
      </el-form-item>
      <el-form-item label="ftype" prop="ftype">
        <el-select v-model="formData.ftype" placeholder="请选择ftype">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="djId" prop="djId">
        <el-input v-model="formData.djId" placeholder="请输入djId" />
      </el-form-item>
      <el-form-item label="copyright" prop="copyright">
        <el-input v-model="formData.copyright" placeholder="请输入copyright" />
      </el-form-item>
      <el-form-item label="sId" prop="sId">
        <el-input v-model="formData.sId" placeholder="请输入sId" />
      </el-form-item>
      <el-form-item label="mark" prop="mark">
        <el-input v-model="formData.mark" placeholder="请输入mark" />
      </el-form-item>
      <el-form-item label="originCoverType" prop="originCoverType">
        <el-select v-model="formData.originCoverType" placeholder="请选择originCoverType">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="single" prop="single">
        <el-input v-model="formData.single" placeholder="请输入single" />
      </el-form-item>
      <el-form-item label="mst" prop="mst">
        <el-input v-model="formData.mst" placeholder="请输入mst" />
      </el-form-item>
      <el-form-item label="cp" prop="cp">
        <el-input v-model="formData.cp" placeholder="请输入cp" />
      </el-form-item>
      <el-form-item label="mv" prop="mv">
        <el-input v-model="formData.mv" placeholder="请输入mv" />
      </el-form-item>
      <el-form-item label="rtype" prop="rtype">
        <el-select v-model="formData.rtype" placeholder="请选择rtype">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="publishTime" prop="publishTime">
        <el-date-picker
          v-model="formData.publishTime"
          type="date"
          value-format="x"
          placeholder="选择publishTime"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as SongApi from '@/api/cf/song'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  albumId: undefined,
  name: undefined,
  pst: undefined,
  t: undefined,
  pop: undefined,
  st: undefined,
  rt: undefined,
  fee: undefined,
  v: undefined,
  cf: undefined,
  dt: undefined,
  cd: undefined,
  no: undefined,
  ftype: undefined,
  djId: undefined,
  copyright: undefined,
  sId: undefined,
  mark: undefined,
  originCoverType: undefined,
  single: undefined,
  mst: undefined,
  cp: undefined,
  mv: undefined,
  rtype: undefined,
  publishTime: undefined
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
      formData.value = await SongApi.getSong(id)
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
    const data = formData.value as unknown as SongApi.SongVO
    if (formType.value === 'create') {
      await SongApi.createSong(data)
      message.success(t('common.createSuccess'))
    } else {
      await SongApi.updateSong(data)
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
    albumId: undefined,
    name: undefined,
    pst: undefined,
    t: undefined,
    pop: undefined,
    st: undefined,
    rt: undefined,
    fee: undefined,
    v: undefined,
    cf: undefined,
    dt: undefined,
    cd: undefined,
    no: undefined,
    ftype: undefined,
    djId: undefined,
    copyright: undefined,
    sId: undefined,
    mark: undefined,
    originCoverType: undefined,
    single: undefined,
    mst: undefined,
    cp: undefined,
    mv: undefined,
    rtype: undefined,
    publishTime: undefined
  }
  formRef.value?.resetFields()
}
</script>