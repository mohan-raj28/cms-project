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
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Profile</h2>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <div className="flex gap-2 items-center">
          <input
            type="email"
            value={email}
            disabled={!editEmail}
            onChange={e => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${editEmail ? '' : 'bg-gray-100 text-gray-500'}`}
          />
          {editEmail ? (
            <>
              <button onClick={handleEmailSave} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Save</button>
              <button onClick={() => { setEditEmail(false); setEmail(currentEmail); }} className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400">Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditEmail(true)} className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Password</label>
        <div className="flex gap-2 items-center">
          <input
            type="password"
            value={password}
            disabled={!editPassword}
            onChange={e => setPassword(e.target.value)}
            placeholder={editPassword ? 'Enter new password' : '********'}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${editPassword ? '' : 'bg-gray-100 text-gray-500'}`}
          />
          {editPassword ? (
            <>
              <button onClick={handlePasswordSave} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Save</button>
              <button onClick={() => { setEditPassword(false); setPassword(''); }} className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400">Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditPassword(true)} className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}