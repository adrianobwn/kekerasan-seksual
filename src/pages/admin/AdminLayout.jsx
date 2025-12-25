import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { LogOut, Archive, Inbox, Clock } from "lucide-react";

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    const isActive = (path) => {
        return location.pathname === path ? "bg-teal-900/50 text-teal-300 border-r-2 border-teal-500" : "hover:bg-slate-800 hover:text-white transition-colors opacity-70 hover:opacity-100";
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex text-slate-800">

            {/* Sticky Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex h-screen sticky top-0">
                <div className="p-6 border-b border-slate-800">
                    <h1 className="font-bold text-white tracking-wider">SATGAS PANEL</h1>
                    <p className="text-xs text-slate-500 mt-1">v2.0 Internal Secure</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button onClick={() => navigate("/admin/dashboard")} className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive('/admin/dashboard')}`}>
                        <Inbox className="w-5 h-5" />
                        Laporan Masuk
                        {location.pathname === '/admin/dashboard' && <span className="ml-auto bg-teal-500 text-teal-950 text-xs font-bold px-2 py-0.5 rounded-full">3</span>}
                    </button>
                    <button onClick={() => navigate("/admin/archive")} className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive('/admin/archive')}`}>
                        <Archive className="w-5 h-5" />
                        Arsip Data
                    </button>
                    <button onClick={() => navigate("/admin/logs")} className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive('/admin/logs')}`}>
                        <Clock className="w-5 h-5" />
                        Log Aktivitas
                    </button>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-my-red hover:text-white w-full transition-colors font-medium">
                        <LogOut className="w-5 h-5" />
                        Keluar Sistem
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
