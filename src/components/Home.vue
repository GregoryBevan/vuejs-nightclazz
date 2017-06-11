<template>
  <!-- Component html code here -->
  <div class="container">
    <h1>{{ title }}</h1>
    <ul class="list-group">
      <serie v-for="serie in series" :serie-details="serie" @clicked="toggleFavorites($event)"></serie>
    </ul>
  </div>
</template>

<script>
import Serie from '@/components/Serie'
import seriesService from '@/services/series.service'
import favoritesService from '@/services/favorites.service'

// Add imports here
export default {
  // Component definitiona
  data () {
    return {
      title: 'Liste des séries',
      series: []
    }
  },
  created () {
    seriesService.getSeries().then(response => (this.series = response.data.map(item => item.show)))
  },
  methods: {
    toggleFavorites: function (serie) {
      !favoritesService.list.find(item => item.id === serie.id) ? favoritesService.addFavorite(serie) : favoritesService.removeFavorite(serie)
    }
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>

</style>
