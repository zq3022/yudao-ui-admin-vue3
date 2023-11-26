<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="源编号" prop="sourceId">
        <el-input v-model="formData.sourceId" placeholder="请输入源编号" />
      </el-form-item>
      <el-form-item label="左索引" prop="lft">
        <el-input v-model="formData.lft" placeholder="请输入左索引" />
      </el-form-item>
      <el-form-item label="右索引" prop="rgt">
        <el-input v-model="formData.rgt" placeholder="请输入右索引" />
      </el-form-item>
      <el-form-item label="层级" prop="level">
        <el-input v-model="formData.level" placeholder="请输入层级" />
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入名称" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as DirectoryApi from '@/api/space/directory'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  sourceId: undefined,
  lft: undefined,
  rgt: undefined,
  level: undefined,
  name: undefined
})
const formRules = reactive({
  sourceId: [{ required: true, message: '源编号不能为空', trigger: 'blur' }],
  lft: [{ required: true, message: '左索引不能为空', trigger: 'blur' }],
  rgt: [{ required: true, message: '右索引不能为空', trigger: 'blur' }],
  level: [{ required: true, message: '层级不能为空', trigger: 'blur' }],
  name: [{ required: true, message: '名称不能为空', trigger: 'blur' }]
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
      formData.value = await DirectoryApi.getDirectory(id)
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
    const data = formData.value as unknown as DirectoryApi.DirectoryVO
    if (formType.value === 'create') {
      await DirectoryApi.createDirectory(data)
      message.success(t('common.createSuccess'))
    } else {
      await DirectoryApi.updateDirectory(data)
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
    sourceId: undefined,
    lft: undefined,
    rgt: undefined,
    level: undefined,
    name: undefined
  }
  formRef.value?.resetFields()
}
</script>