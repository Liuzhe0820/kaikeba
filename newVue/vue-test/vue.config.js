//nodeJS代码
module.exports = {
    publicPath : '/kcar',
    configureWebpack:{
        devServer:{
            before(app){
                // app是express 实例
                app.get('/goods',(req,res)=>{
                    res.json([
                        {id:1,text:'123'},
                        {di:2,text:'456'},
                    ])
                })
            }
        }
    }
}