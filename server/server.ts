import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';

function start() {
  // if (!process.env.NODE_ENV || !process.env.PORT) {
  //   console.error('ENV variables are missing.', 'Verify that you have set them directly or in a .env file.');
  //   process.exit(1);
  // } else {
  //   console.log('Using ENV variables');
  // }
  console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`process.env.PORT ${process.env.PORT}`);

  const app = express();
  const port = process.env.PORT || 7627;
  const www = process.env.WWW || './dist/heroku-test';
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.static(www));
  console.log(`serving ${www}`);
  app.use('/api', router);
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: www });
  });
  app.listen(port, () => console.log(`listening on http://localhost:${port}`));
}

export { start };
