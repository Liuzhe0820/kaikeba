const express = require('express');//引入
const mongoose = require('mongoose');
const app = express();//实例化
//引入注册登录接口
const users = require('./routes/api/user');
//引入 数据库地址
const db = require('./config/keys').mongoURI;
mongoose.connect(db).then(()=>{
    console.log('mongonDB')
}).catch((error)=>{
    console.log(error)
})
app.get('/',(req,res)=>{
    res.send('hello,world!')
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})