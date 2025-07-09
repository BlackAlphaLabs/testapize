import React from 'react'

const EnvFooter = () => {
    return (
        <footer className="bg-gray-100 dark:bg-[#1a1c27] p-4 text-center text-xs text-gray-500 dark:text-gray-400">
            © 2025 testAPIze. Engineered by{' '}
            <a
                href="https://www.blackalphalabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline dark:text-indigo-400"
            >
                BlackAlphaLabs
            </a>
        </footer>
    )
}

export default EnvFooter
