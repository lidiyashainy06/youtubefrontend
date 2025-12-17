import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import './Home.css';

interface Video {
  _id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  uploadDate: string;
  duration: string;
}

const WatchLater: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const watchLaterVideos: Video[] = [
      {
        _id: '2',
        title: 'Full Stack Web Development Roadmap 2024',
        thumbnail: 'https://i.ytimg.com/vi/nu_pCVPKzTk/maxresdefault.jpg',
        channel: 'Dev Trends',
        views: 1800000,
        uploadDate: '2024-02-10',
        duration: '2:15:30'
      },
      {
        _id: '4',
        title: 'Modern Web Development Stack 2024 - Full Tutorial',
        thumbnail: 'https://i.ytimg.com/vi/cuHDQhDhvPE/maxresdefault.jpg',
        channel: 'Code Academy',
        views: 1200000,
        uploadDate: '2024-02-20',
        duration: '4:10:15'
      },
      {
        _id: '6',
        title: 'Full Stack AI Development with Python and React',
        thumbnail: 'https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg',
        channel: 'AI Developers',
        views: 680000,
        uploadDate: '2024-03-18',
        duration: '2:45:30'
      }
    ];
    setVideos(watchLaterVideos);
  }, []);

  return (
    <div className="home">
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Watch Later</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;