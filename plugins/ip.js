import { publicIpv4 } from "public-ip";

export default defineNuxtPlugin(async () => {
  const ip = await publicIpv4();
  useState("ip", () => ip);
});
