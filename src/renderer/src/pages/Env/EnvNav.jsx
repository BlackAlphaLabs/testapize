import React, { useState, useEffect } from 'react'

const EnvNav = () => {
    return (
        <nav className="bg-white dark:bg-[#1a1c27] shadow-md sticky top-0 z-50 flex items-center justify-between px-6 py-4">
            <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                testAPIze
            </div>
            <div className="flex items-center space-x-6 text-sm">
                <button className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Docs</button>
                <button className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Contact</button>
            </div>
        </nav>
    )
}

export default EnvNav
