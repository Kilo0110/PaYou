<template>
  <header class="header px-4 pt-5 pb-3 mx-5 flex items-center justify-between border-b-2 border-stroke-text">
    <menu class="view-filter-menu flex items-center gap-2">
      <li class="view-filter"><button class="view-filter__btn active text-primary-variant"
          id="all-filter-btn">All</button></li>
      <li class="view-filter"><button class="view-filter__btn text-primary-variant" id="paid-filter-btn">Paid</button>
      </li>
      <li class="view-filter"><button class="view-filter__btn text-primary-variant" id="unpaid-filter-btn">Unpaid</button>
      </li>
      <li class="view-filter"><button class="view-filter__btn text-primary-variant"
          id="overdue-filter-btn">Overdue</button></li>
    </menu>
    <div class="payable-amount-container text-primary-variant">
      <p>Total Payable Amount: <span class="amount-span text-accent font-bold text-lg">${{totalAmountPayable}}</span> USD
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const totalAmountPayable =  store.getters.getTotalPayableAmount.toFixed(2)
const filter = computed(()=> store.state.filter)

onMounted(()=> {
  const filterBtns = document.querySelectorAll('.view-filter__btn')
  filterBtns.forEach(btn => {
    if (btn.id === `${filter.value}-filter-btn`) {
      btn.classList.add('active')
    } else btn.classList.remove('active')
    btn.addEventListener('click', ev =>{
      const siblings = btn.closest('.view-filter-menu')?.querySelectorAll(`.view-filter__btn:not(#${btn.id})`)!
      siblings.forEach(sibling => {
        sibling.classList.remove('active')
      });
      btn.classList.add('active')
      let newFilter = btn.id.split('-filter-btn').join('')
      store.dispatch('updateFilter', newFilter)
    })
  });
})

</script>

<style scoped lang="scss">
.view-filter__btn.active {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 3px;
    background: #25213B;
  }
}
</style>
