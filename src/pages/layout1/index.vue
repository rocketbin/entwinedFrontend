<template>
  <q-page class="full-width " style = "min-height:100vh">
    <gallery v-if="config.activeGallery === 1"/>
    <gallery2 v-else/>
  </q-page>
</template>
<style>
</style>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'PageIndex',
  computed:{
    ...mapGetters(['config'])
  }
}
</script>
