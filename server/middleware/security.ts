import rateLimit from 'express-rate-limit';
import xss from 'xss';
import type { Request, Response, NextFunction } from 'express';

// Rate limit for contact form submissions
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: 'Too many contact requests. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Sanitize request body
export function sanitizeInput(req: Request, _res: Response, next: NextFunction) {
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = xss(req.body[key]);
      }
    });
  }
  next();
}

// Validate content type
export function validateContentType(req: Request, res: Response, next: NextFunction) {
  if (req.method !== 'GET' && (!req.is('application/json') || !req.body)) {
    return res.status(415).json({ message: 'Content-Type must be application/json' });
  }
  next();
}

// Error handler middleware
export function errorHandler(err: any, _req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  
  if (res.headersSent) {
    return next(err);
  }
  
  res.status(500).json({
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message
  });
}
