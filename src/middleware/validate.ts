import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (err) {
      return res.sendStatus(500) && next(err);
    }
  };
