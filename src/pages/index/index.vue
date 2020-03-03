<template>
  <div class="home_wrap" >
    <swiper class="home_swiper"
     :style="{height:heightChange+'px'}"
      :previous-margin="previousMargin"
      :next-margin="nextMargin"
      :circular="circular"
      @change="handleChange($event)">
        <div v-for="(item, index) in datalist" :key="index" @click="jumpInfo(item.jumpUrl)">
            <swiper-item>
              <div :class="curIndex===index ? 'active_item' : 'item'" :animation="index == curIndex ? animationData : animationData2">
                   <div class="items" :style="{marginTop:cardHeight+'px'}">
                        <div class="card">
                          <div class="img_wrap">
                              <!-- /标题 -->
                              <div class="cardTitle">{{item.title}}</div>
                              <img class="item_image" :src="item.coverImg"/>
                              <div class="cardBottom"><div class="haha">{{item.content}}</div></div>
                              <div class="seeInfo">查看</div>
                          </div>
                        </div>
                    </div>
              </div>
            </swiper-item>
        </div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curIndex: 0,
      datalist: [{
        coverImg: require('../../image/11.jpg'),
        title: '心灵毒鸡汤',
        content:'你要感谢那些伤害过你的人，正因为这些人你才能够变得强大。',
        jumpUrl:'../jiTang/main'
      }, {
        coverImg: require('../../image/22.jpg'),
        title: '网易云乐评',
        content:'范晓萱《氧气》不等了，你来找我，我也不要了。',
        jumpUrl:'../wangyi/main'
      },
       {
        coverImg: require('../../image/33.jpg'),
        title: '开心一笑',
        content:'你有多久没有哈哈大笑过了呢。',
        jumpUrl:'../xiaoHua/main'
      },
     {
        coverImg: require('../../image/99.jpg'),
        title: '每日一文',
        content:'人类是唯一能从无用知识的增长中获取快感的动物。',
        jumpUrl:'../day/main'
      },
      {
        coverImg: require('../../image/55.jpg'),
        title: 'Hitokoto一言',
        content:'我们总会看到有那么一两个句子能穿透你的心。',
        jumpUrl:'../say/main'
      },
       {
        coverImg: require('../../image/88.jpg'),
        title: '时间飞逝',
        content:'所有最好的时光，都是那些已然消逝不再回头的。',
        jumpUrl:'../touxiang/main'
      },
      {
        coverImg: require('../../image/100.jpg'),
        title: '土味情话',
        content:'苦海无边，回头是你。',
        jumpUrl:'../tuWei/main'
      },
      ],
      circular: true, // 设置衔接滑动
      previousMargin: '80rpx',
      nextMargin: '80rpx',
      animationData: {}, // 卡片放大动画
      animationData2: {}, // 卡片缩小动画
      heightChange:0,
      cardHeight:0
    }
  },
  components: {
  },
  onLoad(){
    wx.getSystemInfo({
        success:(res)=>{
          this.heightChange = res.windowHeight;
          this.cardHeight = (this.heightChange-445)/2;

          console.log('高度',this.heightChange)
        }
      })
  },
  methods: {
    jumpInfo(params){
       mpvue.navigateTo({url: params})

    },
    handleChange (e) {
      this.curIndex = e.mp.detail.current
      this.changeActive()
      this.changeNormal()
    },
    // 收缩
    changeNormal () {
      var animation2 = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      this.animation2 = animation2
      animation2.scale(0.9).opacity(0.3).step()
      this.animationData2 = animation2.export()
    },
    // 展开
    changeActive () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      })
      this.animation = animation
      animation.scale(1).opacity(1).step()
      this.animationData = animation.export()
    }
  }
}
</script>
<style lang="scss" scoped>
.seeInfo{
  width: 100%;
  position: absolute;
  bottom: 40rpx;
  text-align: center;
  height: 20rpx;
  color: orange;
  font-size: 16px;


}
.cardTitle{
  width: 50%;
  height: 180rpx;
  top: 36rpx;
  line-height: 180rpx;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  color: black;
  left: 25%;
  // background-color: red;
  position: absolute;
}
.cardBottom{
  width: 80%;
  height: 200rpx;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 10%;
  bottom: 40rpx;
  .haha{
    color: #615f5c;
    font-weight: 500;
    width: 100%;
    font-size: 16px;
    text-align: center;
  }


}

.home_swiper {
  position: relative;
  width: 100%;
  background: white;
}
.item{
  transform: scale(0.9);
  transform-origin: 50% 50% 0px;
  opacity: 0.8;
}
.active_item{
  transform: scale(1);
  opacity: 1;
}


.items{
  height: 890rpx;
  // width: 520rpx;
  // margin-left: 20rpx;
  position: relative;
  .card{
    position: absolute;
    width: 100%;
    // height: 811rpx;
    // background: #fff;
    border-radius: 7rpx;
  }
}

/* 当前 swiper-item*/
.active_item .card{
  opacity: 1;
}
.active_item .img_wrap .item_image{
  opacity: 1;
}
/* banner */
.img_wrap{
  position: relative;
  /* 图片 */
  .item_image{
    display: block;
    width: 100%;
    height: 890rpx;
    border-radius: 10rpx;
    z-index: 5;
    // opacity: 0.7;
  }
}


/* 标题出处 */
.title_wrap{
  width: 560rpx;
  height: 100rpx;
  margin: 0 auto;
  // padding-left: 130rpx;
  box-sizing: border-box;
  color: #b99c6d;
  border-bottom: 2rpx dotted #e4dcce;
  .title{
    position: relative;
    font-size: 30rpx;
    line-height: 35rpx;
    height: 70rpx;
    padding-top: 30rpx;
    overflow: hidden;
  }
}
// 描述
.desc{
  width: 554rpx;
  height: 140rpx;
  margin: 0 auto;
  color:#666666;
  font-size: 24rpx;
  line-height: 28rpx;
  overflow: hidden;
  margin-top: 21rpx;
  text-align: justify;
}
</style>