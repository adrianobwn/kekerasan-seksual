import { Archive, Download, FileCheck, Gavel, UserCheck } from "lucide-react";

const AdminArchive = () => {
    // Mock Archive Data
    const archives = [
        { id: "REQ-991002", category: "Pelecehan Verbal", date: "10 Nov 2024", outcome: "Sanksi Ringan (Teguran)", outcomeType: "warning" },
        { id: "REQ-882110", category: "Kekerasan Fisik", date: "05 Okt 2024", outcome: "Sanksi Berat (Drop Out)", outcomeType: "severe" },
        { id: "REQ-772199", category: "KBGO", date: "20 Sep 2024", outcome: "Mediasi & Konseling", outcomeType: "mediation" },
        { id: "REQ-661001", category: "Catcalling", date: "15 Ags 2024", outcome: "Sanksi Sedang (Skorsing)", outcomeType: "moderate" },
        { id: "REQ-550912", category: "Penguntitan", date: "01 Jul 2024", outcome: "Tidak Terbukti", outcomeType: "dismissed" },
    ];

    const getOutcomeStyle = (type) => {
        switch (type) {
            case "severe": return "text-red-700 bg-red-50 border-red-200";
            case "moderate": return "text-orange-700 bg-orange-50 border-orange-200";
            case "warning": return "text-yellow-700 bg-yellow-50 border-yellow-200";
            case "mediation": return "text-blue-700 bg-blue-50 border-blue-200";
            default: return "text-slate-500 bg-slate-100 border-slate-200";
        }
    };

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <Archive className="w-8 h-8 text-teal-600" />
                        Arsip Kasus Selesai
                    </h1>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-teal-50 text-teal-600 rounded-full"><FileCheck className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total Kasus Selesai</p>
                            <p className="text-2xl font-bold text-slate-900">120</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-red-50 text-red-600 rounded-full"><Gavel className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Sanksi Berat</p>
                            <p className="text-2xl font-bold text-slate-900">5</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-full"><UserCheck className="w-6 h-6" /></div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Mediasi Berhasil</p>
                            <p className="text-2xl font-bold text-slate-900">15</p>
                        </div>
                    </div>
                </div>

                {/* Archive Table */}
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full text-left text-sm opacity-90 hover:opacity-100 transition-opacity">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">ID Tiket</th>
                                <th className="px-6 py-4">Kategori</th>
                                <th className="px-6 py-4">Tgl Selesai</th>
                                <th className="px-6 py-4">Putusan Akhir</th>
                                <th className="px-6 py-4 text-right">Berkas</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {archives.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-mono font-medium text-slate-500">{item.id}</td>
                                    <td className="px-6 py-4 text-slate-600">{item.category}</td>
                                    <td className="px-6 py-4 text-slate-500">{item.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getOutcomeStyle(item.outcomeType)}`}>
                                            {item.outcome}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-teal-600 transition-colors inline-flex items-center gap-1 text-xs border border-slate-200 px-2 py-1 rounded hover:border-teal-200">
                                            <Download className="w-3 h-3" /> PDF
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AdminArchive;
