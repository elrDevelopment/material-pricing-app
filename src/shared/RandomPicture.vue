<template>
      <img  :src="img" alt="Random image from unsplash" />
</template>

<script>
// require syntax
import axios from 'axios'
const APP_ACCESS_KEY = '563492ad6f917000010000018f2734a8ae3b4a918b9cbb2cc4185fb7'

export default {
  name: 'RandomPicture',
  props: {
    size: String
  },
  data: function () {
    return {
      img: 'https://via.placeholder.com/150'
    }
  },
  methods: {
    getRandomFromPexels () {
      axios({
        method: 'get',
        url: `https://api.pexels.com/v1/search?query=keyboard&per_page=1&page=${Math.floor(Math.random() * 1501)}`,
        headers: { Authorization: APP_ACCESS_KEY }
      }).then(response => {
        var photosSrc = response.data.photos[0].src
        if (this.size === 'big') {
          this.img = photosSrc.large
        } else if (this.size === 'small') {
          this.img = photosSrc.landscape
        } else {
          this.img = photosSrc.tiny
        }
      })
    }
  },
  mounted () {
    this.getRandomFromPexels()
  }
}
</script>

<style scoped>

</style>
