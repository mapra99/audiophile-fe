import { useState, useEffect } from "react";
import type { ClientOnlyProps } from "./types";

let hydrating = true;

function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hydrated, setHydrated] = useState(() => !hydrating);

  useEffect(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated ? <>{children()}</> : <>{fallback}</>;
}

export default ClientOnly
