// import something here
import gallery from 'src/components/gallery/gallery'
import gallery2 from 'src/components/gallery/gallery2'
import consTable from 'src/components/configTable'
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.component('gallery', gallery)
  Vue.component('consTable', consTable)
  Vue.component('gallery2', gallery2)
  
}
