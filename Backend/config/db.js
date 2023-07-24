const mongoose =required('mongoose');


mongoose.connect(url,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))

module.export=connectDB;
