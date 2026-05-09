import { verifyToken } from "./verifyToken";

export async function requireRole(req: Request, roles: string[]) {
  const auth = req.headers.get("Authorization");
  if (!auth) return null;

  const token = auth.replace("Bearer ", "");
  const user = await verifyToken(token);
  if (!user) return null;

  if (!roles.includes(user.role)) return null;

  return user;
}
