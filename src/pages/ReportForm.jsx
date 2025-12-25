import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, ClipboardList, AlertCircle } from "lucide-react";
import AES from "crypto-js/aes";

const PUBLIC_KEY = "kampus-rahasia-123";

const ReportForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        category: "pelecehan-fisik", // default sesuai regulasi
        date: "",
        location: "",
        chronology: "",
        evidence: null,
        userRole: "mahasiswa", // Pelapor
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            const encryptedChronology = AES.encrypt(formData.chronology, PUBLIC_KEY).toString();
            console.log("🔒 Encrypted:", encryptedChronology);
            navigate("/success");
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto">

            <div className="mb-8 border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-[#0F766E] uppercase tracking-widest mb-2 block">Kerahasiaan Dijamin</span>
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Formulir Laporan Satgas PPKS</h1>
                <p className="text-slate-600">
                    Gunakan formulir ini untuk melaporkan indikasi kekerasan seksual. Anda boleh melapor sebagai Korban atau Saksi.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

                {/* SECTION 1: KLASIFIKASI */}
                <div className="bg-white border text-left border-slate-200 rounded-lg p-6 shadow-sm">
                    <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                        <ClipboardList className="w-5 h-5 text-[#0F766E]" /> I. Klasifikasi Pelaporan
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">Status Pelapor</label>
                            <select name="userRole" value={formData.userRole} onChange={handleChange} className="input-formal">
                                <option value="mahasiswa">Mahasiswa</option>
                                <option value="dosen">Dosen / Tenaga Pendidik</option>
                                <option value="staf">Staf / Tenaga Kependidikan</option>
                                <option value="umum">Masyarakat Umum</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">Kategori (Sesuai Permendikbudristek 30/2021)</label>
                            <select name="category" value={formData.category} onChange={handleChange} className="input-formal">
                                <option value="pelecehan-fisik">Pelecehan Seksual Fisik</option>
                                <option value="pelecehan-nonfisik">Pelecehan Seksual Non-Fisik</option>
                                <option value="kbgo">Kekerasan Berbasis Gender Online (KBGO)</option>
                                <option value="pemaksaan-seksual">Pemaksaan Hubungan Seksual</option>
                                <option value="eksploitasi-seksual">Eksploitasi Seksual</option>
                                <option value="perbudakan-seksual">Perbudakan Seksual</option>
                                <option value="penyiksaan-seksual">Penyiksaan Seksual</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* SECTION 2: DETAIL KEJADIAN */}
                <div className="bg-white border text-left border-slate-200 rounded-lg p-6 shadow-sm">
                    <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                        II. Detail Kejadian
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">Tanggal & Waktu</label>
                            <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} className="input-formal" required />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">Lokasi Spesifik</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} className="input-formal" placeholder="Nama Gedung, Ruangan, dll." required />
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4 text-sm text-blue-800">
                        <div className="flex gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <div>
                                <strong>Panduan Penulisan Kronologi:</strong> Ceritakan urutan kejadian sejelas mungkin. Siapa pelaku (jika tahu), apa yang dilakukan, siapa saksi yang melihat. Jangan takut, cerita Anda aman bersama kami.
                            </div>
                        </div>
                    </div>

                    <textarea
                        name="chronology"
                        rows="12"
                        value={formData.chronology}
                        onChange={handleChange}
                        className="input-formal h-auto"
                        placeholder="Mulai tulis kronologi di sini..."
                        required
                    ></textarea>
                </div>

                {/* SECTION 3: BUKTI */}
                <div className="bg-white border text-left border-slate-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                        III. Bukti Awal (Jika Ada)
                    </h2>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">Unggah Dokumen/Foto</label>
                        <input type="file" name="evidence" onChange={handleChange} className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-[#0F766E]/10 file:text-[#0F766E]
                            hover:file:bg-[#0F766E]/20
                          "/>
                        <p className="text-xs text-slate-400 mt-1">Kami menjamin keamanan file yang Anda unggah.</p>
                    </div>
                </div>

                {/* FOOTER ACTION */}
                <div className="flex justify-end pt-4">
                    <button type="submit" disabled={isLoading} className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 text-base py-3 px-8 shadow-md">
                        {isLoading ? "Mengenkripsi Data..." : "Kirim Laporan Resmi"}
                        {!isLoading && <ArrowRight className="w-5 h-5" />}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ReportForm;
