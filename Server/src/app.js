import express from 'express';
import cors from 'cors';
import routers from './routes/reports';
import morgan from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { options } from './swaggerOptions';

const specs=swaggerJSDoc(options)

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routers);
app.use('/docs',swaggerUI.serve,swaggerUI.setup(specs))

export default app;
