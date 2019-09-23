import axios from 'axios';
export default function(vm){
    axios.interceptors.request.use(config=>{
        //拦截，请求头加token
        const token = localStorage.getItem('token');
        if(token){
            config.headers.token = token;
        }
        return config
    });
    axios.interceptors.response.use(null,err=>{
        
        if(err.response.status===401){
           //清空
           vm.$store.dispatch('logout');
           //跳转
           vm.$router.push('/login')
        }
        return Peomise.rejrct(err)
    });
}