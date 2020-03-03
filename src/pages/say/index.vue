<template>
  <div class="SayPanel">
      <div class="imgs">
          <img :src="imgInfo" :style="{height:heightChange+'px'}" style="width:100%;"/>
      </div>
      <div class="ningInfo">
        <div class="header">
          <p class="one">ACG图片</p>
          <p class="two">ACG 图片,指的是动画、漫画、游戏之类的图片。</p>
          <img :src="imgUrl" class="imgInfo"/>
        </div>
        <div class="conTent">
          <div class="contentTitle">{{sayPanl.hitokoto}}</div>
          <div class="nings" >
            <div class="zuthor">——&nbsp;{{sayPanl.creator}}&nbsp;&nbsp;{{sayPanl.type}}</div>
          </div>
        </div>
         <div class="infos"> <button type="primary" @click="randoms" style='background:#606075;'>随机一言</button></div>
      </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
        imgUrl:'',
        heightChange:0,
        sayPanl:{},
        imgInfo:require('../../image/1022.jpg')
    }
  },
  components: {
  },

onLoad(){
    this.init();
    wx.getSystemInfo({
        success:(res)=>{
          this.heightChange = res.windowHeight;

        }
      })
  },
  methods: {
     
      init(){
          var urls='https://v1.alapi.cn/api/acg?format=json';
          this.$http.get(urls).then((res)=>{
              if(res.status = 200){
                  this.imgUrl = res.data.data.url;
                  this.say();
              }
          })
      },
      say(){
          var urls='https://v1.alapi.cn/api/hitokoto?format=json';
          this.$http.get(urls).then((res)=>{
              if(res.status = 200){
                  console.log(res)
                  this.sayPanl = res.data.data;
                  var num=this.sayPanl.type;
                  if(num == 'a'){
                     this.sayPanl.type='动画'
                  }else if(num =='b'){
                        this.sayPanl.type='漫画'
                  }else if(num == 'c'){
                   this.sayPanl.type='游戏'
                  }else if(num =='d'){
                    this.sayPanl.type='小说'
                  }else if(num =='e'){
                       this.sayPanl.type='原创'
                  }else if(num =='f'){
                     this.sayPanl.type='来自网络'
                  }else{
                       this.sayPanl.type=' 其他'
                  }

                  console.log(this.sayPanl)

              }
          })

      },
      randoms(){
          this.init();
      }
  }
}
</script>
<style lang="scss" scoped>
.infos{
    width: 100%;
    height: 60rpx;
    margin-top: 50rpx;
}
.SayPanel{
    width: 100%;
    // background-image: url('../../image/1025.jpg');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;

}
.ningInfo{
    position: absolute;
    width: 90%;
    left: 5%;
    top: 0;
}
// .imgInfo{
//     width:100%;
//     opacity: .5;
// }
.header{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .one{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-top: 40rpx;
    }
    .two{
        text-align: center;
        font-size: 14px;
        color: gray;
        padding: 20rpx;
    }
    .imgInfo{
        width: 400rpx;
        height: 400rpx;
        margin-top: 12rpx;
        border-radius: 5px;
        box-shadow: 0 0 16rpx #615f5c;
    }
}
.conTent{
    width: 100%;
    margin-top: 40rpx;
    overflow: hidden;
    .contentTitle{
        font-size: 14px;
        color: gray;
        line-height: 60rpx;
        margin-top: 40rpx;
    }
    .nings{
        width: 100%;
        margin-top: 40rpx;
         .zuthor{
                float: right;
                color: gray;
                        font-size: 14px;

            }

    }
   
}
</style>