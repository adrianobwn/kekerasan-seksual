import { useNavigate } from "react-router-dom";
import { Inbox } from "lucide-react";

const AdminDashboard = () => {
    const navigate = useNavigate();

    // Mock Data
    const reports = [
        { id: "REQ-882190", date: "25 Des 2024", category: "Pelecehan Fisik", status: "Baru" },
        { id: "REQ-110293", date: "24 Des 2024", category: "KBGO", status: "Proses" },
        { id: "REQ-551002", date: "20 Des 2024", category: "Verbal", status: "Selesai" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Baru": return "bg-rose-100 text-rose-700 border-rose-200";
            case "Proses": return "bg-amber-100 text-amber-700 border-amber-200";
            case "Selesai": return "bg-emerald-100 text-emerald-700 border-emerald-200";
            default: return "bg-slate-100 text-slate-600";
        }
    };

    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Dashboard Satgas</h2>
                    <p className="text-slate-500 text-sm">Selamat bertugas, Admin.</p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                        <div className="bg-rose-50 p-2 rounded text-rose-600"><Inbox className="w-5 h-5" /></div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Laporan Baru</p>
                            <p className="text-xl font-bold text-slate-900">1</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Reports Table */}
            <div className="bg-white border boundary-slate-200 rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">ID Tiket</th>
                            <th className="px-6 py-4">Kategori</th>
                            <th className="px-6 py-4">Tanggal Masuk</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {reports.map((report) => (
                            <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-mono font-bold text-slate-700">{report.id}</td>
                                <td className="px-6 py-4 text-slate-600">{report.category}</td>
                                <td className="px-6 py-4 text-slate-500">{report.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(report.status)}`}>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => navigate(`/admin/report/${report.id}`)}
                                        className="text-teal-700 hover:text-teal-900 font-medium text-xs border border-teal-200 bg-teal-50 px-3 py-1.5 rounded hover:bg-teal-100 transition-colors"
                                    >
                                        Buka Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
