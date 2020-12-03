import { NextFunction, Response, Request } from 'express';

const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // tslint:disable-next-line:no-console
  console.log('error handling');
  // tslint:disable-next-line:no-console
  console.log(err);
};

export { errorHandler as ErrorHandler }
