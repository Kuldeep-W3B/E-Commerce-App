import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/User.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors';
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.use(bodyParser.json())



app.use(cors({ 
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// home testing route
app.get('/', (req, res) => res.json({ messge: 'This is home route' }))

// user Router
app.use('/api/user', userRouter)

// product Router
app.use('/api/product', productRouter)

// cart Router
app.use('/api/cart', cartRouter)

// address Router
app.use('/api/address', addressRouter)

// payment Router
app.use('/api/payment', paymentRouter)

mongoose.connect(
    "mongodb://localhost:27017/Eshop"
).then(() =>{
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log(err);
});

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`))