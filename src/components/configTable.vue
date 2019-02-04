<template>
  <q-table
    class  = "full-width"
    hide-header
    hide-bottom
    :dark = "getTheme === 'dark'"
    grid
    color="white"
    title="Configs"
    :data="tableData"
    :columns="columns"
    row-key="name"
  >
  <div
    slot="item"
    slot-scope="props"
    class = "full-width"    
  >
    <q-card class="transition-generic full-width">
      <q-card-separator />
      <q-card-main class="q-pa-none">
        <q-list no-border>
          <q-item v-for="col in props.cols" :key="col.name">
            <q-item-main>
              <q-item-tile label>{{ col.label }}</q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile>{{ col.value }}</q-item-tile>
            </q-item-side>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
  </div>
</q-table>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
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
    tableData () {
      return [
        {
          'activeGallery': `Gallery ${this.config.activeGallery}`,
          'theme': this.config.theme,
          'bg': this.config.background,
          'onDemo': this.config.demo ? 'true' : 'false',
        }
      ]
    }
  },
  data () {
    return {
      columns: [
        { name: 'activeGallery', label: 'Active Gallery', field: 'activeGallery', sortable: true },
        { name: 'theme', label: 'Theme', field: 'theme', sortable: true },
        { name: 'bg', label: 'Background', field: 'bg'},
        { name: 'demo', label: 'Demo', field: 'onDemo'}
      ]
    }
  }
}
</script>