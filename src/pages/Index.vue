<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>
<style>
</style>

<script>
export default {
  name: 'PageIndex',
  sockets: {
    connect: function () {
      console.log('connected to server')
    },
    join: function (data) {
      console.log(data)
    },
    pingme: function (data) {
      console.log(data)
    }
  }
}
</script>
