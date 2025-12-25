import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock } from "lucide-react";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "satgas123") {
            localStorage.setItem("adminToken", "satgas-secure-token");
            navigate("/admin/dashboard");
        } else {
            setError("Akses ditolak. Identitas tidak terverifikasi.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-sm bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-2xl">

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600">
                        <Shield className="w-8 h-8 text-teal-400" />
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-wide">RESTRICTED AREA</h1>
                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Satgas PPKS Internal Only</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="bg-red-900/50 border border-red-800 text-red-200 text-sm px-4 py-2 rounded text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Username</label>
                        <input
                            type="text"
                            className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded focus:border-teal-500 focus:outline-none transition-colors"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-slate-300 text-xs font-bold uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            className="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded focus:border-teal-500 focus:outline-none transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded transition-colors flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" />
                        Access Dashboard
                    </button>
                </form>

                <p className="text-center text-slate-600 text-xs mt-8">
                    Unauthorized access is a punishable offense.<br />
                    System activity is monitored.
                </p>

            </div>
        </div>
    );
};

export default AdminLogin;
