import { createContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import userService from '../service/userService';
import { useNavigate } from 'react-router';

const AuthContext = createContext();
function AuthProvider({ children }) {
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();

	function login(email, password) {
		try {
			userService.authenticate(email, password);
			localStorage.setItem("currentUser", email);
			setIsAuth(true);
			navigate('/dashboard/display');
			Swal.fire({
				title: "Success",
				text: "Login is successful",
				icon: "success"
			});
		} catch (error) {
			Swal.fire({
				title: "Invalid",
				text: error.message,
				icon: "error"
			});
		}
	}

	function logout() {
		setIsAuth(false);
		localStorage.removeItem("currentUser");
		Swal.fire({
			title: "Success",
			text: "Logout successful",
			icon: "success"
		});
	}

	function register(email, password) {
		try {
			userService.addUser(email, password);
			localStorage.setItem("currentUser", email);
			setIsAuth(true);
			navigate('/dashboard/intro');
			Swal.fire({
				title: "Success",
				text: "Registration is successful",
				icon: "success"
			});
		} catch (error) {
			Swal.fire({
				title: "Invalid",
				text: error.message,
				icon: "error"
			});
		}
	}
	return (
		<AuthContext.Provider value={{ login, logout, register, isAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider };
export default AuthContext;