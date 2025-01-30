export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  likes: number;
  dislikes: number;
  uploadDate: string;
  channelName: string;
  channelAvatar: string;
  duration: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
}