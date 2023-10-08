<template>
    <el-container>
        <el-header>
            <FormKit type="form"  >
                <FormKitSchema :schema="searchSchema" />
            </FormKit>
        </el-header>
        <el-main>

            
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>

const searchSchema: any = [
    {
        $formkit: 'el-input',
        name: 'filter',
        value: 'd'
    }
]



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