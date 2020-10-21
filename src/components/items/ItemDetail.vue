<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto ">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
      <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl
      transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6"
           role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="mt-10 sm:mt-0">

            <div class="mt-5 md:mt-0 ">

                <div class="overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6">
                        <div class="w-1/3 mx-auto rounded-lg overflow-hidden">
                          <RandomPicture :srcUrl="imageUrl"></RandomPicture>
                        </div>

                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label for="item_name" class="block text-sm font-medium leading-5 text-gray-700">Item Name</label>
                        <input id="item_name" v-model="itemData.itemName" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300
                        rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="item_desc" class="block text-sm font-medium leading-5 text-gray-700">Item Description</label>
                        <input id="item_desc" v-model="itemData.itemDescription" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300
                        rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="item_cat" class="block text-sm font-medium leading-5 text-gray-700">Item Category</label>
                        <select v-model="itemData.itemCategory" id="item_cat" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300
                        bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                          <option value="Products">Products</option>
                          <option value="Clothing">Clothing</option>
                          <option value="Kitchen/Bath">Kitchen/Bath</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Outdoors">Outdoors</option>
                          <option value="Hardware">Hardware</option>
                          <option value="Hardware">item</option>
                        </select>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="item_cost" class="block text-sm font-medium leading-5 text-gray-700">Item Cost</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 sm:text-sm sm:leading-5">
                            <font-awesome-icon :icon="['fas', 'dollar-sign']"></font-awesome-icon>
                          </span>
                          <input id="item_cost" v-model="itemData.cost" type="number" step="1.25"   class="form-input flex-1 block w-full px-3 py-2 border  border-gray-300 rounded-none rounded-r-md sm:text-sm sm:leading-5
                                    focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="item_src" class="block text-sm font-medium leading-5 text-gray-700">Item Image Url</label>
                        <input id="item_src" v-model="itemData.imageSrcUrl" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300
                        rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <button v-on:click="loadImage" class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md mt-6
                                  text-white bg-mk-blue shadow-sm hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue active:bg-mk-blue transition duration-150 ease-in-out">
                          Test Image
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-row justify-end">
                    <button v-on:click="closeConfirm" class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md mr-5
                    text-white bg-mk-gray shadow-sm hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue active:bg-mk-green transition duration-150 ease-in-out">
                      Close
                    </button>
                    <button v-on:click="submit" class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md
                    text-white bg-mk-blue shadow-sm hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue active:bg-mk-green transition duration-150 ease-in-out">
                      Submit Item
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import RandomPicture from '@/components/RandomPicture'
export default {
  name: 'ItemDetail',
  components: { RandomPicture },
  props: {
    show: Boolean,
    updateItemData: Object
  },
  data: () => {
    return {
      itemData: {
        id: 0,
        itemName: '',
        itemDescription: '',
        cost: 0.00,
        itemCategory: '',
        imageSrcUrl: ''
      },
      imageUrl: 'https://via.placeholder.com/450',
      editing: false
    }
  },
  created () {
    if (this.updateItemData) {
      this.itemData = this.updateItemData
      this.editing = true
      this.imageUrl = this.itemData.imageSrcUrl
    }
  },
  methods: {
    loadImage: function () {
      this.imageUrl = this.itemData.imageSrcUrl
    },
    resetData: function () {
      this.itemData = {
        id: 0,
        itemName: '',
        itemDescription: '',
        cost: 0.00,
        itemCategory: '',
        imageSrcUrl: ''
      }
    },
    closeConfirm: function () {
      if (!this.editing) this.resetData()
      this.$emit('toggle')
    },
    submit: function () {
      this.itemData.cost = parseFloat(this.itemData.cost)

      axios({
        method: this.editing ? 'put' : 'post',
        url: 'https://mat-pricing.azurewebsites.net/api/item',
        data: JSON.stringify(this.itemData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.statusText === 'OK') {
          this.$emit('itemEvent')
          this.closeConfirm()
        } else {
          alert('There is an error in the form, please review and re-submit')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
