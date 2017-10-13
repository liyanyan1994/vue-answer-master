<template>
    <div class="item">
        <div class="item-title-container">{{itemNum}}.{{itemDetail[itemNum-1].question_name}}</div>
        <div class="item-list-container">
            <ul>
                <li class="item-list" v-for="(item,index) in itemDetail[itemNum-1].question_answer"  :class="{'has_choosed':choosedIndex==index}" :key="index" @click="choosed(index,item.question_answer_id)">
                    <!-- <p class="item-list-content" :class="{'has_choosed':choosedIndex==index}">{{transType(index)}}.{{item.question_answer_name}}</p> -->
                  {{transType(index)}}.{{item.question_answer_name}}
                </li>
            </ul>
        </div>
        <div class="item-btn next" @click="nextItem" v-if="itemDetail.length > itemNum"></div>
        <div class="item-btn subm" v-else @click="submitAnswer"></div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'item',
  data () {
      return {
          choosedIndex: null, //choosed的索引
          choosedId: null //choosed的id
      }
  },
  created () {
      this.$store.commit('REMEBER_TIMES')
  },
  computed: mapState([
      'itemNum','itemDetail','timer'
  ]),
  methods: {
      ...mapActions(['addNum','initializeData']),
      transType: type => {
          switch(type) {
              case 0: return 'A';
              case 1: return 'B';
              case 2: return 'C';
              case 3: return 'D';
          }
      },
       toastMsg (msg) {  // 显示消息提示
        let _this = this
        _this.$vux.toast.show({
          type: 'text',
          width: '4em',
          text: msg
        })
      },
      choosed(type,id){
          this.choosedIndex = type;
          this.choosedId = id;
      },
      nextItem() {
          if(this.choosedIndex !== null) {
              this.choosedIndex = null;
              this.addNum(this.choosedId);
          } else{
              this.toastMsg("你还没有选中答案")
          }
      },
      submitAnswer() {
          if(this.choosedIndex !== null) {
              this.choosedIndex = null;
              this.addNum(this.choosedId);
              clearInterval(this.timer);
              this.$router.push('score')
          } else{
              this.toastMsg("你还没有选中答案")
          }
      }
  }
}
</script>

<style lang="less" scoped>
.item{
    font-size:.3rem;
    .item-title-container{
        position: absolute;
        width: 5.6rem;
        min-height: 1.2rem;
        left: 50%;
        top: 2rem;
        text-indent:.3rem; 
        padding: .3rem .2rem .6rem;
        margin-left: -2.8rem;
        // border: 1px solid red;
        background-image: url('../../assets/images/item_title.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #000;
    }
    .item-list-container{
        position: absolute;
        top: 4.4rem;
        left: 50%;
        width: 5rem;
        margin-left: -2.5rem;
        .item-list{
            margin-bottom: .45rem;
            text-indent: .3rem;
            width: 100%;
            padding: .3rem .1rem;
            min-height: 1rem;
            color: #000;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            &:nth-child(1){
                background-image: url('../../assets/images/item_01.png');
            };
            &:nth-child(2){
                background-image: url('../../assets/images/item_02.png');
            }
            &:nth-child(3){
                background-image: url('../../assets/images/item_03.png');
            }
            &:nth-child(4){
                background-image: url('../../assets/images/item_01.png');
            }
            &.has_choosed{
                color: #fff;
            }
        }
    }
    .item-btn{
        position: absolute;
        width: 1.8rem;
        height: .9rem;
        left: 50%;
        bottom: .4rem;
        margin-left: -.9rem;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &.next{
            background-image: url('../../assets/images/2-2.png');
        };
        &.subm{
            background-image: url('../../assets/images/3-1.png');
        }
    }
}
</style>

