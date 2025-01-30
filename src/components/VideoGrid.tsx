import React from 'react';
import { Link } from 'react-router-dom';
import type { Video } from '../types';

const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a Modern Web Application',
    description: 'Learn how to build a modern web application using React and TypeScript',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    videoUrl: '#',
    views: 1500000,
    likes: 150000,
    dislikes: 1000,
    uploadDate: '2024-03-10',
    channelName: 'Tech Academy',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    duration: '12:34'
  },
  // Add more mock videos here
];

function formatViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  return `${views} views`;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {mockVideos.map((video) => (
        <div key={video.id} className="flex flex-col">
          <Link to={`/watch/${video.id}`} className="relative group">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full aspect-video object-cover rounded-lg"
            />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
              {video.duration}
            </span>
          </Link>
          <div className="flex mt-3">
            <img
              src={video.channelAvatar}
              alt={video.channelName}
              className="w-9 h-9 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {video.channelName}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formatViews(video.views)} • {formatDate(video.uploadDate)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}