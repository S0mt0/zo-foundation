import { useEffect, useState } from "react";

export function useDeviceType() {
  const [hasShiftKey, setHasShiftKey] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator?.vendor;

    // Check if it's a mobile device by user agent
    const isMobile = /android|iPhone|iPod/i.test(userAgent);

    // Check if it's a tablet by user agent
    const isTablet = /iPad|Android/i.test(userAgent) && !isMobile;

    // Check for a physical keyboard presence, exclude mobile/tablet, and ensure larger screen width for desktop
    const mediaQuery = window.matchMedia(
      "(any-pointer: fine) and (min-width: 1024px)"
    );

    setHasShiftKey(!isMobile && !isTablet && mediaQuery.matches);
  }, []);

  return hasShiftKey;
}
