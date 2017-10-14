
import Vue from 'Vue'
import Constant from './constants.js'
import VueResource from 'vue-resource'

Vue.use(VueResource)
export default {
  sendMessage : function (message) {
     return new Promise(function (resolve, reject) {
       Vue.http.post(Constant.API_URL + Constant.WATSON, message).then(function (res) {
          resolve(res)
       }, function (err) {
          reject(err)
       })
     })
    }
}
