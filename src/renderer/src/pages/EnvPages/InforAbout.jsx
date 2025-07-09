import React from 'react'
import { Server, Code, Layers, Rocket, Zap, Wrench } from 'lucide-react'

const InforAbout = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
                About testAPIze
            </h1>

            {/* Description */}
            <div className="mb-12 space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                    <strong>testAPIze</strong> is a modern API testing tool designed for developers who want a
                    clean, production-ready interface to test their APIs efficiently.
                </p>
                <p>
                    It’s currently in <span className="font-semibold text-yellow-600 dark:text-yellow-400">beta</span>
                    , and focuses on handling <span className="font-semibold">GET requests</span> with precision.
                    Future updates will expand its capabilities.
                </p>
                <p>
                    Developed with ❤️ by{' '}
                    <a
                        href="https://www.blackalphalabs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:underline dark:text-indigo-400"
                    >
                        BlackAlphaLabs
                    </a>
                    .
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <Server className="text-indigo-500 dark:text-indigo-400" size={28} />
                        <h2 className="text-xl font-semibold">GET Requests Only</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Currently supports only <strong>GET</strong> methods. This ensures blazing fast, focused
                        testing for data fetching endpoints.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <Layers className="text-indigo-500 dark:text-indigo-400" size={28} />
                        <h2 className="text-xl font-semibold">No Collections or Workspaces</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        testAPIze is intentionally minimal. Collections and workspaces are coming in future
                        releases.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <Zap className="text-indigo-500 dark:text-indigo-400" size={28} />
                        <h2 className="text-xl font-semibold">Production Ready</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Even in beta, it’s built with robust practices, making it stable for your day-to-day API
                        checks.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <Rocket className="text-indigo-500 dark:text-indigo-400" size={28} />
                        <h2 className="text-xl font-semibold">Future Enhancements</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Soon will support <strong>POST, PUT, DELETE</strong> methods, along with request
                        history, collections, and workspace collaboration.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <Code className="text-indigo-500 dark:text-indigo-400" size={28} />
                        <h2 className="text-xl font-semibold">Built for Developers</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Designed with developers in mind — fast UI, keyboard-friendly, and lightweight.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#161821] shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                        <Wrench className="text-indigo-500 dark:text-indigo-400" size={28} />
                        <h2 className="text-xl font-semibold">Engineered by BlackAlphaLabs</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Carefully crafted and maintained by{' '}
                        <a
                            href="https://www.blackalphalabs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 hover:underline dark:text-indigo-400"
                        >
                            BlackAlphaLabs
                        </a>{' '}
                        to empower your API workflows.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InforAbout
