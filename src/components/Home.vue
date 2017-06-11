<template>
  <!-- Component html code here -->
  <div class="container">
    <h1>{{ title }}</h1>
    <ul class="list-group">
      <serie v-for="serie in series" :serie-details="serie"></serie>
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
      series: []
    }
  },
  created () {
    seriesService.getSeries().then(response => (this.series = response.data.map(item => item.show)))
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>

</style>
