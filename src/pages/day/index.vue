<template>
  <div class="dayPanel" >
     <div class="dayContainer">
         <p class="titles">《{{contentPanel.title}}》</p>
         <p class="autos">作者:{{contentPanel.author}}</p>
         <p class="autos" style="font-size:12px;">更新日期:{{contentPanel.up_date}}</p>
         <p class="descInfo">简介:{{contentPanel.desc}}</p>
         <div class="descList" v-html="contentPanel.content"></div>
         <div style="width:100%;height:100rpx;"></div>
         <div class="haPanel">
            <div class="infos"> <button type="primary" @click="init()" style='background:#606075;'>再来一篇</button></div>
         </div>

     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
       contentPanel:{}
    }
  },
  components: {
  },
  onLoad(){
      this.init();
  },
  methods: {
      init(){
        var urls='https://v1.alapi.cn/api/mryw/random';
          this.$http.get(urls).then((res)=>{
              if(res.status = 200){
                  this.contentPanel = res.data.data;
                  console.log(this.contentPanel)
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
.haPanel{
    width: 90%;
    height: 120rpx;
    position:fixed;
    bottom: 30rpx;
}
.infos{
    width: 100%;
    height: 60rpx;
}
.dayContainer{
    width: 90%;
    margin-left: 5%;
    
}
.titles{
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10rpx;
}
.autos{
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 10rpx;
    color: gray;
}
.descInfo{
    width: 100%;
    font-size: 14px;
    margin-top: 16rpx;
    margin-bottom: 40rpx;
    text-align: left;


}
._div .data-v-221e7c1e .descList{
    color: gray;
    font-size: 14px;
    line-height: 52rpx;

}
</style>