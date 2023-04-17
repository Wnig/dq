<template>
  <div class="home">
  	<div class="pc">
      <div class="top"><img src="../assets/pcfhdbu@3x.svg" alt=""></div>
      <div class="selection selection-1">
        <div id="particles"></div>
        <div class="con">
          <app-header></app-header>
            <div class="cont">
              <div class="cont_">
                <div class="tit">
                  <strong>透过大气，认识区块链的本质！</strong><br/>让1亿人认识区块链，让100万人通过区块链<br/>
                  创造价值，获得收益
                </div>
                <div class="down-con" @click="slideDown">
                  <div class="down-btn">
                  </div>
                  <div class="down"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="selection selection-2">
        <div class="con">
          <img src="../assets/pclititu.jpg" alt="">
          <div class="cont">
            <div class="cont_">
              <strong>关于大气</strong>
              <h2>拒绝“空气”，选择“大气”</h2>
              <p>大气区块链，未来区块链新标杆。旨在创建区块链生态圈，坚持“引领区块链风尚，创造区块链价值”的使命，从而通过大气，完成让1亿人认识区块链，让100万人通过区块链创造价值的行业目标</p>
              <p>大气区块链集区块链商学院、应用开发、网络自媒体、商业咨询及推广等一体化综合服务商，突破传统区块链应用模式，为大家提供更安全、更快捷的区块链服务。</p>
              <p>拒绝“空气”，选择“大气”。让更多的人透过大气，认识区块链的本质！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-3">
        <div class="con">
          <div class="con_">
            <div class="tit">大气生态圈</div>
            <div class="list_con">
              <div class="list_div list_div_01">
                <div class="list_img">
                  <span class="square sq_b square_01"></span>
                  <span class="square sq sq_o square_02"></span>
                  <span class="circle square_03"></span>
                  <img class="square_04" src="../assets/pcsjx@3x.svg" alt="">
                  <div class="bor"></div>
                </div>
                <p>1.0大气区块链教育</p>
              </div>
              <div class="list_div list_div_02">
                <div class="list_img">
                  <span class="square sq sq_o square_01"></span>
                  <span class="square sq sq_b square_02"></span>
                  <span class="square sq sq_r square_03"></span>
                  <span class="square sq sq_p square_04"></span>
                </div>
                <p>2.0大气区块链技术</p>
              </div>
              <div class="list_div list_div_03">
                <div class="list_img">
                  <img class="square_01" src="../assets/pc87@3x.svg" alt="">
                  <img class="square_02" src="../assets/pc88@3x.svg" alt="">
                  <img class="square_03" src="../assets/pc89@3x.svg" alt="">
                  <img class="square_04" src="../assets/pc90@3x.svg" alt="">
                </div>
                <p>3.0大气区块链传媒</p>
              </div>
              <div class="list_div list_div_04">
                <div class="list_img">
                  <img class="sj_01" src="../assets/pv62@3x.svg" alt="">
                  <img class="sj_02" src="../assets/pv60@3x.svg" alt="">
                  <img class="sj_03" src="../assets/pv61@3x.svg" alt="">
                </div>
                <p>4.0大气区块链资本</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-4">
        <div class="con">
          <div class="con_">
            <div class="content">
              <img src="../assets/pcjdsc.png" alt="">
              <div class="list_con">
                <div class="list_con_">
                  <div class="list_div">
                    <h3>全球布局区块链，从比特币跃迁到区块链+</h3>
                    <div class="bor"></div>
                    <p>区块链技术已经在全球开始部署应用，美、英、日、德、加、澳等发达国家已经认识到区块链技术再公共服务和社会机制优化上存在着巨大的应用前景，开始设计区块链的发展道路。</p>
                  </div>
                  <div class="list_div">
                    <h3>GDP总量的10%将应用区块链技术储存</h3>
                    <div class="bor"></div>
                    <p>区块链作为继蒸汽机、电气化、计算机之后的第四次工业革命的重要成果，预计到2025年之前，全球GDP总量的10%将利用区块链技术储存。</p>
                  </div>
                  <div class="list_div">
                    <h3>在金融业外也存在万亿美元级在市场</h3>
                    <div class="bor"></div>
                    <p>根据市场研究机构Gartner 预测，2020年除金融业外，制造业和供应链管理行业将为区块链带来万亿美元级别的潜在市场。</p>
                  </div>
                  <div class="list_div">
                    <h3>018年区块链市场将继续延续快速增长态势</h3>
                    <div class="bor"></div>
                    <p>抓紧机遇，抢占先机</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-5">
        <div class="con">
          <div class="con_">
            <div class="tit">区块链技术未来的应用领域</div>
            <p>区块链是记录数字资产交易，并且未经允许，任何人都无法随意篡改的账本。十二种行业颠覆：对实体世界赋予生命</p>
            <div class="list_con">
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjtaf@3x.svg" alt="">
                  <h3>交通运输</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjra@3x.svg" alt="">
                  <h3>金融服务与保险</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjc@3x.svg" alt="">
                  <h3>基础设施管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcwj@3x.svg" alt="">
                  <h3>文件与其他纪录保存</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcny@3x.svg" alt="">
                  <h3>能源、垃圾、水资源管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjz@3x.svg" alt="">
                  <h3>建物与地产管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjya@3x.svg" alt="">
                  <h3>资源提取与农耕</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjtaf@3x.svg" alt="">
                  <h3>产业运营-工厂物联网</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pchj@3x.svg" alt="">
                  <h3>环境监测与紧急救援服务</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjj@3x.svg" alt="">
                  <h3>居家管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcnj@3x.svg" alt="">
                  <h3>保健</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcls@3x.svg" alt="">
                  <h3>零售业及销售</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-6">
        <div class="con">
          <div class="con_">
            <div class="bor"></div>
            <div class="tit"><span class="sel">大气平台效果展示</span><span>平台亮点</span></div>
            <div class="list_con">
              <div class="pre-btn"></div>
              <div class="next-btn"></div>
              <div class="pre-btn2"></div>
              <div class="next-btn2"></div>
              <div class="swiper-con list_show">
                <div id="swiper01" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/wxdl.jpg" alt="">
                        <img src="../assets/zx.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/kt.jpg" alt="">
                        <img src="../assets/ktqbh.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/tx.jpg" alt="">
                        <img src="../assets/xqpj.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/yqhykt.jpg" alt="">
                        <img src="../assets/yyzb.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/dwbd.jpg" alt="">
                        <img src="../assets/zs.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-con">
                <div id="swiper02" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/yddptld.jpg" alt="">
                        <p>开通钱包分享区块链课程即可获得佣金奖励</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/yddptld2.jpg" alt="">
                        <p>区块链视频教程及实时语音直播课程</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div class="selection selection-7">
        <div class="con">
          <div class="con_">
            <div class="tit">大气6大优势</div>
            <div class="list_con">
              <div class="list_con_">
                <div class="list_div">
                  <div class="nums num01">1</div>
                  <div class="content">
                    <h3>课程优势</h3>
                    <p>完善的课程内容体系，让您全方位深入了解区块链</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num02">2</div>
                  <div class="content">
                    <h3>运营优势</h3>
                    <p>总部全程帮扶合伙人运营，多项支持，让合伙人轻松操作</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num03">3</div>
                  <div class="content">
                    <h3>团队优势</h3>
                    <p>大气拥有最强实力团队，无论是从资源、资本、运营、模式创新、产品、市场和区块链技术等方面都有优秀的团队支撑，促进整个项目稳定良好发展</p>
                  </div>
                </div>
              </div>
              <div class="list_con_">
                <div class="list_div">
                  <div class="nums num01">4</div>
                  <div class="content">
                    <h3>策略优势</h3>
                    <p>可裂变的营销策略，快速覆盖打造产业链发展模式，实现盈利</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num02">5</div>
                  <div class="content">
                    <h3>技术优势</h3>
                    <p>拥有一支强大的区块链研究、开发专家团队，倾力提供区块链前沿技术</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num03">6</div>
                  <div class="content">
                    <h3>模式优势</h3>
                    <p>商业模式清晰，盈利预期强</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-8">
        <div class="con">
          <div class="con_">
            <div class="tit">国家大力推进区块链</div>
            <div class="list_con">
              <div class="list_con_">
                <div class="list_div">
                  <h2>2016年10月</h2>
                  <h3>工业和信息化部发布</h3>
                  <p>《中国区块链技术和应用发展白皮书 (2016)》，总结了国内外区块链发展现状和典型应用场景，介绍了国区块链技术发展路线图以及未来区块链技术标准化方向和进程。</p>
                </div>
                <div class="list_div">
                  <h2>2016年12月</h2>
                  <h3>“区块链”</h3>
                  <p>首次被作为战略性前沿技术写入《国务院关于印发“十三五”国家信息化规划的通知》。</p>
                </div>
                <div class="list_div">
                  <h2>2017年1月</h2>
                  <h3>工信部发布</h3>
                  <p>《软件和信息技术服务业发展规划(2016-2020年)》，  提出区块链等领域创新达到国际先进水平等要求。</p>
                </div>
                <div class="list_div">
                  <h2>2017年8月</h2>
                  <h3>国务院发布</h3>
                  <p>《关于进一步扩大和升级信息消费持续释放内需潜力的指导意见》提出开展基于区块链、人工智能等新技术的试点应用。</p>
                </div>
                <div class="list_div">
                  <h2>2017年10月</h2>
                  <h3>国务院发布</h3>
                  <p>《关于积极推进供应链创新与应用的指导意见》提出要研究利用区块链、人工智能等新兴技术，建立基于供应链的信用评价机制。</p>
                </div>
                <div class="list_div">
                  <h2>2018年3月</h2>
                  <h3>工信部发布</h3>
                  <p>《2018年信息化和软件服务业标准化工作要点》，提出推动组建全国信息化和工业化融合管理标准化技术委员会、全国区块链和分布式记账技术标准化委员会。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
	  </div>
  	<div class="mob">
      <div class="top"><img src="../assets/pcfhdbu@3x.svg" alt=""></div>
      <div class="selection selection-1">
        <div id="particles02"></div>
        <div class="con">
          <app-header></app-header>
            <div class="cont">
              <div class="cont_">
                <div class="tit">
                  <strong>透过大气，认识区块链的本质！</strong><br/>让1亿人认识区块链，让100万人<br/>
                  通过区块链创造价值，获得收益
                </div>
                <div class="down-con" @click="slideDown">
                  <div class="down-btn">
                  </div>
                  <div class="down"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="selection selection-2">
        <div class="con">
          <img src="../assets/pclititu.jpg" alt="">
          <div class="cont">
            <!-- <div class="cont_"> -->
              <strong>关于大气</strong>
              <h2>拒绝“空气”，选择“大气”</h2>
              <p>大气区块链，未来区块链新标杆。旨在创建区块链生态圈，坚持“引领区块链风尚，创造区块链价值”的使命，从而通过大气，完成让1亿人认识区块链，让100万人通过区块链创造价值的行业目标</p>
              <p>大气区块链集区块链商学院、应用开发、网络自媒体、商业咨询及推广等一体化综合服务商，突破传统区块链应用模式，为大家提供更安全、更快捷的区块链服务。</p>
              <p>拒绝“空气”，选择“大气”。让更多的人透过大气，认识区块链的本质！</p>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="selection selection-3">
        <div class="con">
          <div class="con_">
            <div class="tit">大气生态圈</div>
            <div class="list_con">
              <div class="list_div list_div_01">
                <div class="list_img">
                  <span class="square sq_b square_01"></span>
                  <span class="square sq sq_o square_02"></span>
                  <span class="circle square_03"></span>
                  <img class="square_04" src="../assets/pcsjx@3x.svg" alt="">
                  <div class="bor"></div>
                </div>
                <p>1.0大气区块链教育</p>
              </div>
              <div class="list_div list_div_02">
                <div class="list_img">
                  <span class="square sq sq_o square_01"></span>
                  <span class="square sq sq_b square_02"></span>
                  <span class="square sq sq_r square_03"></span>
                  <span class="square sq sq_p square_04"></span>
                </div>
                <p>2.0大气区块链技术</p>
              </div>
              <div class="list_div list_div_03">
                <div class="list_img">
                  <img class="square_01" src="../assets/pc87@3x.svg" alt="">
                  <img class="square_02" src="../assets/pc88@3x.svg" alt="">
                  <img class="square_03" src="../assets/pc89@3x.svg" alt="">
                  <img class="square_04" src="../assets/pc90@3x.svg" alt="">
                </div>
                <p>3.0大气区块链传媒</p>
              </div>
              <div class="list_div list_div_04">
                <div class="list_img">
                  <img class="sj_01" src="../assets/pv62@3x.svg" alt="">
                  <img class="sj_02" src="../assets/pv60@3x.svg" alt="">
                  <img class="sj_03" src="../assets/pv61@3x.svg" alt="">
                </div>
                <p>4.0大气区块链资本</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-4">
        <div class="con">
          <!-- <div class="con_"> -->
            <img src="../assets/yddyyy.jpg" alt="">
            <div class="content">
              <div class="list_con">
                <div class="list_con_">
                  <div class="list_div">
                    <h3>全球布局区块链，从比特币跃迁到区块链+</h3>
                    <div class="bor"></div>
                    <p>区块链技术已经在全球开始部署应用，美、英、日、德、加、澳等发达国家已经认识到区块链技术再公共服务和社会机制优化上存在着巨大的应用前景，开始设计区块链的发展道路。</p>
                  </div>
                  <div class="list_div">
                    <h3>GDP总量的10%将应用区块链技术储存</h3>
                    <div class="bor"></div>
                    <p>区块链作为继蒸汽机、电气化、计算机之后的第四次工业革命的重要成果，预计到2025年之前，全球GDP总量的10%将利用区块链技术储存。</p>
                  </div>
                  <div class="list_div">
                    <h3>在金融业外也存在万亿美元级在市场</h3>
                    <div class="bor"></div>
                    <p>根据市场研究机构Gartner 预测，2020年除金融业外，制造业和供应链管理行业将为区块链带来万亿美元级别的潜在市场。</p>
                  </div>
                  <div class="list_div">
                    <h3>018年区块链市场将继续延续快速增长态势</h3>
                    <div class="bor"></div>
                    <p>抓紧机遇，抢占先机</p>
                  </div>
                </div>
              </div>
            </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="selection selection-5">
        <div class="con">
          <div class="con_">
            <div class="tit">区块链技术未来的应用领域</div>
            <p>区块链是记录数字资产交易，并且未经允许，任何人都无法随<br/>意篡改的账本。十二种行业颠覆：对实体世界赋予生命</p>
            <div class="list_con">
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjtaf@3x.svg" alt="">
                  <h3>交通运输</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjra@3x.svg" alt="">
                  <h3>金融服务与保险</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjc@3x.svg" alt="">
                  <h3>基础设施管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcwj@3x.svg" alt="">
                  <h3>文件与其他纪录保存</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcny@3x.svg" alt="">
                  <h3>能源、垃圾、水资源管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjz@3x.svg" alt="">
                  <h3>建物与地产管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjya@3x.svg" alt="">
                  <h3>资源提取与农耕</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjtaf@3x.svg" alt="">
                  <h3>产业运营-工厂物联网</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pchj@3x.svg" alt="">
                  <h3>环境监测与紧急救援服务</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcjj@3x.svg" alt="">
                  <h3>居家管理</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcnj@3x.svg" alt="">
                  <h3>保健</h3>
                </div>
              </div>
              <div class="list_div">
                <div class="list_div_">
                  <img src="../assets/pcls@3x.svg" alt="">
                  <h3>零售业及销售</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-6">
        <div class="con">
          <div class="con_">
            <div class="tit"><span class="sel">大气平台效果展示</span><span>平台亮点</span></div>
            <div class="list_con">
              <div class="swiper03 swiper-con list_show">
                <div id="swiper03" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/wxdl.jpg" alt="">
                        <img src="../assets/zx.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/kt.jpg" alt="">
                        <img src="../assets/ktqbh.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/tx.jpg" alt="">
                        <img src="../assets/xqpj.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/yqhykt.jpg" alt="">
                        <img src="../assets/yyzb.jpg" alt="">
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/dwbd.jpg" alt="">
                        <img src="../assets/zs.jpg" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <div class="swiper04 swiper-con">
                <div id="swiper04" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/pcptld.jpg" alt="">
                        <p>开通钱包分享区块链课程即可获得佣金奖励</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="list_div">
                        <img src="../assets/pcptld2.jpg" alt="">
                        <p>区块链视频教程及实时语音直播课程</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div class="selection selection-7">
        <div class="con">
          <div class="con_">
            <div class="tit">大气6大优势</div>
            <div class="list_con">
              <div class="list_con_">
                <div class="list_div">
                  <div class="nums num01">1</div>
                  <div class="content">
                    <h3>课程优势</h3>
                    <p>完善的课程内容体系，让您全方位深入了解区块链</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num02">2</div>
                  <div class="content">
                    <h3>运营优势</h3>
                    <p>总部全程帮扶合伙人运营，多项支持，让合伙人轻松操作</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num03">3</div>
                  <div class="content">
                    <h3>团队优势</h3>
                    <p>大气拥有最强实力团队，无论是从资源、资本、运营、模式创新、产品、市场和区块链技术等方面都有优秀的团队支撑，促进整个项目稳定良好发展</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num01">4</div>
                  <div class="content">
                    <h3>策略优势</h3>
                    <p>可裂变的营销策略，快速覆盖打造产业链发展模式，实现盈利</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num02">5</div>
                  <div class="content">
                    <h3>技术优势</h3>
                    <p>拥有一支强大的区块链研究、开发专家团队，倾力提供区块链前沿技术</p>
                  </div>
                </div>
                <div class="bor"></div>
                <div class="list_div">
                  <div class="nums num03">6</div>
                  <div class="content">
                    <h3>模式优势</h3>
                    <p>商业模式清晰，盈利预期强</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="selection selection-8">
        <div class="con">
          <div class="con_">
            <div class="tit">国家大力推进区块链</div>
            <div class="list_con">
              <div class="list_con_">
                <div class="list_div">
                  <div class="title-con">
                    <h2>2016年10月</h2>
                    <h3>工业和信息化部发布</h3>
                  </div>
                  <p>《中国区块链技术和应用发展白皮书 (2016)》，总结了国内外区块链发展现状和典型应用场景，介绍了国区块链技术发展路线图以及未来区块链技术标准化方向和进程。</p>
                </div>
                <div class="list_div">
                  <div class="title-con">
                    <h2>2016年12月</h2>
                    <h3>“区块链”</h3>
                  </div>
                  <p>首次被作为战略性前沿技术写入《国务院关于印发“十三五”国家信息化规划的通知》。</p>
                </div>
                <div class="list_div">
                  <div class="title-con">
                    <h2>2017年1月</h2>
                    <h3>工信部发布</h3>
                  </div>
                  <p>《软件和信息技术服务业发展规划(2016-2020年)》，  提出区块链等领域创新达到国际先进水平等要求。</p>
                </div>
                <div class="list_div">
                  <div class="title-con">
                    <h2>2017年8月</h2>
                    <h3>国务院发布</h3>
                  </div>
                  <p>《关于进一步扩大和升级信息消费持续释放内需潜力的指导意见》提出开展基于区块链、人工智能等新技术的试点应用。</p>
                </div>
                <div class="list_div">
                  <div class="title-con">
                    <h2>2017年10月</h2>
                    <h3>国务院发布</h3>
                  </div>
                  <p>《关于积极推进供应链创新与应用的指导意见》提出要研究利用区块链、人工智能等新兴技术，建立基于供应链的信用评价机制。</p>
                </div>
                <div class="list_div">
                  <div class="title-con">
                    <h2>2018年3月</h2>
                    <h3>工信部发布</h3>
                  </div>
                  <p>《2018年信息化和软件服务业标准化工作要点》，提出推动组建全国信息化和工业化融合管理标准化技术委员会、全国区块链和分布式记账技术标准化委员会。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import particles from 'particles.js'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  data () {
    return {
    	selShow: false,
    }
  },
  created() {

  },
  methods: {
    slideDown() {
      let downHeight = document.documentElement.clientHeight || document.body.clientHeight;
      window.scrollTo(0, downHeight);
      this.slideShow = true;
    },
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  mounted() {

    $('.pc .selection-6 .tit span').on("click", function() {
      let ind = $(this).index();
      if(ind == 0) {
        $('.selection-6 .pre-btn, .selection-6 .next-btn').css({
          'display': 'block'
        });
        $('.selection-6 .pre-btn2, .selection-6 .next-btn2').css({
          'display': 'none'
        });
      } else {
        $('.selection-6 .pre-btn, .selection-6 .next-btn').css({
          'display': 'none'
        });
        $('.selection-6 .pre-btn2, .selection-6 .next-btn2').css({
          'display': 'block'
        });
      };
      $(this).addClass('sel').siblings().removeClass('sel');
      $('.pc .selection-6 .swiper-con').eq(ind).addClass('list_show').siblings().removeClass('list_show');
    });

    $('.mob .selection-6 .tit span').on("click", function() {
      let ind = $(this).index();
      $(this).addClass('sel').siblings().removeClass('sel');
      $('.mob .selection-6 .swiper-con').eq(ind).addClass('list_show').siblings().removeClass('list_show');
    });

  	// 返回顶部
    $('.top').on('click', function() {
    	$('html, body').animate({scrollTop: '0px'}, 800);
    });

  	$(window).scroll(function() {
	　　 var scrollTop = $(this).scrollTop();
	　　 var scrollHeight = $(document).height();
	　　 var windowHeight = $(this).height();

  		if(scrollTop < scrollHeight / 9) {
  			$('.top').css({
  				'display': 'none'
  			});
  		} else {
  			$('.top').css({
  				'display': 'block'
  			});
  		}
  	});

    let swiper = new Swiper('#swiper01', {
      loop: 1,
      autoplay: 3000,
      autoplayDisableOnInteraction : false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 3000,
      releaseOnEdges: true,
      paginationClickable: true,
      prevButton: '.selection-6 .pre-btn',
      nextButton: '.selection-6 .next-btn',
    });

    let swiper02 = new Swiper('#swiper02', {
      loop: 1,
      autoplay: 3000,
      autoplayDisableOnInteraction : false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 3000,
      releaseOnEdges: true,
      paginationClickable: true,
      prevButton: '.selection-6 .pre-btn2',
      nextButton: '.selection-6 .next-btn2',
    });

    let swiper03 = new Swiper('#swiper03', {
      loop: 1,
      autoplay: 3000,
      autoplayDisableOnInteraction : false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 3000,
      releaseOnEdges: true,
      paginationClickable: true,
      pagination: '.swiper03 .swiper-pagination',
    });

    let swiper04 = new Swiper('#swiper04', {
      loop: 1,
      autoplay: 3000,
      autoplayDisableOnInteraction : false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 3000,
      releaseOnEdges: true,
      paginationClickable: true,
      pagination: '.swiper04 .swiper-pagination',
    });


    particlesJS.load('particles','static/app.js');
    particlesJS.load('particles02','static/app.js');

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #particles, #particles02 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #070808;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  }
    
  /*selection-1*/
	.selection-1 {

  }
  .selection-1 .con {
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    height: 0;
    z-index: 22;
  }
  .selection-1 .cont {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  .selection-1 .tit {
    font-family: PingFangSC-Medium;
    font-size: 3.13vw;
    color: #FFFFFF;
    text-align: center;
    line-height: 5.83vw;
  }
  .selection-1 .tit strong {
    text-align: center;    
    font-family: PingFangSC-Medium;
    font-size: 3.13vw;
    color: #17A7ED;
  }

  /*selection-2*/
  .selection-2 {

  }
  .selection-2 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-2 .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39.38vw;
  }
  .selection-2 .cont_ {
    
  }
  .selection-2 .con img {
    width: 36.15vw;
    height: 29.53vw;
    margin-right: 8.49vw;
  }
  .selection-2 .cont strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9.22vw;
    height: 2.6vw;
    margin-bottom: 3.43vh;
    background: #16A5EC;
    border-radius: 100px;
    font-family: PingFangSC-Medium;
    font-size: 1.35vw;
    color: #FFFFFF;
  }
  .selection-2 .cont h2 {
    margin-bottom: 2.78vh;
    font-family: PingFangSC-Semibold;
    font-size: 1.56vw;
    color: #08071A;
  }
  .selection-2 .cont p {
    margin-bottom: 2.31vh;
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-size: 1.15vw;
    color: #000000;
    line-height: 1.88vw; 
  }
  
  /*selection-3*/
  .selection-3 {
    background: url('../assets/pcbeiji4.jpg') center center no-repeat;
    background-size: cover;
  }
  .selection-3 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-3 .tit {
    position: relative;
    display: block;
    width: 100vw;
    margin-bottom: 25.28vh;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 2.08vw;
    color: #FFFFFF;
  }
  .selection-3 .tit:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2vw;
    margin: auto;
    content: '';
    width: 16.67vw;
    height: 0.1vw;
    background: #D8D8D8;
  }
  .selection-3 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection-3 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 4.64vw;
    cursor: pointer;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  .selection-3 .list_div .list_img {
    position: relative;
    width: 12.42vw;
    height: 10.42vw;
    margin-bottom: 8.58vw;
  }
  .selection-3 .list_div_02 .list_img {
    width: 10.42vw;
    height: 8.52vw;
    margin-bottom: 9.58vw;
  } 
  .selection-3 .list_div_03 .list_img {
    width: 11.42vw;
    height: 9.42vw;
    margin-bottom: 9.25vw;
  }
  .selection-3 .list_div_04 .list_img {
    width: 8.42vw;
    height: 6.42vw;
    margin-bottom: 11.58vw;
  }
      
  .selection-3 .list_div .square {
    width: 2.6vw;
    height: 2.6vw;
  }
  .selection-3 .list_div img {
    width: 3.71vw;
  }
  .selection-3 .list_div_04 img {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  .selection-3 .list_div p {
    font-family: PingFangSC-Regular;
    font-size: 1.46vw;
    color: #FFFFFF;
  }
  

  .selection-3 .list_div_04 .sj_01 {
    width: 1.46vw;
    height: 0.99vw;
  }
  .selection-3 .list_div_04 .sj_02 {
    top: 1.72vw;
    width: 4.06vw;
    height: 1.77vw;
  }
  .selection-3 .list_div_04 .sj_03 {
    top: 4.22vw;
    width: 6.67vw;
    height: 1.77vw;
  }

  .selection-3 .list_div .bor {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0.16vw;
    height: 2.4vw;
    background: #909090;
  }
  .selection-3 .list_div .bor:before {
    position: absolute;
    left: -1.6vw;
    bottom: 0;
    top: 0;
    margin: auto;
    content: '';
    width: 0.83vw;
    height: 0.16vw;
    background: #909090;
  }
  .selection-3 .list_div .bor:after {
    position: absolute;
    right: -1.6vw;
    bottom: 0;
    top: 0;
    margin: auto;
    content: '';
    width: 0.83vw;
    height: 0.16vw;
    background: #909090;
  }
  .selection-3 .list_div .circle {
    width: 2.6vw;
    height: 2.6vw;
    border: 0.1vw solid #B61D21;
    border-radius: 50%;
  }
  .selection-3 .list_div .sq {
    transform: rotate(-315deg);
  }
  .selection-3 .list_div .sq_b {
    border: 0.1vw solid #16A5EC;
  }
  .selection-3 .list_div .sq_o {
    border: 0.1vw solid #C9460A;
  }
  .selection-3 .list_div .sq_r {
    border: 0.1vw solid #B61D21;
  }
  .selection-3 .list_div .sq_p {
    border: 0.1vw solid #A00799;
  }
  
  .selection-3 .list_div .square_01 {
    position: absolute;
    left: 4.8vw;
    top: 0;
  }
  .selection-3 .list_div .square_02 {
    position: absolute;
    left: 0.5vw;
    top: 3.6vw;
  }
  .selection-3 .list_div .square_03 {
    position: absolute;
    left: 4.8vw;
    bottom: 0;
  }
  .selection-3 .list_div .square_04 {
    position: absolute;
    right: 0;
    top: 3.6vw;
  }
  .selection-3 .list_div_02 .square_01 {
    position: absolute;
    left: 3.8vw;
    top: 0.5vw;
  }
  .selection-3 .list_div_02 .square_02 {
    position: absolute;
    left: 1vw;
    top: 3.2vw;
  }
  .selection-3 .list_div_02 .square_03 {
    position: absolute;
    left: 3.8vw;
    bottom: 0;
  }
  .selection-3 .list_div_02 .square_04 {
    position: absolute;
    right: 1vw;
    top: 3.2vw;
  }
  .selection-3 .list_div_03 .square_01 {
    position: absolute;
    left: 3.8vw;
    top: 0.5vw;
  }
  .selection-3 .list_div_03 .square_02 {
    position: absolute;
    left: 0vw;
    top: 3.2vw;
  }
  .selection-3 .list_div_03 .square_03 {
    position: absolute;
    left: 3.8vw;
    bottom: 0;
  }
  .selection-3 .list_div_03 .square_04 {
    position: absolute;
    right: 0vw;
    top: 3.2vw;
  }
  
  .selection-3 .list_div_01:hover .square_01 {
    -webkit-transform: translateY(-15px) translateX(0px);
    -moz-transform: translateY(-15px) translateX(0px);
    -ms-transform: translateY(-15px) translateX(0px);
    -o-transform: translateY(-15px) translateX(0px);
    transform: translateY(-15px) translateX(0px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_01:hover .square_02 {
    -webkit-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -moz-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -ms-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -o-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_01:hover .square_03 {
    -webkit-transform: translateY(15px) translateX(0px);
    -moz-transform: translateY(15px) translateX(0px);
    -ms-transform: translateY(15px) translateX(0px);
    -o-transform: translateY(15px) translateX(0px);
    transform: translateY(15px) translateX(0px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_01:hover .square_04 {
    -webkit-transform: translateY(0px) translateX(30px);
    -moz-transform: translateY(0px) translateX(30px);
    -ms-transform: translateY(0px) translateX(30px);
    -o-transform: translateY(0px) translateX(30px);
    transform: translateY(0px) translateX(30px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  

  .selection-3 .list_div_02:hover .square_01 {
    -webkit-transform: rotate(-315deg) translateY(-15px) translateX(-15px);
    -moz-transform: rotate(-315deg) translateY(-15px) translateX(-15px);
    -ms-transform: rotate(-315deg) translateY(-15px) translateX(-15px);
    -o-transform: rotate(-315deg) translateY(-15px) translateX(-15px);
    transform: rotate(-315deg) translateY(-15px) translateX(-15px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_02:hover .square_02 {
    -webkit-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -moz-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -ms-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -o-transform: rotate(-315deg) translateY(15px) translateX(-15px);
    transform: rotate(-315deg) translateY(15px) translateX(-15px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_02:hover .square_03 {
    -webkit-transform: rotate(-315deg) translateY(15px) translateX(15px);
    -moz-transform: rotate(-315deg) translateY(15px) translateX(15px);
    -ms-transform: rotate(-315deg) translateY(15px) translateX(15px);
    -o-transform: rotate(-315deg) translateY(15px) translateX(15px);
    transform: rotate(-315deg) translateY(15px) translateX(15px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_02:hover .square_04 {
    -webkit-transform: rotate(-315deg) translateY(-15px) translateX(15px);
    -moz-transform: rotate(-315deg) translateY(-15px) translateX(15px);
    -ms-transform: rotate(-315deg) translateY(-15px) translateX(15px);
    -o-transform: rotate(-315deg) translateY(-15px) translateX(15px);
    transform: rotate(-315deg) translateY(-15px) translateX(15px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }

  .selection-3 .list_div_03:hover .square_01 {
    -webkit-transform: translateY(-15px) translateX(5px);
    -moz-transform: translateY(-15px) translateX(5px);
    -ms-transform: translateY(-15px) translateX(5px);
    -o-transform: translateY(-15px) translateX(5px);
    transform: translateY(-15px) translateX(5px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_03:hover .square_02 {
    -webkit-transform: translateY(0px) translateX(-5px);
    -moz-transform: translateY(0px) translateX(-5px);
    -ms-transform: translateY(0px) translateX(-5px);
    -o-transform: translateY(0px) translateX(-5px);
    transform: translateY(0px) translateX(-5px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_03:hover .square_03 {
    -webkit-transform: translateY(15px) translateX(5px);
    -moz-transform: translateY(15px) translateX(5px);
    -ms-transform: translateY(15px) translateX(5px);
    -o-transform: translateY(15px) translateX(5px);
    transform: translateY(15px) translateX(5px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_03:hover .square_04 {
    -webkit-transform: translateY(0px) translateX(15px);
    -moz-transform: translateY(0px) translateX(15px);
    -ms-transform: translateY(0px) translateX(15px);
    -o-transform: translateY(0px) translateX(15px);
    transform: translateY(0px) translateX(15px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }

  .selection-3 .list_div_04:hover .sj_01 {
    -webkit-transform: translateY(-15px) translateX(0px);
    -moz-transform: translateY(-15px) translateX(0px);
    -ms-transform: translateY(-15px) translateX(0px);
    -o-transform: translateY(-15px) translateX(0px);
    transform: translateY(-15px) translateX(0px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_04:hover .sj_02 {
    -webkit-transform: translateY(0px) translateX(-0px);
    -moz-transform: translateY(0px) translateX(-0px);
    -ms-transform: translateY(0px) translateX(-0px);
    -o-transform: translateY(0px) translateX(-0px);
    transform: translateY(0px) translateX(-0px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  .selection-3 .list_div_04:hover .sj_03 {
    -webkit-transform: translateY(15px) translateX(0px);
    -moz-transform: translateY(15px) translateX(0px);
    -ms-transform: translateY(15px) translateX(0px);
    -o-transform: translateY(15px) translateX(0px);
    transform: translateY(15px) translateX(0px);
    -webkit-transition: all 0.4s;
        transition: all 0.4s; 
  }
  


  /*selection-4*/
  .selection-4 {

  }
  .selection-4 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-4 .con img {
    position: absolute;
    top: -1.4vw;
    left: 0;
    width: 19.06vw;
    height: 46.67vw;
  }
  .selection-4 .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 85.36vw;
    height: 45.31vw;
    border-top: 4px solid #16A5EC;
  }
  .selection-4 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65.36vw;
  }
  .selection-4 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 59.48vw;
    height: 8.85vw;
    margin-bottom: 1.85vh;
    border: 0.1vw solid #E1E1E1;
    cursor: pointer;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  .selection-4 .list_div h3 {
    width: 14.11vw;
    font-family: PingFangSC-Medium;
    font-size: 1.46vw;
    color: #242424;
  }
  .selection-4 .list_div .bor {
    width: 0.1vw;
    height: 5.83vw;
    margin: 0 1.46vw 0 1.77vw;
    opacity: 0.5;
    background: #D8D8D8;
  }
  .selection-4 .list_div p {
    width: 38.23vw;
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-size: 1.15vw;
    color: #242424;
  }
  .selection-4 .list_div:hover {
    background: #16A2ED;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  .selection-4 .list_div:hover h3 {
    color: #fff;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  .selection-4 .list_div:hover p {
    color: #fff;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  
  /*selection-5*/
  .selection-5 {
    background: url('../assets/pcqklyyly.jpg') center center no-repeat;
    background-size: cover;
  }
  .selection-5 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-5 .tit {
    margin-bottom: 2.31vh;
    font-family: PingFangSC-Medium;
    font-size: 2.08vw;
    color: #FFFFFF;
    text-align: center; 
  }
  .selection-5 p {
    margin-bottom: 6.3vh;
    font-family: PingFangSC-Regular;
    font-size: 1.15vw;
    color: #FFFFFF;
    text-align: center;
  }

  
  .selection-5 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 85vw;
  }
  .selection-5 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.35vw;
    height: 11.46vw;
    margin: 0.78vw 0.91vw;
    background: #FFFFFF;
    border-radius: 6px;
  }
  .selection-5 .list_div img {
    display: block;
    width: 4.17vw;
    height: 4.17vw;
    margin: 0 auto 2.41vh;
  }
  .selection-5 .list_div h3 {
    font-family: PingFangSC-Regular;
    font-size: 1.15vw;
    color: #000000;
    text-align: center;
  }

  /*selection-6*/
  .selection-6 {
    background: #F1F1F3;
  }
  .selection-6 .bor {
    width: 80.36vw;
    height: 0.1vw;
    margin-bottom: 7.87vh;
    background: #16A5EC;
  }
  .selection-6 .tit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6.57vh;
    cursor: pointer;
  }
  .selection-6 .tit span {
    width: 50%;
    font-family: PingFangSC-Medium;
    font-size: 2.08vw;
    color: rgba(0, 0, 0, 0.3);
    text-align: center; 
  }
  .selection-6 .tit .sel {
    color: rgba(0, 0, 0, 1);
  }
  
  .selection-6 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }
  .selection-6 .pre-btn, .selection-6 .pre-btn2 {
    position: absolute;
    left: 9.25vw;
    top: 10vw;
    width: 3.54vw;
    height: 3.54vw;
    background: url('../assets/pcpingtxiaog@3x.svg') center center no-repeat;
    background-size: 100% 100%;
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
    cursor: pointer;
    z-index: 999;
  }
  .selection-6 .next-btn, .selection-6 .next-btn2 {
    position: absolute;
    right: 9.25vw;
    top: 10vw;
    margin: auto;
    width: 3.54vw;
    height: 3.54vw;
    background: url('../assets/pcpingtxiaog@3x.svg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    z-index: 999;
  }
  .selection-6 .list_con {
    position: relative;
  }
  .selection-6 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .selection-6 .swiper-con {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 31.82vw;
    opacity: 0;
    z-index: 1;
  }
  .selection-6 .list_show {
    opacity: 1;
    z-index: 2;
  } 
  #swiper01 {
    width: 49.43vw;
    height: 31.82vw;
    background: #16A5EC;
  }
  #swiper01 img {
    width: 12.81vw;
    margin: 0 3.67vw;
  }
  #swiper02 {
    width: 49.43vw;
    height: 31.82vw;
    background: #fff;
  }
  #swiper02 .list_div {
    flex-direction: column;
  }
  #swiper02 img {
    width: 100%;
    height: 23.96vw;
  }
  #swiper02 p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7.86vw;
    font-family: PingFangSC-Regular;
    font-size: 1.56vw;
    color: #000000;
    text-align: center;
  }

  /*selection-7*/
  .selection-7 {
    background: url('../assets/pcbeiji4.jpg') center center no-repeat;
    background-size: cover;
  }
  .selection-7 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-7 .tit {
    position: relative;
    display: block;
    width: 100vw;
    margin-bottom: 12.31vh;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 2.08vw;
    color: #FFFFFF;
  }
  .selection-7 .tit:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2vw;
    margin: auto;
    content: '';
    width: 16.67vw;
    height: 0.1vw;
    background: #fff;
  }
  .selection-7 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection-7 .list_con_ {
    margin: 0 2.32vw;
  }

  .selection-7 .list_div {
    display: flex;
    align-items: center;
    width: 38.49vw;
    /*margin-bottom: 9.26vh;*/
  }
  .selection-7 .bor {
    width: 1px;
    height: 5.21vw;
    margin-left: 3.8vw;
    background: #D8D8D8;
  }

  .selection-7 .nums {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.6vw;
    height: 7.6vw;
    margin-right: 2.24vw;
    font-size: 5.21vw;
    border-radius: 50%;
    border: 1px solid #979797;
  }

  .selection-7 .num01 {
    color: #16A5EC;
  }
  .selection-7 .num02 {
    color: #0DB2BE;
  }
  .selection-7 .num03 {
    color: #16EC96;
  }
        
  .selection-7 h3 {
    font-family: PingFangSC-Semibold;
    font-size: 1.56vw;
    color: #FFFFFF;
  }
  .selection-7 p {
    width: 28.65vw;
    opacity: 0.8;
    font-family: PingFangSC-Regular;
    font-size: 1.15vw;
    color: #FFFFFF;
  }




  /*selection-8*/
  .selection-8 {
    height: auto;
  }
  .selection-8 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .selection-8 .tit {
    position: relative;
    display: block;
    width: 100vw;
    margin-bottom: 9.91vh;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 2.08vw;
    color: #0F0F0F;
  }
  .selection-8 .tit:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2vw;
    margin: auto;
    content: '';
    width: 16.67vw;
    height: 0.1vw;
    background: #363636;
  }
  .selection-8 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection-8 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86.2vw;
    height: 6.88vw;
    border-bottom: 0.05vw solid #D8D8D8;
    cursor: pointer;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  .selection-8 .list_div h2 {
    width: 8.33vw;
    margin-right: 2.03vw;
    font-family: PingFangSC-Medium;
    font-size: 1.56vw;
    color: #000000;    
    text-align: center;
  }
  .selection-8 .list_div h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.81vw;
    height: 2.6vw;
    margin-right: 1.41vw;
    font-family: PingFangSC-Medium;
    font-size: 1.15vw;
    color: #FFFFFF;
    text-align: center;
    background: #16A5EC;
  }
  .selection-8 .list_div p {
    width: 58.44vw;
    opacity: 0.6;
    font-family: PingFangSC-Medium;
    font-size: 1.15vw;
    color: #000000;
    line-height: 1.88vw; 
  }

  .selection-8 .list_div:hover {
    background: #D8D8D8;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }

  
  
  

	@media screen and (max-width: 750px) {
		.mob {
			display: block;
		}

    /*selection-1*/
    .selection-1 {
      /*background: url('../assets/PCbeijing1.jpg') center center no-repeat;*/
      background-size: cover;
    }
    .selection-1 .con {

    }
    .selection-1 .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh;
    }
    
    .selection-1 .tit {
      font-family: PingFangSC-Semibold;
      font-size: 5.87vw;
      color: #FFFFFF;
      text-align: left;
      line-height: 10.67vw;
    }
    .selection-1 .tit strong {
      font-family: PingFangSC-Semibold;
      font-size: 5.87vw;
      text-align: left;
      line-height: 10.67vw;
    }

    /*selection-2*/
    .selection-2 {

    }
    .selection-2 .con {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
    }
    .selection-2 .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 82.13vw;
    }
    /*.selection-2 .cont_ {
      justify-content: center;
    }*/
    .selection-2 .con img {
      width: 72vw;
      height: 58.67vw;
      margin: 0 auto 5.4vh;
    }
    .selection-2 .cont strong {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 23.2vw;
      height: 6.67vw;
      margin-bottom: 1.8vh;
      background: #16A5EC;
      border-radius: 100px;
      font-family: PingFangSC-Medium;
      font-size: 3.47vw;
      color: #FFFFFF;
    }
    .selection-2 .cont h2 {
      margin-bottom: 1.95vh;
      font-family: PingFangSC-Semibold;
      font-size: 4vw;
      color: #08071A;
    }
    .selection-2 .cont p {
      margin-bottom: 2.25vh;
      opacity: 0.7;
      font-family: PingFangSC-Regular;
      font-size: 3.2vw;
      color: #000000;
      line-height: 6.67vw; 
    }

    /*selection-3*/
    .selection-3 {
      background: url('../assets/yddbeiji422.jpg') center center no-repeat;
      background-size: cover;
    }
    .selection-3 .con {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .selection-3 .tit {
      position: relative;
      display: block;
      width: 100vw;
      margin-bottom: 12.74vh;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 5.33vw;
      color: #FFFFFF;
    }
    .selection-3 .tit:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5.33vw;
      margin: auto;
      content: '';
      width: 40vw;
      height: 0.1vw;
      background: #D8D8D8;
    }
    .selection-3 .list_con {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap; 
      width: 83vw;
      margin: 0 auto;
    }
    .selection-3 .list_div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 4.64vw 14.39vh 4.64vw;
      cursor: pointer;
      -webkit-transition: all 0.4s;
          transition: all 0.4s;
    }
    .selection-3 .list_div .list_img {
      position: relative;
      width: 26.42vw;
      height: 21.42vw;
      margin-bottom: 8.58vw;
    }
    .selection-3 .list_div_02 .list_img {
      width: 20.42vw;
      height: 18.52vw;
      margin-bottom: 9.58vw;
    } 
    .selection-3 .list_div_03 .list_img {
      width: 24.42vw;
      height: 19.42vw;
      margin-bottom: 9.25vw;
    }
    .selection-3 .list_div_04 .list_img {
      width: 20.42vw;
      height: 17.42vw;
      margin-bottom: 11.58vw;
    }
    .selection-3 .list_div .bor {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 0.16vw;
      height: 4.4vw;
      background: #909090;
    }
    .selection-3 .list_div .bor:before {
      position: absolute;
      left: -2.6vw;
      bottom: 0;
      top: 0;
      margin: auto;
      content: '';
      width: 1.83vw;
      height: 0.16vw;
      background: #909090;
    }
    .selection-3 .list_div .bor:after {
      position: absolute;
      right: -2.6vw;
      bottom: 0;
      top: 0;
      margin: auto;
      content: '';
      width: 1.83vw;
      height: 0.16vw;
      background: #909090;
    }
          
    .selection-3 .list_div .square {
      width: 6.4vw;
      height: 6.4vw;
    }
    .selection-3 .list_div .circle {
      width: 6.4vw;
      height: 6.4vw;
      border: 0.1vw solid #B61D21;
      border-radius: 50%;
    }
    .selection-3 .list_div img {
      width: 8.71vw;
    }
    .selection-3 .list_div_04 img {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    }
    .selection-3 .list_div p {
      font-family: PingFangSC-Regular;
      font-size: 3.73vw;
      color: #FFFFFF;
    }

    .selection-3 .list_div .square_01 {
      position: absolute;
      left: 9.8vw;
      top: 0;
    }
    .selection-3 .list_div .square_02 {
      position: absolute;
      left: 0.5vw;
      top: 6.6vw;
    }
    .selection-3 .list_div .square_03 {
      position: absolute;
      left: 9.8vw;
      bottom: 0;
    }
    .selection-3 .list_div .square_04 {
      position: absolute;
      right: 0;
      top: 6.6vw;
    }
    .selection-3 .list_div_02 .square_01 {
      position: absolute;
      left: 6.8vw;
      top: 0.5vw;
    }
    .selection-3 .list_div_02 .square_02 {
      position: absolute;
      left: 1vw;
      top: 6.2vw;
    }
    .selection-3 .list_div_02 .square_03 {
      position: absolute;
      left: 6.8vw;
      bottom: 0;
    }
    .selection-3 .list_div_02 .square_04 {
      position: absolute;
      right: 1vw;
      top: 6.2vw;
    }
    .selection-3 .list_div_03 .square_01 {
      position: absolute;
      left: 7.8vw;
      top: 1.5vw;
    }
    .selection-3 .list_div_03 .square_02 {
      position: absolute;
      left: 0vw;
      top: 5vw;
    }
    .selection-3 .list_div_03 .square_03 {
      position: absolute;
      left: 7.8vw;
      bottom: 0;
    }
    .selection-3 .list_div_03 .square_04 {
      position: absolute;
      right: 0vw;
      top: 5vw;
    }

    .selection-3 .list_div_04 .sj_01 {
      width: 3.73vw;
      height: 2.4vw;
    }
    .selection-3 .list_div_04 .sj_02 {
      top: 3.72vw;
      width: 9.87vw;
      height: 4.27vw;
    }
    .selection-3 .list_div_04 .sj_03 {
      top: 10.22vw;
      width: 16vw;
      height: 4.27vw;
    }
      
    

    /*selection-4*/
    .selection-4 {

    }
    .selection-4 .con {
      display: block;
      height: 100%;
    }
    .selection-4 .con img {
      display: flex;
      justify-content: center;
      align-items: center;
      position: static;
      width: 100vw;
      height: 40.8vw;
      margin-bottom: 4.35vh;
    }
    .selection-4 .content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100vw;
      height: auto;
      border-top: none;
    }
    .selection-4 .list_con {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .selection-4 .list_div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 92.53vw;
      height: 26.67vw;
      margin-bottom: 1.85vh;
      border: 0.1vw solid #E1E1E1;
      cursor: pointer;
      -webkit-transition: all 0.4s;
          transition: all 0.4s;
    }
    .selection-4 .list_div h3 {
      width: 20.11vw;
      font-family: PingFangSC-Medium;
      font-size: 3.73vw;
      color: #242424;
    }
    .selection-4 .list_div .bor {
      width: 0.2vw;
      height: 18.83vw;
      margin: 0 1.86vw 0 2.37vw;
      opacity: 0.5;
      background: #D8D8D8;
    }
    .selection-4 .list_div p {
      width: 65.23vw;
      opacity: 0.7;
      font-family: PingFangSC-Regular;
      font-size: 2.93vw;
      color: #242424;
    }
    .selection-4 .list_div:hover {
      background: #16A2ED;
      -webkit-transition: all 0.4s;
          transition: all 0.4s;
    }
    .selection-4 .list_div:hover h3 {
      color: #fff;
      -webkit-transition: all 0.4s;
          transition: all 0.4s;
    }
    .selection-4 .list_div:hover p {
      color: #fff;
      -webkit-transition: all 0.4s;
          transition: all 0.4s;
    }


  /*selection-5*/
  .selection-5 {
    background: url('../assets/pcqklyyly.jpg') center center no-repeat;
    background-size: cover;
  }
  .selection-5 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-5 .tit {
    margin-bottom: 2.31vh;
    font-family: PingFangSC-Medium;
    font-size: 5.33vw;
    color: #FFFFFF;
    text-align: center; 
  }
  .selection-5 p {
    margin-bottom: 6.3vh;
    font-family: PingFangSC-Regular;
    font-size: 2.93vw;
    color: #FFFFFF;
    text-align: center;
  }

  
  .selection-5 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
  }
  .selection-5 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26.67vw;
    height: 24vw;
    margin: 0.78vw 0.91vw;
    background: #FFFFFF;
    border-radius: 6px;
  }
  .selection-5 .list_div img {
    display: block;
    width: 5.6vw;
    height: 7.2vw;
    margin: 0 auto 2.41vh;
  }
  .selection-5 .list_div h3 {
    font-family: PingFangSC-Regular;
    font-size: 2.93vw;
    color: #000000;
    text-align: center;
  }

   /*selection-6*/
  .selection-6 {
    background: #F1F1F3;
  }
  .selection-6 .bor {
    width: 80.36vw;
    height: 0.1vw;
    margin-bottom: 7.87vh;
    background: #16A5EC;
  }
  .selection-6 .tit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 6.57vh;
    cursor: pointer;
  }
  .selection-6 .tit span {
    width: 50%;
    font-family: PingFangSC-Medium;
    font-size: 5.33vw;
    color: rgba(0, 0, 0, 0.3);
    text-align: center; 
  }
  .selection-6 .tit .sel {
    color: rgba(0, 0, 0, 1);
  }
  
  .selection-6 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }
  .selection-6 .list_con {
    position: relative;
  }
  .selection-6 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .selection-6 .swiper-con {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 101.33vw;
    opacity: 0;
    z-index: 1;
  }
  .selection-6 .list_show {
    opacity: 1;
    z-index: 2;
  } 
  #swiper03 {
    width: 92.27vw;
    height: 101.33vw;
    background: #16A5EC;
  }
  #swiper03 img {
    width: 36vw;
    margin: 0 3.2vw;
  }
  #swiper04 {
    width: 92.27vw;
    height: 84.8vw;
    background: #fff;
  }
  #swiper04 .list_div {
    flex-direction: column;
  }
  #swiper04 img {
    width: 100%;
    height: 84.8vw;
  }
  #swiper04 p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17.6vw;
    font-family: PingFangSC-Regular;
    font-size: 4vw;
    color: #000000;
    text-align: center;
  }

  .swiper-pagination {
  }
  

  /*selection-7*/
  .selection-7 {
    background: url('../assets/yddbeiji422.jpg') center center no-repeat;
    background-size: cover;
  }
  .selection-7 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .selection-7 .tit {
    position: relative;
    display: block;
    width: 100vw;
    margin-bottom: 8.4vh;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 5.33vw;
    color: #FFFFFF;
  }
  .selection-7 .tit:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2vw;
    margin: auto;
    content: '';
    width: 40vw;
    height: 0.27vw;
    background: #fff;
  }
  .selection-7 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection-7 .list_con_ {
    margin: 0 2.32vw;
  }

  .selection-7 .list_div {
    display: flex;
    align-items: center;
    width: 88vw;
    /*margin-bottom: 9.26vh;*/
  }
  .selection-7 .bor {
    display: flex;
    width: 1px;
    height: 6.4vw;
    margin-left: 7.8vw;
    background: #D8D8D8;
  }

  .selection-7 .nums {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16vw;
    height: 16vw;
    margin-right: 4vw;
    font-size: 10.67vw;
    border-radius: 50%;
    border: 1px solid #979797;
  }

  .selection-7 .num01 {
    color: #16A5EC;
  }
  .selection-7 .num02 {
    color: #0DB2BE;
  }
  .selection-7 .num03 {
    color: #16EC96;
  }
        
  .selection-7 h3 {
    font-family: PingFangSC-Semibold;
    font-size: 4vw;
    color: #FFFFFF;
  }
  .selection-7 p {
    width: 64.53vw;
    opacity: 0.8;
    font-family: PingFangSC-Regular;
    font-size: 2.93vw;
    color: #FFFFFF;
  }




  /*selection-8*/
  .selection-8 {
    height: auto;
  }
  .selection-8 .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .selection-8 .tit {
    position: relative;
    display: block;
    width: 100vw;
    margin-bottom: 6.9vh;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 5.33vw;
    color: #0F0F0F;
  }
  .selection-8 .tit:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2vw;
    margin: auto;
    content: '';
    width: 40vw;
    height: 0.27vw;
    background: #363636;
  }
  .selection-8 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selection-8 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 92.53vw;
    height: 22.13vw;
    border-bottom: none;
    cursor: pointer;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  .selection-8 .list_div .title-con {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1.05vh;
  }
  .selection-8 .list_div h2 {
    width: 21.33vw;
    margin-right: 3.47vw;
    font-family: PingFangSC-Medium;
    font-size: 4vw;
    color: #000000;    
    text-align: center;
  }
  .selection-8 .list_div h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31.2vw;
    height: 6.67vw;
    margin-right: 1.41vw;
    font-family: PingFangSC-Medium;
    font-size: 2.93vw;
    color: #FFFFFF;
    text-align: center;
    background: #16A5EC;
  }
  .selection-8 .list_div p {
    width: 92.53vw;
    opacity: 0.6;
    font-family: PingFangSC-Medium;
    font-size: 2.93vw;
    color: #000000;
    line-height: 4.53vw; 
  }

  .selection-8 .list_div:hover {
    background: #D8D8D8;
    -webkit-transition: all 0.4s;
        transition: all 0.4s;
  }
  
    
	}

	@media screen and (min-width: 751px) {
    
	}
</style>
