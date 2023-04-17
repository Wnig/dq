<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './fonts/style.css'
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  /* CSS reset */
  html{color:#000;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family: 'PingFangSC-Thin',"Microsoft YaHei","微软雅黑","sans-serif";font-size: 12px;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,input,button,textarea,p,th,td,strong{padding:0;margin:0;font-family: 'PingFangSC-Thin',"Microsoft YaHei","微软雅黑","sans-serif";}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0;}
  a{text-decoration:none; color:#999; outline:none;}/*此处待添加默认链接颜色*/
  var,em,strong{font-style:normal;}
  em,strong,th,var{font-style:inherit;font-weight:inherit;}
  li{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4{font-size:100%;font-weight:normal;}
  input,button,textarea,select,option{font-family:inherit; font-size:inherit;font-style:inherit;font-weight:inherit;}
  input,button,textarea,select{*font-size:100%;}
  .clearfix:after {content:"\200B"; display:block; height:0; clear:both; }
  .clearfix { *zoom:1; }

  html {
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
  #app {
  }
  .pc {
    width: 100%;
    overflow: hidden;
  }
  .selection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .top {
    display: none;
    position: fixed;
    right: 3.96vw;
    bottom: 50vh;
    z-index: 99999;
    cursor: pointer;
  }
  .top img {
    width: 4.53vw;
    height: 4.53vw;
  }
  
  /*箭头*/
  .down-con {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -18.39vh;
  }
  .down-con .down-btn {
    width: 1.82vw;
    height: 1.82vw;
    margin: auto;
    border: 0.16vw solid #5EABFF;
    color: #fff;
    z-index: 100;
    cursor: pointer;
    -webkit-animation: fall 2s infinite;
      animation: fall 2s infinite;
  }
  .down-con .down {
    display: block;
    width: 4.01vw;
    height: 4.01vw;
    margin: auto;
    background: url('../src/assets/pcdingbu@3x.svg') center center no-repeat;
    background-size: 100% 100%;
  }

  .title {
    position: relative;
    color: #000;
    text-align: left;
    font-size: 1.82vw;
    font-family: 'PingFangSC-Semibold';
  }
  .title h3 {
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 2.6vw;
    color: #000000;
  }
  .title p {
    text-align: center;
    opacity: 0.5;
    font-family: PingFangSC-Light;
    font-size: 1.46vw;
    color: #000000;
  }
  
  .title:after {
    content: "";
    position: absolute;
    bottom: -2.5vh;
    left: 0;
    right: 0;
    margin: auto;
    width: 7.97vw;
    height: 0.93vw;
  }
  
  .selection-9 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    width: 0.83vw;
    height: 0.83vw;
    border: 1px solid #00CC9D;
    margin: 0 1.2vw;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: 1;
  }
  .selection-9 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
    opacity: 1;
    background: #00CC9D;
  }

  .swiper-scrollbar {
    width: 20.4vw;
    height: 5px;
    background: rgba(255,255,255,1);
  }

  .swiper-container-horizontal>.swiper-scrollbar {
    position: static;
    height: 5px;
    width: 20.16vw;
    margin: auto;
    z-index: 50;
  }
  .swiper-scrollbar-drag {
    background: #00CC9D;
  }

  .mob {
    display: none;
  }

  /*向下效果*/
  @-webkit-keyframes fall {
    0% {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
    }
    60% {
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: rotate(-225deg);
      -moz-transform: rotate(-225deg);
      -ms-transform: rotate(-225deg);
      -o-transform: rotate(-225deg);
    }
  }
  @keyframes fall {
    0% {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
    }
    60% {
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: rotate(-225deg);
      -moz-transform: rotate(-225deg);
      -ms-transform: rotate(-225deg);
      -o-transform: rotate(-225deg);
    }
  }
  
  /*第一屏圆圈360旋转*/
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
    60% {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
    60% {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }

  /*漂浮*/
  @-webkit-keyframes opac {
    0% {
      opacity: 1;
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      -ms-transform: translateY(0px);
      -o-transform: translateY(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  @keyframes opac {
    0% {
      opacity: 1;
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      -ms-transform: translateY(0px);
      -o-transform: translateY(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
 

  @media screen and (max-width: 750px) {
    .mob {
      display: block;
    }
    .pc {
      display: none;
    }
    .top {
      display: none;
      position: fixed;
      right: 7.47vw;
      bottom: 50vh;
      z-index: 99999;
      cursor: pointer;
    }
    .top img {
      width: 8vw;
      height: 8vw;
    }
    /*箭头*/
    .down-con {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -18.39vh;
    }
    .down-con .down-btn {
      width: 3.82vw;
      height: 3.82vw;
      margin: auto;
      border: 0.16vw solid #5EABFF;
      color: #fff;
      z-index: 100;
      cursor: pointer;
      -webkit-animation: fall 2s infinite;
        animation: fall 2s infinite;
    }
    .down-con .down {
      display: block;
      width: 8.01vw;
      height: 8.01vw;
      margin: auto;
      background: url('../src/assets/pcdingbu@3x.svg') center center no-repeat;
      background-size: 100% 100%;
    }
    .title {
      position: relative;
      color: #000;
      text-align: left;
      font-size: 1.82vw;
      font-family: 'PingFangSC-Semibold';
    }
    .title h3 {
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 5.33vw;
      color: #000000;
    }
    .title p {
      text-align: center;
      opacity: 0.5;
      font-family: PingFangSC-Light;
      font-size: 3.2vw;
      color: #000000;
    }
    
    .title:after {
      content: "";
      position: absolute;
      bottom: -2.5vh;
      left: 0;
      right: 0;
      margin: auto;
      width: 28.8vw;
      height: 1.33vw;
    }
    .discr {
      margin-top: 11.52vh;
      font-size: 5.33vw;
    }

    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
      width: 2.67vw;
      height: 2.67vw;
      margin: 0 3.73vw;
      display: inline-block;
      border-radius: 100%;
      background: rgba(193, 193, 193, 1);
      opacity: 0.3;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
      opacity: 1;
      background: #62C8F2;
    }

    #swiper01 .swiper-pagination {
      bottom: 6vh;
    }
    #swiper02 .swiper-pagination {
      bottom: 0vh;
    }
    #swiper02 .swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 0 1.86vw;
    }

    .selection-6 .swiper-pagination  {
      position: absolute;
      left: 0;
      bottom: -3.75vh;
      width: 100%;
    }

    .selection-6 .swiper-pagination .swiper-pagination-bullet {
      width: 2.13vw;
      height: 2.13vw;
      border-radius: 50%;
      margin: 0 3.47vw;
    }

    .selection-7 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
      width: 2.67vw;
      height: 2.67vw;
      margin: 0 3.73vw;
      display: inline-block;
      border-radius: 100%;
      background: #fff;
      opacity: 0.3;
    }
    .selection-7 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
      opacity: 1;
      background: #fff;
    }



  }
</style>
