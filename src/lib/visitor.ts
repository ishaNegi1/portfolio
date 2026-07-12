import { createHash } from "crypto";

export function hashIP(ip: string) {
  return createHash("sha256")
    .update(ip)
    .digest("hex");
}