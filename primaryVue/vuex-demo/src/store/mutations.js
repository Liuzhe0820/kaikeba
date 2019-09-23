export default {
    login(state,v){
        state.userInfo=v
    },
    setUserMember(state,v){
        state.userMember = v.userMember;
        state.vipLeave = v.vipLeave;
    }
} 