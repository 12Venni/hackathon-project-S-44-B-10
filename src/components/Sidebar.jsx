import { Link, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleAuthAction = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const playlists = ['Liked Songs', 'Daily Mix 1', 'Discover Weekly'];

  return (
    <aside className="w-64 h-full bg-secondary p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">MelodyStream</h1>
      </div>

      <nav className="space-y-4 mb-6">
        <Link to="/" className="flex items-center space-x-3 text-light hover:text-white">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center space-x-3 text-light hover:text-white">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <span>Search</span>
        </Link>
        <Link to="/library" className="flex items-center space-x-3 text-light hover:text-white">
          <BookmarkIcon className="w-6 h-6" />
          <span>Your Library</span>
        </Link>
      </nav>

      <button
        onClick={handleAuthAction}
        className="flex items-center space-x-2 text-light hover:text-white mb-6"
      >
        <ArrowRightOnRectangleIcon className="w-6 h-6" />
        <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
      </button>

      <div className="mt-4">
        <h2 className="text-sm font-semibold text-light mb-4">PLAYLISTS</h2>
        <div className="space-y-2">
          {playlists.map((name, index) => (
            <a key={index} href="#" className="block text-light hover:text-white">
              {name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
