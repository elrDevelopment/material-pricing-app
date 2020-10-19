<template>
  <div class="app bg-gray-50 min-h-screen" id="app ">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
<style>

</style>
