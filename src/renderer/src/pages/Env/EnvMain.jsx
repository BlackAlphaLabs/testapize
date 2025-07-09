import React from 'react'
import EnvNav from './EnvNav'
import EnvSide from './EnvSide'
import EnvFooter from './EnvFooter'
import { Outlet } from 'react-router-dom'

const EnvMain = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-[#0f111a] dark:text-gray-200">
            <EnvNav />

            {/* Sidebar fixed to left */}
            <EnvSide />

            {/* Main content with left margin = sidebar width (w-64 = 256px) */}
            <main className="flex-1 p-6 ml-64 overflow-y-auto min-h-[calc(100vh-4rem)]">
                <Outlet />
            </main>

            <EnvFooter />
        </div>
    )
}

export default EnvMain
