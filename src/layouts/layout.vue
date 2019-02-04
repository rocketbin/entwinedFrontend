<template>
  <q-layout view="lHh Lpr lFf">

    <q-layout-drawer
      :content-class="aside.class"
      v-model="aside.leftDrawerOpen"
      :side="aside.side"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>
        <div class = "flex bg-black" style = "align-items:center;justify-content:center;padding:10px">
          <img src="statics/logo.svg" alt="">
        </div>
        <div style = "margin-top:35px" v-if = "config.demo === 'true'">
          <p>
            Fusce et eleifend dui. Donec viverra augue sit amet imperdiet auctor. Sed sed fringilla urna. Ut lacinia dignissim blandit. Maecenas sed luctus nulla. Etiam in iaculis lorem. Suspendisse nisl mi, egestas quis velit non, tincidunt efficitur lectus. Nam eget massa nec arcu viverra bibendum. Curabitur eu massa vel est venenatis mollis. Sed pharetra odio eget dapibus facilisis. Curabitur ac blandit lectus, nec ornare dolor. Sed sollicitudin imperdiet orci, at fermentum arcu cursus vel. In sed elit ultricies, dictum nulla quis, aliquam velit. In tincidunt magna nec neque rutrum, scelerisque lacinia nunc convallis. Proin fringilla magna nisl, ut ornare magna semper at. Fusce at ante elit. Vestibulum finibus mattis luctus. Morbi posuere lacus non imperdiet rhoncus. Donec non odio nec leo blandit vulputate ac eu nisi. In hac habitasse platea dictumst. In tempor, elit id dapibus dictum, enim orci interdum odio, in venenatis lectus dolor eu ligula. Sed dapibus fermentum augue id ultrices. Nam vehicula tellus at imperdiet maximus. Nullam at massa vulputate, convallis lorem a, tristique nunc. Praesent in felis et tortor porta rhoncus ac nec turpis. Nulla iaculis at sapien id convallis. In nec mi mauris.
          </p>
        </div>
        <div style = "margin-top:35px" v-else>
          <consTable />
        </div>
        </q-list-header>


      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { Notify } from 'quasar'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'MyLayout',
  computed: {
    ...mapGetters(['config']),
    getTheme: {
      get () {
        return this.config.theme;
      },
      set (value) {
        this._config({'theme': value});
      }
    },
    getActiveGallery: {
      get () {
        return this.config.activeGallery
      },
      set (value) {
        this._config({'activeGallery': value});
      }
    },
    getBackground: {
      get () {
        return this.config.background
      },
      set (value) {
        this._config({'background': value});
      }
    },
    getDemo: {
      get () {
        return this.config.demo
      },
      set (value) {
        this._config({'demo': value});
      }
    }
  },
  data () {
    return {
      aside: {
        class: 'bg-black',
        side: "left",
        leftDrawerOpen: true,
      }
    }
  },
  sockets: {
    prompt: function (data) {
      Notify.create({
        message: data.text,
        type: 'positive',
        icon: 'wifi',
        position: 'bottom-right'
      })
    },
    showDemo: function (data) {
      console.log(data)
      this.getDemo = data.demo
    },
    setLayout: function (data) {
      if(Number(data.layout) === 1) {
        this.aside.side = 'left';
      } else {
        this.aside.side = 'right';
      }
      if(Number(data.loadImageGroup) === Number(1)) {
        this.getActiveGallery = 1
      } else {
        this.getActiveGallery = 2
      }
      if(data.color) {
        this.getBackground = data.color;
        this.aside.class = 'bg-' + data.color;
        if(data.color === 'black') {
          this.getTheme = 'dark';
        } else {
          this.getTheme = 'white';
        }
      }
    },
  },
  methods: {
    ...mapActions(['_config'])
  }
}
</script>

<style>
</style>
