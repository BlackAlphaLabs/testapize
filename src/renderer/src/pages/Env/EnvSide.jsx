import React from 'react'
import { Send, Database, Settings, Home, BadgeInfoIcon } from 'lucide-react'

const EnvSide = () => {
    return (
        <aside className="hidden md:block fixed top-0 left-0 w-64 h-screen bg-white dark:bg-[#161821] border-r border-gray-200 dark:border-[#2a2c37] p-6 overflow-auto z-30">
            <nav className="space-y-4 mt-16">
                <a href="/Env/Home" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    <Home size={20} />
                    <span>Home</span>
                </a>
                <a href="/Env/Request" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    <Send size={20} />
                    <span>Requests</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    <Database size={20} />
                    <span>Collections</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    <Settings size={20} />
                    <span>Settings</span>
                </a>
                <a href="/Env/About" className="flex items-center space-x-3 text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    <BadgeInfoIcon size={20} />
                    <span>About</span>
                </a>
            </nav>
        </aside>
    )
}

export default EnvSide
