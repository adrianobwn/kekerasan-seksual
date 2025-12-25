import { useNavigate } from "react-router-dom";
import { Scale, HeartHandshake, FileText, ChevronRight } from "lucide-react";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-12 py-8">

            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-4xl mx-auto py-10 animate-fade-in-up">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#0F766E] rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
                    Layanan Resmi Kemendikbudristek
                </span>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                    Bersama Wujudkan Kampus Merdeka <br />
                    <span className="text-[#0F766E]">Bebas Kekerasan Seksual</span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    Portal ini adalah saluran resmi Satgas PPKS untuk pelaporan kekerasan seksual sesuai <strong>Permendikbudristek No. 30 Tahun 2021</strong>.
                    Setiap laporan akan ditindaklanjuti dengan prinsip kerahasiaan, keberpihakan pada korban, dan keadilan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button
                        onClick={() => navigate("/report")}
                        className="btn-primary text-lg px-8 py-3 shadow-md flex items-center justify-center gap-2"
                    >
                        Ajukan Laporan Resmi
                        <ChevronRight className="w-5 h-5 opacity-80" />
                    </button>
                    <button className="btn-outline text-lg px-8 py-3">
                        Panduan Pelaporan
                    </button>
                </div>
            </section>

            {/* Principles Section */}
            <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-slate-200">
                <div className="card-official hover:border-[#0F766E]/50 transition-colors">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-[#0F766E]">
                        <Scale className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Payung Hukum Kuat</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Penanganan berdasar pada regulasi Permendikbudristek 30/2021, menjamin kepastian hukum bagi pelapor dan terlapor.
                    </p>
                </div>

                <div className="card-official hover:border-[#0F766E]/50 transition-colors">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-[#0F766E]">
                        <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Pendampingan Korban</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Satgas menyediakan pendampingan psikologis, hukum, dan keamanan bagi korban selama proses penanganan berlangsung.
                    </p>
                </div>

                <div className="card-official hover:border-[#0F766E]/50 transition-colors">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-[#0F766E]">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Kerahasiaan Data</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Arsip kasus disimpan dalam sistem terenkripsi. Akses terbatas hanya pada Ketua Satgas dan pendamping kasus.
                    </p>
                </div>
            </div>

            {/* Category Definition */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 text-center">Apa yang Termasuk Kekerasan Seksual?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Ujaran yang mendiskriminasi atau melecehkan tampilan fisik, kondisi tubuh, dan/atau identitas gender.</li>
                        <li>Memperlihatkan alat kelamin dengan sengaja tanpa persetujuan.</li>
                        <li>Menyampaikan ucapan yang memuat rayuan, lelucon, dan/atau siulan bernuansa seksual.</li>
                        <li>Menatap korban dengan nuansa seksual dan/atau tidak nyaman.</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Mengirimkan pesan, lelucon, gambar, foto, audio, dan/atau video bernuansa seksual (KBGO).</li>
                        <li>Mengambil, merekam, dan/atau mengedarkan foto/video bernuansa seksual tanpa persetujuan.</li>
                        <li>Menyentuh, mengusap, meraba, memegang, memeluk, mencium dan/atau menggosokkan bagian tubuh pada tubuh korban.</li>
                        <li>Memaksa atau memperdayai korban untuk melakukan hubungan seksual.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;
