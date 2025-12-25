import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ReportForm from "./pages/ReportForm";
import SuccessPage from "./pages/SuccessPage";
import CheckStatus from "./pages/CheckStatus";
import TicketDetail from "./pages/TicketDetail";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ReportDetail from "./pages/admin/ReportDetail";

function App() {
  return (
    <BrowserRouter>
      {/* Note: Layout is applied globally here. 
           Ideally, Admin pages should NOT have the public Layout. 
           For prototype simplicity, we keep it or we can conditionally render.
           Let's assume Admin pages might have their own layout or just override styles.
      */}
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/report" element={<Layout><ReportForm /></Layout>} />
        <Route path="/success" element={<Layout><SuccessPage /></Layout>} />
        <Route path="/status" element={<Layout><CheckStatus /></Layout>} />
        <Route path="/status/view" element={<Layout><TicketDetail /></Layout>} />

        {/* Admin Routes (No Pubic Layout) */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/report/:id" element={<ReportDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
