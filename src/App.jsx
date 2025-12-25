import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ReportForm from "./pages/ReportForm";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
