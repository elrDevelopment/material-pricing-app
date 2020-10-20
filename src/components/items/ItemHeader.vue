<template>
  <div class="flex justify-center">
     <span class="inline-flex shadow-sm rounded-md">
      <button type="button" v-on:click="openMaxItem" class="relative inline-flex items-center px-4 py-2 rounded-l-md border
      border-gray-300 bg-mk-blue text-sm leading-5 font-medium text-white hover:bg-mk-green
      focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100
      active:text-gray-700 transition ease-in-out duration-150">
        Max Cost by Item
      </button>
      <button type="button" v-on:click="openAllMax" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-mk-blue
      text-sm leading-5 font-medium text-white hover:bg-mk-green focus:z-10 focus:outline-none
      focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        Max Cost all Items
      </button>
      <button type="button" v-on:click="openAdd" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border
      border-gray-300 bg-mk-blue text-sm leading-5 font-medium text-white hover:bg-mk-green focus:z-10
      focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700
      transition ease-in-out duration-150">
        Add Item
      </button>
    </span>
    <ItemDetail :show="showAdd" v-on:toggle="showAdd = false" v-on:itemEvent="$emit('itemEvent')"></ItemDetail>
    <MaxItemCost :show-max-item="showMaxItem" v-on:toggle="showMaxItem = false"></MaxItemCost>
    <ItemGroupedCost :show-grouped-items="showGroupedItems" v-on:toggle="showGroupedItems = false"></ItemGroupedCost>
  </div>

</template>

<script>
import ItemDetail from '@/components/items/ItemDetail'
import MaxItemCost from '@/components/items/MaxItemCost'
import ItemGroupedCost from '@/components/items/ItemGroupedCost'
export default {
  name: 'ItemHeader',
  components: { ItemGroupedCost, MaxItemCost, ItemDetail },
  data: function () {
    return {
      showAdd: false,
      showMaxItem: false,
      showGroupedItems: false
    }
  },
  methods: {
    openAdd () {
      this.showAdd = true
    },
    openMaxItem () {
      this.showMaxItem = true
    },
    openAllMax () {
      this.showGroupedItems = true
    }
  }
}
</script>

<style scoped>

</style>
