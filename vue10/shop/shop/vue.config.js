module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack:{
    devServer:{
      before(app){
        app.get('/api/login',(req,res)=>{
          const {username,password}=req.query;
          if(username==='liuzhe' & password==='123456'){
            res.json({code:1,token:'xxx'})
          }else{
            res.sendStatus(401).json({code:0,message:'错了'})
          }
        });
        function auth(req,res,next){
          if(req.headers.token){
            next();
          }else{
            res.status(401)
          }
        };
        app.get('/api/userinfo',auth,(req,res)=>{
          res.json({code:1,data:{name:'123'}})
        })
      }
    }
  }
}
