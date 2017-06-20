<template>
  <!-- Component html code here -->
  <div class="container">
    <h1>{{ title }}</h1>
    <input type="text" v-model="search" class="form-control" placeholder="Filtrer..."/>
    <br>
    <ul class="list-group">
      <serie v-for="serie in filteredSeries" :serie-details="serie" @clicked="toggleFavorites($event)"></serie>
    </ul>
  </div>
</template>

<script>
import Serie from '@/components/Serie'
import seriesService from '@/services/series.service'

// Add imports here
export default {
  // Component definitiona
  data () {
    return {
      title: 'Liste des séries',
      series: [],
      search: ''
    }
  },
  created () {
    seriesService.getSeries().then(response => (this.series = response.data.map(item => item.show)))
  },
  methods: {
    toggleFavorites: function (serie) {
      !this.$store.state.favorites.find(item => item.id === serie.id)
          ? this.$store.commit('addFavorite', serie)
          : this.$store.commit('removeFavorite', serie)
    }
  },
  components: {
    serie: Serie
  },
  computed: {
    filteredSeries: function () {
      return this.search === '' ? this.series : this.series.filter(serie => serie.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style scoped>

</style>
