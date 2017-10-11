import * as types from './mutations-types'

export default {
    [types.INITIALIZE_DATA](state) { //初始化数据
        state.itemNum = 1;
        state.allSpanTime = 0;
        state.answerId = [];
    },
    [types.REMEBER_TIMES](state) { // 记录答题时间
        state.timer = setInterval(() => {
            state.allSpanTime++;
        }, 1000)
    },
    [types.REMEBER_ANSWER](state, id) { //记录选中题目的id
        state.answerId.push(id);

    },
    [types.ADD_ITEMNUM](state, num) { //点击进入下一题
        state.itemNum += num
    }
}