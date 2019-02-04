<template>
  <q-carousel class="text-white" style = "width:100%:min-height:100vh" autoplay arrows quick-nav infinite color="white" quick-nav-position="top">
    <q-carousel-slide v-for="gal in gallery" class = "full-height" :img-src="gal.img">
      <div :class="bgs" >
        <div :class="'q-display-1 ' + themeClass" >{{ gal.label }}</div>
        <small :class="themeClass">{{ gal.sublabel }}</small>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['config']),
      getTheme () {
        return this.config.theme;
      },
      activeGallery () {
        if (this.config.activeGallery === 1) {
          this.active = 'gallery1'
        } else {
          this.active = 'gallery2'
        }
      },
      bgs () {
        if(this.getTheme === 'dark') {
          return 'absolute-bottom custom-caption text-center darkerBg';
        } else {
          return 'absolute-bottom custom-caption text-center lighterBg';
        }
      },
      themeClass () {
        if(this.getTheme === 'dark') {
          return 'darkClass';
        } else {
          return 'whiteClass';
        }
      }
    },
    data () {
      return {
        gallery: [
          {
            img: 'statics/images/load2/1.jpg',
            label: 'Aliquam in imperdiet magna',
            sublabel: 'Phasellus laoreet blandit metus, sed ultrices quam fringilla vel. Nullam a maximus lorem, ut fringilla magna. Donec euismod dignissim interdum. Donec pharetra arcu at condimentum gravida. Phasellus dictum gravida ipsum, a tempus justo porta nec.'
          },
          {
            img: 'statics/images/load2/2.jpg',
            label: 'Praesent pharetra,',
            sublabel: 'mauris vel fermentum congue, urna orci dignissim orci, at ultrices risus eros at dui. Donec sapien tellus, dapibus non arcu sed, hendrerit blandit nisi. '
          },
          {
            img: 'statics/images/load2/3.jpg',
            label: 'Lorem ipsum dolor sit amet',
            sublabel: 'consectetur adipiscing elit. Praesent porttitor ultrices ante sed porttitor. Donec sollicitudin, massa ut porta venenatis, diam lacus gravida erat, quis ullamcorper leo sem id lectus.'
          }
        ]
      }
    },
    sockets: {
      setLayout: function (data) {
        if(data.color === 'black') {
          this.theme = 'dark'
        } else {
          this.theme = 'white'
        }
      },
    }
  }
</script>
<style>
.darkClass {
  color:white;
}
.whiteClass {
  color:grey;
}
.darkerBg {
  background:rgba(0,0,0,0.8);
}
.lighterBg {
  background:rgba(255,255,255, 0.8);
}
</style>