<template>
  <div class="main-chat">
    <h1 id="title-chat">What do you want to know about Marc ?</h1>    
    <h3>This is a bot powered by IBM Watson, ask him question about Marc :)</h3>    
    
    <div class="chat-wrapper">
      <chat></chat>
    </div>
    
    <div class="main-chat-footer">
    <ul>
      <li>Marc SIRISAK @ Copyright</li>
      <li><a href="http://marcoucou.com/" target="_blank">M's Blog</a></li>            
    </ul>
    </div>
  </div>
</template>

<script>
import Chat from './Chat'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {Chat}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-wrapper{  
  height: 90%;  
  position : relative;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.main-chat{
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
}

.main-chat-footer{
  position : fixed;
  bottom : 0;
  width: 100%;
  text-align: center;
}

#title-chat{
  margin : 24px 0px 25px 0px;
  font-size: 40px;

}
</style>


