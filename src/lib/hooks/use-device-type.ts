import { useEffect, useState } from "react";
import { useIsMounted } from "usehooks-ts";

export function useDeviceType() {
  const isMounted = useIsMounted()();

  const [deviceType, setDeviceType] = useState<
    "desktop" | "mobile" | undefined
  >();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator?.vendor;

    const isMobile = /android|iPhone|iPod/i.test(userAgent);

    const isTablet = /iPad|Android/i.test(userAgent) && !isMobile;

    const mediaQuery = window.matchMedia(
      "(any-pointer: fine) and (min-width: 1024px)"
    );

    setDeviceType(
      !isMobile && !isTablet && mediaQuery.matches ? "desktop" : "mobile"
    );
  }, []);

  if (!isMounted) return;

  return deviceType;
}
