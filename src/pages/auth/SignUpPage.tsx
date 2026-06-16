import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    navigate('/', { replace: true });
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B1D6E]">
              <span className="text-xl text-white font-bold">P</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24B]">MANCOSA PGDBM</p>
              <p className="font-bold text-[#241349]">Exam Companion</p>
            </div>
          </Link>
        </div>

        <Card tone="white">
          <h1 className="text-xl font-bold text-[#241349] text-center">Create your account</h1>
          <p className="mt-2 text-sm text-slate-600 text-center">
            Start with the free plan. Upgrade anytime.
          </p>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                placeholder="Create a password (min 6 characters)"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#3B1D6E] py-3 font-bold text-white hover:bg-[#2d1654] disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-[#3B1D6E] hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-[#3B1D6E] hover:underline">Privacy Policy</Link>.
          </p>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              Demo mode: Enter any email and password to create an account.
            </p>
          </div>
        </Card>

        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-[#3B1D6E] font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
