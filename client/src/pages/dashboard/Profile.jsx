import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import storageService from '../../service/storageService';

export default function Profile() {
  // Get current user email from storageService (simulate current user)
  const [currentEmail, setCurrentEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  // Load user from storageService on mount
  useEffect(() => {
    const users = storageService.getItem('users');
    // Assume first user is current user for demo
    const user = Array.isArray(users) && users.length > 0 ? users[0] : null;
    setCurrentEmail(user?.email || '');
    setEmail(user?.email || '');
  }, []);

  // Save updated email to storageService
  const handleEmailSave = () => {
    const users = storageService.getItem('users');
    if (!Array.isArray(users) || users.length === 0) return;
    const idx = users.findIndex(u => u.email === currentEmail);
    if (idx === -1) {
      Swal.fire({ icon: 'error', title: 'User not found!' });
      return;
    }
    // Check for duplicate email
    if (users.some((u, i) => u.email === email && i !== idx)) {
      Swal.fire({ icon: 'error', title: 'Email already exists!' });
      return;
    }
    users[idx].email = email;
    storageService.setItem('users', users);
    setCurrentEmail(email);
    setEditEmail(false);
    Swal.fire({ icon: 'success', title: 'Email updated!' });
  };

  // Save updated password to storageService
  const handlePasswordSave = () => {
    if (!password) {
      Swal.fire({ icon: 'error', title: 'Password cannot be empty!' });
      return;
    }
    const users = storageService.getItem('users');
    if (!Array.isArray(users) || users.length === 0) return;
    const idx = users.findIndex(u => u.email === currentEmail);
    if (idx === -1) {
      Swal.fire({ icon: 'error', title: 'User not found!' });
      return;
    }
    users[idx].password = password;
    storageService.setItem('users', users);
    setEditPassword(false);
    setPassword('');
    Swal.fire({ icon: 'success', title: 'Password updated!' });
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 flex items-center justify-center">
      <div className="relative max-w-md mx-auto p-10 rounded-3xl shadow-2xl shadow-indigo-200/40 mt-10 border-2 border-indigo-200 animate-fade-in-up transition-all duration-200 hover:shadow-emerald-400 hover:scale-[1.03] overflow-hidden" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #a7f3d0 50%, #bae6fd 100%)" }}>
        <h2 className="relative z-10 text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow animate-gradient-x animate-pulse">
          Profile
        </h2>
        <div className="relative z-10 mb-8">
          <label className="block text-indigo-700 font-semibold mb-2">Email</label>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              value={email}
              disabled={!editEmail}
              onChange={e => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${editEmail ? 'bg-white text-gray-900' : 'bg-indigo-50 text-gray-800'} ${editEmail ? 'hover:border-sky-400 shadow-lg shadow-sky-200/40' : ''}`}
            />
            {editEmail ? (
              <>
                <button onClick={handleEmailSave} className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-xl font-semibold shadow-lg shadow-emerald-200/40 transition-all duration-200 animate-bounce">Save</button>
                <button onClick={() => { setEditEmail(false); setEmail(currentEmail); }} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200">Cancel</button>
              </>
            ) : (
              <button onClick={() => setEditEmail(true)} className="bg-sky-400 hover:bg-sky-500 text-white px-3 py-1 rounded-xl font-semibold shadow-lg shadow-sky-200/40 transition-all duration-200 animate-pulse">Edit</button>
            )}
          </div>
        </div>
        <div className="relative z-10 mb-8">
          <label className="block text-indigo-700 font-semibold mb-2">Password</label>
          <div className="flex gap-2 items-center">
            <input
              type="password"
              value={password}
              disabled={!editPassword}
              onChange={e => setPassword(e.target.value)}
              placeholder={editPassword ? 'Enter new password' : '********'}
              className={`w-full px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${editPassword ? 'bg-white text-gray-900' : 'bg-indigo-50 text-gray-800'} ${editPassword ? 'hover:border-emerald-400 shadow-lg shadow-emerald-200/40' : ''}`}
            />
            {editPassword ? (
              <>
                <button onClick={handlePasswordSave} className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-xl font-semibold shadow-lg shadow-emerald-200/40 transition-all duration-200 animate-bounce">Save</button>
                <button onClick={() => { setEditPassword(false); setPassword(''); }} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200">Cancel</button>
              </>
            ) : (
              <button onClick={() => setEditPassword(true)} className="bg-sky-400 hover:bg-sky-500 text-white px-3 py-1 rounded-xl font-semibold shadow-lg shadow-sky-200/40 transition-all duration-200 animate-pulse">Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}