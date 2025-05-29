import React from "react";

export default function Intro() {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
            <div className="max-w-6xl w-full bg-white bg-opacity-95 rounded-3xl shadow-2xl overflow-hidden p-4">
                <div className="flex flex-col lg:flex-row">
                    
                    {/* Left Side - Image and Title */}
                    <div className="flex flex-col items-center justify-center text-center p-8 lg:w-1/2">
                        <img src="/expense tracker.png" alt="Expense Tracker" className="w-40 h-40 mb-6 rounded-full shadow-xl border-4 border-blue-200" />
                        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight drop-shadow">
                            Expense Tracker App
                        </h1>
                        <p className="text-gray-700 text-base">
                            Manage your personal finances with ease. Track, analyze, and take control of your financial future in style.
                        </p>
                    </div>

                    {/* Right Side - Details */}
                    <div className="lg:w-1/2 p-8 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-purple-700 mb-3">Key Features</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Add, edit, and delete expenses</li>
                                <li>Track income and spending over time</li>
                                <li>Visual charts and summaries</li>
                                <li>Responsive, modern UI</li>
                                <li>Local storage persistence</li>
                                <li>Secure authentication</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-blue-700 mb-3">About This Project</h2>
                            <p className="text-gray-700 mb-2">
                                Built with <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-purple-600">Tailwind CSS</span>, this app offers a sleek dashboard, auth, and state management practices.
                            </p>
                            <p className="text-gray-700">
                                Extend it with analytics, cloud sync, or export tools. Perfect for anyone managing personal finances.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-pink-700 mb-3">How to Use</h2>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                <li>Create an account or log in.</li>
                                <li>Go to the Expenses page.</li>
                                <li>Add expenses with details.</li>
                                <li>Manage and review your records.</li>
                                <li>Visualize trends and plan your budget.</li>
                            </ol>
                        </section>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-10">
                    <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-full font-bold shadow-lg text-lg">
                        Happy Tracking!
                    </span>
                </div>
            </div>
        </div>
    );
}
