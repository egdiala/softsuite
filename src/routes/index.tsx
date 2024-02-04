import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./modules/DashboardRoutes";
import { MainLayout } from "layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayout>
              <DashboardRoutes />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;