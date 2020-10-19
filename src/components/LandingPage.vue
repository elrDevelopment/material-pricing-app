<template>
      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28 z-10">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-mk-gray sm:text-5xl sm:leading-none md:text-6xl">
            Item cost data to enrich your
            <br class="xl:hidden">
            <span class="text-mk-green">online business</span>
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Tracking your items is uber important for your business. With the item tracking app, your life just got easier.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <router-link to="/Items"   class="w-full flex items-center justify-center px-8 py-3 border border-transparent
              text-base leading-6 font-medium rounded-md text-white bg-mk-blue hover:bg-mk-green focus:outline-none
              focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </router-link>
            </div>
          </div>
        </div>
      </main>

</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
