import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

exports.verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // Checks to see if there is an Authorization header
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    return next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};
