<template>
  <!-- Component html code here -->
  <div class="container">
    <h1>{{ title }}</h1>
    <ul class="list-group">
      <serie></serie>
      <serie></serie>
      <serie></serie>
      <serie></serie>
    </ul>
  </div>
</template>

<script>
import Serie from '@/components/Serie.vue'

// Add imports here
export default {
  // Component definitiona
  data () {
    return {
      title: 'Liste des séries'
    }
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>

</style>
