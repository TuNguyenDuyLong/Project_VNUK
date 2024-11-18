import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = ({ onClose, onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // Khi có backend
    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/login`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ username, password })
    //         });

    //         if (!response.ok) {
    //             alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
    //             return;
    //         }

    //         const data = await response.json();
    //         const { token, role } = data;
    //         // Lưu token
    //         localStorage.setItem('token', token);
    //         localStorage.setItem('role', role);

    //         onLoginSuccess();

    //         if (role === 'teacher') {
    //             navigate('/tea_viewnoteti');
    //         } else if (role === 'student') {
    //             navigate('/viewnoteti');
    //         }

    //         onClose();
    //     } catch (error) {
    //         alert('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.');
    //     }
    // };
    // Tạo giả tài khoản 
    const handleLogin = (e) => {
        e.preventDefault();

        const mockAccounts = [
            { username: 'teacher1', password: 'teacher1', role: 'teacher' },
            { username: 'student1', password: 'student1', role: 'student' }
        ];
        const foundAccount = mockAccounts.find(
            (account) => account.username === username && account.password === password
        );

        if (foundAccount) {
            localStorage.setItem('token', 'mockToken123');
            localStorage.setItem('role', foundAccount.role);
            localStorage.setItem('username', foundAccount.username);

            onLoginSuccess(foundAccount.username);  // Truyền username lên Header

            if (foundAccount.role === 'teacher') {
                navigate('/tea_viewnoteti');
            } else if (foundAccount.role === 'student') {
                navigate('/viewnoteti');
            }

            onClose();
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
        }
    };


    return (
        <div className="login-form-overlay">
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <p className="username">Nhập tên đăng nhập:</p>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <p className="password">Mật khẩu:</p>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Login">
                        <button type="submit" className="login-button">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
