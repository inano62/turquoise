"use client";

import { Turquoise } from "@/components/ui/Turquoise";
import { Citrus } from "@/components/ui/Citrus";
import { Plasmic } from "@/components/ui/Plasmic";
import { usePathname } from "next/navigation";

export default function BrandSwitcher() {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/dashboard");
  const isPlasmic = pathname.startsWith("/plasmic");

  if (isAdmin) return <Turquoise />;
  if (isPlasmic) return <Plasmic />;

  return <Citrus />;
}