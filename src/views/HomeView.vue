<template>
  <Headercomponent />
  <main class="main-content bg-white mx-5 mt-4 py-5 rounded-xl shadow-xl min-h-[90vh]">
    <div class="main-content__header flex justify-start gap-2 px-5 relative">
      <CustomButton :isColored="false" @click="()=> showFilter = !showFilter">
        <template #button-content>
          <font-awesome-icon icon="fa-solid fa-filter" class="text-primary-icon" />
          Filter
        </template>
      </CustomButton>
      <CustomSearch @user-search-input="searchForUser" />
      <CustomButton :isColored="true" class="ml-auto" @click="changePaymentStatus">
        <template #button-content>
          PAY DUES
        </template>
      </CustomButton>
      <FilterPopup v-if="showFilter" />
    </div>
    <table class="main-content-table w-full border-collapse mt-5">
      <thead class="bg-stripe-bg">
        <tr>
          <th class=" py-3 pl-5 uppercase text-left text-sm">
            <input type="checkbox" name="paid-status-checkbox" id="" class="border-2 border-primary-icon">
          </th>
          <th class="text-primary-variant py-3 uppercase text-left text-sm">Name</th>
          <th class="text-primary-variant py-3 uppercase text-left text-sm">User Status</th>
          <th class="text-primary-variant py-3 uppercase text-left text-sm">Payment Status</th>
          <th class="text-primary-variant py-3 uppercase text-right text-sm">Amount</th>
          <th class="pr-5 text-primary-icon py-3 uppercase text-right text-sm">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </th>
        </tr>
      </thead>
      <tbody>
        <UserRow v-for="user in filteredData" :key="user.id" :user="user" />
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import Headercomponent from "@/components/HeaderComponent.vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomSearch from "@/components/CustomSearch.vue";
import UserRow from "@/components/UserRow.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import type User from "@/interface/User";
import FilterPopup from "@/components/FilterPopup.vue";

const showFilter = ref(false)

const store = useStore()
const searchQuery = computed(()=> store.state.searchQuery)
const sortBy = computed(()=> store.state.sortBy)

const filteredData = computed(() => {
  let filter = store.state.filter
  let data = store.state.users;

  // Filter by payment status
  switch (filter) {
    case 'paid':
      data = data.filter((user: User) => user.paymentStatus === 'paid')
      break
    case 'unpaid':
      data = data.filter((user: User) => user.paymentStatus === 'unpaid')
      break
    case 'overdue':
      // Assuming payments are overdue if user is unpaid and their ID is odd
      data = data.filter((user: User) => user.paymentStatus === 'overdue')
      break
  }

  // Search by name or email
  if (searchQuery.value) {
    data = data.filter((user: User) =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Sort by name or email
  switch (sortBy.value) {
    case 'first-name':
      data = data.sort((a: User, b: User) => {
        const aFirstName = a.name.toLowerCase().split(' ')[0]
        const bFirstName = b.name.toLowerCase().split(' ')[0]
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        if (aFirstName < bFirstName) return -1
        if (aFirstName > bFirstName) return 1
        return 0
      })
      break
    case 'last-name':
      data = data.sort((a: User, b: User) => {
        const aLastName = a.name.toLowerCase().split(' ')[1]
        const bLastName = b.name.toLowerCase().split(' ')[1]
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        if (aLastName < bLastName) return -1
        if (aLastName > bLastName) return 1
        return 0
      })
      break
    case 'email':
      data = data.sort((a: User, b: User) => {
        const aEmail = a.email.toLowerCase()
        const bEmail = b.email.toLowerCase()
        if (aEmail < bEmail) return -1
        if (aEmail > bEmail) return 1
        return 0
      })
      break
  }

  return data
})

const changePaymentStatus = (ev: Event) => {
  // @ts-ignore
  const mainContent = ev.target.closest('.main-content')

  const usersPendingPaymentChange = mainContent.querySelectorAll("[data-pending-payment]") as NodeListOf<HTMLTableCellElement>

  usersPendingPaymentChange.forEach(user => {
    let userID = parseInt(user.id)
    store.dispatch('updateUser', {
      id: userID,
      data: {
        paymentStatus: 'paid'
      }
    })
  });
}

const searchForUser = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const query = input.value
  store.commit('updateSearchQuery', query);
}

</script>
