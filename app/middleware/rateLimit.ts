const WINDOW = 60 * 1000; // 1分
const LIMIT = 60; // 60回

const ipMap = new Map<string, number[]>();

export function rateLimit(ip: string) {
  const now = Date.now();
  const timestamps = ipMap.get(ip) || [];

  const recent = timestamps.filter((t) => now - t < WINDOW);
  recent.push(now);

  ipMap.set(ip, recent);

  return recent.length <= LIMIT;
}
