import React, { useState, useEffect } from "react";

const PREFIX = "yongju_app_";
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  console.log("userLocalStorage line 6:" + key);

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    console.log("userLocalStorage line 10:" + jsonValue);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  console.log("userLocalstorage line 18:" + value);
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
    console.log("userLocalstorage line 21:" + value);
  }, [value, prefixedKey]);

  return [value, setValue];
}
