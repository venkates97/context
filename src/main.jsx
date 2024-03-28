import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ProductContextProvider } from './ProductContextApi/ProductContextApi.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <ProductContextProvider>
  <App />
  </ProductContextProvider>
  </BrowserRouter>
);