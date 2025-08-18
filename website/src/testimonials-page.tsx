import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Testimonial from "./Testimonial";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Testimonial />
  </StrictMode>
);
