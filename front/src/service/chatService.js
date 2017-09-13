import moment from 'moment'

export default {
    buildMess : function (message, type) {
        return {
            text : message,
            user : type,
            date : moment().format('YYYY-MM-DD HH:mm:ss')
          }
    }
}
