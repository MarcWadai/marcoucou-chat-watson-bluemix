(function(){
<template>
  <div class="main-list">
    <div class="select-wrapper">
      <h1>Since how many days before you want to select the messages ? </h1>
      <v-select class="select" v-model="selected" :options="['1','2','3','4','5', '6', '7', '8', '9', '10']"></v-select>
    </div>
    <h3 class="result-title">Results :</h3>
    <div v-for="item in list">
      <div class="item-message">
        <div>
          <div class="item-title">Question asked : </div>
          <span>{{item.input.text}}</span>
        </div>
        <div>          
          <div class="item-title">Result : </div>
          <span>{{item.output}}</span>
        </div>
        <div class="item-date">
          {{item.date}}
        </div>
      </div>            
    </div>      
  </div>
</template>

<script>
import chatService from '../service/chatService'

export default {
  name: 'list',
  data : function () {
    return {
      list : [],
      selected : 1
    }
  },
  mounted: function () {
    var vm = this
    chatService.getMessages(vm.$data.selected).then(function (res) {
      console.log(res)
      vm.$data.list = res.body
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-list{
  background-color: #16303F;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 0;
  color: white;
  display: block;
  overflow-y: scroll;
  flex-direction: column;
  display: flex;
}
.item-message{
  background-color: #3C5869;
  margin : 16px;
  padding : 8px;
  text-align: left;
}
.item-title{
  color: #A49059;
  font-size: 18px;
    
}
.select{
  background: white;  
  color: black;
}
.select-wrapper{
  margin: 30px 16px 50px 16px;
}

.result-title{
  text-align: left;
  margin-left: 16px
}
.item-date{
  text-align: right;
}
</style>
}());