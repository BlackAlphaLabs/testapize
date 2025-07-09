import React, { useState } from 'react';
import axios from 'axios';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

const Request = () => {
    const [apiURL, setapiURL] = useState('');
    const [endPoint, setendPoint] = useState('');
    const [response, setresponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setresponse(null);

        const fullAPI = `${apiURL}/${endPoint}`.replace(/\/+$/, '');

        try {
            const res = await axios.get(fullAPI);
            setresponse(res.data);
        } catch (err) {
            console.error('Full error:', err);
            if (err.response) {
                setError(`Server error: ${err.response.status} ${err.response.statusText}`);
            } else if (err.request) {
                setError('No response received (likely a CORS issue)');
            } else {
                setError(`Error: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const renderResponse = () => {
        if (!response) return null;

        if (typeof response === 'object' && !Array.isArray(response)) {
            return (
                <div className="space-y-2">
                    {Object.entries(response).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex flex-col md:flex-row md:items-center md:justify-between p-3 bg-white dark:bg-[#1e2030] rounded-lg shadow border dark:border-gray-700"
                        >
                            <span className="font-semibold text-gray-700 dark:text-gray-200">{key}</span>
                            <span className="text-gray-900 dark:text-gray-100 break-all">
                                {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                            </span>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <p className="text-gray-900 dark:text-gray-100">
                    {typeof response === 'string' ? response : JSON.stringify(response)}
                </p>
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0e0f1a] dark:to-[#161821] p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    🚀 testAPIze — API Testing Tool
                </h2>

                <div className="bg-white dark:bg-[#1e2030] border dark:border-gray-700 rounded-xl shadow-md p-6 space-y-6">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch gap-4">
                        <input
                            type="text"
                            placeholder="https://api.example.com"
                            value={apiURL}
                            onChange={(e) => setapiURL(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            required
                        />
                        <input
                            type="text"
                            placeholder="users/123"
                            value={endPoint}
                            onChange={(e) => setendPoint(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            required
                        />
                        <button
                            type="submit"
                            className="flex-shrink-0 px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition transform hover:scale-105"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Send'}
                        </button>
                    </form>

                    {error && (
                        <div className="flex items-center gap-2 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 px-4 py-3 rounded-lg">
                            <AlertTriangle className="w-5 h-5" />
                            <span>{error}</span>
                        </div>
                    )}

                    {response && (
                        <div className="bg-gray-50 dark:bg-[#11131c] border dark:border-gray-700 rounded-xl p-4 overflow-auto max-h-[500px]">
                            <div className="flex items-center gap-2 mb-4 text-green-600 dark:text-green-400">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Response:</span>
                            </div>
                            {renderResponse()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Request;
