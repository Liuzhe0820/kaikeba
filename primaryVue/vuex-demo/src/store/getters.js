export default {
    memberInfo(state){
        if(state.userMember=='0'){
            return '普通会员'
        }else if(state.userMember=='1'){
            return 'vip会员'
        }else if(state.userMember=='2'){
            return `高级v${state.vipLeave}会员`
        }
    }
}