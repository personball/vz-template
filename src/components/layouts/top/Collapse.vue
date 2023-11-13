<template>
  <div @click="toggleCollapse">
    <el-icon
      :color="color"
      class="el-icon v-icon cursor-pointer"
      :size="18"
      style="font-size: 18px; --color: var(--top-header-text-color)"
    >
      <IconFold v-if="!collapse"></IconFold>
      <IconUnfold v-else></IconUnfold>
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import IconUnfold from '~icons/ant-design/menu-unfold-outlined'
import IconFold from '~icons/ant-design/menu-fold-outlined'

const props = defineProps<{
  color?: string
}>()

const appStore = useAppStore()
const collapse = computed(() => appStore.getCollapse)

const toggleCollapse = () => {
  const collapsed = unref(collapse)
  appStore.setCollapse(!collapsed)
}
</script>
