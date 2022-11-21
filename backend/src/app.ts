import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const app = express();
const PORT = 8080;

const {
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME,
} = process.env;
const uri = `mongodb://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@ac-poygvlp-shard-00-00.ktxtkgg.mongodb.net:27017,ac-poygvlp-shard-00-01.ktxtkgg.mongodb.net:27017,ac-poygvlp-shard-00-02.ktxtkgg.mongodb.net:27017/${MONGODB_ATLAS_DBNAME}?ssl=true&replicaSet=atlas-axrqq9-shard-0&authSource=admin&retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cors());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, options).then(
    () => {
        app.listen(PORT, () => {
            console.info(`⚡️[server]: Server is running at http://127.0.0.1/${PORT} or http://localhost:${PORT}`);
            }
        );
    })
    .catch(error => {
        throw error;
});



// mongodb+srv://argaputra12:<password>@cluster0.ktxtkgg.mongodb.net/?retryWrites=true&w=majority