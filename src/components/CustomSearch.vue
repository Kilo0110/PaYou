<template>
  <input type="search" class="bg-parent px-3 py-2 rounded-md w-2/4" placeholder="Search user by name, email or date" @input="$emit('userSearchInput', $event)" />
</template>

<script setup lang="ts">

</script>

<style scoped>
[placeholder] {
  font-weight: bold;
  color: #8B83BA
}
</style>
