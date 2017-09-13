
import Vue from 'Vue'
import Constant from './constants.js'
import VueResource from 'vue-resource'

Vue.use(VueResource)
export default {
  sendMessage (message) {
     return new Promise((resolve, reject) => {
       Vue.http.post(Constant.API_URL + 'watson', message).then(res => {
          resolve(res)
       }, err => {
          reject(err)
       })
     })
  }
}
