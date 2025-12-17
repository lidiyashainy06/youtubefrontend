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

const Trending: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const trendingVideos: Video[] = [
      {
        _id: '7',
        title: 'Build GPT from Scratch - Complete Tutorial 2024',
        thumbnail: 'https://i.ytimg.com/vi/kCc8FmEb1nY/maxresdefault.jpg',
        channel: 'AI Revolution',
        views: 3200000,
        uploadDate: '2024-01-01',
        duration: '25:45'
      },

      {
        _id: '9',
        title: 'React vs Vue vs Angular - Which to Choose?',
        thumbnail: 'https://img.youtube.com/vi/cuHDQhDhvPE/maxresdefault.jpg',
        channel: 'Framework Wars',
        views: 1200000,
        uploadDate: '2023-08-02',
        duration: '25:15'
      },
      {
        _id: '10',
        title: 'Docker Explained in 100 Seconds',
        thumbnail: 'https://img.youtube.com/vi/Gjnup-PuquQ/maxresdefault.jpg',
        channel: 'Fireship',
        views: 950000,
        uploadDate: '2023-08-10',
        duration: '1:40'
      }
    ];
    setVideos(trendingVideos);
  }, []);

  return (
    <div className="home">
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Trending</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Trending;