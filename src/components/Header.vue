<template>
  <div class="relative z-20">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">

    </div>

    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#" aria-label="Home">
                <font-awesome-icon class="text-mk-green fa-3x" :icon="['fas', 'tags']" />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button v-on:click="hideMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500
                transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            <router-link to="/" class="font-medium text-mk-gray hover:text-mk-green transition duration-150 ease-in-out">Home</router-link>
            <router-link to="/Items" class="font-medium text-mk-gray hover:text-mk-green transition duration-150 ease-in-out">Items</router-link>
            <router-link to="/About" class="font-medium text-mk-gray hover:text-mk-green transition duration-150 ease-in-out">About</router-link>
            <router-link to="/Contact" class="font-medium text-mk-gray hover:text-mk-green transition duration-150 ease-in-out">Contact</router-link>
          </div>
          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6
            font-medium rounded-md text-white bg-mk-blue hover:bg-mk-green focus:outline-none focus:border-mk-green
            focus:shadow-outline-indigo active:bg-gray-50 active:bg-mk-green transition duration-150 ease-in-out">
              Log in
            </a>
          </span>
          </div>
        </nav>
      </div>
      <div v-if="toggle" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
          <div  class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <font-awesome-icon class="text-mk-green fa-2x" :icon="['fas', 'tags']" />
              </div>
              <div class="-mr-2">
                <button v-on:click="hideMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500
                transition duration-150 ease-in-out" aria-label="Close menu">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <router-link to="/" v-on:click.native="hideMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-mk-gray hover:text-mk-green
              hover:bg-gray-50 focus:outline-none focus:text-mk-green focus:bg-gray-50 transition duration-150
              ease-in-out" role="menuitem">Home</router-link>

              <router-link to="/Items" v-on:click.native="hideMobileMenu" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-mk-gray
              hover:text-mk-green hover:bg-gray-50 focus:outline-none focus:text-mk-green focus:bg-gray-50 transition
              duration-150 ease-in-out" role="menuitem">Items</router-link>

              <router-link to="/About" v-on:click.native="hideMobileMenu"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-mk-gray
              hover:text-mk-green hover:bg-gray-50 focus:outline-none focus:text-mk-green focus:bg-gray-50 transition
              duration-150 ease-in-out" role="menuitem">About</router-link>

              <router-link to="Contact" v-on:click.native="hideMobileMenu"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-mk-gray
              hover:text-mk-green hover:bg-gray-50 focus:outline-none focus:text-mk-green focus:bg-gray-50 transition
              duration-150 ease-in-out" role="menuitem">Contact</router-link>
            </div>
            <div>
              <a href="#" class="block w-full px-5 py-3 text-center font-medium text-mk-blue bg-gray-50
              hover:bg-mk-gray hover:text-mk-blue focus:outline-none focus:bg-gray-100 focus:text-mk-green
              transition duration-150 ease-in-out" role="menuitem">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Header',
  data: function () {
    return {
      toggle: false
    }
  },
  methods: {
    hideMobileMenu: function (event) {
      this.toggle = !this.toggle
    }
  }
}
</script>
