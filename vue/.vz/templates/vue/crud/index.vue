<!--
{{ api = swagger.paths[path].get }}
{{api}}
{{api.parameters}}

{{ tag = api.tags[0] }}
{{tag}}

{{respRef=api.responses["200"].content["application/json"].schema["$ref"]}}
{{respType=regex.split respRef `\/`}}

{{respType[-1]}}

{{respItemTypeRef=swagger.components.schemas[respType[-1]].properties.items.items["$ref"]}}

{{itemType= respItemTypeRef|regex.split `\.`|array.last}}
{{itemType}}
{{respItemTypeRef}}
{{ itemTypeSchema=swagger.components.schemas[(respItemTypeRef |regex.split `\/`|array.last)]}}

{{for key in itemTypeSchema.properties|object.keys }}
{{key}}:
{{itemTypeSchema.properties[key]}}
{{end}}
-->

<template>
    <ListPage ref="list" :searchFormSchema="searchFormSchema" :listColumns="listColumns" @queryList="getData">
        <template #listActions>
            <el-button type="primary" @click="showAdd()">{%{{{ t('common.create') }}}%}</el-button>
        </template>
        <template #columnActions="{ row }">
            <el-button @click="showEdit(row)" type="primary">{%{{{ t('common.edit') }}}%}</el-button>
            <el-button @click="showDetail(row)" type="success">{%{{{ t('common.detail') }}}%}</el-button>
            <el-popconfirm :title="t('common.confirmDelete')" @confirm="del(row)">
                <template #reference>
                    <el-button type="danger">{%{{{ t('common.delete') }}}%}</el-button>
                </template>
            </el-popconfirm>
        </template>
    </ListPage>
    <CreateOrEditSys{{ tag }} v-if="openDialog" v-model="openDialog" :mode="dialogMode" :data="data"
        @submit-success="list.reload()">
    </CreateOrEditSys{{ tag }}>
</template>

<script lang="ts" setup>
import { ISchema } from '@formily/vue';
import { {{ itemType }}, {{ tag }}ServiceProxy } from '~/api/ServiceProxies';
import type { QueryListHander } from '~/components/pages/types'
import CreateOrEditSys{{ tag }} from "./__CreateOrEdit.vue";
import dayjs from 'dayjs';

const { t } = useI18n()
const list = ref()
const searchFormSchema: ISchema = {
    type: 'object',
    properties: {
        layout: {
            type: 'void',
            'x-component': 'FormLayout',
            'x-component-props': {
                layout: 'inline',
            },
            properties: {
{{~ for p in api.parameters 
    if p.name=='Sorting'||p.name=='SkipCount'||p.name=='MaxResultCount'
        continue
    end
    ~}}
                {{p.name|camel_case}}:{
                    type:'{{p.schema.type}}',
                    title:'{{p.name|camel_case}}',
                    'x-component':'Input', // TODO: 根据参数类型进行组件调整
                    'x-component-props':{
                        placeholder:'{{p.name|camel_case}}',
                        clearable:true,
                        style:'width:150px'
                    },
                    'x-decorator':'FormItem',
                    'x-decorator-props':{
                        wrapperStyle: '.el-form--inline'
                    }
                },
{{~ end ~}}
            }
        }
    }
}

const listColumns = ref([
{{for key in itemTypeSchema.properties|object.keys 
    if key =='concurrencyStamp'|| key =='extraProperties' 
        continue 
    end
~}}
{{~val= itemTypeSchema.properties[key]~}}
        {label:'sys.{{tag|pluralize|string.downcase}}.{{key}}',prop:'{{key}}'},
{{~end~}}
        {label: 'common.creationTime', prop: 'creationTime', formatter: (row: any) => dayjs(row.creationTime).format('YYYY-MM-DD HH:mm') }
])

const client = new {{tag}}ServiceProxy(undefined, axios)

const getData: QueryListHander<{{ itemType }}> = async ({ queryForm, skipCount, maxResultCount, updateList }) => {
     const { totalCount, items } = await client.{{tag|pluralize|string.downcase}}GET(queryForm.filter, '', unref(skipCount), unref(maxResultCount))
     updateList(items ?? [], totalCount ?? 0)
}

const openDialog = ref(false)
const dialogMode = ref<'create' | 'edit' | 'detail'>('create')
const data = ref()

const showAdd = () => {
    dialogMode.value = 'create'
    openDialog.value = true
}

const showEdit = (row: any) => {
    data.value = row
    dialogMode.value = 'edit'
    openDialog.value = true
}

const showDetail = (row: any) => {
    data.value = row
    dialogMode.value = 'detail'
    openDialog.value = true
}

const del = async (row: any) => {
    const client = new {{tag}}ServiceProxy(undefined, axios)
    await client.{{tag|pluralize|string.downcase}}DELETE(row.id)
    list.value.reload()
}

</script>

<style lang="scss" scoped></style>