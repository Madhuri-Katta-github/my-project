import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => console.log("Mongo db is connected"))
    .catch((error) => console.log(error));

const app = express();

app.use(express.json());

app.listen(3000, () => { console.log("server is connected!!") });

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

//creating middleware to handle errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});

export default app;