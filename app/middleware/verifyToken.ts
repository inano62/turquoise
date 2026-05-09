export async function verifyToken(token: string) {
  // 本当は Firebase Admin などで検証
  return { uid: "123", role: "admin" };
}
