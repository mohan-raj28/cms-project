import { Link, Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-teal-800 via-emerald-400 to-teal-900 text-white shadow-2xl py-4 flex flex-col sm:flex-row items-center justify-between px-8 backdrop-blur-md bg-opacity-90">
                <div className="text-3xl font-extrabold flex items-center gap-3 tracking-tight drop-shadow-lg select-none">
                    <span role="img" aria-label="notes">💰</span> Expense Tracker
                </div>
                <nav className="mt-3 sm:mt-0 flex gap-4">
                    <Link
                        to="/home"
                        className="bg-transparent text-white px-6 py-2 rounded-full border border-white/40 shadow font-semibold transition-all duration-200 hover:bg-white hover:text-emerald-700 hover:scale-105"
                    >
                        Home
                    </Link>
                    <Link
                        to="/login"
                        className="bg-transparent text-white px-6 py-2 rounded-full border border-white/40 shadow font-semibold transition-all duration-200 hover:bg-white hover:text-emerald-700 hover:scale-105"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-transparent text-white px-6 py-2 rounded-full border border-white/40 shadow font-semibold transition-all duration-200 hover:bg-white hover:text-emerald-700 hover:scale-105"
                    >
                        Sign Up
                    </Link>
                </nav>
            </header>
            <main className="pt-24 min-h-screen">
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;