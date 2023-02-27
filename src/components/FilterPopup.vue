<template>
  <div class="filter-popup bg-white rounded-xl drop-shadow-xl px-3 py-4 absolute left-5 top-[120%] text-sm">
    <p class="capitalize text-primary-variant py-3 px-2">Sort by:</p>
    <menu class="filter-menu text-primary-text w-48">
      <li class="filter-option flex justify-between px-2 py-1 rounded-md hover:bg-parent">
        <label for="default-filter">Default</label>
        <input @change="setFilter($event)" type="radio" name="filter-checkbox" id="default-filter">
      </li>
      <li class="filter-option flex justify-between px-2 py-1 rounded-md hover:bg-parent">
        <label for="first-name-filter">First Name</label>
        <input @change="setFilter($event)" type="radio" name="filter-checkbox" id="first-name-filter">
      </li>
      <li class="filter-option flex justify-between px-2 py-1 rounded-md hover:bg-parent">
        <label for="last-name-filter">Last Name</label>
        <input @change="setFilter($event)" type="radio" name="filter-checkbox" id="last-name-filter">
      </li>
      <li class="filter-option flex justify-between px-2 py-1 rounded-md hover:bg-parent">
        <label for="email-filter">Email</label>
        <input @change="setFilter($event)" type="radio" name="filter-checkbox" id="email-filter">
      </li>
    </menu>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore()

const setFilter = (ev: Event) => {
  const checkbox = ev.target as HTMLInputElement
  const targetFilter = checkbox.id.split('-filter')[0]
  store.dispatch('updateSortBy', targetFilter)
}
</script>

<style scoped>

</style>
