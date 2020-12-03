import { NextFunction, Response, Request } from "express";

export class SampleController {
  fakeJsonResponse = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = {
        status: 200,
        response: {
          data: 'Com on ma2222n'
        }
      }
      res.json(response)
    } catch(error) {
      next(error)
    }
  }};
