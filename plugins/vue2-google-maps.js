import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyBVgi_w_E9I5aXYM248cVDdFcCdop2uANw',
    key: 'your-api-key',
    libraries: 'places'
  }
})
