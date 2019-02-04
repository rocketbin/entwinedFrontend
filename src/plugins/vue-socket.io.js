// import something here
import VueSocketIO from 'vue-socket.io'
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.use(new VueSocketIO({
      debug: true,
      connection: 'https://murmuring-basin-49204.herokuapp.com',
  }));
}
