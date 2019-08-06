export default{
    state:{
        isLogin:!!localStorage.getItem('token')
    },
    mutation:{
        setLoginState(state,val){
            state.isLogin = val;
        }
    },
    actions:{
        login(){

        }
    }
}