<template>
  <header>
    <nav class="navbar">
      <div class="logo-box">
        <a class="logo" target="_blank">
          <video class="logo-vidio" preload="preload" muted="true" autoplay autobuffer="true" loop="loop" poster>
            <source type="video/webm" src="https://gamevideo.wmupd.com/dota2media/media/coverlogo180517.webm">
            <source type="video/mp4" src="https://gamevideo.wmupd.com/dota2media/media/coverlogo180517.mp4">
          </video>
        </a>
      </div>
      <ul class="top-nav">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/DOTA2jia">DOTA2+</router-link>
        </li>
        <li>
            <router-link to="/speech">Speech</router-link>
        </li>
        <li>
            <router-link to="/contact">Contact</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>

  </header>

  <router-view />
</template>

<script>
export default {}
</script>

<style lang="less">

header {
  background: url('./assets/header.png') center top no-repeat;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 90px;
  z-index: 9999;
  min-width: 1220px;
  a {
      color: #ffffff;
  }
  .navbar {
    position: relative;
    width: 1220px;
    margin: 0 auto;
    height: 90px;
    padding-left: 213px;
    overflow: hidden;
    .logo-box {
      position: absolute;
      top: -3px;
      left: 14px;
      width: 189px;
      height: 83px;
      overflow: hidden;
      .logo {
        display: block;
        height: 100%;
      }
    }
    .top-nav {
      overflow: hidden;
      li:first-child {
        margin-left: 0;
      }
      li {
        width: 128px;
        float: left;
        text-align: center;
        margin-left: 35px;
        padding-top: 23px;
        padding-bottom: 2px;
        a {
          display: block;
          font-size: 16px;
          color: #dedede;
          letter-spacing: 1px;
          line-height: 100%;
          position: relative;
        }
      }
    }
  }
}

body {
  background: url('./assets/bodybg.jpg') no-repeat 50% 0;
  background-attachment: fixed;
  background-size: 100% auto;
  background-color: #010101;
  min-width: 1300px;
  max-width: 1920px;
  min-height: 1300px;
  margin: 0 auto;
  padding: 0;
  font-size: 12px;
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  text-size-adjust: 100% !important;
}

</style>
