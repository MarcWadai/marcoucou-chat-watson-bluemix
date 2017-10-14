import moment from 'moment'
import Vue from 'Vue'
import Constant from './constants.js'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    buildMess : function (message, type) {
        return {
            text : message,
            user : type,
            date : moment().format('YYYY-MM-DD HH:mm:ss')
          }
    },
    getMessages : function (nbDays) {
        return new Promise(function (resolve, reject) {
            var url = Constant.API_URL + Constant.USER_LIST + '?days=' + nbDays
            Vue.http.get(url).then(function (res) {
                resolve(res)
             }, function (err) {
                reject(err)
             })
        })
    }
}
