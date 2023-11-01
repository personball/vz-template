<template>
    <ElDialog v-model="show" width="500px" destroy-on-close lock-scroll draggable top="0" :close-on-click-modal="false">
        <template #header="{ close }">
            <div class="flex justify-between items-center h-54px pl-15px pr-15px relative">
                <slot name="title">
                    {{ t('common.changePwd') }}
                </slot>
                <div class="h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]">
                    <!-- <Icon v-if="fullscreen" class="cursor-pointer is-hover !h-54px mr-10px"
                        :icon="isFullscreen ? 'radix-icons:exit-full-screen' : 'radix-icons:enter-full-screen'"
                        color="var(--el-color-info)" hover-color="var(--el-color-primary)" @click="toggleFull" /> -->
                    <!-- <Icon class="cursor-pointer is-hover !h-54px" icon="ep:close" hover-color="var(--el-color-primary)"
                        color="var(--el-color-info)" @click="close" /> -->
                </div>
            </div>
        </template>
        <FormProvider :form="form">
            <SchemaField :schema="schema" />
            <Submit @submit="onSubmit">提交</Submit>
        </FormProvider>
    </ElDialog>
</template>

<script lang="ts" setup>
import { createForm, registerValidateRules } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { ISchema } from '@formily/json-schema'
import { FormItem, Password, Submit } from '@formily/element-plus'
import { ChangePasswordInput, ProfileServiceProxy } from '~/api/ServiceProxies'
import { ElMessage } from 'element-plus/es'

const { t } = useI18n()

const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])
const show = computed({
    get: () => props.modelValue,
    set: (val) => {
        emit('update:modelValue', val)
    }
})

const form = createForm({

})

// registerValidateRules({
//     confirmNewPwd(value: any): any {
//         console.log(value)
//         return value !== form.values.newPassword ? '两次输入不一致！' : ''
//     }
// })

// const reaction: SchemaReaction = (field, scope) => {
//     const f = (scope.$form as Form)
//     f.setFieldState('target', {})
//     f.setFieldState('target', state => {
// state.component
//     })
// }

const schema: ISchema = {
    type: 'object',
    properties: {
        currentPassword: {
            type: 'string',
            required: true,
            title: t('common.pwdOld'),
            'x-component': 'Password',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                labelWidth: 150
            }
        },
        newPassword: {
            type: 'string',
            required: true,
            title: t('common.pwdNew'),
            'x-component': 'Password',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                labelWidth: 150
            }
        },
        pwdConfirm: {
            type: 'string',
            required: true,
            title: t('common.pwdConfirm'),
            'x-component': 'Password',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                labelWidth: 150
            },
            'x-validator': {
                validator: `{{(value,rule)=>{
                    if(!value)return ''
                    return value!==$form.values.newPassword?rule.message:''
                }
            }}`,
                message: '两次输入不一致！',
                confirmNewPwd: true
            }
        },
    },
}

const { SchemaField } = createSchemaField({
    components: {
        FormItem,
        Password,
    },
})

const onSubmit = async (value: any) => {
    const client = new ProfileServiceProxy(undefined, axios);
    await client.changePassword(new ChangePasswordInput({
        currentPassword: value.currentPassword,
        newPassword: value.newPassword
    }))
    ElMessage.success(t('common.modifySuccess'))
    show.value = false;
}

</script>