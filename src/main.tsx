import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Reset tema ke default (putih) setiap kali halaman dimuat ulang atau dikunjungi kembali
try {
  localStorage.removeItem("theme");
} catch (e) {
  console.error("Gagal menghapus theme dari localStorage:", e);
}

createRoot(document.getElementById("root")!).render(<App />);
