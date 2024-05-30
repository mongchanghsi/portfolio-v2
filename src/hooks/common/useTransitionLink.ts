"use client";

import { animatePageOut } from "@/components/shared/Animation/Page/MultiBanners";
import { usePathname, useRouter } from "next/navigation";

// https://www.youtube.com/watch?v=VnRC8PyzBT8
const useTransitionLink = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRedirect = (href: string) => {
    if (pathname !== href) animatePageOut(href, router);
  };

  return { handleRedirect };
};

export default useTransitionLink;
