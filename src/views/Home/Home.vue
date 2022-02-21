<template>
  <div class="main">
    <div class="mine-card">
      <div class="avatar-box">
        <img src="../../assets/jugg.jpg" alt="avatar">
      </div>
      <span class="avatar-name">ShepherdHang</span>
      <p>个人介绍。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
    </div>
    <div class="mine-like">
      <span>我喜欢</span>
      <p>...</p>
    </div>
    <div class="pic-1">
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
  color: #ffffff;
  min-width: 700px;
  max-width: 1920px;
  min-height: 800px;
  margin: 150px 100px 100px 100px;
  // background: linear-gradient(90deg,rgba(0,0,0,.5),rgba(0,0,0,.3));
  position: relative;
  .mine-card {
    box-shadow: 1px 1px 2px 5px rgba(0,0,0,.5);
    height: 700px;
    width: 40%;
    position: absolute;
    right: 0;
    text-align: center;
    .avatar-box {
      display: block;
      height: 150px;
      margin-top: 150px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
    span {
      display: block;
      font-size: 20px;
      margin-top: 20px;
      line-height: 20px;
    }
    p {
      height: 200px;
      font-size: 20px;
      margin: 50px;
      word-break: break-word;
    }
  }
  .mine-like {
    box-shadow: 1px 1px 2px 5px rgba(0,0,0,.5);
    height: 300px;
    width: 45%;
    position: absolute;
    left: 10px;
    text-align: center;
    letter-spacing: 5px;
    background: url('../../assets/bg17.jpg') no-repeat;
    background-size: 100% auto;
    span {
      font-size: 30px;
      line-height: 30px;
      position: absolute;
      left: 20px;
      top: 20px;
    }
    p {
      font-size: 20px;
      height: 200px;
      word-break: break-word;
      position: absolute;
      top: 70px;
      left: 20px;
    }
  }
  .pic-1 {
    box-shadow: 1px 1px 2px 5px rgba(0,0,0,.5);
    position: absolute;
    bottom: 100px;
    left: 0;
    width: 50%;
    height: 300px;
    background: url('../../assets/bg04.jpg') no-repeat;
    background-size: 100% auto;
    }
}
</style>
