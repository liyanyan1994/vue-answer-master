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
          rightAnswer: [6,11,14,19,1],
          scoreTips: ['你是假的吧','表现一般般！','你真棒！'],
          activeIndex: '',
          score: 0,
          scoreTip:''
      }
  },
  computed: mapState(['answerId']),
  created(){
      this.countScore();
      this.getScoreTip();
      console.log('timer='+this.timer)
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
          if(this.score <=60){
            this.scoreTip = this.scoreTips[0];
            this.activeIndex = 'genery';
            return ;
          }
           if(this.score <=80){
            this.scoreTip = this.scoreTips[1];
            this.activeIndex = 'good';
            return ;
          }
           if(this.score <=100){
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
    position: absolute;
    bottom: 0;
    right: 0;
    width: 6rem;
    height: 9rem;
    color: #000;
    font-size: 1.4rem;
    .score-container{
        position: relative;
        width: 100%;
        height: 100%;
        background-size:100% 100%;
        background-repeat: no-repeat;
        &.genery{
            background-image: url('../../assets/images/genery.png');
            .your-scores{
                position: absolute;
                top: 2.8rem;
                right: 0.95rem;
                width: 3.8rem;
                height: 1.77rem;
                color: #e44f4f;
            };
            .scores-tips{
                position: absolute;
                top: 5.6rem;
                right: .9rem;
                width: 3.8rem;
                height: 1.21rem;
                color: rgb(216,60,71);
                font-size: .46rem;
            }
        }
        &.good{
            background-image: url('../../assets/images/good.png');
            .your-scores{
                position: absolute;
                top: 1.47rem;
                right: 0.95rem;
                width: 3.8rem;
                height: 1.77rem;
                color: #e44f4f;
            };
            .scores-tips{
                position: absolute;
                top: 4.06rem;
                right: .9rem;
                width: 3.8rem;
                height: 1.21rem;
                color: rgb(216,60,71);
                font-size: .46rem;
            }
        }
        &.nice{
            background-image: url('../../assets/images/nice.png');
            .your-scores{
                position: absolute;
                top: 1.47rem;
                right: 0.95rem;
                width: 3.8rem;
                height: 1.77rem;
                color: #e44f4f;
            };
            .scores-tips{
                position: absolute;
                top: 4.06rem;
                right: .4rem;
                width: 3.8rem;
                height: 1.21rem;
                color: rgb(216,60,71);
                font-size: .46rem;
            }
        }
    }
}
</style>



