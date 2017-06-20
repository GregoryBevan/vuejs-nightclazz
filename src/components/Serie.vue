<template>
  <li class="list-group-item" @click="clicked">
    <i class="glyphicon star" :class="[isFav ? 'glyphicon-star' : 'glyphicon-star-empty']"></i>
    <div class="media">
      <div class="media-left" v-if="serieDetails && serieDetails.image">
        <img class="media-object" :src="serieDetails.image.medium" />
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ serieDetails.name }}</h4>
        <div v-html="serieDetails.summary"></div>
      </div>

    </div>
  </li>
</template>

<script>
export default {
  props: [
    'serieDetails'
  ],
  methods: {
    clicked: function () {
      this.$emit('clicked', this.serieDetails)
    }
  },
  computed: {
    isFav: function () {
      return this.$store.state.favorites.find(item => item.id === this.serieDetails.id)
    }
  }
}
</script>

<style scoped>
.list-group-item {
    position: relative
}

.star {
    position: absolute;
    right: 10px;
    top: 10px;
}

.media {
  text-align: left;
}

.media-object {
  height: 64px;
}
</style>
