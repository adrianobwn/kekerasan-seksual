import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

const Layout = ({ children }) => {
    const quickExit = () => {
        window.location.replace("https://www.google.com");
    };

    useEffect(() => {
        let lastPress = 0;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                const now = Date.now();
                if (now - lastPress < 500) {
                    quickExit();
                }
                lastPress = now;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans border-t-[6px] border-[#0F766E]">

            {/* Header Institusi */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">

                        {/* Logo Satgas UNDIP */}
                        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.location.href = '/'}>
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/id/2/2d/Undip.png"
                                    alt="Logo UNDIP"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-lg md:text-xl text-slate-900 leading-tight">SATGAS PPKS</span>
                                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">UNIVERSITAS DIPONEGORO</span>
                            </div>
                        </div>

                        {/* Quick Exit */}
                        <div>
                            <button
                                onClick={quickExit}
                                className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-medium py-2 px-4 rounded-md text-sm transition-colors flex items-center gap-2"
                            >
                                <span>Keluar Cepat</span>
                                <span className="text-[10px] bg-rose-200 px-1.5 rounded font-bold text-rose-800 hidden sm:inline-block">ESC 2x</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

                {/* Banner Regulasi */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mb-8 flex gap-3 text-sm text-slate-700 items-start">
                    <AlertCircle className="w-5 h-5 shrink-0 text-[#0F766E] mt-0.5" />
                    <p>
                        <strong>Ruang Aman Resmi:</strong> Layanan ini dikelola sesuai mandat <em>Permendikbudristek No. 30 Tahun 2021</em>. Identitas pelapor dijamin kerahasiaannya dan dilindungi oleh undang-undang.
                    </p>
                </div>

                {children}
            </main>

            <footer className="bg-white border-t border-slate-200 py-10 mt-auto">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="font-serif font-bold text-slate-900 mb-2">SATGAS PPKS - UNIVERSITAS DIPONEGORO</p>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                        Berkomitmen menciptakan lingkungan pendidikan yang aman, sehat, dan bebas dari kekerasan seksual.
                        Melapor adalah langkah awal untuk memutus rantai kekerasan.
                    </p>
                    <div className="mt-6 text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Satuan Tugas PPKS Universitas Diponegoro.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
