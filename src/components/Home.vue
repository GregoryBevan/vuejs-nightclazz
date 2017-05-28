<template>
  <!-- Component html code here -->
  <p>{{ series }}</p>
</template>

<script>
// Add imports here
export default {
  // Component definition
  data () {
    return {
      series: 'Liste des séries'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
