<template>
  <div class="chat-area">
      
      <div class="message-wrapper" >
        <div class="single-message-container left" v-for="item in messages">
          <div class="chat-bubble left">
              <div class="single-message">{{item.text}}</div>                          
          </div>
        </div>
      </div>
      <div class="question-wrapper">
        <input type="text" class="question-input" v-model="message"></input>     
        <button v-on:click="send"> SEND</button>
      </div>      
  </div>
</template>

<script>
import moment from 'moment'

/*
  eslint no-alert: "error"
*/
export default {
  name: 'chat',
  data () {
    return {
        messages  :[{
          text : 'Please feel free to ask any question I will try my best to answer',
          user : 'user',
          date : '2017-09-10 20:32:11'
        }],
        message : ''
    }
  },
  methods: {
    send: function (event) {
      // `this` inside methods points to the Vue instance
      this.$data.messages.push({
        text : this.$data.message,
        user : 'user',
        date : moment().format('YYYY-MM-DD HH:mm:ss')
      })
      console.log(this.$data.messages)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .single-message {
    font-size: medium;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow: auto;
  }

   .single-message-container{
    display: flex;
    flex-direction: column;
    float: left;
    margin: 5px 45px 5px 0px;
    
  }

   .single-message-container.left{
    display: flex;
    flex-direction: column;
    float: left;
    margin-left: 45px;
  }

   .single-message-container.right{
    display: flex;
    flex-direction: column;
    float: right;
    align-items: flex-end;
    margin-right: 45px;
    width: 80%;
  }

 .chat-bubble {
    border-radius: 5px;
    display: inline-flex;
    padding: 10px 18px;
    position: relative;    
    max-width: 80%;
    color: white;
    align-items: flex-start;
  }

.chat-bubble.left {
  background-color: #3F526D;
  
  float: left;  
}

.chat-bubble.right {
  background-color: blueviolet;  
  color: #000;
  float: right;  
}

.question-input{
    width: 92%;
    height: 28px;
    border-radius: 12px;    
    padding-left: 12px;
    font-size: 18px;    
}

.question-wrapper{
  height: 6%;
  width: 100%;
}

.message-wrapper{
  height: 94%;
  width: 100%;
  display : flex;
  flex-direction: column;
}

.chat-area{
  height: 87%;
  margin: 0px 32px 0px 32px;
  border-radius: 12px;
  /* background-color: #095D4D; */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 15px;
}
</style>


