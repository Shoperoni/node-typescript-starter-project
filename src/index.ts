import express from 'express';
import { SampleRouter } from './route/sample';
import { ErrorHandler } from './route/error';

const app = express();
const port = 8080; // default port to listen

app.use("/", SampleRouter);
app.use(ErrorHandler);

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `Server started at http://localhost:${ port }` );
} );
