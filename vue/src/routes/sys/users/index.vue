<template>
    <ListPage :searchFormSchema="searchFormSchema" :listColumns="listColumns" @queryList="getData">
        <template #listActions>
            <el-button type="primary">{{ t('common.create') }}</el-button>
        </template>
        <template #columnActions="{ row }">
            <el-button @click="edit(row)" type="primary">{{ t('common.edit') }}</el-button>
            <el-popconfirm :title="t('common.confirm-delete')" @confirm="del(row)">
                <template #reference>
                    <el-button type="danger">{{ t('common.delete') }}</el-button>
                </template>
            </el-popconfirm>
        </template>
    </ListPage>
</template>

<script lang="ts" setup>
import { ISchema } from '@formily/vue';
import { IdentityUserDto, UserServiceProxy } from '~/api/ServiceProxies';
import type { QueryListHander } from '~/components/pages/types'

const { t } = useI18n()

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
                filter: {
                    type: 'string',
                    title: '关键词',
                    'x-component': 'Input',
                    'x-component-props': {
                        placeholder: '用户名/手机号',
                        clearable: true,
                        style: 'width:150px'
                    },
                    'x-decorator': 'FormItem',
                    'x-decorator-props': {
                        wrapperStyle: '.el-form--inline'
                    }
                },
                filter2: {
                    type: 'string',
                    title: '关键词2',
                    'x-component': 'Input',
                    'x-component-props': {
                        placeholder: '用户名/手机号',
                        clearable: true,
                        style: 'width:150px'
                    },
                    'x-decorator': 'FormItem'
                },
                filter3: {
                    type: 'string',
                    title: '关键词2',
                    'x-component': 'Input',
                    'x-component-props': {
                        placeholder: '用户名/手机号',
                        clearable: true,
                        style: 'width:150px'
                    },
                    'x-decorator': 'FormItem'
                },
                filter4: {
                    type: 'string',
                    title: '关键词2',
                    'x-component': 'Input',
                    'x-component-props': {
                        placeholder: '用户名/手机号',
                        clearable: true,
                        style: 'width:150px'
                    },
                    'x-decorator': 'FormItem'
                }
            }
        }
    }
}

const listColumns = ref([
    { label: t('sys.users.fullName'), formatter: (row: any) => row.surname + ' ' + row.name },
    { label: t('sys.users.surname'), prop: 'surname', width: '100px' },
    { label: t('sys.users.name'), prop: 'name' },
    { label: t('sys.users.userName'), prop: 'userName' },
    { label: t('sys.users.email'), prop: 'email' }
])

const client = new UserServiceProxy(undefined, axios)

const getData: QueryListHander<IdentityUserDto> = async (queryForm, skipCount, maxResultCount, updateList) => {
    const { totalCount, items } = await client.usersGET2(queryForm.filter, 'CreationTime desc', unref(skipCount), unref(maxResultCount))
    updateList(items, totalCount)
}

const edit = (row: any) => {
    console.log('edit click!')
}

const del = (row: any) => {
    console.log('del click!')
}


// TODO: 查询用户列表，搜索用户
// TODO: 查询指定用户详情
// TODO: 修改用户信息
// TODO: 删除用户
// TODO: 创建用户
// TODO: 查询用户角色
// TODO: 修改用户角色（加载可用角色）
// TODO: 查询用户列表，搜索用户名
// TODO: ？按用户名查询用户列表
// TODO: ？按邮箱地址查询用户列表

// TODO: UserLookup 用户选择组件？

// TODO: modal, drawer
</script>

<style lang="scss" scoped></style>