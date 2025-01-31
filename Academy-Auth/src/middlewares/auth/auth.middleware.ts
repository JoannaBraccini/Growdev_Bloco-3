import { NextFunction, Request, Response } from "express";
import { JWT } from "../../utils/jwt";

// Bearer => Portador
// headers: {
//   Authorizathion: `Bearer ${token}`
// }

export class AuthMiddleware {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authorization = req.headers.authorization; // token

    if (!authorization) {
      res.status(401).json({ ok: false, message: "Usuário não autenticado." });
      return;
    }

    //const [_, token] = authorization.split(" "); => ["Bearer", "aspodkasopkdasopk"]
    const token = authorization.split(" ")[1];

    if (!authorization.startsWith("Bearer ") || !token) {
      res
        .status(401)
        .json({ ok: false, message: "Token ausente ou inválido." });
      return;
    }

    const jwt = new JWT();
    const studentDecoded = jwt.verifyToken(token);

    if (!studentDecoded) {
      res
        .status(401)
        .json({ ok: false, message: "Token inválido ou expirado." });
      return;
    }

    // Repassa essa informação.
    req.authStudent = {
      id: studentDecoded.id,
      name: studentDecoded.name,
      email: studentDecoded.email,
      studentType: studentDecoded.studentType,
    };

    next();
  }
}
