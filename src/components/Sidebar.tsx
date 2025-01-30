import React from 'react';
import { Home, Compass, Clock, ThumbsUp, Film, History, PlaySquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: Clock, label: 'Shorts', path: '/shorts' },
  { icon: Film, label: 'Subscriptions', path: '/subscriptions' },
  { icon: History, label: 'History', path: '/history' },
  { icon: PlaySquare, label: 'Your videos', path: '/your-videos' },
  { icon: ThumbsUp, label: 'Liked videos', path: '/liked' },
  { icon: Users, label: 'Following', path: '/following' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 fixed left-0 top-16 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto hidden md:block">
      <div className="px-2 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg mb-1"
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}