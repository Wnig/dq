<template>
    <header>
      <div class="pc">
        <div class="cont">
        <a class="logo" @click="jump" ><img src="../assets/PClogoq@3x.svg" alt=""></a>
        <div class="nav-btn-con">
          <div @click="isShow" class="nav-btn"></div>
        </div>  
        <div class="nav" v-if="selShow">
          <div class="nav_bg" v-show="selShow"></div>
          <div class="nav-btn_">
            <div class="nav-btn-con_">
              <div @click="isShow" class="nav-btn-sel"></div>
            </div>
          </div>
            <nav>
              <ul>
                <li v-for="(navs, index) in navData" v-bind:class="{'btn_sel': index == num}" @click="selMenus(index)">
                  <router-link :to="navs.links">{{navs.tit}}</router-link>
                </li>
                <li class="backstage">
                  <a href="http://test.xingzuke.cn/dq">后台登录</a>
                </li>
              </ul>
            </nav>
        </div>
        </div>
      </div>
      <div class="mob">
        <div class="cont">
        <a class="logo" @click="jump" ><img src="../assets/PClogoq@3x.svg" alt=""></a>
        <div class="nav-btn-con">
          <div @click="isShow" class="nav-btn"></div>
        </div>  
        <transition name='fade'>
          <div class="nav" v-show="selShow" @click="isShow">
            <transition name='slide'>
                <nav v-if="selShow">
                  <ul>
                    <li v-for="(navs, index) in navData" v-bind:class="{'btn_sel': index == num}" @click="selMenus(index)">
                        <router-link :to="navs.links">{{navs.tit}}</router-link>
                      </li>
                      <li>
                        <a href="http://test.xingzuke.cn/dq">后台登录</a>
                      </li>
                  </ul>
                  <div class="code">
                    <img src="../assets/gzh.jpg" alt="">
                    <p>长按图片识别公众号</p>
                  </div>
                </nav>
            </transition>
          </div>
        </transition>
        </div>
      </div>
    </header>
</template>

