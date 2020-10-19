<template>
  <div class="w-full flex flex-row flex-wrap justify-center mx-auto">
    <template v-for="item in itemData">
      <ItemCard v-on:itemDeleted="refreshData" class="w-1/3 m-5" :item-input="item" :key="item.id"></ItemCard>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import ItemCard from '@/components/items/ItemCard'
export default {
  name: 'ItemList',
  components: { ItemCard },
  data: function () {
    return {
      itemData: []
    }
  },
  methods: {
    refreshData: function () {
      axios({
        method: 'get',
        url: 'https://mat-pricing-api.azurewebsites.net/api/item/list'
      }).then(response => {
        if (response.statusText !== 'OK') {
          alert('There was an error with this request')
          return false
        }
        this.itemData = response.data
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
