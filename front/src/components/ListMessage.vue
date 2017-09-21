(function(){
<template>
  <div class="main-list">
      <h1>ON GOING</h1>
  </div>
</template>

<script>
export default {
  name: 'list',
  data : function () {
    return {
      list : 'Welcome to Your Vue.js App'
    }
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
</style>
}());