<script>
let storage = window.sessionStorage;
export default {
  name: 'Header',
  data () {
    return {
      navData: [
          {tit: '首页', links:'/'},
          {tit: '大气教育', links:'/Education'},
          {tit: '招商政策', links:'/Join'},
        ],
        num: '',
        selShow: false
    }
  },
  created: function() {
    if(storage['selNumspaik']) {
      this.num= storage['selNumspaik'];
    } else {
      this.num = 0;
    };
  },
  methods: {
    selMenus(index) {
      storage['selNumspaik'] = index;
      this.selShow = false;
    },
    isShow() {
      //点击：左侧菜单栏 收起-展开
      this.selShow = ! this.selShow;
    },
    jump() {
      storage['selNumspaik'] = 0;
      this.selShow = false;
      this.$router.push({path: '/'});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    display: flex;
    justify-content: center;
    height: 14.36vw;
  }
  .pc {
    display: flex;
    width: 88%;
  }
  .cont {
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
  .logo {
    width: 8.95vw;
    cursor: pointer;
  }
  .logo img {
    display: block;
    width: 100%;
  }
  .nav-btn-con {
    width: 90%;
    cursor: pointer;
  }
  .nav-btn-con .nav-btn {
    float: right;
    width: 2.81vw;
    height: 7.34vw;
    margin-top: -2vw;
    background: url('../assets/lie.svg') center center no-repeat;
    background-size: 100% 100%;
    -webkit-transition: all 0.2s;
        transition: all 0.2s;
  }
  
  .nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
  }
  
  .nav-btn_ {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10.36vw;
    margin-bottom: 5vh;
    cursor: pointer;
  }
  .nav-btn_ .nav-btn-sel {
    float: right;
    width: 2.81vw;
    height: 7.34vw;
    margin-top: -2vw;
    background: url('../assets/close.svg') center center no-repeat;
    background-size: 100% 100%;
  }
  .nav-btn-con_ {
    width: 88%;
  }
  
  nav ul {
    padding-left: 16.91vw;
  }
  nav li {
    display: block;
    margin-bottom: 10vh;
  }
  nav li a {
    color: #fff;
    font-size: 2.34vw;
    font-family: 'PingFangSC-Light';
    -webkit-transition: font-size 0.2s;
        transition: font-size 0.2s;
  }
  nav a {
    display: block;
    line-height: 2.76vw;
    cursor: pointer;
  }
  nav .btn_sel a {
    color: #16A5EC;
    font-size: 2.86vw;
    font-family: 'PingFangSC-Semibold';
  }
  nav .backstage {
    /*padding-top: 6.85vh;*/
  }
  @media screen and (max-width: 750px) {
    .pc {
      display: none;
    }
    .mob {
      display: flex;
      width: 85%;
    }
    header {
      height: 28.36vw;
    }
    .cont {
      display: inline-flex;
      align-items: center;
      width: 100%;
    }
    .logo {
      width: 20.95vw;
      cursor: pointer;
    }
    .nav-btn-con .nav-btn {
      float: right;
      width: 22.67vw;
      height: 9.07vw;
      margin-top: -2vw;
      margin-right: -6vw;
    }
    .nav {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.65);
      z-index: 9999;
      opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    nav {
      width: 62.93vw;
      height: 100vh;
      background: #fff;
      transform: translate3d(0, 0, 0);
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .3s
    }

    .slide-enter, .slide-leave-to {
        transform: translate3d(-100%, 0, 0);
    }

    nav ul {
      padding-top: 10.33vh;
      padding-left: 0;
    }
    nav li {
      text-align: center;
      margin-bottom: 9.5vh;
    }
    nav p {
      margin-bottom: 1.05vh;
      color: #797979;
      font-size: 3.2vw;
    }
    nav h2 {
      color: #000000;
      line-height: 6.67vw;
      font-size: 6.67vw;
      font-family: 'PingFangSC-Semibold';
    }
    nav .hot {
      position: absolute;
      left: 9.2vw;
      bottom: 7.95vh;
    }
    nav li a {
      color: #666666;
      line-height: 7.33vw;
      font-size: 5.33vw;
    }
    nav .btn_sel a {
      font-size: 6.67vw;
    }
    nav .code {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;    

    }
    nav .code img {
      display: block;
      width: 40vw;
      margin-bottom: 1.11vh;
    }
    nav .code p {
      font-family: PingFangSC-Thin;
      font-size: 3.2vw;
      color: #222222;
      text-align: center;
    }

  }

  @media screen and (min-width: 751px) {
    .nav_bg {
      position: absolute;
      right: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: url('../assets/pcbeiji4.jpg') center center no-repeat;
      background-size: cover;
      z-index: -1;
      -webkit-animation: scaleIn 2s ease-in-out;
        animation: scaleIn 2s ease-in-out;
    }
    nav {
      height: 100%;
      -webkit-animation: opac 2s ease-in-out;
        animation: opac 2s ease-in-out;
    }


    nav li a:hover {
      color: #16A5EC;
      font-size: 2.86vw;
      font-family: 'PingFangSC-Semibold';
      -webkit-transition: font-size 0.2s;
          transition: font-size 0.2s;
    }

    .nav-btn-con .nav-btn:hover {
      background: url('../assets/pcdianji@3x.svg') center center no-repeat;
      background-size: 100% 100%;
      -webkit-transition: all 0.2s;
        transition: all 0.2s;
    }


    @-webkit-keyframes scaleIn {
        0% {
          width: 0vw;
          height: 0vw;
          border-radius: 50%;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
          transform: scale(1);
        }
        10% {
          width: 10vw;
          height: 10vw;
          border-radius: 50%;
          -webkit-transform: scale(10);
            -moz-transform: scale(10);
            -ms-transform: scale(10);
            -o-transform: scale(10);
          transform: scale(10);
        }
        20% {
          width: 20vw;
          height: 20vw;
          border-radius: 50%;
          -webkit-transform: scale(20);
            -moz-transform: scale(20);
            -ms-transform: scale(20);
            -o-transform: scale(20);
          transform: scale(20);
        }
        30% {
          width: 30vw;
          height: 30vw;
          border-radius: 50%;
          -webkit-transform: scale320);
            -moz-transform: scale(30);
            -ms-transform: scale(30);
            -o-transform: scale(30);
          transform: scale(30);
        }
        50% {
          border-radius: 50%;
            -webkit-transform: scale(50);
            -moz-transform: scale(50);
            -ms-transform: scale(50);
            -o-transform: scale(50);
          transform: scale(50);
        }
        60% {
          border-radius: 50%;
            -webkit-transform: scale(60);
            -moz-transform: scale(60);
            -ms-transform: scale(60);
            -o-transform: scale(60);
          transform: scale(60);
        }
        100% {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
            -webkit-transform: scale(100);
            -moz-transform: scale(100);
            -ms-transform: scale(100);
            -o-transform: scale(100);
          transform: scale(100);
        }
    }
    @keyframes scaleIn {
        0% {
          width: 0vw;
          height: 0vw;
          border-radius: 50%;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
          transform: scale(1);
        }
        10% {
          width: 10vw;
          height: 10vw;
          border-radius: 50%;
          -webkit-transform: scale(10);
            -moz-transform: scale(10);
            -ms-transform: scale(10);
            -o-transform: scale(10);
          transform: scale(10);
        }
        20% {
          width: 20vw;
          height: 20vw;
          border-radius: 50%;
          -webkit-transform: scale(20);
            -moz-transform: scale(20);
            -ms-transform: scale(20);
            -o-transform: scale(20);
          transform: scale(20);
        }
        30% {
          width: 30vw;
          height: 30vw;
          border-radius: 50%;
          -webkit-transform: scale320);
            -moz-transform: scale(30);
            -ms-transform: scale(30);
            -o-transform: scale(30);
          transform: scale(30);
        }
        50% {
          border-radius: 50%;
            -webkit-transform: scale(50);
            -moz-transform: scale(50);
            -ms-transform: scale(50);
            -o-transform: scale(50);
          transform: scale(50);
        }
        60% {
          border-radius: 50%;
            -webkit-transform: scale(60);
            -moz-transform: scale(60);
            -ms-transform: scale(60);
            -o-transform: scale(60);
          transform: scale(60);
        }
        100% {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
            -webkit-transform: scale(100);
            -moz-transform: scale(100);
            -ms-transform: scale(100);
            -o-transform: scale(100);
          transform: scale(100);
        }
    }

    
    @-webkit-keyframes opac {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
    @keyframes opac {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
  }
</style>
