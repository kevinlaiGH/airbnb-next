"use client";

import { useEffect, useState } from "react";
// this solves hydration error when refreshing the page, use it as a wrapper in layout.tsx around the navbar
// reference: https://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
