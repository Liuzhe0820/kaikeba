/*更新状态 */
import {
  ADD_TODO,
  REMOVE_TODO,
  SELECTED_ALL,
  REMOVE_ALL
} from './mutation-types';
export default {
  //添加一条记录
  addTodos({commit},todo){
    commit(ADD_TODO,{todo})
  },
  //删除一条记录
  removeTodos({commit},index){
    commit(REMOVE_TODO,{index})
  },
  //选中所有
  setSelectAll({commit},value){
    commit(SELECTED_ALL,{value})
  },
  //删除选中
  removeAll({commit}){
    commit(REMOVE_ALL)
  }
}
