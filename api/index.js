import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';

const app = express();

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log(err);
});


app.listen(3000, ()=>{
    console.log('server is listening...');
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
