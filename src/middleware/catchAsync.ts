import { Request, Response, NextFunction } from "express";

export const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: any) => {
      console.log(err.message);
      res.sendStatus(500) && next(err);
    });
  };
};