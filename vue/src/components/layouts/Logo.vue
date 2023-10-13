<template>
    <div>
        <router-link class="v-logo flex !h-[var(--logo-height)] items-center cursor-pointer pl-8px relative decoration-none overflow-hidden" to="/">
            <img src="/element-plus-logo-small.svg" class="w-[calc(var(--logo-height)-10px)] h-[calc(var(--logo-height)-10px)]" />
            <div v-if="show" class="ml-10px text-16px font-700 text-[var(--logo-title-text-color)]">
                {{ title }}
            </div>
        </router-link>
    </div>
</template>

<script lang="ts" setup>

const title = 'VZero Admin'
const show = ref(true)

</script>

