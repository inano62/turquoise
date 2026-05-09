import { requireRole } from "@/middleware/requireRole";
import { rateLimit } from "@/middleware/rateLimit";

export async function GET(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (!rateLimit(ip)) {
    return new Response("Too Many Requests", { status: 429 });
  }

  const user = await requireRole(req, ["admin"]);
  if (!user) {
    return new Response("Forbidden", { status: 403 });
  }

  return Response.json({ message: "OK", user });
}
