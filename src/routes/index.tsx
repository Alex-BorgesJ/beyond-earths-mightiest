import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

export function BaseRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
