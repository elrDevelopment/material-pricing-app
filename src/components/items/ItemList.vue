<template>
  <div class="w-full">
    <div class="text-3xl text-gray-700 col-span-12 flex justify-center">
      Full Item Inventory
    </div>
    <ItemHeader v-on:itemEvent="refreshData" class="my-5"></ItemHeader>
    <div class="grid grid-cols-12 mx-5 ">
      <template v-for="item in itemData">
        <ItemCard v-on:itemDeleted="refreshData" v-on:itemEvent="refreshData"  class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 m-5" :item-input="item" :key="item.id"></ItemCard>
      </template>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import ItemCard from '@/components/items/ItemCard'
import ItemHeader from '@/components/items/ItemHeader'
export default {
  name: 'ItemList',
  components: { ItemHeader, ItemCard },
  data: function () {
    return {
      itemData: []
    }
  },
  methods: {
    refreshData: function () {
      axios({
        method: 'get',
        url: 'https://mat-pricing.azurewebsites.net/api/item/list'
      }).then(response => {
        if (response.statusText !== 'OK') {
          alert('There was an error with this request')
          return false
        }
        this.itemData = response.data.sort((a, b) => (a.itemName > b.itemName) ? 1 : -1)
      })
    }
  },
  mounted () {
    this.refreshData()
  }
}
</script>

<style scoped>

</style>
