import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/useStore';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 md:ml-64">
              <Routes>
                <Route path="/" element={<VideoGrid />} />
                {/* Add more routes here */}
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;