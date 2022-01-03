import React, { useState, useEffect } from "react";

const PREFIX = "yongju_app";
export default function UseLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(
    () => localStorage.setItem(prefixedKey, JSON.stringify(value)),
    [value, prefixedKey]
  );

  return [value, setValue];
}
