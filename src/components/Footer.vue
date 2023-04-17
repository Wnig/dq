<template>
  <footer>
  	<div class="pc">
      <div class="content">
        <div class="left">
          <div class="con">
            <h2>创物云（厦门）网络科技有限公司</h2>
            <p>
              TEL：400-861-8089 <br/>
              ADD：厦门市思明区观音山商务营运中心18号4层 
            </p> 
          </div>
        </div>
        <div class="right">
          <div class="list_div">
            <img src="../assets/xcx.jpg" alt="">
            <p>扫一扫体验小程序</p>
          </div>
          <div class="list_div">
            <img src="../assets/gzh.jpg" alt="">
            <p>扫一扫识别二维码</p>
          </div>
        </div>
      </div>
  	</div>
  	<div class="mob">
      <div class="con">
        <div class="cons">
          <h2>创物云（厦门）网络科技有限公司</h2>
          <p>
            TEL：400-861-8089 <br/>
            ADD：厦门市思明区观音山商务营运中心18号4层 
          </p> 
        </div>
      </div>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
    height: 27.96vh;
    background: #323232;
  }
  .pc {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    
  }
  .left {
    display: flex;
    flex: 1;
    align-items: center;
  }
  h2 {
    margin-bottom: 1.94vh;
    font-family: PingFangSC-Light;
    font-size: 1.56vw;
    color: #FFFFFF;
  }
  p {
    font-family: PingFangSC-Regular;
    font-size: 1.04vw;
    color: #A7A7A7;
    line-height: 2.14vw;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_div {
    margin: 0 2.55vw;
  }
  .list_div img {
    display: block;
    width: 7.71vw;
    height: 7.71vw;
    margin: 0 auto 1.48vh;
  }
  .list_div p {
    font-family: PingFangSC-Light;
    font-size: 1.04vw;
    color: #FFFFFF;
  }
  

  

	@media screen and (max-width: 750px) {
    .pc {
      display: none;
    }
		.mob {
	    display: block;
	  }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 22.49vh;
      background: #323232;
    }
    footer .con {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    h2 {
      text-align: center;
      margin-bottom: 1.95vh;
      font-size: 3.73vw;
      color: #FFFFFF;
    }
    p {
      text-align: center;
      font-size: 3.2vw;
      color: #A7A7A7;
      line-height: 5.87vw;
    }

	}

</style>
