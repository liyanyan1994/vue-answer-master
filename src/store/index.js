import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    allSpanTime: 0, // 总共花费时间
    itemNum: 1, // 第几题
    timer: '', // 定时器
    itemDetail: [{
        "question_name": "如何修改客户意向,你觉得这是一个正确的答案吗？",
        "question_id": 50,
        "question_answer": [
            { "question_answer_id": 1, "question_id": 50, "question_answer_name": "躺着改，坐着改，站着改，怎么舒服怎么改", "is_standard_answer": 0 },
            { "question_answer_id": 2, "question_id": 50, "question_answer_name": "我不知道在哪里改", "is_standard_answer": 0 },
            { "question_answer_id": 3, "question_id": 50, "question_answer_name": "找到对应详情页进行改", "is_standard_answer": 1 },
            { "question_answer_id": 4, "question_id": 50, "question_answer_name": "想咋改就咋改", "is_standard_answer": 0 }
        ]
    }, {
        "question_name": "没有认筹单可以创建认购单吗？",
        "question_id": 51,
        "question_answer": [
            { "question_answer_id": 5, "question_id": 51, "question_answer_name": "可以", "is_standard_answer": 0 },
            { "question_answer_id": 6, "question_id": 51, "question_answer_name": "不可以", "is_standard_answer": 1 },
            { "question_answer_id": 7, "question_id": 51, "question_answer_name": "我不知道", "is_standard_answer": 0 },
            { "question_answer_id": 8, "question_id": 51, "question_answer_name": "还想咋滴", "is_standard_answer": 0 }
        ]
    }],
    answerId: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})