// app/api/_cors.ts
export function cors() {
  return {
    "Access-Control-Allow-Origin": process.env.FRONT_ORIGIN || "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };
}
