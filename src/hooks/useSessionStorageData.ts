import { useState, useEffect } from "react";
import type { TubeSample } from "../lib/types";

import { SESSION_STORAGE_KEY } from "../constants";

export function useSessionStorageData() {
  const [samples, setSamples] = useState<TubeSample[]>(() => {
    const storedSamples = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    return storedSamples ? JSON.parse(storedSamples) : [];
  });

  useEffect(() => {
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(samples));
  }, [samples]);

  return {
    setSamples,
    samples,
  };
}
