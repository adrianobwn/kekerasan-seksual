import { useNavigate } from "react-router-dom";
import { CheckCircle, AlertOctagon, Download, LogOut } from "lucide-react";

const SuccessPage = () => {
    const navigate = useNavigate();
    const ticketId = "REQ-" + Math.floor(100000 + Math.random() * 900000); // Mock ID
    const pin = Math.floor(1000 + Math.random() * 9000); // Mock PIN

    return (
        <div className="max-w-2xl mx-auto py-12 flex flex-col items-center">

            {/* Success Icon - Hidden on Print */}
            <div className="mb-6 bg-green-50 p-4 rounded-full border border-green-100 print:hidden">
                <CheckCircle className="w-12 h-12 text-green-700" />
            </div>

            <h1 className="text-3xl font-serif font-bold text-center text-slate-900 mb-2 print:hidden">
                Laporan Berhasil Diterima
            </h1>
            <p className="text-slate-600 text-center mb-10 max-w-md print:hidden">
                Terima kasih atas keberanian Anda melapor. Laporan Anda telah dienkripsi dan disimpan di server aman kami.
            </p>

            {/* TICKET CARD - Official Style - PRINT TARGET */}
            <div id="printable-ticket" className="bg-white border boundary-slate-300 rounded-lg shadow-sm w-full p-8 relative overflow-hidden print:shadow-none print:border-2 print:border-black">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F766E] print:bg-black"></div>

                <div className="text-center space-y-6">
                    {/* Header for Print Only - Hidden on Screen */}
                    <div className="hidden print:block mb-8 border-b border-black pb-4">
                        <h2 className="text-xl font-bold uppercase">Bukti Laporan Satgas PPKS</h2>
                        <p className="text-sm">Universitas Diponegoro</p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1 print:text-black">ID TIKET PENGADUAN</p>
                        <div className="text-3xl font-mono font-bold text-slate-900 tracking-wider select-all bg-slate-50 py-2 rounded border border-slate-200 inline-block px-6 print:bg-white print:border-black print:text-black">
                            {ticketId}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-6 print:border-black">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1 print:text-black">PIN AKSES</p>
                            <p className="text-2xl font-mono font-bold text-slate-800 print:text-black">{pin}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1 print:text-black">STATUS</p>
                            <p className="text-lg font-bold text-orange-600 bg-orange-50 inline-block px-3 py-0.5 rounded-full text-sm border border-orange-100 print:text-black print:bg-transparent print:border-black">Menunggu Review</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded text-left text-sm text-slate-600 flex gap-3 print:bg-transparent print:text-black">
                        <AlertOctagon className="w-5 h-5 shrink-0 text-slate-400 print:hidden" />
                        <p>
                            Simpan <strong>ID Tiket</strong> dan <strong>PIN</strong> ini di tempat aman. Anda memerlukannya untuk memantau status laporan Anda di kemudian hari. Sistem tidak dapat memulihkan ID yang hilang.
                        </p>
                    </div>
                </div>
            </div>

            {/* Actions - Hidden on Print */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-8 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="btn-outline flex-1 flex items-center justify-center gap-2"
                >
                    <Download className="w-4 h-4" />
                    Simpan Bukti Lapor
                </button>
                <button
                    onClick={() => window.location.replace("https://www.google.com")}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2.5 px-6 rounded-md shadow-sm transition-colors text-sm tracking-wide flex-1 flex items-center justify-center gap-2"
                >
                    <LogOut className="w-4 h-4" />
                    Tutup & Hapus Jejak
                </button>
            </div>

        </div>
    );
};

export default SuccessPage;
