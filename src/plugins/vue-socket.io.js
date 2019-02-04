// import something here
import VueSocketIO from 'vue-socket.io'
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.use(new VueSocketIO({
      debug: true,
      connection: 'http://192.168.254.250:3000',
  }));
}
