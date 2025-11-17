import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
try {
  if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } else {
    console.warn('EmailJS public key not found in environment variables');
  }
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

createRoot(document.getElementById("root")!).render(<App />);