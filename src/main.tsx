// 1) Importações básicas
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Componente raiz da aplicação
import App from "./App";

// 3) Estilos globais (Tailwind + extras)
import "./index.css";

// 4) Dizemos ao React onde ele deve renderizar o <App />
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
