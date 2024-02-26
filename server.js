import mongoose from "mongoose";
import "./node_modules/dotenv/config.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


mongoose.connect(process.env.MONGO_DB)
    .then(() => app.listen(PORT, () => {
        console.log('MongoDB connected')
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch(err => console.error('MongoDB connection error:', err));
