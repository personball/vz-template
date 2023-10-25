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
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, Password, Submit } from '@formily/element-plus'

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
            }
        },
    },
}

const form = createForm()
const { SchemaField } = createSchemaField({
    components: {
        FormItem,
        Password,
    },
})

const onSubmit = (value: any) => {
    console.log(value)
}

</script>

<style>

/* 
TODO: 样式前缀最好自定义一下，text-align:left
formily-element-plus-form-item-error-help 
formily-element-plus-form-item-help 
formily-element-plus-form-item-help-enter 
formily-element-plus-form-item-help-enter-active */
</style>