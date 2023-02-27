<template>
    <div class="search-input-container flex gap-2 items-center bg-parent px-3 py-2 rounded-md w-2/4">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-primary-icon" />
      <input type="search" class="bg-transparent outline-none w-full" placeholder="Search user by name, email or date"
        @input="$emit('userSearchInput', $event)" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
[placeholder] {
  font-weight: bold;
  color: #8B83BA
}
</style>
