<template>
  <button class="rounded-md px-3 py-2" :class="isColored ? 'bg-accent text-primary-bg font-bold' : 'border-accent border'">
    <slot name="button-content"></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  isColored: boolean
}>()
</script>

<style scoped>

</style>
