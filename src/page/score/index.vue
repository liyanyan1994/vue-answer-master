<template>
    <div class="score">
        <div class="score-container" :class="activeIndex">
            <div class="your-scores">{{score}}分</div>
            <div class="scores-tips">{{scoreTip}}</div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'score',
  data () {
      return {
          rightAnswer: [2,7],
          scoreTips: ['你是假的吧','全部都给老师了？','猴子派来的，这么聪明！'],
          activeIndex: '',
          score: 0,
          scoreTip:''
      }
  },
  computed:mapState(['answerId']),
  created(){
      this.countScore();
      this.getScoreTip();
  },
  methods: {
      countScore(){
          this.answerId.forEach((item,index) => {
              if(item === this.rightAnswer[index]){
                  this.score += 20;
              }
          }, this);
      },
      getScoreTip() {
          if(this.score <=20){
            this.scoreTip = this.scoreTips[0];
            this.activeIndex = 'genery';
            return ;
          }
           if(this.score <=60){
            this.scoreTip = this.scoreTips[1];
            this.activeIndex = 'good';
            return ;
          }
           if(this.score <=80){
            this.scoreTip = this.scoreTips[2];
            this.activeIndex = 'nice';
            return ;
          }
      }
  }
}
</script>

<style lang="less" scoped>
.score{
    color: #000;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 6rem;
    height: 9rem;
    // border: 1px solid red;
    .score-container{
        position: relative;
        width: 100%;
        height: 100%;
        // border: 1px solid blue;
        background-size:100% 100%;
        background-repeat: no-repeat;
        &.genery{
            background-image: url('../../assets/images/genery.png');
            .your-scores{
                position: absolute;
                top: 3.3rem;
                right: 0.95rem;
                // border: 1px solid red;
                width: 3.8rem;
                height: 1.77rem;
                color: red;
            };
            .scores-tips{
                position: absolute;
                top: 5.3rem;
                right: .9rem;
                // border: 1px solid red;
                width: 3.8rem;
                height: 1.21rem;
                color: red;
                font-size: .36rem;
            }
        }
        &.good{
            background-image: url('../../assets/images/good.png');
            .your-scores{
                position: absolute;
                top: 1.47rem;
                right: 0.55rem;
                // border: 1px solid red;
                width: 3.8rem;
                height: 1.77rem;
                color: red;
            };
            .scores-tips{
                position: absolute;
                top: 3.86rem;
                right: .9rem;
                // border: 1px solid red;
                width: 3.8rem;
                height: 1.21rem;
                color: red;
                font-size: .36rem;
            }
        }
        &.nice{
            background-image: url('../../assets/images/nice.png');
            .your-scores{
                position: absolute;
                top: 1.47rem;
                right: 0.55rem;
                // border: 1px solid red;
                width: 3.8rem;
                height: 1.77rem;
                color: red;
            };
            .scores-tips{
                position: absolute;
                top: 3.86rem;
                right: .4rem;
                // border: 1px solid red;
                width: 3.8rem;
                height: 1.21rem;
                color: red;
                font-size: .36rem;
            }
        }
        // .your-scores{
        //     position: absolute;
        //     top: 1.47rem;
        //     right: 0.55rem;
        //     // border: 1px solid red;
        //     width: 3.8rem;
        //     height: 1.77rem;
        //     color: red;
        // };
        // .scores-tips{
        //     position: absolute;
        //     top: 3.86rem;
        //     right: .9rem;
        //     // border: 1px solid red;
        //     width: 3.8rem;
        //     height: 1.21rem;
        //     color: red;
        //     font-size: .36rem;
        // }
    }
   
}
</style>



