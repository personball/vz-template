<!--

{tags: ["Role"], parameters: [{name: "Filter", in: "query", schema: {type: "string"}}, {name: "Sorting", in: "query", schema: {type: "string"}}, {name: "SkipCount", in: "query", schema: {maximum: 2147483647, minimum: 0, type: "integer", format: "int32"}}, {name: "MaxResultCount", in: "query", schema: {maximum: 2147483647, minimum: 1, type: "integer", format: "int32"}}], responses: {"200": {description: "Success", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Application.Dtos.PagedResultDto<Volo.Abp.Identity.IdentityRoleDto>"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Application.Dtos.PagedResultDto<Volo.Abp.Identity.IdentityRoleDto>"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Application.Dtos.PagedResultDto<Volo.Abp.Identity.IdentityRoleDto>"}}}}, "403": {description: "Forbidden", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}}}, "401": {description: "Unauthorized", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}}}, "400": {description: "Bad Request", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}}}, "404": {description: "Not Found", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}}}, "501": {description: "Server Error", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}}}, "500": {description: "Server Error", content: {"text/plain": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "application/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}, "text/json": {schema: {"$ref": "#/components/schemas/Volo.Abp.Http.RemoteServiceErrorResponse"}}}}}}
[{name: "Filter", in: "query", schema: {type: "string"}}, {name: "Sorting", in: "query", schema: {type: "string"}}, {name: "SkipCount", in: "query", schema: {maximum: 2147483647, minimum: 0, type: "integer", format: "int32"}}, {name: "MaxResultCount", in: "query", schema: {maximum: 2147483647, minimum: 1, type: "integer", format: "int32"}}]


Role




Volo.Abp.Application.Dtos.PagedResultDto<Volo.Abp.Identity.IdentityRoleDto>




IdentityRoleDto
#/components/schemas/Volo.Abp.Identity.IdentityRoleDto



extraProperties:
{type: "object", additionalProperties: {}, nullable: true, readOnly: true}

id:
{type: "string", format: "uuid"}

name:
{type: "string", nullable: true}

isDefault:
{type: "boolean"}

isStatic:
{type: "boolean"}

isPublic:
{type: "boolean"}

concurrencyStamp:
{type: "string", nullable: true}

-->

<template>
    <ListPage ref="list" :searchFormSchema="searchFormSchema" :listColumns="listColumns" @queryList="getData">
        <template #listActions>
            <el-button type="primary" @click="showAdd()">{{ t('common.create') }}</el-button>
        </template>
        <template #columnActions="{ row }">
            <el-button @click="showEdit(row)" type="primary">{{ t('common.edit') }}</el-button>
            <el-button @click="showDetail(row)" type="success">{{ t('common.detail') }}</el-button>
            <el-popconfirm :title="t('common.confirmDelete')" @confirm="del(row)">
                <template #reference>
                    <el-button type="danger">{{ t('common.delete') }}</el-button>
                </template>
            </el-popconfirm>
        </template>
    </ListPage>
    <CreateOrEditSysRole v-if="openDialog" v-model="openDialog" :mode="dialogMode" :data="data"
        @submit-success="list.reload()">
    </CreateOrEditSysRole>
</template>

<script lang="ts" setup>
import { ISchema } from '@formily/vue';
import { IdentityRoleDto, RoleServiceProxy } from '~/api/ServiceProxies';
import type { QueryListHander } from '~/components/pages/types'
import CreateOrEditSysRole from "./__CreateOrEdit.vue";
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
                filter:{
                    type:'string',
                    title:'filter',
                    'x-component':'Input', // TODO: 根据参数类型进行组件调整
                    'x-component-props':{
                        placeholder:'filter',
                        clearable:true,
                        style:'width:150px'
                    },
                    'x-decorator':'FormItem',
                    'x-decorator-props':{
                        wrapperStyle: '.el-form--inline'
                    }
                },
            }
        }
    }
}

const listColumns = ref([
        {label:'sys.roles.id',prop:'id'},
        {label:'sys.roles.name',prop:'name'},
        {label:'sys.roles.isDefault',prop:'isDefault'},
        {label:'sys.roles.isStatic',prop:'isStatic'},
        {label:'sys.roles.isPublic',prop:'isPublic'},
        {label: 'common.creationTime', prop: 'creationTime', formatter: (row: any) => dayjs(row.creationTime).format('YYYY-MM-DD HH:mm') }
])

const client = new RoleServiceProxy(undefined, axios)

const getData: QueryListHander<IdentityRoleDto> = async ({ queryForm, skipCount, maxResultCount, updateList }) => {
     const { totalCount, items } = await client.rolesGET(queryForm.filter, '', unref(skipCount), unref(maxResultCount))
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
    const client = new RoleServiceProxy(undefined, axios)
    await client.rolesDELETE(row.id)
    list.value.reload()
}

</script>

<style lang="scss" scoped></style>