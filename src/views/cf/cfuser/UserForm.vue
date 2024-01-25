<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="用户编号" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入用户编号" />
      </el-form-item>
      <el-form-item label="用户类型" prop="userType">
        <el-select v-model="formData.userType" placeholder="请选择用户类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="formData.nickname" placeholder="请输入用户昵称" />
      </el-form-item>
      <el-form-item label="用户头像" prop="avatarUrl">
        <el-input v-model="formData.avatarUrl" placeholder="请输入用户头像" />
      </el-form-item>
      <el-form-item label="背景图片URL" prop="backgroundUrl">
        <el-input v-model="formData.backgroundUrl" placeholder="请输入背景图片URL" />
      </el-form-item>
      <el-form-item label="用户签名" prop="signature">
        <el-input v-model="formData.signature" placeholder="请输入用户签名" />
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="formData.userName" placeholder="请输入用户名称" />
      </el-form-item>
      <el-form-item label="账户类型" prop="accountType">
        <el-select v-model="formData.accountType" placeholder="请选择账户类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="用户简称" prop="shortUserName">
        <el-input v-model="formData.shortUserName" placeholder="请输入用户简称" />
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-date-picker
          v-model="formData.birthday"
          type="date"
          value-format="x"
          placeholder="选择生日"
        />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="formData.gender" placeholder="请输入性别" />
      </el-form-item>
      <el-form-item label="账号状态" prop="accountStatus">
        <el-radio-group v-model="formData.accountStatus">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="省份" prop="province">
        <el-input v-model="formData.province" placeholder="请输入省份" />
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-input v-model="formData.city" placeholder="请输入城市" />
      </el-form-item>
      <el-form-item label="授权状态" prop="authStatus">
        <el-radio-group v-model="formData.authStatus">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <Editor v-model="formData.description" height="150px" />
      </el-form-item>
      <el-form-item label="默认头像" prop="defaultAvatar">
        <el-input v-model="formData.defaultAvatar" placeholder="请输入默认头像" />
      </el-form-item>
      <el-form-item label="dj状态" prop="djStatus">
        <el-radio-group v-model="formData.djStatus">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="本地状态" prop="locationStatus">
        <el-radio-group v-model="formData.locationStatus">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="vip类型" prop="vipType">
        <el-select v-model="formData.vipType" placeholder="请选择vip类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="粉丝数" prop="followed">
        <el-input v-model="formData.followed" placeholder="请输入粉丝数" />
      </el-form-item>
      <el-form-item label="点赞数" prop="mutual">
        <el-input v-model="formData.mutual" placeholder="请输入点赞数" />
      </el-form-item>
      <el-form-item label="最近登录时间" prop="lastLoginTime">
        <el-date-picker
          v-model="formData.lastLoginTime"
          type="date"
          value-format="x"
          placeholder="选择最近登录时间"
        />
      </el-form-item>
      <el-form-item label="最近登录ip" prop="lastLoginIp">
        <el-input v-model="formData.lastLoginIp" placeholder="请输入最近登录ip" />
      </el-form-item>
      <el-form-item label="vip类型乐观锁" prop="viptypeVersion">
        <el-input v-model="formData.viptypeVersion" placeholder="请输入vip类型乐观锁" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/cf/cfuser'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  userId: undefined,
  userType: undefined,
  nickname: undefined,
  avatarUrl: undefined,
  backgroundUrl: undefined,
  signature: undefined,
  userName: undefined,
  accountType: undefined,
  shortUserName: undefined,
  birthday: undefined,
  gender: undefined,
  accountStatus: undefined,
  province: undefined,
  city: undefined,
  authStatus: undefined,
  description: undefined,
  defaultAvatar: undefined,
  djStatus: undefined,
  locationStatus: undefined,
  vipType: undefined,
  followed: undefined,
  mutual: undefined,
  lastLoginTime: undefined,
  lastLoginIp: undefined,
  viptypeVersion: undefined
})
const formRules = reactive({
  userId: [{ required: true, message: '用户编号不能为空', trigger: 'blur' }]
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
      formData.value = await UserApi.getUser(id)
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
    const data = formData.value as unknown as UserApi.UserVO
    if (formType.value === 'create') {
      await UserApi.createUser(data)
      message.success(t('common.createSuccess'))
    } else {
      await UserApi.updateUser(data)
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
    userType: undefined,
    nickname: undefined,
    avatarUrl: undefined,
    backgroundUrl: undefined,
    signature: undefined,
    userName: undefined,
    accountType: undefined,
    shortUserName: undefined,
    birthday: undefined,
    gender: undefined,
    accountStatus: undefined,
    province: undefined,
    city: undefined,
    authStatus: undefined,
    description: undefined,
    defaultAvatar: undefined,
    djStatus: undefined,
    locationStatus: undefined,
    vipType: undefined,
    followed: undefined,
    mutual: undefined,
    lastLoginTime: undefined,
    lastLoginIp: undefined,
    viptypeVersion: undefined
  }
  formRef.value?.resetFields()
}
</script>