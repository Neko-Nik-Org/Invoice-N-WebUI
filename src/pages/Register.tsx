// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Reuse the same CSS for consistent styling

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Added for registration
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password field
    const [focusedField, setFocusedField] = useState<'email' | 'password' | 'confirmPassword' | null>(null); // Extended for confirmPassword

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // --- No detailed validation or AuthContext integration as per request ---
        // You'd add your registration logic (e.g., API call) here.
        // For now, we'll just simulate success and navigate.

        console.log('Registering with:', { email, password, confirmPassword });

        try {
            // Simulate an API call delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate successful registration
            // In a real app, this would be based on your backend response
            const registrationSuccessful = true;

            if (registrationSuccessful) {
                alert('Registration successful!');
                navigate('/login'); // Redirect to login after successful registration
            } else {
                // This would typically come from a backend error message
                setError('Registration failed. Please try again.');
            }
        } catch (err) {
            setError('An unexpected error occurred during registration.');
            console.error('Registration error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Reusing the same helper function for dynamic input styling
    const getFormGroupClasses = (fieldName) => {
        const classes = ['form-group'];
        if (focusedField === fieldName) {
            classes.push('focused');
        }
        // Check if the corresponding state variable has a value
        if (
            (fieldName === 'email' && email) ||
            (fieldName === 'password' && password) ||
            (fieldName === 'confirmPassword' && confirmPassword)
        ) {
            classes.push('has-value');
        }
        return classes.join(' ');
    };

    return (
        <div className="login-container"> {/* Reusing login-container for layout */}
            <div className="login-card"> {/* Reusing login-card for styling */}
                <div className="login-header">
                    <h2 className="login-title">Create Account</h2>
                    <p className="login-subtitle">Join us and start managing your invoices!</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className={getFormGroupClasses('email')}>
                        <label htmlFor="register-email">Email address</label>
                        <input
                            type="email"
                            id="register-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                        />
                        <span className="underline"></span>
                    </div>

                    <div className={getFormGroupClasses('password')}>
                        <label htmlFor="register-password">Password</label>
                        <div className="password-input-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="register-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocusedField('password')}
                                onBlur={() => setFocusedField(null)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.54 18.54 0 0 1 2.94-3.61M2 2l20 20M9.9 4.24A9.91 9.91 0 0 1 12 4c7 0 11 8 11 8a18.54 18.54 0 0 1-2.94 3.61"></path>
                                        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <span className="underline"></span>
                    </div>

                    <div className={getFormGroupClasses('confirmPassword')}>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="password-input-container">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onFocus={() => setFocusedField('confirmPassword')}
                                onBlur={() => setFocusedField(null)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                            >
                                {showConfirmPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.54 18.54 0 0 1 2.94-3.61M2 2l20 20M9.9 4.24A9.91 9.91 0 0 1 12 4c7 0 11 8 11 8a18.54 18.54 0 0 1-2.94 3.61"></path>
                                        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <span className="underline"></span>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button
                        type="submit"
                        className={`login-button ${loading ? 'submitting' : ''}`}
                        disabled={loading}
                    >
                        {loading ? <div className="spinner"></div> : 'Register'}
                    </button>
                </form>

                <div className="login-footer">
                    Already have an account? <a href="/login">Login</a>
                </div>

                <div className="social-login">
                    <p className="brand-tagline">Or register with</p>
                    <div className="social-icons">
                        <button className="social-button" aria-label="Register with Google">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.24 10.232c-.08-.68-.13-1.37-.13-2.07 0-.58.07-1.15.19-1.72h1.79v2.67h-1.85z" fill="#4285F4"/><path d="M22.56 12.232c0-.58-.06-1.15-.17-1.72H12.24v2.67h5.95a6.04 6.04 0 01-2.61 3.99l.01.01 2.21 1.71c.64-.67 1.13-1.51 1.4-2.46z" fill="#4285F4"/><path d="M12.24 20.232c3.08 0 5.67-1.02 7.55-2.77l-2.21-1.71c-.64.44-1.46.75-2.63.75-2.04 0-3.76-1.34-4.38-3.14l-.01-.01-2.22 1.72c.88 1.94 2.92 3.25 5.51 3.25z" fill="#34A853"/><path d="M6.67 15.632c-.54-1.22-.84-2.58-.84-3.99s.3-2.77.84-3.99L4.45 6.672c-1.1 2.3-1.71 4.93-1.71 7.74s.61 5.44 1.71 7.74l2.22-1.72z" fill="#FBBC04"/></svg>
                        </button>
                        <button className="social-button" aria-label="Register with Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.496v-9.294H9.692V11.237h3.129V8.93c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.79.143v3.24l-1.914.001c-1.503 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.654h-3.12V24h6.115c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#1877F2"/></svg>
                        </button>
                        <button className="social-button" aria-label="Register with GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.609-4.043-1.609-.547-1.387-1.334-1.758-1.334-1.758-1.089-.744.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.49.997.108-.775.419-1.304.762-1.605-2.665-.3-5.464-1.333-5.464-5.932 0-1.31.465-2.382 1.235-3.22-.125-.3-.535-1.52.117-3.176 0 0 1-.322 3.3.096 1.9-.53 3.9-.53 5.8 0 2.29-1.418 3.29-.096 3.29-.096.653 1.657.243 2.876.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.8 5.62-5.475 5.92.43.37.81 1.096.81 2.22s-.01 4.01-.015 4.54c0 .323.21.69.825.577C20.565 21.832 24 17.34 24 12c0-6.628-5.372-12-12-12z" fill="#181717"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}