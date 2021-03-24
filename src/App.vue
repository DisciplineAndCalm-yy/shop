<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #f1f1f1;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.w1170{
  width: 1170px;
}
clearfix::after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>