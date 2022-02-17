<template>
  <div class="main">
    <div class="mine-card">
      hhhh
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="less" scoped>
.main {
  min-width: 700px;
  max-width: 1920px;
  min-height: 1300px;
  margin: 150px 100px;
  background: linear-gradient(90deg,rgba(0,0,0,.5),rgba(0,0,0,.3));
  position: relative;
  .mine-card {
    border: 1px solid red;
    height: 700px;
    width: 40%;
    position: absolute;
    right: 0;
  }
}
</style>
