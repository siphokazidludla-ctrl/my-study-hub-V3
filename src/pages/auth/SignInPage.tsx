import { useState, FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';

  if (isAuthenticated) {
    navigate(from, { replace: true });
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
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
          <h1 className="text-xl font-bold text-[#241349] text-center">Sign in to your account</h1>
          <p className="mt-2 text-sm text-slate-600 text-center">
            Or{' '}
            <Link to="/sign-up" className="text-[#3B1D6E] font-medium hover:underline">
              create a new account
            </Link>
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
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#3B1D6E] py-3 font-bold text-white hover:bg-[#2d1654] disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Demo mode: Enter any email and password to sign in.
            </p>
          </div>
        </Card>

        <p className="mt-4 text-center text-sm text-slate-600">
          <Link to="/" className="text-[#3B1D6E] hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
