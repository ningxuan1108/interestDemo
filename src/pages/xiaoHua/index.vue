<template>
  <div class="SayPanel">
        <div class="panelInfo" v-for="(item,index) in jokePanel" :key="index">
           <div class="contentInfo">
                <div class="one">{{item.title}}</div>
                <div class="two" v-html="item.content"></div>
            </div>
      </div>
      <div style="width:100%;height:40rpx;"></div>
      <div class="panelList">
           <div class="pagego" @click="init('go')">上一页</div>
            <div class="pageNext" @click="init('next')">下一页</div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        page:1,
        jokePanel:[]
    }
  },
  components: {
  },

onLoad(){
    this.init();
  },
  methods: {
      init(params){
          if(params=='go'){
              this.page--
              if(this.page<=1){
                  this.page=1;
              }
          }else if(params=='next')(
              this.page++
          )
          var urls='https://v1.alapi.cn/api/joke?page='+this.page;
          this.$http.get(urls).then((res)=>{
              if(res.status = 200){
                 this.jokePanel = res.data.data.data;
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
.panelList{
    width:100%;
    position: fixed;
    bottom: 0;
    height: 120rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
        height: 80rpx;
        color: white;
          border-radius: 6px;
        line-height: 80rpx;
        background-color: orange;
    }
}
.SayPanel{
    width: 100%;
}
.panelInfo{
    width: 90%;
    margin-left: 5%;
    margin-bottom: 36rpx;
        border-radius: 6px;
    border: 1px solid gainsboro;
}
.contentInfo{
    width: 90%;
     margin-left: 5%;
    .one{
        color: gray;
        margin-top: 20rpx;
        font-size: 14px;
    }
    .two{
        color: gray;
        padding: 4rpx;
        font-size: 14px;
    }
}

</style>