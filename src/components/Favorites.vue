<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul class="list-group">
      <serie v-for="favorite in favorites" :serieDetails="favorite"></serie>
    </ul>
  </div>
</template>

<script>
import Serie from '@/components/Serie'

export default {
  data () {
    return {
      title: 'Vos favoris',
      favorites: []
    }
  },
  mounted () {
    this.favorites = this.$store.state.favorites
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>

</style>
