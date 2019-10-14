const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建Schema
const ProfileSchema = new Schema({
    type:{
        type:String
    },
    describe:{//描述
        type:String
    },
    income:{//收入
        type:String,
        required:true
    },
    expend:{//支出
        type:String,
        required:true
    },
    cach:{//现金
        type:String,
        required:true
    },
    remark:{//备注
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports = Profile = mongoose.model('Profile',ProfileSchema);
