<template>
  <div class="SayPanel">
      <div class="containers">
           <img :src="imgUrls" class="imgs">
           <div class="cotents">
               <div class="tits">{{title}}</div>
           </div>
           <div class="nings">
               <div class="gos" @click="init()" style="background:#606075">再来一口</div>
                <div class="gos"> <button class="infoTitle" open-type="share"> 分享土味情话</button></div>
           </div>
           <img :src="imgUrlInfo" class="imginfo">
            <div style="width:90%;position:fixed;bottom:60rpx;left:5%;">
              <official-account ></official-account>
           </div>
      </div>
  </div>
</template>
<script>
export default {
      onShareAppMessage: function(ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "心里怪ka",//这里是定义转发的标题
      path: `pages/index/main`,//这里是定义转发的地址
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
        var shareTickets = res.shareTickets;
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  },
  data () {
    return {

        imgUrls:require('../../image/303.jpg'),
        imgUrlInfo:require('../../image/404.jpg'),
        heightChange:0,
        title:''
    }
  },
  components: {
  },

onLoad(){
    this.init();
  
  },
  methods: {
     
      init(){
          var urls='https://v1.alapi.cn/api/soul';
          this.$http.get(urls).then((res)=>{
              if(res.status = 200){
                  this.title = res.data.data.title;
              }
          })
      },
  
    
  }
}
</script>
<style lang="scss" scoped>

button::after{
  border: none;
}
  .infoTitle{
         height: 80rpx;
        color: white;
          border-radius: 6px;
        line-height: 80rpx;
        background-color: orange;

    }
.SayPanel{
    width:100%;
}
.containers{
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.imgs{
    width: 300rpx;
    height: 300rpx;
}
.imginfo{
    width: 400rpx;
    height: 400rpx;
}
.cotents{
         box-shadow: 0 0 16rpx #615f5c;
         min-height: 240rpx;
    width: 100%;
    margin-top: 60rpx;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .tits{
        width: 90%;
        margin-left: 5%;
    font-weight: bold;
    font-size: 16px;


    }

}
.nings{
    width: 100%;
    height: 220rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.gos{
    width: 45%;
    height: 86rpx;
    background-color: orange;
    color: white;
    border-radius: 6px;
    text-align: center;
    line-height: 86rpx;
}
</style>