import React from 'react'
import { HeartHandshake, TerminalSquare, ShieldCheck, Users } from 'lucide-react'

const HomeEnv = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                    Build. Test. Iterate.
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    The only lightweight API tool engineered for blazing fast GET requests. Made for
                    developers who care about speed, simplicity and reliability.
                </p>
            </div>

            {/* Why choose testAPIze */}
            <div className="mb-20">
                <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-center">
                    Why developers love testAPIze
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.015] transition-transform duration-200">
                        <div className="flex items-center space-x-4 mb-4">
                            <TerminalSquare className="text-indigo-500 dark:text-indigo-400" size={28} />
                            <h3 className="text-lg font-semibold">CLI-like Speed</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Experience near-instant response times with a UI that feels almost as fast as your terminal.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.015] transition-transform duration-200">
                        <div className="flex items-center space-x-4 mb-4">
                            <ShieldCheck className="text-indigo-500 dark:text-indigo-400" size={28} />
                            <h3 className="text-lg font-semibold">Stable & Secure</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Crafted with production-grade best practices. Secure handling, safe local testing.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.015] transition-transform duration-200">
                        <div className="flex items-center space-x-4 mb-4">
                            <Users className="text-indigo-500 dark:text-indigo-400" size={28} />
                            <h3 className="text-lg font-semibold">Zero Noise UX</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            No overwhelming dashboards. No distractions. Just you and your endpoints.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.015] transition-transform duration-200">
                        <div className="flex items-center space-x-4 mb-4">
                            <HeartHandshake className="text-indigo-500 dark:text-indigo-400" size={28} />
                            <h3 className="text-lg font-semibold">Built by Developers</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Designed by developers who understand your needs. Every feature is intentional.
                        </p>
                    </div>
                </div>
            </div>

            {/* Developer quote / highlight */}
            <div className="bg-indigo-50 dark:bg-[#1c1f2b] rounded-xl p-8 text-center shadow-inner mb-20">
                <p className="text-xl italic text-indigo-700 dark:text-indigo-400 max-w-3xl mx-auto">
                    “When you just want to test an endpoint, validate your headers, and move on with your
                    build — testAPIze is the tool that won’t slow you down.”
                </p>
            </div>

            {/* Trusted by / engineered */}
            <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-2">Engineered by</p>
                <a
                    href="https://www.blackalphalabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-indigo-600 hover:underline dark:text-indigo-400"
                >
                    <span>BlackAlphaLabs</span>
                </a>
            </div>
        </div>
    )
}

export default HomeEnv
