<template>
  <div class=" bg-white rounded-lg shadow-md list-none">
    <div class="w-full flex items-center justify-between p-6 space-x-6">
      <div class="flex-1 truncate">
        <div class="flex items-center space-x-3">
          <h1 class="text-gray-900 text-sm leading-5 font-medium truncate">{{ itemData.itemName }}</h1>

        </div>
        <span class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">{{ itemData.itemCategory }}</span>
        <p class="mt-1 text-gray-500 text-sm leading-5 truncate">{{ itemData.itemDescription }}</p>
        <p class="mt-1 text-gray-500 text-sm leading-5 truncate">{{ formatPrice(itemData.cost) }}</p>
      </div>
      <div class="w-24 h-24 bg-gray-300 rounded-md flex-shrink-0 overflow-hidden">
        <RandomPicture :src-url="itemData.imageSrcUrl"></RandomPicture>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="-mt-px flex">
        <div class="w-0 flex-1 flex border-r border-gray-200">
          <a v-on:click="openEditModal" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5
          text-mk-gray font-medium border border-transparent rounded-bl-lg hover:bg-mk-green hover:text-white focus:outline-none
          focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
            <font-awesome-icon class="text-mk-blue hover:text-white" :icon="['fas', 'edit']"></font-awesome-icon>
            <span class="ml-3">Edit</span>
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a v-on:click="openConfirm" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5
          text-mk-gray font-medium border border-transparent rounded-br-lg hover:bg-mk-green hover:text-white focus:outline-none
          focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
            <font-awesome-icon class="text-red-500 hover:text-white" :icon="['fas', 'trash-alt']"></font-awesome-icon>
            <span class="ml-3">Delete</span>
          </a>
        </div>
      </div>
    </div>
    <ItemDetail :show="showDetail"  :update-item-data="itemData" v-on:toggle="showDetail = false"></ItemDetail>
    <DeleteConfirm :showDelete="showDelete"  v-on:confirmDelete="deleteItem" v-on:toggle="showDelete = false"></DeleteConfirm>
  </div>
</template>

<script>
import RandomPicture from '@/components/RandomPicture'
import ItemDetail from '@/components/items/ItemDetail'
import axios from 'axios'
import DeleteConfirm from '@/components/DeleteConfirm'
export default {
  name: 'ItemCard',
  components: { DeleteConfirm, ItemDetail, RandomPicture },
  props: {
    itemInput: {}
  },
  methods: {
    formatPrice: function (value) {
      const val = (value / 1).toFixed(2).replace(',', '.')
      return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    openEditModal: function () {
      this.showDetail = true
    },
    deleteItem: function () {
      axios({
        method: 'delete',
        url: `https://mat-pricing.azurewebsites.net/api/item/${this.itemData.id}`
      }).then(response => {
        if (response.data) {
          this.$emit('itemDeleted')
          this.showDetail = false
        } else {
          alert('There was an error with the delete')
        }
      })
    },
    openConfirm: function () {
      this.showDelete = true
    }

  },
  data: function () {
    return {
      itemData: {},
      showDetail: false,
      showDelete: false
    }
  },
  created () {
    this.itemData = this.itemInput
  }

}
</script>

<style scoped>

</style>
