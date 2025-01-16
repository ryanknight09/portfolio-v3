"use client";

import { Input } from "@/components/ui/input";
import { type ChangeEvent, useEffect, useRef, useState } from "react";

// with useEffect
export const MyComponent = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(query);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="space-y-2">
      <Input
        className="max-w-xs"
        placeholder="Debounce..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>* View the console.log() to see the debounce in action</p>
    </div>
  );
};

// with useRef
export const Debounce = () => {
  const [value, setValue] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setValue(newValue);
    }, 500);
  };

  return (
    <div className="space-y-2">
      <Input
        className="max-w-xs"
        placeholder="Debounce..."
        onChange={handleInputChange}
      />
      <p>{value}</p>
    </div>
  );
};
