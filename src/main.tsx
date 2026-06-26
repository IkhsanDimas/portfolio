import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hapus sisa tema lama dari localStorage sesungguhnya
try {
  window.localStorage.removeItem("theme");
} catch (e) {}

// Redirect next-themes agar menggunakan sessionStorage khusus untuk kunci "theme"
try {
  const originalGetItem = localStorage.getItem.bind(localStorage);
  const originalSetItem = localStorage.setItem.bind(localStorage);
  const originalRemoveItem = localStorage.removeItem.bind(localStorage);

  localStorage.getItem = function (key) {
    if (key === "theme") {
      return sessionStorage.getItem("theme");
    }
    return originalGetItem(key);
  };

  localStorage.setItem = function (key, value) {
    if (key === "theme") {
      return sessionStorage.setItem("theme", value);
    }
    return originalSetItem(key, value);
  };

  localStorage.removeItem = function (key) {
    if (key === "theme") {
      return sessionStorage.removeItem("theme");
    }
    return originalRemoveItem(key);
  };
} catch (e) {
  console.error("Gagal melakukan redirect storage:", e);
}

createRoot(document.getElementById("root")!).render(<App />);
