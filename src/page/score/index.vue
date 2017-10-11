<template>
    <div class="score">
        <div class="score-container">
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
            return ;
          }
           if(this.score <=60){
            this.scoreTip = this.scoreTips[1];
            return ;
          }
           if(this.score <=80){
            this.scoreTip = this.scoreTips[2];
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
    border: 1px solid red;
    .score-container{
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid blue;
        .your-scores{
            position: absolute;
            top: 1.77rem;
            right: 1.55rem;
            border: 1px solid red;
            width: 3.8rem;
            height: 1.77rem;
            color: red;
        };
        .scores-tips{
            position: absolute;
            top: 4.56rem;
            right: 1.55rem;
            border: 1px solid red;
            width: 3.8rem;
            height: 1.21rem;
            color: red;
            font-size: .36rem;
        }
    }
   
}
</style>



