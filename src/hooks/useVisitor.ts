"use client";

import { useEffect, useState } from "react";

export default function useVisitor() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchVisitors() {
      try {
        const response = await fetch("/api/visitors");

        const data = await response.json();

        setCount(data.count);
      } catch {
        setCount(0);
      }
    }

    fetchVisitors();
  }, []);

  return count;
}