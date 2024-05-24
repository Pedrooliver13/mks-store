// Packages
import { useEffect, useState } from "react";

interface UseLocalStorageResponse<T> {
  value: T;
  updateLocalStorage: (newValue: T) => void;
}

export function useLocalStorage<T>(
  item: string,
  initialValue: T
): UseLocalStorageResponse<T> {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(item);
    if (value) setValue(JSON.parse(value));
  }, [item]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
