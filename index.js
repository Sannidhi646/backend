const express=require('express')
const router=require('./routes/appRoutes')
var mongoose=require('mongoose')
const bodyParser = require('body-parser')

const app=express()
app.use(express.json());

let res=mongoose.connect("mongodb://127.0.0.1:27017/meanDb", {
    useNewUrlParser: true,
   
});
if(res){
    console.log(res)
}
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/',router)
app.listen(3000,()=>{
    console.log("Server is running at 3000")
})