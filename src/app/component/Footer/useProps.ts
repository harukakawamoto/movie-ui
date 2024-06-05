import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type isPage = {
  isHome: boolean;
  isTicket: boolean;
  isProfile: boolean;
};

export const useProps = (): isPage => {
  const [isPage, setIsPage] = useState<isPage>({
    isHome: false,
    isProfile: false,
    isTicket: false,
  });

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("home")) {
      setIsPage({ isHome: true, isProfile: false, isTicket: false });
    } else if (pathname.includes("profile")) {
      setIsPage({ isHome: false, isProfile: true, isTicket: false });
    } else if (pathname.includes("ticket")) {
      setIsPage({ isHome: false, isProfile: false, isTicket: true });
    }
  }, [pathname]);

  return isPage;
};
