<template>
  <div class="wangPanel" >
     <div class="wangContent">
         <!-- 歌手部分 -->
         <div class="songPanel">
             <div class="songLeft">
                 <img :src="songPanel.image" style="width:100%;height:280rpx;box-shadow: 0 0 16rpx #615f5c;border-radius:6px;"/>
             </div>
             <div class="songRight">
                 <div class="songs">
                     <div class="songOne">歌名:</div>
                     <div class="songTwo">{{songPanel.title}}</div>
                 </div>
                  <div class="songs">
                     <div class="songOne">歌手:</div>
                     <div class="songTwo">{{songPanel.author}}</div>
                 </div>
                  <div class="songs">
                     <div class="songOne">所属专辑:</div>
                     <div class="songTwo">{{songPanel.album}}</div>
                 </div>
                    <div class="songs">
                     <div class="songOne">歌曲描述:</div>
                     <div class="songTwo">{{songPanel.description}}</div>
                 </div>
             </div>
         </div>

         <!-- 评论部分 -->
         <div class="songComm">
             <p>精彩评论:</p>
             <div class="commPanels">
                 <div class="commLeft">
                     <img :src="songPanel.comment_avatar_url" style="width:80rpx;height:80rpx;"/>
                 </div>
                 <div class="commRight">
                     <p class="commName">{{songPanel.comment_nickname}}</p>
                     <p class="commYear">{{songPanel.comment_published_date}}</p>
                     <p class="commTent">{{songPanel.comment_content}}</p>

                 </div>

             </div>
             <div style="width:100%;height:160rpx;"></div>
         </div>
          <div class="panelList">
            <div class="pagego" @click="init()">随机乐评</div>
            <div class="pageNext">
                <button class="infoTitle" open-type="share"> 分享好友</button>
            </div>
           
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
        songPanel:{},
        ning:''
    }
  },
  components: {
  },
  onLoad(){
      this.init();
  },
  methods: {
      init(){
          var urls = 'https://v1.alapi.cn/api/comment/';
          this.$http.get(urls).then((res)=>{
              if(res.status = 200){
                  this.songPanel = res.data.data;
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
.panelList{
    width:90%;
    left: 5%;
    position: fixed;
    bottom: 0;
    height: 120rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-around !important;
    align-items: center;
    .pagego{
        width: 36%;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        background-color: #606075;
        border-radius: 6px;
        color: white
    }
    .pageNext{
        text-align: center;
        width: 36%;
       
    }
    .infoTitle{
        // background-color: white !important;
        // border:none !important;
        // padding: 0 !important;
        // text-align: left !important;
         height: 80rpx;
        color: white;
          border-radius: 6px;
        line-height: 80rpx;
        background-color: orange;

    }
}
.songComm{
    width: 100%;
    margin-top: 120rpx;
}
.commPanels{
    width: 100%;
    margin-top: 30rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .commLeft{
        width:80rpx;
        border-radius: 50%;
        overflow: hidden;
        height: 80rpx;

    }
    .commRight{
        width: 80%;
        .commName{
            width: 100%;
            font-size: 12px;
            color: black;
            padding:10rpx;
        }
        .commYear{
            width: 100%;
            font-size: 12px;
            color: gainsboro;
            padding:10rpx;
        }
        .commTent{
            margin-top: 10rpx;
            color: gray;
            font-size: 14px;
        }
    }
}


.wangPanel{
    width: 100%;
}
.wangHeader{
    width: 90%;
    height: 120rpx;
    margin-left: 5%;
}
.wangContent{
    width: 90%;
    margin-top: 10rpx;
    margin-left: 5%;
}
.songPanel{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .songLeft{
        width: 40%;
        height: 280rpx;
        margin-top: 30rpx;
    }
    
    .songRight{

        width: 100%;
        margin-top: 40rpx;
        height: 280rpx;
        float:right;
    }
}

.songs{
    width: 100%;
    height: 70rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
 .songOne{
            width: 45%;
            font-size: 14px;
            text-align: right;
            color: gray;
        }

        .songTwo{
                font-size: 14px;
                color: black;
                width: 55%;
                margin-left: 2%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
button::after{
  border: none;
}

</style>