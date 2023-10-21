const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser")
const urouter=require("./routes/route");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json())
const port=process.env.port || 3500;
const start =async()=>{
    try{
        app.listen(port, () => {
            console.log("\n\nStarting the Server\n\n");
        }); 
    }catch(err){
        console.log(err);
    }
}
start()
async function run(){
    await mongoose.connect("mongodb+srv://aagarwal1310:MRKzjHpJ4LroQxjC@users.8wv3h6o.mongodb.net/users?retryWrites=true&w=majority",(err)=>{
    if(err){
        console.log(err);
        const db=mongoose.connection
    }
    else{
        console.log("Connected DB");
    }
});
};
run();
app.get('/',(req,res)=>{res.send("Hello Worlddd")})
app.use('/api',urouter)
app.listen(5000,()=>{console.log("Server Running on 3000")});
/*
const CollegeDet=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:String,
    Charges:Number,
    Mobile:String,
    date:{
        type:Date,
        default:Date.now
    }
})
const Clgdata=new mongoose.model("College",CollegeDet);

const CreateDocument=async()=>{
    try{
        const kmit=new Clgdata({
            name:"KMiT",
            location:"Himayatnagar",
            Charges:956,
            Mobile:"878775655",
        });
        const Ngit=new Clgdata({
            name:"Neil Gogte Institute Of Technology",
            location:"Upal",
            Charges:1000,
            Mobile:"878775655",
        })
        const KMEC=new Clgdata({
            name:"Keshav Memorial Engineering College",
            location:"Upaal",
            Charges:1000,
            Mobile:"878775655",
        })
        const result=await Clgdata.insertMany([KMEC,Ngit,kmit]);
    console.log(result);
    }catch(err){
        console.log(err)
    }
    
}
CreateDocument();

const GetDocument=async()=>{
    const result=await Clgdata.find()
    console.log(result)
}
GetDocument()
*/