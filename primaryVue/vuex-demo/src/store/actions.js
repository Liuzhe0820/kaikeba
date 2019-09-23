export default{
    buyVip({commit},item){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               
                commit('setUserMember',{
                    userMember : item.userStatus,
                    vipLeave : item.vipLevel
                })
                resolve('购买成功')
            },1000)
        })
    },
    getFreeVip({commit,state}){
        return new Promise((resolve,reject)=>{
            console.log(state)
            if(state.userMember==='0'){
                setTimeout(()=>{
                    commit('setUserMember',{
                        userMember : 1,
                        vipLeave :1
                    })
                },1000);
                resolve('分享成功,获得会员')
            }else{
                resolve('分享成功')
            }
        })
    }
}