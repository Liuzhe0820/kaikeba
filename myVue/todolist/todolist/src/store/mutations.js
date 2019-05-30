import {
  ADD_TODO,
  REMOVE_TODO,
  SELECTED_ALL,
  REMOVE_ALL
} from './mutation-types';

export default {
  [ADD_TODO](state,{todo}){//添加
    state.lists.unshift(todo)
  },
  [REMOVE_TODO](state,{index}){//删除
    state.lists.splice(index,1)
  },
  [SELECTED_ALL](state,{value}){//全选
    state.lists.forEach((item)=>{
      item.isComplete = value
    })
  },
  [REMOVE_ALL](state,){//删除选中
    state.lists = state.lists.filter((item)=>{
      return !item.isComplete
    })
  }
}
