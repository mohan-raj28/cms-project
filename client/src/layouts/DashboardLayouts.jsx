import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const PATHS = [
    { path: '/dashboard/display', text: 'Expenses' },
    { path: '/dashboard/analysis', text: 'Analysis' },
    { path: '/dashboard/expenses', text: 'Add Expenses' },
    { path: '/dashboard/profile', text: 'Profile' },
    
];

const STYLE = {
    active: {
        color: "#1d4ed8" // Tailwind's blue-700
    },
    inactive: {
        color: "#6b7280" // Tailwind's gray-500
    }
};

export default function DashboardLayouts() {
    const location = useLocation();
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-gradient-to-tr from-white to-blue-50 text-gray-800">
            <aside className="p-6 w-64 sticky top-0 h-screen bg-white border-r border-gray-200 shadow-xl flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-700 mb-8 tracking-tight">My Dashboard</span>
                <nav className="flex flex-col gap-2 w-full">
                    {PATHS.map((value, index) => (
                        <Link
                            key={index}
                            to={value.path}
                            style={location.pathname === value.path ? STYLE.active : STYLE.inactive}
                            className={`block px-4 py-2 rounded-lg font-medium text-base transition duration-200
                                ${location.pathname === value.path
                                    ? "bg-blue-100 text-blue-700 font-semibold shadow-inner"
                                    : "hover:bg-blue-50 hover:text-blue-600 text-gray-600"}`}
                        >
                            {value.text}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={() => {
                        localStorage.removeItem("currentUser");
                        setTimeout(() => {
                            navigate("/");
                        }, 0);
                        logout();
                    }}
                    className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium shadow-md transition duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                    </svg>
                    <span className="text-sm font-semibold tracking-wide">Logout</span>
                </button>
            </aside>
            <main className="flex-1 min-h-screen overflow-y-auto p-10 bg-gradient-to-br from-white via-blue-50 to-white">
                <div className="rounded-xl shadow-lg bg-white bg-opacity-95 p-8 min-h-[80vh] border border-gray-100">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
