import { useState } from "react";
import { Activity, ShieldAlert, LogIn } from "lucide-react";

const AdminLogs = () => {
    // Mock Logs Data
    const [logs] = useState([
        { id: 1, time: "25 Des, 14:30", admin: "Budi (Ketua Satgas)", action: "DECRYPT", detail: "Membuka laporan #REQ-882190", severity: "high" },
        { id: 2, time: "25 Des, 14:25", admin: "Budi (Ketua Satgas)", action: "LOGIN", detail: "Login sukses dari IP 192.168.1.10", severity: "low" },
        { id: 3, time: "24 Des, 09:15", admin: "Siti (Sekretaris)", action: "UPDATE", detail: "Mengubah status #REQ-110293 ke 'Proses'", severity: "medium" },
        { id: 4, time: "24 Des, 09:10", admin: "Siti (Sekretaris)", action: "LOGIN", detail: "Login sukses dari IP 192.168.1.12", severity: "low" },
        { id: 5, time: "23 Des, 23:45", admin: "SYSTEM", action: "ALERT", detail: "Percobaan login gagal 3x (Admin)", severity: "critical" },
    ]);

    const getBadgeStyle = (severity) => {
        switch (severity) {
            case "high": return "bg-red-100 text-red-700 border-red-200";
            case "critical": return "bg-red-900 text-red-100 border-red-800 animate-pulse";
            case "medium": return "bg-blue-100 text-blue-700 border-blue-200";
            case "low": return "bg-green-100 text-green-700 border-green-200";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="p-8">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                            <Activity className="w-8 h-8 text-teal-600" />
                            System Activity Logs
                        </h1>
                        <p className="text-slate-500 text-sm mt-1">Monitoring seluruh aktivitas Satgas demi akuntabilitas dan transparansi internal.</p>
                    </div>
                    <div className="flex gap-2">
                        <select className="bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-700 outline-none focus:border-teal-500">
                            <option>Filter by Admin</option>
                            <option>Budi</option>
                            <option>Siti</option>
                        </select>
                        <select className="bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-700 outline-none focus:border-teal-500">
                            <option>Filter by Action</option>
                            <option>DECRYPT</option>
                            <option>LOGIN</option>
                        </select>
                    </div>
                </div>

                {/* Log Table */}
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Waktu</th>
                                <th className="px-6 py-4">Admin / User</th>
                                <th className="px-6 py-4">Aktivitas</th>
                                <th className="px-6 py-4">Detail Aktivitas</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-slate-500 text-xs">{log.time}</td>
                                    <td className="px-6 py-4 font-bold text-slate-700">{log.admin}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold border uppercase tracking-wide ${getBadgeStyle(log.severity)}`}>
                                            {log.action}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 flex items-center gap-2">
                                        {log.severity === 'high' && <ShieldAlert className="w-4 h-4 text-red-500" />}
                                        {log.action.includes('LOGIN') && <LogIn className="w-4 h-4 text-green-500" />}
                                        {log.detail}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-center text-xs text-slate-400">
                    <p>Logs are immutable and stored for 5 years per compliance regulations.</p>
                </div>

            </div>
        </div>
    );
};

export default AdminLogs;
