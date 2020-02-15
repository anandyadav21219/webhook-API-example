const mongoose = require('mongoose');

const Webhook =mongoose.Schema({
    name:String,
    playload:Object,
    addedBy:String,
    email:String
},{
    timestamps:true
})

module.exports=mongoose.model('WebHook',Webhook);