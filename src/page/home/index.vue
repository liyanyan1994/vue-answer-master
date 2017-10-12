<template>
    <div class="home">
        <div class="home-logo-container home-logo bg-img"></div>
        <div class="item-container">
            <div class="item-left bg-img"></div>
            <div class="item-center bg-img"></div>
        </div>
        <router-link to="item" class="start-btn bg-img"></router-link>
        <div class="home-bottom bg-img"></div>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
      return {}
  }
}
</script>

<style lang="less" scoped>
.bg-img{
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.home{
    .home-logo-container{
        position: absolute;
        width: 80%;
        height: 2.26rem;
        top: 2.7rem;
        left: .8rem;
        &.home-logo{
            background-image: url(../../assets/images/01_06.png);
            background-position: right center;
        }
    }
    .item-container{
        position: relative;
        width: 100%;
        height: 2.74rem;
        top: 5.82rem;
        .item-left{
            position: absolute;
            width: 2.74rem;
            height: 1.02rem;
            top: 1.4rem;
            left: .28rem;
            z-index: 10;
            background-image: url(../../assets/images/01_10.png);
            background-position: right center;
        }
        .item-center{
            position: absolute;
            width: 4.60rem;
            height: 4.4rem;
            left:1.6rem;
            background-image: url(../../assets/images/01_03.png);
            background-position: right center;
        }
    }
    .start-btn{
        position: absolute;
        display: block;
        width: 3.92rem;
        height: .8rem;
        line-height: .8rem;
        border-left: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
        border-radius: 4px;
        bottom: 1.36rem;
        left: 1.4rem;
        font-size: .44rem;
        color: #ffffff;
        text-align: center;
        background-image: url(../../assets/images/01_07.png);
        background-position: right center;
    }
    .home-bottom{
        width: 1.77rem;
        height: .46rem;
        line-height: .46rem;
        position: absolute;
        bottom: .48rem;
        left: 2.4rem;
        text-align: center;
        background-image: url(../../assets/images/01_18.png);
        background-position: center center;
    }
}
</style>

