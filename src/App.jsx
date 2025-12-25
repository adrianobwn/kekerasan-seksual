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
import AdminLogs from "./pages/admin/AdminLogs";
import AdminArchive from "./pages/admin/AdminArchive";

import AdminLayout from "./pages/admin/AdminLayout";

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

        {/* Admin Login (Standalone) */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Routes (With Sidebar Layout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="logs" element={<AdminLogs />} />
          <Route path="archive" element={<AdminArchive />} />
          <Route path="report/:id" element={<ReportDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
