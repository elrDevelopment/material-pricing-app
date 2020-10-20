<template>

  <div v-if="showMaxItem" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden
      shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog"
           aria-modal="true" aria-labelledby="modal-headline">
        <div>
          <label for="itemName" class="block text-sm font-medium leading-5 text-gray-700">Item Name</label>
          <div class="mt-1 relative rounded-md shadow-sm ">
            <input id="itemName" v-model="itemName" v-on:keyup="inputChange" class="form-input flex-1 block w-full px-3 py-2 border  border-gray-300 rounded-md sm:text-sm sm:leading-5
                   focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Item 1" aria-describedby="item-name">
          </div>
          <p class="mt-2 text-sm text-gray-500" id="email-description">Enter in an item name to see its max cost</p>
        </div>
        <div v-if="showCost" class="m-5 ">
          <span class="text-2xl text-green-400">
            The max Cost for {{itemName}} is {{this.formatPrice(itemCost)}}
          </span>
        </div>
        <div class="mt-5 sm:mt-6 flex flex-row">
        <span class="flex w-full rounded-md shadow-sm mr-5">
          <button type="button" v-on:click="getMaxCost" class="inline-flex justify-center w-full rounded-md border border-transparent px-4
          py-2 bg-mk-blue text-base leading-6 font-medium text-white shadow-sm hover:bg-mk-green
          focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150
          sm:text-sm sm:leading-5">
            Get Max Cost
          </button>
        </span>
          <span v-on:click="closeConfirm" class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Close
          </button>
        </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'MaxItemCost',
  props: {
    showMaxItem: Boolean
  },
  methods: {
    closeConfirm () {
      this.$emit('toggle')
    },
    formatPrice: function (value) {
      const val = (value / 1).toFixed(2).replace(',', '.')
      return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    inputChange () {
      this.showCost = false
    },
    getMaxCost () {
      axios({
        method: 'get',
        url: `https://mat-pricing.azurewebsites.net/api/item/maxcost/${this.itemName}`,
        data: JSON.stringify(this.itemData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.status === 200) {
          this.itemCost = response.data
          this.showCost = true
        } else if (response.status === 204) {
          alert('That item does not exist. Check your entry and try again')
        } else {
          alert('There is an error with the process. Try again later')
        }
      })
    }
  },
  data: function () {
    return {
      itemCost: 0,
      itemName: '',
      showCost: false
    }
  }

}
</script>

<style scoped>

</style>
