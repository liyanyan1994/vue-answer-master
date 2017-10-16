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
        "question_name": "在卖房管家上如何转介客户？",
        "question_id": 51,
        "question_answer": [
            { "question_answer_id": 5, "question_id": 51, "question_answer_name": "对着手机大喊：'我要转介客户!'", "is_standard_answer": 0 },
            { "question_answer_id": 6, "question_id": 51, "question_answer_name": "在楼盘页面找到对应的案场右下角的转介客户", "is_standard_answer": 1 },
            { "question_answer_id": 7, "question_id": 51, "question_answer_name": "什么？卖房管家还能转介？", "is_standard_answer": 0 },
            { "question_answer_id": 8, "question_id": 51, "question_answer_name": "我也不知道啊", "is_standard_answer": 0 }
        ]
    }, {
        "question_name": "如何修改客户的意向信息？",
        "question_id": 52,
        "question_answer": [
            { "question_answer_id": 9, "question_id": 52, "question_answer_name": "躺着改，坐着改，站着改，找个舒服的姿势改", "is_standard_answer": 0 },
            { "question_answer_id": 10, "question_id": 52, "question_answer_name": "我还真不知道在哪里改", "is_standard_answer": 0 },
            { "question_answer_id": 11, "question_id": 52, "question_answer_name": "搜索到对应客户进入详情页点击意向信息修改", "is_standard_answer": 1 },
            { "question_answer_id": 12, "question_id": 52, "question_answer_name": "搜索客户信息点击客户信息修改", "is_standard_answer": 0 }
        ]
    }, {
        "question_name": "联系谁可以修改业绩归属？",
        "question_id": 53,
        "question_answer": [
            { "question_answer_id": 13, "question_id": 53, "question_answer_name": "女专", "is_standard_answer": 0 },
            { "question_answer_id": 14, "question_id": 53, "question_answer_name": "业务后台", "is_standard_answer": 1 },
            { "question_answer_id": 15, "question_id": 53, "question_answer_name": "我不知道", "is_standard_answer": 0 },
            { "question_answer_id": 16, "question_id": 53, "question_answer_name": "专案", "is_standard_answer": 0 }
        ]
    }, {
        "question_name": "如何认购转签约？",
        "question_id": 54,
        "question_answer": [
            { "question_answer_id": 17, "question_id": 54, "question_answer_name": "在签约单里新增认购", "is_standard_answer": 0 },
            { "question_answer_id": 18, "question_id": 54, "question_answer_name": "在首页创建签约", "is_standard_answer": 0 },
            { "question_answer_id": 19, "question_id": 54, "question_answer_name": "在认购单里找到对应订单发起签约", "is_standard_answer": 1 },
            { "question_answer_id": 20, "question_id": 54, "question_answer_name": "我不清楚", "is_standard_answer": 0 }
        ]
    }, {
        "question_name": "给自己定一个小目标赚得一个亿，你会选择？",
        "question_id": 55,
        "question_answer": [
            { "question_answer_id": 1, "question_id": 55, "question_answer_name": "买房，卖房  ", "is_standard_answer": 1 },
            { "question_answer_id": 2, "question_id": 55, "question_answer_name": "投资股市", "is_standard_answer": 0 },
            { "question_answer_id": 3, "question_id": 55, "question_answer_name": "打劫银行", "is_standard_answer": 0 },
            { "question_answer_id": 4, "question_id": 55, "question_answer_name": " 开个店铺", "is_standard_answer": 0 }
        ]
    }, ],
    answerId: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})