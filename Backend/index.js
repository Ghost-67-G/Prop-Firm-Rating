const myExpress = require('express')
const app = myExpress()
const userRoute = require('./routes/users')
const companyRoute = require('./routes/company')
const searchRoute = require('./routes/search')
const reviewRoute = require('./routes/review')
const adminRoute = require('./routes/admin')
app.use(myExpress.json());
const path = require('path')


require("./db/db")


// app.use(myExpress.static('./build'));
app.use(userRoute)
app.use(companyRoute)
app.use(searchRoute)
app.use(adminRoute)
app.use(reviewRoute)

// app.use(myExpress.static(path.resolve(__dirname,'build')));

// app.get("*",(req,resp)=>{
//         resp.sendFile(path.resolve(__dirname+'/build/index.html'))
// })

app.listen(process.env.PORT||2700,()=>{console.log("Hello, Sever is running")})