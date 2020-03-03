<template>
<div class="proInfo">
     <div class="imgs">
          <img :src="imgInfo" :style="{height:heightChange+'px'}" style="width:100%;"/>
      </div>
       <div class="progressbar">
        <progress :percent='percent' activeColor='#eedf0a' active  border-radius=6 stroke-width=15></progress>
        <p style="margin-top:40rpx;color:white;">{{year}}年已经过去了{{days}}天，{{percent}}%</p>
        <p style="margin-top:40rpx;color:white;"> 对于生命垂危的病人来说，时间就是宝贵的生命;对于做生意的人来说，时间就是财富，有的人说时间就像是从山坡上留下来的水从何处吹来的风，走了就不再回来了;而对于正在读书的学生们来说，时间就是力量，时间就是知识。珍惜时间就是掌握好知识的一半。</p>
    </div>
    

</div>
 
</template>
<script>
export default {
      data () {
    return {
        heightChange:0,
        imgInfo:require('../../image/989.jpg')
    }
  },
onLoad(){
    wx.getSystemInfo({
        success:(res)=>{
          this.heightChange = res.windowHeight;

        }
      })
  },
  methods: {
    isLeapYear () {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    getDayOfYear () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // start就是今年第一天
      // 今天的时间戳 减去今年第一天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (this.days * 100 / this.getDayOfYear()).toFixed(1)
    }
  }
}
</script>
<style lang='scss' scoped>
.proInfo{
    width: 100%;
}

.progressbar{
    width: 90%;
    left: 5%;
  text-align: center;
  margin-top:100rpx;
  position: absolute;
  top: 30rpx;
  margin-bottom:40px;
  progress{
    margin-bottom: 10px;
  }
}

</style>

