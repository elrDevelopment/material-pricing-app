<template>
  <div>
     <span class="relative z-0 inline-flex shadow-sm rounded-md">
      <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border
      border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500
      focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100
      active:text-gray-700 transition ease-in-out duration-150">
        Max Cost by Item
      </button>
      <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white
      text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none
      focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
        Max Cost all Items
      </button>
      <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border
      border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10
      focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700
      transition ease-in-out duration-150">
        Add Item
      </button>
    </span>
    <ItemDetail :show="showAdd"></ItemDetail>
    <MaxItemCost :showMax="showMaxItem"></MaxItemCost>
    <ItemGroupedCost :showGroup="showGroupedItems"></ItemGroupedCost>
  </div>


</template>

<script>
import ItemDetail from "@/components/items/ItemDetail";
import MaxItemCost from "@/components/items/MaxItemCost";
import ItemGroupedCost from "@/components/items/ItemGroupedCost";
export default {
  name: 'ItemHeader',
  components: {ItemGroupedCost, MaxItemCost, ItemDetail},
  data: function () {
     return {
       showAdd: false,
       showMaxItem: false,
       showGroupedItems: false
     }
  }
}
</script>

<style scoped>

</style>
