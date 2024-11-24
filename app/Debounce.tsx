"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState, type ChangeEvent } from "react";

export const Debounce = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        console.log("here");
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${value}`
        );

        const data = await res.json();

        console.log({ data });
      } catch (error) {
        console.error(error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input placeholder="...Search" onChange={(e) => onChange(e)} />;
};
