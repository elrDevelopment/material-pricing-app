<template>
  <div v-if="showGroupedItems" class="fixed z-10 inset-0 overflow-y-auto ">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden
      shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6" role="dialog"
           aria-modal="true" aria-labelledby="modal-headline">

        <div class="flex flex-row justify-center mt-10">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-8/12">
            <h2 class="text-2xl text-gray-600 w-8/12 mx-auto my-2">Item max cost grouped by name</h2>
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                      Item Name
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                      Max Cost
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <template v-for="(item, index) in itemCost"  >
                    <tr  :class=" ( index % 2)===0 ? 'bg-gray-100' : 'bg-white'" :key="index" class="hover:bg-blue-100">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        {{ item.itemName }}
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {{ formatPrice(item.maxCost) }}
                      </td>
                    </tr>
                  </template>
                  <!-- More rows... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 sm:mt-6 flex flex-row justify-end">
          <span class="rounded-md shadow-sm w-1/4">
            <button v-on:click="close" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4
            py-2 bg-mk-blue text-base leading-6 font-medium text-white shadow-sm hover:bg-mk-green
            focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150
            sm:text-sm sm:leading-5">
              Go back to Item List
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
  name: 'ItemGroupedCost',
  props: {
    showGroupedItems: Boolean
  },
  methods: {
    close () {
      this.$emit('toggle')
    },
    formatPrice: function (value) {
      const val = (value / 1).toFixed(2).replace(',', '.')
      return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data: function () {
    return {
      itemCost: []
    }
  },

  mounted () {
    axios({
      method: 'get',
      url: 'https://mat-pricing.azurewebsites.net/api/item/maxcost',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 200) {
        this.itemCost = response.data.sort((a, b) => (a.itemName > b.itemName) ? 1 : -1)
      } else {
        alert('There is an error with the process. Try again later')
      }
    })
  }
}
</script>

<style scoped>

</style>
