import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router";
import AuthContext from "../context/AuthContext";

const PATHS = [
    { path: '/dashboard/intro', text: 'intro' },
    { path: '/dashboard/Expenses', text: '💸 Expenses'},
];

const DASHBOARD_PATHS = [
    //{ path: '/dashboard/expenses', text: '💸 Expenses'},
];

export default function DashboardLayouts() {
    const location = useLocation();
    const { logout } = useContext(AuthContext);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800">
            <aside className="p-8 w-64 sticky top-0 h-screen bg-gradient-to-b from-blue-800 to-gray-900 flex flex-col items-center shadow-2xl border-r-2 border-blue-700">
                <span className="text-4xl font-extrabold mb-10 text-blue-200 tracking-wide drop-shadow-lg">Dashboard</span>
                <nav className="flex flex-col gap-4 w-full">
                    {PATHS.map((value, index) => (
                        <Link
                            key={index}
                            to={value.path}
                            style={location.pathname === value.path ? STYLE.active : STYLE.inactive}
                            className={`block px-5 py-3 rounded-xl font-semibold text-lg transition duration-200
                                ${location.pathname === value.path
                                    ? "bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg text-white scale-105"
                                    : "hover:bg-blue-700 hover:text-white text-blue-100"}`}
                        >
                            {value.text.charAt(0).toUpperCase() + value.text.slice(1)}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={logout}
                    className="mt-auto w-full py-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:to-purple-600 text-white rounded-full font-extrabold shadow-xl transition duration-300 transform hover:scale-105 border-2 border-white tracking-wider drop-shadow-lg flex items-center justify-center gap-2"
                >
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1' /></svg>
                    Logout
                </button>
            </aside>
            <main className="flex-1 min-h-screen overflow-auto p-12 bg-gradient-to-br from-gray-100 to-blue-50">
                <div className="rounded-2xl shadow-2xl bg-white bg-opacity-90 p-10 min-h-[80vh]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}


const STYLE = {
    active: {
        color: "white"
    },
    inactive: {
        color: "gray"
    }
};