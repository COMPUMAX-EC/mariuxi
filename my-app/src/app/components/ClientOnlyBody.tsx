'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyBodyProps {
  children: React.ReactNode;
  className: string;
}

export default function ClientOnlyBody({ children, className }: ClientOnlyBodyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR and initial client render, return body without client-specific attributes
    return (
      <body className={className}>
        {children}
      </body>
    );
  }

  // After hydration, allow browser extensions to modify the DOM
  return (
    <body className={className}>
      {children}
    </body>
  );
}