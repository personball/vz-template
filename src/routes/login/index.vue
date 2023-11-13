<template>
  <div class="vcbox max-w-md w-full bg-white p-5 rounded-lg">
    <el-form
      class="form"
      :model="model"
      :rules="rules"
      label-position="top"
      ref="loginForm"
      @keyup.enter="submit"
    >
      <h1 class="text-center text-2xl">ProjectName</h1>
      <el-form-item label="账号" prop="phoneNumber">
        <el-input
          class="text"
          v-model="model.phoneNumber"
          prefix-icon="user"
          size="large"
          clearable
          placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          class="text"
          v-model="model.password"
          size="large"
          prefix-icon="Lock"
          show-password
          clearable
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          size="large"
          type="primary"
          class="w-full mt-2"
          @click="submit"
        >
          {{ btnText }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { FormRules } from 'element-plus'

const loading = ref(false)

const model = reactive({
  phoneNumber: '',
  password: ''
})

const rules: FormRules = {
  phoneNumber: {
    required: true,
    message: '请输入账号',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入账号',
    trigger: 'blur'
  }
}
const btnText = 'login'

function submit() {
  alert(JSON.stringify(model))
}
</script>

<style>
.vcbox {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
}
</style>

<route lang="yaml">
meta:
  layout: login
  allowAnonymous: true
</route>
