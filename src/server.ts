import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

//Com o /categories não precisa ficar passando sempre nas rotas
app.use("/categories", categoriesRoutes);

app.listen(3333, () => { console.log('Server is running!') });