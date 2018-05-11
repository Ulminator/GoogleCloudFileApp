import express from 'express';
import morgan from 'morgan';
import routes from './routes/index';
import pkg from '../package.json';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send({ description: 'Welcome!' });
});

app.get('/info', (req, res) => {
  res.status(200).send({ version: pkg.version });
});

app.get('/health', (req, res) => {
  res.status(200).send({ status: 'UP' });
});

app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

export default app;
