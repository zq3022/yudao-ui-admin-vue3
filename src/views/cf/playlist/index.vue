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
      <el-form-item label="用户id" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户id"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="歌单名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入歌单名称"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="封面图片编号" prop="coverImgId">
        <el-input
          v-model="queryParams.coverImgId"
          placeholder="请输入封面图片编号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="广告类型" prop="adType">
        <el-select
          v-model="queryParams.adType"
          placeholder="请选择广告类型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择状态"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否允许评论" prop="opRecommend">
        <el-input
          v-model="queryParams.opRecommend"
          placeholder="请输入是否允许评论"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="是否高质量" prop="highQuality">
        <el-input
          v-model="queryParams.highQuality"
          placeholder="请输入是否高质量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="是否新创建" prop="newImported">
        <el-input
          v-model="queryParams.newImported"
          placeholder="请输入是否新创建"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曲目数量" prop="trackCount">
        <el-input
          v-model="queryParams.trackCount"
          placeholder="请输入曲目数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="星级" prop="privacy">
        <el-input
          v-model="queryParams.privacy"
          placeholder="请输入星级"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曲目更新次数" prop="trackUpdateTime">
        <el-date-picker
          v-model="queryParams.trackUpdateTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="评价线程id" prop="commentThreadId">
        <el-input
          v-model="queryParams.commentThreadId"
          placeholder="请输入评价线程id"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="播放次数" prop="playCount">
        <el-input
          v-model="queryParams.playCount"
          placeholder="请输入播放次数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="曲目数量更新次数" prop="trackNumberUpdateTime">
        <el-date-picker
          v-model="queryParams.trackNumberUpdateTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订阅量" prop="subscribedCount">
        <el-input
          v-model="queryParams.subscribedCount"
          placeholder="请输入订阅量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="云曲目数量" prop="cloudTrackCount">
        <el-input
          v-model="queryParams.cloudTrackCount"
          placeholder="请输入云曲目数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="是否排序" prop="ordered">
        <el-input
          v-model="queryParams.ordered"
          placeholder="请输入是否排序"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <el-input
          v-model="queryParams.tags"
          placeholder="请输入标签"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="封面图片ID" prop="backgroundCoverId">
        <el-input
          v-model="queryParams.backgroundCoverId"
          placeholder="请输入封面图片ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="是否可以被订阅" prop="subscribed">
        <el-input
          v-model="queryParams.subscribed"
          placeholder="请输入是否可以被订阅"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="分享次数" prop="shareCount">
        <el-input
          v-model="queryParams.shareCount"
          placeholder="请输入分享次数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="评论次数" prop="commentCount">
        <el-input
          v-model="queryParams.commentCount"
          placeholder="请输入评论次数"
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
      <el-form-item label="歌单类型(5:用户喜欢的，20：网易创建的，0：用户自己创建的)" prop="specialType">
        <el-select
          v-model="queryParams.specialType"
          placeholder="请选择歌单类型(5:用户喜欢的，20：网易创建的，0：用户自己创建的)"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['cf:playlist:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['cf:playlist:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="用户id" align="center" prop="userId" />
      <el-table-column label="歌单名称" align="center" prop="name" />
      <el-table-column label="封面图片编号" align="center" prop="coverImgId" />
      <el-table-column label="封面图片URL" align="center" prop="coverImgUrl" />
      <el-table-column label="广告类型" align="center" prop="adType" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="是否允许评论" align="center" prop="opRecommend" />
      <el-table-column label="是否高质量" align="center" prop="highQuality" />
      <el-table-column label="是否新创建" align="center" prop="newImported" />
      <el-table-column label="曲目数量" align="center" prop="trackCount" />
      <el-table-column label="星级" align="center" prop="privacy" />
      <el-table-column label="曲目更新次数" align="center" prop="trackUpdateTime" />
      <el-table-column label="评价线程id" align="center" prop="commentThreadId" />
      <el-table-column label="播放次数" align="center" prop="playCount" />
      <el-table-column label="曲目数量更新次数" align="center" prop="trackNumberUpdateTime" />
      <el-table-column label="订阅量" align="center" prop="subscribedCount" />
      <el-table-column label="云曲目数量" align="center" prop="cloudTrackCount" />
      <el-table-column label="是否排序" align="center" prop="ordered" />
      <el-table-column label="描述" align="center" prop="description" />
      <el-table-column label="标签" align="center" prop="tags" />
      <el-table-column label="封面图片ID" align="center" prop="backgroundCoverId" />
      <el-table-column label="标题图片ID" align="center" prop="titleImage" />
      <el-table-column label="是否可以被订阅" align="center" prop="subscribed" />
      <el-table-column label="分享次数" align="center" prop="shareCount" />
      <el-table-column label="评论次数" align="center" prop="commentCount" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="歌单类型(5:用户喜欢的，20：网易创建的，0：用户自己创建的)" align="center" prop="specialType" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['cf:playlist:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['cf:playlist:delete']"
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
  <PlaylistForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import * as PlaylistApi from '@/api/cf/playlist'
import PlaylistForm from './PlaylistForm.vue'

defineOptions({ name: 'Playlist' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
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
  trackUpdateTime: [],
  commentThreadId: undefined,
  playCount: undefined,
  trackNumberUpdateTime: [],
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
  createTime: [],
  specialType: undefined
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await PlaylistApi.getPlaylistPage(queryParams)
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
    await PlaylistApi.deletePlaylist(id)
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
    const data = await PlaylistApi.exportPlaylist(queryParams)
    download.excel(data, '歌单.xls')
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