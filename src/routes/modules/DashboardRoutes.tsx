import { ElementsPage } from "pages";
import { Routes, Route } from "react-router-dom";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ElementsPage />} />
    </Routes>
  );
};

export default DashboardRoutes;