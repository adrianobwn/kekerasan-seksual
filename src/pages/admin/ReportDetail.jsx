import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Unlock, Send, Shield, AlertTriangle } from "lucide-react";

const ReportDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // States
    const [isDecrypted, setIsDecrypted] = useState(false);
    const [decryptionKey, setDecryptionKey] = useState("");
    const [status, setStatus] = useState("Baru");
    const [chatMessage, setChatMessage] = useState("");

    // Mock Messages
    const [messages, setMessages] = useState([
        { sender: "System", text: "Koneksi aman terenkripsi dibuat.", time: "09:00" }
    ]);

    const handleDecrypt = (e) => {
        e.preventDefault();
        // Simulate checking key
        if (decryptionKey === "satgas-secret") {
            setIsDecrypted(true);
        } else {
            alert("Kunci Salah! Akses ditolak.");
        }
    };

    const handleSendChat = (e) => {
        e.preventDefault();
        if (!chatMessage) return;
        setMessages([...messages, { sender: "Admin", text: chatMessage, time: "Now" }]);
        setChatMessage("");
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 font-sans">

            {/* Header */}
            <div className="max-w-5xl mx-auto flex items-center justify-between mb-6">
                <button onClick={() => navigate("/admin/dashboard")} className="flex items-center text-slate-500 hover:text-slate-800">
                    <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                </button>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 font-bold uppercase">Status Kasus:</span>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="bg-white border border-slate-300 rounded px-2 py-1 text-sm font-bold text-slate-800 shadow-sm"
                    >
                        <option value="Baru">Baru</option>
                        <option value="Verifikasi">Verifikasi</option>
                        <option value="Investigasi">Investigasi</option>
                        <option value="Selesai">Selesai</option>
                    </select>
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">

                {/* Left Column: Report Content (Encrypted Zone) */}
                <div className="col-span-2 space-y-6">

                    {/* Header Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 font-mono">{id}</h1>
                                <p className="text-slate-500 text-sm mt-1">Kategori: <span className="text-slate-800 font-medium">Pelecehan Seksual Fisik</span></p>
                            </div>
                            <div className="bg-slate-100 p-2 rounded text-slate-500">
                                <Shield className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Chronology Card with Manual Decryption */}
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden relative min-h-[300px]">
                        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="font-bold text-slate-700">Kronologi Kejadian</h3>
                            {isDecrypted ? (
                                <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200">
                                    <Unlock className="w-3 h-3" /> DECRYPTED
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-200">
                                    <Lock className="w-3 h-3" /> ENCRYPTED
                                </span>
                            )}
                        </div>

                        <div className="p-6">
                            {!isDecrypted ? (
                                <div className="text-center py-10">
                                    <div className="mb-4 blur-sm select-none text-slate-300 text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qsdasd asd asd asd asd asd...
                                        (Konten Dilindungi) U2FsdGVkX1+...
                                    </div>

                                    <div className="max-w-sm mx-auto bg-slate-800 p-6 rounded-lg shadow-lg relative z-10 text-left">
                                        <div className="flex items-center gap-2 text-yellow-500 mb-4 font-bold text-sm">
                                            <AlertTriangle className="w-4 h-4" />
                                            BUTUH OTORISASI
                                        </div>
                                        <p className="text-slate-400 text-xs mb-4">
                                            Konten ini terenkripsi End-to-End. Masukkan Passphrase Satgas untuk membuka.
                                        </p>
                                        <form onSubmit={handleDecrypt} className="flex gap-2">
                                            <input
                                                type="password"
                                                className="flex-1 bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:border-teal-500 outline-none"
                                                placeholder="Kunci Satgas..."
                                                value={decryptionKey}
                                                onChange={(e) => setDecryptionKey(e.target.value)}
                                            />
                                            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-bold">
                                                Buka
                                            </button>
                                        </form>
                                        <p className="mt-2 text-[10px] text-slate-500 italic">Hint: satgas-secret</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="prose prose-slate max-w-none animate-fade-in">
                                    <p>
                                        Pada hari Selasa tanggal 24 Desember 2024 sekitar pukul 14.00 WIB, saya sedang berada di Gedung B untuk bimbingan skripsi.
                                        Saat menunggu dosen di lorong yang sepi, Terlapor tiba-tiba mendekati saya dan berusaha memegang tangan saya secara paksa...
                                    </p>
                                    <p>
                                        Saya berusaha menghindar, namun Terlapor terus mendesak dan mengeluarkan kata-kata yang tidak pantas (Catcalling)...
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Right Column: Communication */}
                <div className="col-span-1">
                    <div className="bg-white border boundary-slate-200 rounded-lg shadow-sm h-[600px] flex flex-col">
                        <div className="p-4 border-b border-slate-100 bg-slate-50 text-center">
                            <h3 className="font-bold text-slate-700">Secure Chat</h3>
                            <p className="text-xs text-slate-500">Hubungi Pelapor (Anonim)</p>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`text-sm p-3 rounded-lg max-w-[90%] ${msg.sender === "Admin" ? "ml-auto bg-teal-100 text-teal-900" : "bg-white border border-slate-200 text-slate-600"}`}>
                                    <p className="font-bold text-xs mb-1 opacity-70">{msg.sender}</p>
                                    <p>{msg.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 border-t border-slate-200">
                            <form onSubmit={handleSendChat} className="flex gap-2">
                                <input
                                    type="text"
                                    className="flex-1 border border-slate-300 rounded px-3 py-2 text-sm focus:border-teal-500 outline-none"
                                    placeholder="Tulis pesan..."
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                />
                                <button className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded">
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReportDetail;
