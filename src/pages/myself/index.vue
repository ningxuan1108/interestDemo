<template>
  <div class="SayPanel">
      <div class="mySelf">
        <div class="powerPanel" v-if='powerStatus' style="margin-top:50rpx;">
          <button  v-if="canIUse" class="powerInfo" type="primary"  size='small' open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">点击授权</button>
          <div v-else>请升级微信版本</div>
        </div>
        <div class="nickPanel" v-if='!powerStatus' >
            <div class="panelInfo">
                <img :src="avatarUrl" class="nickImg"/>
            </div>
        </div>
        <div class="nickList">
            <div class="list_panel" v-for='(item,index) in listDetail' :key="index" @click="jumpInfo(item.jumpUrl)">
                <div class="imgLeft"> <img :src="item.imgInfo"  class="imgNing"/></div>
                <p  class="textInfo" >{{item.title}}</p>
                <div class="textRight"><img :src="jiantou" class="jian"/></div>
            </div>
        </div>
        <div class="nickList" >
             <div class="list_panel">
                <div class="imgLeft"> <img :src="shareImg"  class="imgNing"/></div>
                 <button class="infoTitle textInfo" open-type="share"> 分享好友</button>
                <div class="textRight"><img :src="jiantou" class="jian"/></div>
            </div>
        </div>
        <div style="width:100%;margin-top:30rpx">
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
        listDetail:[
            {
                title:'网易云热评',
                imgInfo:require('../../image/火 热.png'),
                jumpUrl:'../wangyi/main'
            },
            {
                title:'笑话合集',
                imgInfo:require('../../image/历史.png'),
                jumpUrl:'../xiaoHua/main'
            },
            {
                title:'心灵毒鸡汤',
                imgInfo:require('../../image/909.png'),
                 jumpUrl:'../jiTang/main'
            },
            {
                title:'每日一文',
                imgInfo:require('../../image/火 热.png'),
                jumpUrl:'../day/main'
            },
        ],
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        nickName:'',
        avatarUrl:'',
        powerStatus:true,
        jiantou:require('../../image/jiantou.png'),
        shareImg:require('../../image/share.png')
    }
  },
  components: {
  },

onLoad(){
    
  
  },
  methods: {
      jumpInfo(params){
        var loginStatus = this.$store.state.loginStatus;
        if( loginStatus ==0){
          wx.showToast({
              title: '请先点击授权',
              icon: 'none',
              duration: 2000
          })
          return false;
        }
          console.log(params)
          mpvue.navigateTo({url: params})
      },
    // 初始化判断是否授权
    initInfo(){
      var that =this;
       wx.getSetting({
        success: function(res){
          console.log(res)
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
                that.nickName = res.userInfo.nickName;
                that.avatarUrl = res.userInfo.avatarUrl;
                that.powerStatus =false;
                 that.$store.commit('changeLogin',1);
              }
            })
          }else{
            wx.showToast({
              title: '请先授权',
              icon: 'success',
              duration: 2000
            })
          }
        }
      })
    },
    getUserInfo1(){
      if(wx.canIUse('button.open-type.getUserInfo')){
      }else{
        console.log('请升级微信版本')
      }
    },
    bindGetUserInfo(e) {
      if (e.mp.detail.rawData){
        console.log(e.mp.detail.rawData)
        let infolist =JSON.parse(e.mp.detail.rawData);
        console.log(infolist)
        this.nickName = infolist.nickName;
        this.avatarUrl = infolist.avatarUrl;
        this.powerStatus =false;
         this.$store.commit('changeLogin',1);
      } else {
        //用户按了拒绝按钮
        this.powerStatus =true;
        wx.showToast({
            title: '拒绝授权',
            icon: 'success',
            duration: 2000
        })
      }
    }
  
  },
  mounted(){
      this.initInfo();
  }
}
</script>
<style lang="scss" scoped>
.infoTitle{
    background-color: white !important;
    border:none !important;
    padding: 0 !important;
    text-align: left !important;

}
button::after{
  border: none;
}
.nickList{
    width: 90%;
    margin-left: 5%;
    border-radius: 6px;
    margin-top: 20rpx;
    box-shadow: 0 0 16rpx #d6d5d3;
    .list_panel{
        width: 90%;
        margin-left: 5%;
        height: 120rpx;
        border-bottom: 1px solid gainsboro;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .imgLeft{
            width: 10%;
            .imgNing{
                width: 32rpx;
             height: 32rpx;
            }
        }
       
        .textInfo{
            font-size:16px;
            margin-left:20rpx;
            width: 70%;
        }
        .textRight{
            width:20%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .jian{
                width: 30rpx;
                height: 34rpx;
            }
        }
    }
    .list_panel:last-child{
        border-bottom: 1px solid transparent;
    }

}
.SayPanel{
    width: 100%;
}
.mySelf{
    width:90%;
    margin-left: 5%;
    height: 1000rpx;
}
.powerInfo{
    width: 50%;
    background-color: #ffa500;
}
.nickPanel{
    width: 100%;
    height: 280rpx;
    margin-top: 10rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .panelInfo{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .nickImg{
            width: 150rpx;
            height: 150rpx;
            border-radius: 50%;
            margin-bottom: 30rpx;
            // box-shadow: 0 0 16rpx #615f5c;
            box-shadow: 0 0 16rpx #615f5c;
        }

    }
}
         
</style>