import { useState } from "react";
import { Send, Clock, CheckCircle, Lock, Shield } from "lucide-react";

const TicketDetail = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: "admin", text: "Halo. Laporan Anda sudah kami terima. Kami akan segera memverifikasi data yang masuk.", time: "09:00" },
        { id: 2, sender: "user", text: "Terima kasih. Apakah data saya aman?", time: "09:05" },
        { id: 3, sender: "admin", text: "Tentu. Sesuai Permendikbudristek 30/2021, identitas Anda dirahasiakan dan hanya diakses pejabat berwenang.", time: "09:10" }
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        setMessages([...messages, {
            id: messages.length + 1,
            sender: "user",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setNewMessage("");
    };

    return (
        <div className="max-w-4xl mx-auto py-8">

            {/* Header Status */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
                <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ID TIKET</span>
                    <h1 className="text-3xl font-mono font-bold text-slate-900 leading-none mt-1">REQ-882190</h1>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-500">Status Terkini:</span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-sm font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Sedang Diproses
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {/* LEFT: TIMELINE */}
                <div className="md:col-span-1">
                    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm sticky top-24">
                        <h3 className="font-serif font-bold text-lg text-slate-900 mb-4 border-b border-slate-100 pb-2">Riwayat Proses</h3>

                        <ol className="relative border-l border-slate-200 ml-2 space-y-6">
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-4 h-4 bg-[#0F766E] rounded-full -left-2 ring-4 ring-white">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                </span>
                                <time className="block mb-1 text-xs font-normal text-slate-400">25 Des 2024, 08:30</time>
                                <h3 className="text-sm font-bold text-slate-900">Laporan Diterima</h3>
                                <p className="text-xs text-slate-500">Sistem melakukan enkripsi data.</p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-4 h-4 bg-yellow-400 rounded-full -left-2 ring-4 ring-white animate-pulse">
                                    <Clock className="w-3 h-3 text-white" />
                                </span>
                                <time className="block mb-1 text-xs font-normal text-slate-400">25 Des 2024, 09:00</time>
                                <h3 className="text-sm font-bold text-slate-900">Verifikasi Awal</h3>
                                <p className="text-xs text-slate-500">Satgas memverifikasi kelengkapan berkas.</p>
                            </li>
                            <li className="ml-6 opacity-40">
                                <span className="absolute flex items-center justify-center w-4 h-4 bg-slate-200 rounded-full -left-2 ring-4 ring-white">
                                </span>
                                <h3 className="text-sm font-bold text-slate-900">Investigasi</h3>
                            </li>
                        </ol>
                    </div>
                </div>

                {/* RIGHT: SAFE CHAT */}
                <div className="md:col-span-2">
                    <div className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col h-[500px]">

                        {/* Chat Header */}
                        <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center rounded-t-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#0F766E] rounded-full flex items-center justify-center text-white">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Admin Satgas PPKS</h3>
                                    <p className="text-xs text-[#0F766E] flex items-center gap-1">
                                        <Lock className="w-3 h-3" /> End-to-End Encrypted
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#e5ddd5]/10">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg p-3 text-sm shadow-sm ${msg.sender === 'user'
                                            ? 'bg-[#dcf8c6] text-slate-800 rounded-tr-none'
                                            : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                                        }`}>
                                        <p>{msg.text}</p>
                                        <span className="text-[10px] text-slate-400 block text-right mt-1 opacity-70">{msg.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 bg-white rounded-b-lg flex gap-2">
                            <input
                                type="text"
                                className="flex-grow input-formal rounded-full px-4"
                                placeholder="Tulis pesan rahasia..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button type="submit" className="bg-[#0F766E] hover:bg-[#0d6b63] text-white p-2.5 rounded-full transition-colors flex items-center justify-center">
                                <Send className="w-5 h-5" />
                            </button>
                        </form>

                    </div>
                    <p className="text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                        <Lock className="w-3 h-3" />
                        Percakapan ini aman dan tidak akan dibagikan ke pihak ketiga.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TicketDetail;
