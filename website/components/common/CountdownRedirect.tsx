'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function CountdownRedirect() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 1) {
      router.push('/');
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, router]);

  return <span className="font-bold text-secondary text-2xl">{countdown}</span>;
}

export default CountdownRedirect;
