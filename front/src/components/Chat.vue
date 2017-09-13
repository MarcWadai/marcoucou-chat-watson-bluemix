(function(){

<template>
  <div class="chat-area">
      
      <div class="message-wrapper" >
        <div v-for="item in messages">
          <div class="single-message-container" v-bind:class="[(item.user === 'watson') ? 'left' : 'right']">
              <div class="chat-bubble" v-bind:class="[(item.user === 'watson') ? 'left' : 'right']">
                  <div class="single-message">{{item.text}}</div>                          
              </div>
          </div>
        </div>
      </div>
      <div class="question-wrapper">

        <input type="text" class="question-input" v-model="message"></input>     
        <button class="send-button" v-on:click="send"> SEND</button>
      </div>      
  </div>
</template>

<script>

import watson from '../service/watsonService'
import chatService from '../service/chatService'

export default {
  name: 'chat',
  data : function () {
    return {
      messages  :[chatService.buildMess('Please feel free to ask any question I will try my best to answer', 'watson')],
      message : ''
    }
  },
  methods: {
    send: function (event) {
      let messObj = chatService.buildMess(this.$data.message, 'user')
      // `this` inside methods points to the Vue instance
      if (this.$data.message.length > 0) {
        this.$data.messages.push(messObj)
        watson.sendMessage(messObj).then((res) => {
          console.log(res)
          if (res.body.output.text.length > 0) {
            this.$data.messages.push(chatService.buildMess(res.body.output.text[0], 'watson'))
          } else {
            this.$data.messages.push(chatService.buildMess('Sorry I didn\'t understand', 'watson'))
          }
          console.log(res)
        }).catch(err => {
            console.error(err)
        })
        this.$data.message = ''
      }
    }
  },
  computed : {
    isUser : function (item) {
      return {
        'left' : (item.user === 'watson'),
        'right' : (item.user === 'user')
      }
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
    max-width: 100%;
    color: white;
    align-items: flex-start;
  }

.chat-bubble.left {
  background-color: #3F526D;
  text-align: left;
  float: left;  
}

.chat-bubble.right {
  background-color: #BA6974;  
  color:white;
  float: right;  
  text-align: right;
}

.send-button{
    padding: 7px;
    background-color: #42b983;
    border: none;
    box-shadow: 2px 0px 10px 2px rgba(128,128,133,1);    
    color: white;
    width: 15%;
    height: 33px;
    margin-left: 15px;
    border-radius: 10px;
    margin-top: 4px;
}
.question-input{
    width: 85%;
    height: 28px;
    border-radius: 12px;    
    padding-left: 12px;
    font-size: 18px;    
}


.question-wrapper{
  height: 6%;
  width: 100%;
  display: flex;
  align-items: center;
}

.message-wrapper{
  height: 94%;
  width: 100%;
  display : flex;
  flex-direction: column;
  overflow: scroll;
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



}());
