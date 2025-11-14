// backend/src/middleware/authMiddleware.ts
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: { id: string; username: string; role?: string };
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token manquant" });
  }

  try {
    const token = header.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    req.user = { id: payload.id, username: payload.username, role: payload.role };
    next();
  } catch {
    return res.status(401).json({ message: "Token invalide" });
  }
}
