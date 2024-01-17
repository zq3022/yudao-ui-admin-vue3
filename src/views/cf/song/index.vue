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
      <el-form-item label="专辑id" prop="albumId">
        <el-input
          v-model="queryParams.albumId"
          placeholder="请输入专辑id"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="歌曲名" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入歌曲名"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="pst" prop="pst">
        <el-input
          v-model="queryParams.pst"
          placeholder="请输入pst"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="t" prop="t">
        <el-input
          v-model="queryParams.t"
          placeholder="请输入t"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="pop" prop="pop">
        <el-input
          v-model="queryParams.pop"
          placeholder="请输入pop"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="st" prop="st">
        <el-input
          v-model="queryParams.st"
          placeholder="请输入st"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="ft" prop="rt">
        <el-input
          v-model="queryParams.rt"
          placeholder="请输入ft"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="fee" prop="fee">
        <el-input
          v-model="queryParams.fee"
          placeholder="请输入fee"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="v" prop="v">
        <el-input
          v-model="queryParams.v"
          placeholder="请输入v"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="cf" prop="cf">
        <el-input
          v-model="queryParams.cf"
          placeholder="请输入cf"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="dt" prop="dt">
        <el-input
          v-model="queryParams.dt"
          placeholder="请输入dt"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="cd" prop="cd">
        <el-input
          v-model="queryParams.cd"
          placeholder="请输入cd"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="no" prop="no">
        <el-input
          v-model="queryParams.no"
          placeholder="请输入no"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="ftype" prop="ftype">
        <el-select
          v-model="queryParams.ftype"
          placeholder="请选择ftype"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="djId" prop="djId">
        <el-input
          v-model="queryParams.djId"
          placeholder="请输入djId"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="copyright" prop="copyright">
        <el-input
          v-model="queryParams.copyright"
          placeholder="请输入copyright"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="sId" prop="sId">
        <el-input
          v-model="queryParams.sId"
          placeholder="请输入sId"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="mark" prop="mark">
        <el-input
          v-model="queryParams.mark"
          placeholder="请输入mark"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="originCoverType" prop="originCoverType">
        <el-select
          v-model="queryParams.originCoverType"
          placeholder="请选择originCoverType"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="single" prop="single">
        <el-input
          v-model="queryParams.single"
          placeholder="请输入single"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="mst" prop="mst">
        <el-input
          v-model="queryParams.mst"
          placeholder="请输入mst"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="cp" prop="cp">
        <el-input
          v-model="queryParams.cp"
          placeholder="请输入cp"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="mv" prop="mv">
        <el-input
          v-model="queryParams.mv"
          placeholder="请输入mv"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="rtype" prop="rtype">
        <el-select
          v-model="queryParams.rtype"
          placeholder="请选择rtype"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="publishTime" prop="publishTime">
        <el-date-picker
          v-model="queryParams.publishTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
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
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['cf:song:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['cf:song:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="歌曲id" align="center" prop="id" />
      <el-table-column label="专辑id" align="center" prop="albumId" />
      <el-table-column label="歌曲名" align="center" prop="name" />
      <el-table-column label="pst" align="center" prop="pst" />
      <el-table-column label="t" align="center" prop="t" />
      <el-table-column label="pop" align="center" prop="pop" />
      <el-table-column label="st" align="center" prop="st" />
      <el-table-column label="ft" align="center" prop="rt" />
      <el-table-column label="fee" align="center" prop="fee" />
      <el-table-column label="v" align="center" prop="v" />
      <el-table-column label="cf" align="center" prop="cf" />
      <el-table-column label="dt" align="center" prop="dt" />
      <el-table-column label="cd" align="center" prop="cd" />
      <el-table-column label="no" align="center" prop="no" />
      <el-table-column label="ftype" align="center" prop="ftype" />
      <el-table-column label="djId" align="center" prop="djId" />
      <el-table-column label="copyright" align="center" prop="copyright" />
      <el-table-column label="sId" align="center" prop="sId" />
      <el-table-column label="mark" align="center" prop="mark" />
      <el-table-column label="originCoverType" align="center" prop="originCoverType" />
      <el-table-column label="single" align="center" prop="single" />
      <el-table-column label="mst" align="center" prop="mst" />
      <el-table-column label="cp" align="center" prop="cp" />
      <el-table-column label="mv" align="center" prop="mv" />
      <el-table-column label="rtype" align="center" prop="rtype" />
      <el-table-column
        label="publishTime"
        align="center"
        prop="publishTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['cf:song:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['cf:song:delete']"
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
  <SongForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import * as SongApi from '@/api/cf/song'
import SongForm from './SongForm.vue'

defineOptions({ name: 'Song' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
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
  publishTime: [],
  createTime: []
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await SongApi.getSongPage(queryParams)
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
    await SongApi.deleteSong(id)
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
    const data = await SongApi.exportSong(queryParams)
    download.excel(data, '歌曲.xls')
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