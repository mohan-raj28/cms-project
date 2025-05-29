import React from "react";


export default function Intro() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
            <div className="max-w-3xl w-full bg-white bg-opacity-95 rounded-3xl shadow-2xl p-12">
                <div className="flex flex-col items-center mb-10">
                    <img src="/expense tracker.png" alt="Expense Tracker" className="w-36 h-36 mb-6 rounded-full shadow-lg border-4 border-blue-200" />
                    <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight text-center drop-shadow">Expense Tracker App</h1>
                    <p className="text-lg text-gray-700 text-center max-w-2xl">
                        Welcome to your all-in-one solution for managing personal finances! This project empowers you to track your expenses, analyze your spending habits, and take control of your financial future with ease and style.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-purple-700 mb-3">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                        <li>Add, edit, and delete your daily expenses quickly</li>
                        <li>Track your income and spending over time</li>
                        <li>Visualize your financial data with charts and summaries</li>
                        <li>Modern, responsive dashboard with beautiful UI</li>
                        <li>Data persistence using local storage</li>
                        <li>Secure authentication and protected routes</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-700 mb-3">About This Project</h2>
                    <p className="text-gray-700 mb-2">
                        This Expense Tracker is built with <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-purple-600">Tailwind CSS</span>, featuring a clean dashboard layout, authentication, and persistent storage. It is a great starting point for learning modern web development, state management, and UI/UX best practices.
                    </p>
                    <p className="text-gray-700">
                        The project is open-source and can be extended with features like analytics, export options, or cloud sync. Whether you're a student, professional, or anyone looking to manage finances, this app is designed for you!
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-pink-700 mb-3">How to Use</h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>Sign up for a new account or log in if you already have one.</li>
                        <li>Navigate to the Expenses page from the dashboard.</li>
                        <li>Add your expenses with description, amount, and date.</li>
                        <li>Review your spending and manage your records easily.</li>
                        <li>Visualize your data and plan your budget better!</li>
                    </ol>
                </div>
                <div className="text-center mt-10">
                    <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-full font-bold shadow-lg text-lg">Happy Tracking!</span>
                </div>
            </div>
        </div>
    );
}