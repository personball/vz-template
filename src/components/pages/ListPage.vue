<template>
  <el-card class="box-card" body-style="padding-bottom:0">
    <!--search form-->
    <Form :form="searchForm">
      <div class="flex">
        <SchemaField :schema="searchFormSchema" />
        <FormButtonGroup style="align-items: stretch; margin-left: 8px">
          <Submit :icon="IconSearch" @submit="getList">{{
            t('common.query')
          }}</Submit>
          <Reset :icon="IconRefreshRight">{{ t('common.reset') }}</Reset>
        </FormButtonGroup>
      </div>
    </Form>
    <!--actions-->
    <div class="mb-10px text-left" v-if="$slots.listActions">
      <!-- ListActions slot -->
      <slot name="listActions"></slot>
    </div>
    <!--list items-->
    <div v-loading="loading">
      <el-table :data="list" table-layout="fixed" stripe height="100%">
        <el-table-column
          v-for="item in listColumns"
          v-bind="item"
          :label="t(item.label)"
        />
        <el-table-column v-if="$slots.columnActions">
          <template #header>
            {{ t('common.columnActions') }}
          </template>
          <template #default="{ row }">
            <!-- ColumnActions slot -->
            <slot name="columnActions" :row="row"></slot>
          </template>
        </el-table-column>
      </el-table>
      <!--pagination--->
      <el-pagination
        class="m-10px"
        layout="sizes, prev, pager, next, jumper, ->, total"
        :total="total"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSizes"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup generic="T">
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { ISchema } from '@formily/json-schema'
import {
  Form,
  FormButtonGroup,
  FormItem,
  FormLayout,
  Input,
  Submit,
  Reset,
  Select
} from '@formily/element-plus'
import IconSearch from '~icons/ep/search'
import IconRefreshRight from '~icons/ep/refresh-right'
import { IQueryListEto } from './types'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    searchFormSchema: ISchema
    searchFormInitialValues?: any
    listColumns: any[]
    pageSizes?: number[]
  }>(),
  {
    pageSizes: () => [10, 20, 50, 100]
  }
)

const emit = defineEmits<{
  (e: 'queryList', v: IQueryListEto<T>): void
}>()

const { SchemaField } = createSchemaField({
  components: {
    FormLayout,
    FormItem,
    Input,
    Select
    // TODO: add more ...
  }
})

const searchForm = createForm()
if (props.searchFormInitialValues) {
  searchForm.setInitialValues(unref(props.searchFormInitialValues))
}

const loading = ref(false)
const list = ref<any[]>([])

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(50)

const skipCount = computed(() =>
  currentPage.value == 1 ? 0 : (currentPage.value - 1) * pageSize.value
)
const maxResultCount = computed(() => pageSize.value)

onMounted(async () => {
  await getList()
})

const getList = () => {
  loading.value = true
  emit('queryList', {
    queryForm: searchForm.values,
    skipCount: skipCount.value,
    maxResultCount: maxResultCount.value,
    updateList: updateList
  })
}

// callback to update items and total
const updateList = (items: T[], totalCount: number) => {
  list.value = items
  total.value = totalCount ?? list.value.length
  loading.value = false
}

watch([currentPage, pageSize], () => getList())

const reload = () => {
  currentPage.value = 1
  getList()
}

defineExpose({
  reload
})
</script>
