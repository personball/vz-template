<template>
    <el-card class="box-card" body-style="padding-bottom:0">
        <FormProvider :form="searchForm">
            <div class="flex justify-between">
                <SchemaField :schema="schema" />
                <FormButtonGroup style="align-items:stretch;margin-left:8px">
                    <Submit @submit="onSubmit">{{ t('common.query') }}</Submit>
                    <Reset>Reset</Reset>
                </FormButtonGroup>
            </div>
        </FormProvider>
    </el-card>
</template>

<script lang="ts" setup>
import { createForm, registerValidateRules } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { ISchema } from '@formily/json-schema'
import { FormButtonGroup, FormItem, FormLayout, Input, Password, Space, Submit, Reset } from '@formily/element-plus'
import { UserServiceProxy } from '~/api/ServiceProxies'
import { ElMessage } from 'element-plus/es'

const { t } = useI18n()

const { SchemaField } = createSchemaField({
    components: {
        FormLayout,
        FormItem,
        Input,
    },
})

const searchForm = createForm()
const value = ref({
    filter: ''
})
// searchForm.setInitialValues({
//     filter: ''
// })

const schema: ISchema = {
    type: 'object',
    properties: {
        layout: {
            type: 'void',
            'x-component': 'FormLayout',
            'x-component-props': {
                labelCol: 6,
                labelWidth: 100,
                wrapperCol: 16,
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
                    'x-decorator': 'FormItem'
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
                }, filter4: {
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

const list = ref()
const client = new UserServiceProxy(undefined, axios)

onMounted(async () => {
    // list.value = await client.usersGET2(searchForm.values.filter, 'CreationTime desc', 0, 10)
})

const onSubmit = (request: any) => {
    console.log(request)
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

<style lang="scss" scoped>

</style>