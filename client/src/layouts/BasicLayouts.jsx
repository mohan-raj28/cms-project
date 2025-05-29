import { Link, Outlet } from "react-router";
function BasicLayouts() {
    return (
        <>
            <header className="bg-gradient-to-r from-teal-600 via-indigo-700 to-indigo-900 text-white shadow-lg py-4 flex flex-col sm:flex-row items-center justify-between px-6">
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="notes">💰
                        </span> Expense Tracker
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <Link
                        to="/home"
                        className="bg-transparent text-indigo-100 px-5 py-2 rounded-full border border-indigo-200 shadow font-semibold transition-all duration-150 hover:bg-indigo-100 hover:text-indigo-900">
                        Home
                    </Link>
                    <Link
                        to="/login"
                        className="bg-transparent text-indigo-100 px-5 py-2 rounded-full border border-indigo-200 shadow font-semibold transition-all duration-150 hover:bg-indigo-100 hover:text-indigo-900">
                        sign-in
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-transparent text-indigo-100 px-5 py-2 rounded-full border border-indigo-200 shadow font-semibold transition-all duration-150 hover:bg-indigo-100 hover:text-indigo-900">
                        sign-up
                    </Link>
                    <Link
                        to="/about"
                        className="bg-transparent text-indigo-100 px-5 py-2 rounded-full border border-indigo-200 shadow font-semibold transition-all duration-150 hover:bg-indigo-100 hover:text-indigo-900">
                        About
                    </Link>
                </div>
            </header>
            <main className="">
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;