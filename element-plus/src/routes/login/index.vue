<!-- <template>
    <div class="loginPage h-full bg-slate-200">
    <div class="vcbox max-w-md w-full bg-white p-5 rounded-lg">
      <el-form
        class="form"
        :model="model"
        :rules="rules"
        label-position="top"
        ref="loginForm"
        @keyup.enter="submit"
      >
        <h1 class="text-center text-2xl">优盾数字平台</h1>
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
  </div>
</template> -->
<template>
  <div>
  login page
  </div>
</template>
<route lang="yaml">
meta:
  layout: login
  requireAuth: false
</route>