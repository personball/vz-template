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
import { FormItem, Password, Submit } from '@formily/element-plus'
import { ChangePasswordInput, ProfileServiceProxy } from '~/api/ServiceProxies'
import axios from 'axios'
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

const form = createForm()

registerValidateRules({
    confirmNewPwd(value: any): any {
        if (value !== form.values.pwdNew) {
            return '两次输入不一致！'
        }
    }
})

const schema = {
    type: 'object',
    properties: {
        pwdOld: {
            type: 'string',
            required: true,
            title: t('common.pwdOld'),
            'x-component': 'Password',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                labelWidth: 100
            }
        },
        pwdNew: {
            type: 'string',
            required: true,
            title: t('common.pwdNew'),
            'x-component': 'Password',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                labelWidth: 100
            }
        },
        pwdConfirm: {
            type: 'string',
            required: true,
            title: t('common.pwdConfirm'),
            'x-component': 'Password',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
                labelWidth: 100
            },
            'x-validator': {
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

    // TODO: loading overlay
    // const client = new ProfileServiceProxy(undefined, axios);
    // const res = await client.changePassword(new ChangePasswordInput({
    //     currentPassword: value.pwdOld,
    //     newPassword: value.pwdNew
    // }))

    ElMessage.success(t('common.modifySuccess'))
    show.value = false;
}

</script>