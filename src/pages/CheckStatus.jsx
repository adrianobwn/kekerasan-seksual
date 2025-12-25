import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Search, ArrowRight, ShieldAlert } from "lucide-react";

const CheckStatus = () => {
    const navigate = useNavigate();
    const [ticketId, setTicketId] = useState("");
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Simuasi Validasi Sederhana
        if (!ticketId.startsWith("#REQ") && !ticketId.startsWith("REQ")) {
            setError("Format ID Tiket tidak valid. Gunakan format (REQ-XXXX).");
            return;
        }

        if (pin.length < 4) {
            setError("PIN Akses minimal 4 digit.");
            return;
        }

        // Mock Login Success
        localStorage.setItem("authToken", "simulated-token-123");
        navigate("/status/view");
    };

    return (
        <div className="max-w-md mx-auto py-12">
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-[#0F766E] mb-4 border border-teal-100">
                    <Search className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-serif font-bold text-slate-900">Cek Status Laporan</h1>
                <p className="text-slate-500 text-sm mt-2">Masuk untuk melihat perkembangan laporan dan berkomunikasi dengan Satgas.</p>
            </div>

            <div className="card-official">
                <form onSubmit={handleLogin} className="space-y-6">

                    {error && (
                        <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded text-sm flex gap-2 items-center">
                            <ShieldAlert className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">ID Tiket</label>
                        <input
                            type="text"
                            className="input-formal font-mono"
                            placeholder="Contoh: REQ-882190"
                            value={ticketId}
                            onChange={(e) => setTicketId(e.target.value.toUpperCase())}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">PIN Akses</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="input-formal pr-10"
                                placeholder="******"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                maxLength={6}
                            />
                            <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3 opacity-50" />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                        Buka Laporan Saya
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>
            </div>

            <div className="text-center mt-8 text-xs text-slate-400">
                <p>Lupa ID atau PIN? Demi keamanan, Satgas tidak dapat memulihkan akses.</p>
                <p className="mt-1">Silakan buat laporan baru jika akses hilang.</p>
            </div>
        </div>
    );
};

export default CheckStatus;
