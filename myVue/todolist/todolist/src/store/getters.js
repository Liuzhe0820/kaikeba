export default {
  //已完成数量
  compleateCount(state){
    return state.lists.reduce((total,item)=>{
      if(item.isComplete){
        return total+1
      }else{
        return total
      }
    },0);
  },
  totalCount(state){
    return state.lists.length
  },
  isCheckedAll(state,getter){
    return getter.compleateCount === state.lists.length && state.lists.length>0
  }
}
