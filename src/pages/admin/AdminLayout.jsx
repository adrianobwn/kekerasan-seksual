import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { LogOut, Archive, Inbox, Clock, Menu, X } from "lucide-react";

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    const isActive = (path) => {
        return location.pathname === path ? "bg-teal-900/50 text-teal-300 border-r-2 border-teal-500" : "hover:bg-slate-800 hover:text-white transition-colors opacity-70 hover:opacity-100";
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsSidebarOpen(false); // Close sidebar on mobile after navigation
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row text-slate-800">

            {/* Mobile Header */}
            <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
                <span className="font-bold tracking-wider flex items-center gap-2">
                    SATGAS PANEL
                </span>
                <button onClick={() => setIsSidebarOpen(true)} className="p-2 -mr-2 text-slate-300 hover:text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar (Responsive) */}
            <aside className={`
                w-64 bg-slate-900 text-slate-300 flex flex-col h-screen 
                fixed md:sticky top-0 z-40 transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}>
                <div className="p-6 border-b border-slate-800 flex justify-between items-start">
                    <div>
                        <h1 className="font-bold text-white tracking-wider">SATGAS PANEL</h1>
                        <p className="text-xs text-slate-500 mt-1">v2.0 Internal Secure</p>
                    </div>
                    {/* Mobile Close Button */}
                    <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <button onClick={() => handleNavigation("/admin/dashboard")} className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive('/admin/dashboard')}`}>
                        <Inbox className="w-5 h-5" />
                        Laporan Masuk
                        {location.pathname === '/admin/dashboard' && <span className="ml-auto bg-teal-500 text-teal-950 text-xs font-bold px-2 py-0.5 rounded-full">3</span>}
                    </button>
                    <button onClick={() => handleNavigation("/admin/archive")} className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive('/admin/archive')}`}>
                        <Archive className="w-5 h-5" />
                        Arsip Data
                    </button>
                    <button onClick={() => handleNavigation("/admin/logs")} className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isActive('/admin/logs')}`}>
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
            <main className="flex-1 overflow-auto w-full md:w-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
