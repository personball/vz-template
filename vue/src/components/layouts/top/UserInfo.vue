<template>
    <ElDropdown trigger="click">
        <div class="flex items-center px-10px pt-1">
            <el-icon>
                <IconUser></IconUser>
            </el-icon>
            <!-- <img src="@/assets/imgs/avatar.jpg" alt="" class="w-[calc(var(--logo-height)-25px)] rounded-[50%]" /> -->
            <span class="<lg:hidden text-14px pl-[5px] text-[var(--top-header-text-color)]">
                {{ appStore.currentUser?.name }}</span>
        </div>
        <template #dropdown>
            <ElDropdownMenu>
                <ElDropdownItem>
                    <!-- 个人资料-->
                    <span>个人资料</span>
                    <!-- <div @click="toDocument">{{ t('common.document') }}</div> -->
                </ElDropdownItem>
                <ElDropdownItem>
                    <!-- 修改密码-->
                    <span>修改密码</span>
                    <!-- <div @click="lockScreen">{{ t('lock.lockScreen') }}</div> -->
                </ElDropdownItem>
                <ElDropdownItem divided>
                    <!-- 退出登录-->
                    <span>退出登录</span>
                    <!-- <div @click="loginOut">{{ t('common.loginOut') }}</div> -->
                </ElDropdownItem>
            </ElDropdownMenu>
        </template>
    </ElDropdown>
</template>

<script lang="ts" setup>
import IconUser from '~icons/ep/user'

const appStore = useAppStore()

</script>