import { BrowserRouter, Routes, Route } from "react-router-dom";

/* HOME */
import HomePage from "./pages/home/HomePage";

/* MAIN PAGES */
import DestinationsPage from "./pages/destinations/DestinationsPage";
import ExperiencesPage from "./pages/experiences/ExperiencesPage";
import PackagesPage from "./pages/PackagesPage/PackagesPage";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";

/* DESTINATION DETAIL PAGES */
import MunnarPage from "./pages/MunnarPage";
import WayanadPage from "./pages/WayanadPage";
import OotyPage from "./pages/OotyPage";
import YercaudPage from "./pages/YercaudPage";
import KodaikanalPage from "./pages/KodaikanalPage";
import MaduraiPage from "./pages/MaduraiPage";
import MahabalipuramPage from "./pages/MahabalipuramPage";
import DhanushkodiPage from "./pages/DhanushkodiPage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* MAIN */}
        <Route
          path="/destinations"
          element={<DestinationsPage />}
        />

        <Route
          path="/experiences"
          element={<ExperiencesPage />}
        />

        <Route
          path="/packages"
          element={<PackagesPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* DESTINATION DETAILS */}
        <Route
          path="/munnar"
          element={<MunnarPage />}
        />

        <Route
          path="/wayanad"
          element={<WayanadPage />}
        />

        <Route
          path="/ooty"
          element={<OotyPage />}
        />

        <Route
          path="/yercaud"
          element={<YercaudPage />}
        />

        <Route
          path="/kodaikanal"
          element={<KodaikanalPage />}
        />

        <Route
          path="/madurai"
          element={<MaduraiPage />}
        />

        <Route
          path="/mahabalipuram"
          element={<MahabalipuramPage />}
        />

        <Route
          path="/dhanushkodi"
          element={<DhanushkodiPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}