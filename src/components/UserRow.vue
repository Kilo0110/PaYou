<template>
  <tr @dblclick="() => showDetails = !showDetails" class="border-b-2 border-[#D9D5EC]" :id="props.user.id.toString()">
    <td class="h-full py-3 checkbox-cell pl-5 flex gap-2 items-center">
      <input @change="addPendingState" type="checkbox" name="paid-status-checkbox"
        :checked="props.user.paymentStatus === 'paid'? true: false" id=""
        class="block border-2 border-primary-icon text-primary-icon"
        :disabled="props.user.paymentStatus === 'paid' ? true : false">
      <font-awesome-icon icon="fa-solid fa-circle-chevron-down" class="text-primary-icon block" />
    </td>
    <td class="py-3 name-cell">
      <p class="user-name text-sm text-primary-text">{{props.user.name}}</p>
      <p class="user-email text-xs text-primary-variant">{{props.user.email}}</p>
    </td>
    <td class="py-3 activity-status-cell">
      <template v-if="props.user.activityStatus === 'active'">
        <div
          class="activity-status-state flex gap-2 items-center text-[#4A4AFF] bg-[#E6E6F2] rounded-full px-2 py w-max text-sm">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-xs text-[#4A4AFF]" />
          {{activityStatus}}
        </div>
        <p class="last-login text-xs text-primary-variant">Last login: <span
            class="last-login-date">{{lastLoginTime}}</span>
        </p>
      </template>
      <template v-if="props.user.activityStatus === 'inactive'">
        <div
          class="activity-status-state flex gap-2 items-center text-primary-variant bg-[#E6E6F2] rounded-full px-2 py w-max text-sm">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-primary-icon text-xs text-primary-variant" />
          {{activityStatus}}
        </div>
        <p class="last-login text-xs text-primary-variant">Last login: <span
            class="last-login-date">{{lastLoginTime}}</span>
        </p>
      </template>
    </td>
    <td class="py-3 payment-status-cell">
      <template v-if="props.user.paymentStatus === 'paid'">

        <div
          class="payment-status-state flex gap-2 items-center bg-[#CDFFCD] text-positive rounded-full px-2 py w-max text-sm">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-positive text-xs" />
          {{paymentStatus}}
        </div>
        <p class="payment text-xs text-primary-variant">{{paymentStatus}} on <span class="payment-date">15/APR/2020</span>
        </p>
      </template>
      <template v-if="props.user.paymentStatus === 'unpaid'">

        <div
          class="payment-status-state flex gap-2 items-center bg-[#FFECCC] text-[#965E00] rounded-full px-2 py w-max text-sm">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-[#CE8500] text-xs" />
          {{paymentStatus}}
        </div>
        <p class="payment text-xs text-primary-variant">{{paymentStatus}} on <span class="payment-date">15/APR/2020</span>
        </p>
      </template>
      <template v-if="props.user.paymentStatus === 'overdue'">

        <div
          class="payment-status-state flex gap-2 items-center bg-[#FFE0E0] text-negative rounded-full px-2 py w-max text-sm">
          <font-awesome-icon icon="fa-solid fa-circle" class="text-negative text-xs" />
          {{paymentStatus}}
        </div>
        <p class="payment text-xs text-primary-variant">{{paymentStatus}} on <span class="payment-date">15/APR/2020</span>
        </p>
      </template>
    </td>
    <td class="py-3 amount-cell flex flex-col text-primary-variant text-right">
      <span class="amount text-primary-text text-sm">
        {{ `$${props.user.amountDue}` }}
      </span>
      <span class="currency text-xs text-primary-variant">USD</span>
    </td>
    <td class="py-3 view-more-cell gap-2 text-primary-variant text-right pr-5">
      <span class="amount pr-3 text-xs text-primary-variant">View More</span>
      <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
    </td>
  </tr>
  <tr v-if="showDetails">
    <td colspan="6" class="user-activity-table-wrapper">
      <table class="user-activity-table w-full">
        <thead class="user-activity-table__header bg-parent text-sm">
          <tr class="py-2 border-y-2">
            <th class="text-left font-normal px-16 py-2 text-primary-variant">Date</th>
            <th class="text-left font-normal px-16 py-2 text-primary-variant">User Activity</th>
            <th class="text-left font-normal px-16 py-2 text-primary-variant">
              Detail
              <font-awesome-icon icon="fa-solid fa-circle-info" />
            </th>
          </tr>
        </thead>
        <tbody v-if="!props.user.userActivity">
          <td colspan="6" class="border-y-2 text-center bg-stripe-bg py-8 text-primary-variant text-base">
            NO RECORDS FOUND
          </td>
        </tbody>
        <tbody v-else>
          <tr v-for="entry in props.user.userActivity" :key="entry.date" class="bg-stripe-bg border-y">
            <td class="activity-date text-primary-variant px-16 py-3 text-sm">
              {{ useDateFormatter(entry.date) }}
            </td>
            <td class="activity text-primary-variant px-16 py-3 text-sm">
              {{ entry.activity }}
            </td>
            <td class="activity-details text-primary-variant px-16 py-3 text-sm">
              {{ entry.details }}
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import moment from 'moment'
import type User from '@/interface/User'
import useDateFormatter from '@/composables/useDateFormatter';

const props = defineProps<{
  user: User
}>()

const showDetails = ref(false)

const activityStatus = computed(()=> props.user.activityStatus.charAt(0).toUpperCase() + props.user.activityStatus.slice(1))

const lastLoginTime = useDateFormatter(props.user.lastLoginTime)

const paymentStatus = computed(()=> props.user.paymentStatus.charAt(0).toUpperCase() + props.user.paymentStatus.slice(1))

const addPendingState = (ev: Event)=> {
  // @ts-ignore
  const parentRow = ev.target.closest('tr') as HTMLTableRowElement
  parentRow.dataset.pendingPayment = 'true'
  console.log(parentRow)
}
</script>

<style scoped>
</style>
